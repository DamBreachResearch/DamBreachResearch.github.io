import ApexCharts from "apexcharts";
import { useEffect, useRef } from "react";
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
  const chartRef = useRef<HTMLDivElement>(null);

  const empiricalEquation = new EmpiricalEquation(equationName);
  const computedPoints = 1000;

  const h_w = Number(damFailure.heightOfWater?.replace(/,/g, ""));
  const v_w = Number(damFailure.volumeOfWater?.replace(/,/g, ""));
  let h_b = Number(damFailure.depthOfBreach?.replace(/,/g, ""));
  let h_d = Number(damFailure.heightOfDam?.replace(/,/g, ""));
  let w_avg = Number(damFailure.averageWidth?.replace(/,/g, ""));
  if (!h_b) {
    h_b = h_w;
  }
  if (!h_d) {
    h_d = h_w;
  }

  if (!w_avg) {
    w_avg = h_d * 2.6;
  }

  const inputDam: DamFailure = {
    h_w: h_w,
    v_w: v_w,
    h_d: h_d,
    h_b: h_b,
    w_avg: w_avg,
    erodibility: damFailure.erodibility,
    mode: damFailure.failureMode,
    type: damFailure.damType,
  };

  const minH = h_w / 2;
  const maxH = h_w * 2;
  let equationResults = [];
  for (let i = 0; i < computedPoints; i++) {
    let x = minH + ((maxH - minH) * i) / computedPoints;
    equationResults.push({
      x: x,
      y: empiricalEquation.predict({ ...inputDam, h_w: x }, recalibrated),
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
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Predicted peak flow",
      align: "center",
    },
    xaxis: {
      type: "numeric",
    },
  };

  useEffect(() => {
    const chartDiv = chartRef.current;
    const chart = new ApexCharts(chartDiv, options);
    if (chartDiv) {
      chart.render();
    }
  }, [damFailure, equationName]);

  return <div ref={chartRef}></div>;
}
