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
    calculateSeries(damInput, selectedEquation, recalibrated)
  );

  useEffect(() => {
    setChartOptions(
      updateChartProperties(damInput, selectedEquation, recalibrated)
    );

    setSeriesInfo(calculateSeries(damInput, selectedEquation, recalibrated));
  }, [height, width, damInput, selectedEquation, recalibrated]);

  return (
    <ReactApexChart
      options={chartOptions}
      series={[{ data: seriesInfo.equationResults }]}
      type="line"
      width={width}
      height={height}
    />
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
  selectedEquation: string
) {
  const damFailure: DamFailure = convertDamInputToFailure(damInput);
  const allEquationResults: {
    name: string;
    data: { x: number; y: number }[];
  }[] = [];
  const equationType = selectedEquation?.slice(-1); // Q or T or B
  for (let equationName in equationList) {
    if (equationName.slice(-1) === equationType) {
      let listedName =
        equationName === selectedEquation ? equationName : "Other";
      allEquationResults.push({ name: listedName, data: [] });
      // allEquationResults[-1];
    }
  }
}

function updateChartProperties(
  damInput: DamFailureInput,
  equationName: string,
  recalibrated: boolean
) {
  let seriesInfo = calculateSeries(damInput, equationName, recalibrated);
  const options: ApexOptions = {
    chart: {
      zoom: { enabled: false },
      animations: {
        enabled: true,
        speed: 800,
        dynamicAnimation: { enabled: true, speed: 800 },
      },
    },
    colors: ["#ff6900"],
    dataLabels: { enabled: false },
    stroke: { curve: "straight", width: 2 },
    title: {
      text: "Predicted peak flow",
      align: "center",
      style: { color: "#ffffff", fontSize: "24px" },
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
        text: "Peak flow, m³/s",
        style: { color: "#ffffff", fontSize: "14px" },
      },
      labels: { style: { colors: "#ffffff", fontSize: "14px" } },
      tickAmount: 11,
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
              ).toLocaleString() + " m³/s",
            style: { fontSize: "14px" },
          },
        },
      ],
      xaxis: [
        {
          x: damInput.heightOfWater,
          borderColor: "#ffffff",
        },
      ],
    },
  };
  return options;
}
