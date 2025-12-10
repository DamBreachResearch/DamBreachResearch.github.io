import ApexCharts from "apexcharts";
import { useEffect, useRef, useState } from "react";
import {
  DamFailure,
  DamFailureInput,
  EmpiricalEquation,
} from "../empiricalEqn";

export default function ChartContainer({
  height,
  width,
  damFailure,
  equationName,
  recalibrated,
}: {
  height: number;
  width: number;
  damFailure: DamFailureInput;
  equationName: string;
  recalibrated: boolean;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ApexCharts>(null);
  const [chartOptions, setChartOptions] = useState(
    updateChartProperties(height, width, damFailure, equationName, recalibrated)
  );

  useEffect(() => {
    const chartDiv = divRef.current;
    if (chartDiv) {
      chartRef.current = new ApexCharts(chartDiv, chartOptions)
    }
  }, []);

  useEffect(() => {
    const chartDiv = divRef.current;
    if (chartDiv) {
      chartRef?.current?.updateOptions(chartOptions, true);
      chartRef?.current?.render();
    }
  }, [chartOptions]);

  useEffect(() => {
    setChartOptions(
      updateChartProperties(
        height,
        width,
        damFailure,
        equationName,
        recalibrated
      )
    );
  }, [height, width, damFailure, equationName, recalibrated]);

  return <div ref={divRef}></div>;
}

function updateChartProperties(
  height: number,
  width: number,
  damFailure: DamFailureInput,
  equationName: string,
  recalibrated: boolean
) {
  const empiricalEquation = new EmpiricalEquation(equationName);
  const computedPoints = 100;

  const heightOfWater = Number(damFailure.heightOfWater?.replace(/,/g, ""));
  const volumeOfWater = Number(damFailure.volumeOfWater?.replace(/,/g, ""));
  let depthOfBreach = Number(damFailure.depthOfBreach?.replace(/,/g, ""));
  let heightOfDam = Number(damFailure.heightOfDam?.replace(/,/g, ""));
  let averageWidth = Number(damFailure.averageWidth?.replace(/,/g, ""));
  if (!depthOfBreach) {
    depthOfBreach = heightOfWater;
  }
  if (!heightOfDam) {
    heightOfDam = heightOfWater;
  }

  if (!averageWidth) {
    averageWidth = heightOfDam * 2.6;
  }

  const inputDam: DamFailure = {
    heightOfWater: heightOfWater,
    volumeOfWater: volumeOfWater,
    heightOfDam: heightOfDam,
    depthOfBreach: depthOfBreach,
    averageWidth: averageWidth,
    erodibility: damFailure.erodibility,
    mode: damFailure.failureMode,
    type: damFailure.damType,
  };

  const minH = heightOfWater / 2;
  const maxH = heightOfWater * 2;
  const predictionResult = empiricalEquation.predict(inputDam, recalibrated);
  let equationResults = [];
  for (let i = 0; i < computedPoints; i++) {
    let x = minH + ((maxH - minH) * i) / computedPoints;
    equationResults.push({
      x: x,
      y: Number(
        empiricalEquation.predict(
          { ...inputDam, heightOfWater: x },
          recalibrated
        )
      ),
    });
  }
  const options = {
    series: [
      {
        name: "Selected Equation",
        data: equationResults,
      },
    ],
    chart: {
      height: height,
      type: "line",
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
        text: "Height of water (m)",
        style: { color: "#ffffff", fontSize: "14px" },
      },
      min: minH,
      max: maxH,
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
      logarithmic: true,
      forceNiceScale: true,
      decimalsInFloat: 1,
    },
    grid: { show: false },
    annotations: {
      yaxis: [
        {
          y: predictionResult,
          borderColor: "#ffffff",
          label: {
            text: Number(predictionResult.toPrecision(2)).toLocaleString() + " m³/s",
            style: { fontSize: "14px" },
          },
        },
      ],
      xaxis: [
        {
          x: damFailure.heightOfWater,
          borderColor: "#ffffff",
        },
      ],
    },
  };
  return options;
}
