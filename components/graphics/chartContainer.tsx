import ApexCharts, { ApexOptions } from "apexcharts";
import { useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";
import {
  convertDamInputToFailure,
  DamFailure,
  DamFailureInput,
  EmpiricalEquation,
} from "../empiricalEqn";
import { equationList } from "../eqnList";

export default function ChartContainer({
  height,
  width,
  damInput,
  selectedEquation,
  recalibrated,
}: {
  height: number;
  width: number;
  damInput: DamFailureInput;
  selectedEquation: string;
  recalibrated: boolean;
}) {
  const [chartOptions, setChartOptions] = useState(
    updateChartProperties(damInput, selectedEquation, recalibrated)
  );
  const [seriesInfo, setSeriesInfo] = useState(
    // calculateSeries(damInput, selectedEquation, recalibrated)
    calculateAllSeries(damInput, selectedEquation, recalibrated)
  );

  useEffect(() => {
    setChartOptions(
      updateChartProperties(damInput, selectedEquation, recalibrated)
    );

    // setSeriesInfo(calculateSeries(damInput, selectedEquation, recalibrated));
    setSeriesInfo(calculateAllSeries(damInput, selectedEquation, recalibrated));
  }, [height, width, damInput, selectedEquation, recalibrated]);

  return (
    <div className="min-h-0 max-w-1/1 mx-auto">
      <ReactApexChart
        options={chartOptions}
        series={seriesInfo}
        type="line"
        width={width}
        height={height}
      />
    </div>
  );
}

function calculateSeries(
  damInput: DamFailureInput,
  selectedEquation: string,
  recalibrated: boolean
) {
  const empiricalEquation = new EmpiricalEquation(selectedEquation);
  const computedPoints = 100;

  const damFailure: DamFailure = convertDamInputToFailure(damInput);

  const minVolume = damFailure.volumeOfWater / 2;
  const maxVolume = damFailure.volumeOfWater * 2;
  const predictionResult = empiricalEquation.predict(damFailure, recalibrated);
  let equationResults: { x: number; y: number }[] = [];
  for (let i = 0; i < computedPoints; i++) {
    let x = minVolume + ((maxVolume - minVolume) * i) / computedPoints;
    equationResults.push({
      x: x,
      y: Number(
        empiricalEquation.predict(
          { ...damFailure, volumeOfWater: x },
          recalibrated
        )
      ),
    });
  }

  return {
    equationResults: equationResults,
    minVolume: minVolume,
    maxVolume: maxVolume,
    predictionResult: predictionResult,
  };
}

function calculateAllSeries(
  damInput: DamFailureInput,
  selectedEquation: string,
  recalibrated: boolean
) {
  const allEquationResults: {
    name: string;
    data: { x: number; y: number }[];
  }[] = [];
  const equationType = selectedEquation?.slice(-1); // Q or T or B
  for (let equationName in equationList) {
    if (equationName.slice(-1) === equationType) {
      let equationResults = calculateSeries(
        damInput,
        equationName,
        recalibrated
      ).equationResults;
      if (equationName === selectedEquation) {
        allEquationResults.unshift({
          name: selectedEquation,
          data: equationResults,
        });
      } else {
        allEquationResults.push({ name: "Other", data: equationResults });
      }
    }
  }
  return allEquationResults;
}

function updateChartProperties(
  damInput: DamFailureInput,
  equationName: string,
  recalibrated: boolean
) {
  let seriesInfo = calculateSeries(damInput, equationName, recalibrated);
  let chartTitle = "Unknown";
  let units = "";
  if (equationName.slice(-1) === "Q") {
    chartTitle = "Peak flow";
    units = "m³/s";
  } else if (equationName.slice(-1) === "T") {
    chartTitle = "Time to failure";
    units = "h";
  }
  const options: ApexOptions = {
    chart: {
      zoom: { enabled: false },
      animations: {
        enabled: false,
        speed: 800,
        dynamicAnimation: { enabled: false, speed: 800 },
      },
    },
    colors: [
      "#ff6900",
      "#999999",
      "#999999",
      "#999999",
      "#999999",
      "#999999",
      "#999999",
      "#999999",
    ],
    dataLabels: { enabled: false },
    stroke: { curve: "straight", width: 2 },
    title: {
      text: "Predicted " + chartTitle.toLowerCase(),
      align: "center",
      style: { color: "#ffffff", fontSize: "24px" },
    },
    legend: {
      customLegendItems: [equationName, "Other"],
      labels: { colors: ["#ffffff", "#ffffff"] },
    },
    xaxis: {
      type: "numeric",
      axisBorder: { color: "#ffffff" },
      title: {
        text: "Volume of water (m³)",
        style: { color: "#ffffff", fontSize: "14px" },
      },
      min: seriesInfo.minVolume,
      max: seriesInfo.maxVolume,
      labels: { style: { colors: "#ffffff", fontSize: "14px" } },
    },
    yaxis: {
      axisBorder: { show: true, color: "#ffffff" },
      axisTicks: { show: true, color: "#ffffff", width: 6 },
      title: {
        text: chartTitle + " (" + units + ")",
        style: { color: "#ffffff", fontSize: "14px" },
      },
      labels: { style: { colors: "#ffffff", fontSize: "14px" } },
      logarithmic: false,
      forceNiceScale: true,
      decimalsInFloat: 1,
    },
    grid: { show: false },
    tooltip: { enabled: false },
    annotations: {
      yaxis: [
        {
          y: seriesInfo.predictionResult,
          borderColor: "#ffffff",
          label: {
            text:
              Number(
                seriesInfo.predictionResult.toPrecision(2)
              ).toLocaleString() +
              " " +
              units,
            style: {
              fontSize: "14px",
              cssClass: "",
              background: "#45556c",
              color: "#ffffff",
            },
          },
        },
      ],
      xaxis: [
        {
          x: damInput.volumeOfWater,
          borderColor: "#ffffff",
        },
      ],
    },
  };
  return options;
}
