"use client";

import { DamDescriptionContainer } from "@/components/descriptionInputs";
import { NumericalInputContainer } from "@/components/numericalInputs";
import { ResultContainer } from "@/components/results";
import DamSchematic from "@/components/graphics/schematic";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { PeakFlowEquation } from "@/components/empiricalEqn";

const ChartContainer = dynamic(
  () => import("@/components/graphics/chartContainer"),
  { ssr: false }
);

function ToolContainer() {
  const [canvasSize, setCanvasSize] = useState({ width: 384, height: 400 });
  const [damFailure, setDamFailure] = useState({
    heightOfWater: "5.0",
    volumeOfWater: "30,000",
    depthOfBreach: "",
    heightOfDam: "",
    averageWidth: "",
    failureMode: "overtopping",
    erodibility: "medium",
    damType: "homogenous-fill",
  });
  const [equationState, setEquationState] = useState({
    peakFlowEquationName: "Froehlich (1995a)",
    timeToFailureEquationName: "Froehlich (1995b)",
    peakFlowEquationType: "original",
    timeToFailureEquationType: "original",
  });

  return (
    <div className="rounded-xl mx-auto bg-slate-900 max-w-220 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-content-center">
        <DamSchematic damInput={damFailure} canvasSize={canvasSize} />

        <NumericalInputContainer
          damFailure={damFailure}
          setDamFailure={setDamFailure}
        />

        <DamDescriptionContainer
          damFailure={damFailure}
          setDamFailure={setDamFailure}
          equationState={equationState}
          setEquationState={setEquationState}
        />

        <ResultContainer equationState={equationState} damInput={damFailure} />

        <ChartContainer
          height={384}
          width={320}
          damInput={damFailure}
          selectedEquation={equationState.peakFlowEquationName + "-Q"}
          recalibrated={equationState.peakFlowEquationType === "recalibrated"}
        />

        <ChartContainer
          height={384}
          width={320}
          damInput={damFailure}
          selectedEquation={equationState.timeToFailureEquationName + "-T"}
          recalibrated={
            equationState.timeToFailureEquationType === "recalibrated"
          }
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div id="main" role="main" className="container">
        <div className="page mx-auto max-w-150">
          <h1 className="site-name text-4xl mt-10 font-bold font-serif">
            Dam Breach Characteristics Tool
          </h1>
          <h3 className="text-xl pb-4 font-light text-stone-200">
            Using empirical equations to predict embankment dam breach
            characteristics.
          </h3>
          <p className="text-lg/8">
            This tool uses empirical equations for dam breach characteristics as
            well as findings from the Yassin et al. (2025) study evaluating and
            recalibrating these equations to produce estimates for the{" "}
            <b>peak flow</b>,<b> time to failure</b>, and <b> breach width</b>{" "}
            of an embankment dam failure.
            <br />
            To use the tool, enter the required parameters below. See the
            schematic below for information about each parameter.
          </p>
          <div className="mx-auto flex max-w-7/10 text-stone-200">
            <Image
              src="/dimension_schematic.png"
              alt="Schematic of an embankment dam with labelled dimensions for the height of water,
                the height of the dam, the depth of the breach, and the live storage volume."
              className="schematic invert p-5"
              width={600}
            />
          </div>
        </div>
        <ToolContainer />
        <br />
        <div className="footer mx-auto max-w-150">
          <p className="text-lg/8">
            <em>
              The reliability and accuracy of any results obtained from this
              tool should be carefully examined by experienced engineers. In no
              event shall the creator of this tool be liable for lost profits or
              any special, incidental or consequential damages arising out of or
              in connection with use of this tool regardless of cause.
            </em>
          </p>
          <footer className="footer">Copyright © 2025.</footer>
        </div>
      </div>
    </>
  );
}
