'use client'

import { DamDescriptionContainer } from "@/components/descriptionInputs";
import {
  NumericalInputContainer,
} from "@/components/numericalInputs";
import { ResultContainer } from "@/components/results";
import Image from "next/image";
import { useState } from "react";

function ToolContainer() {
  const [heightOfWater, setHeightOfWater] = useState(5);
  const [volumeOfWater, setVolumeOfWater] = useState(30000);
  const [peakFlowEquationName, setPeakFlowEquation] = useState("Froehlich (1995a)")

  return (
    <div className="">
      <DamDescriptionContainer
        peakFlowEquationName={peakFlowEquationName}
        onPeakFlowEquationChange={setPeakFlowEquation}
      />
      <div className="grid grid-cols-2">
        <NumericalInputContainer
          heightOfWater={heightOfWater}
          onHeightOfWaterChange={setHeightOfWater}
          volumeOfWater={volumeOfWater}
          onVolumeOfWaterChange={setVolumeOfWater}
        />
        <ResultContainer
          peakFlowEquationName={peakFlowEquationName}
          heightOfWater={heightOfWater}
          volumeOfWater={volumeOfWater}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="wrapper-masthead">
        <div className="container">
          <header className="masthead">
            <div className="site-name">
              <h1 className="site-name text-4xl ml-30 mt-10 font-bold font-serif">
                Dam Breach Characteristics Tool
              </h1>
            </div>
          </header>
        </div>
      </div>
      <div id="main" role="main" className="container">
        <article className="page mx-30">
          <h3 className="text-xl pb-4 font-light text-stone-200">
            Using empirical equations to predict embankment dam breach
            characteristics.
          </h3>
          <p className="text-lg">
            This tool uses empirical equations for dam breach characteristics as
            well as findings from my study evaluating and recalibrating these
            equations to produce estimates for the <b>peak flow</b>,
            <b> time to failure</b>, and <b> breach width</b> of an embankment
            dam failure.
          </p>
          <br />
          <p className="text-lg">
            To use the tool, enter the required parameters below. See the
            schematic below for information about each parameter.
          </p>
          <div className="mx-auto flex max-w-7/10">
            <Image
              src="/dimension_schematic.png"
              alt="Schematic of an embankment dam with labelled dimensions for the height of water,
              the height of the dam, the depth of the breach, and the live storage volume."
              className="schematic invert p-5"
              width={600}
              height={400}
            />
          </div>
          <ToolContainer />
          <br />
          <div>
            <canvas id="peak-flow-plot" />{" "}
          </div>
          <p>
            <em className="text-lg">
              The reliability and accuracy of any results obtained from this
              tool should be carefully examined by experienced engineers. In no
              event shall the creator of this tool be liable for lost profits or
              any special, incidental or consequential damages arising out of or
              in connection with use of this tool regardless of cause.
            </em>
          </p>
        </article>
      </div>
      <div className="wrapper-footer">
        <div className="container">
          <footer className="footer">Copyright © 2025.</footer>
        </div>
      </div>
    </>
  );
}
