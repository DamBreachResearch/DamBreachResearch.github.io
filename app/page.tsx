import { NumericalInput, SelectionInput } from "@/components/inputs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="wrapper-masthead">
        <div className="container">
          <header className="masthead">
            <div className="site-name">
              <h1 className="site-name text-4xl ml-30 mt-10 font-bold">
                Dam Breach Characteristics Tool
              </h1>
            </div>
          </header>
        </div>
      </div>
      <div id="main" role="main" className="container">
        <article className="page mx-30">
          <h3 className="text-2xl pb-4 font-light text-stone-200">
            Using empirical equations to predict embankment dam breach
            characteristics.
          </h3>
          <p>
            This tool uses empirical equations for dam breach characteristics as
            well as findings from my study evaluating and recalibrating these
            equations to produce estimates for the <b>peak flow</b>,
            <b> time to failure</b>, and <b> breach width</b> of an embankment
            dam failure.
          </p>
          <br />
          <p>
            To use the tool, enter the required parameters below. See the
            schematic below for information about each parameter.
          </p>
          <div className="mx-auto flex max-w-7/10">
            <img
              src="/dimension_schematic.png"
              className="schematic invert p-5"
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="form-container">
              <form id="pred_tool_form" />
              <NumericalInput
                variableName="H_w"
                description="Height of water from the breach bottom"
                defaultValue={5}
                units="m"
                required={true}
              />
              <NumericalInput
                variableName="V_w"
                description="Live storage volume; volume of water above the breach bottom"
                units="m³"
                required={true}
                defaultValue={30000}
              />
              <NumericalInput
                variableName="H_b"
                description="Depth of breach from the crest"
                units="m"
                required={false}
              />
              <NumericalInput
                variableName="H_d"
                description="Height of dam from foundation to crest"
                units="m"
                required={false}
              />
              <NumericalInput
                variableName="W_avg"
                description="Average embankment width"
                units="m"
                required={false}
              />
              <SelectionInput
                name="failure of a"
                options={["Overtopping", "Piping/Internal Erosion"]}
              />
              <SelectionInput
                name="erodibility"
                options={["low", "medium", "high"]}
              />
              <SelectionInput
                name="dam"
                options={["homogenous-fill", "core-wall"]}
              />
              <br/>
              <label htmlFor="q-eqn-select">Peak flow equation:</label>
              <select id="q-eqn-select" name="q-equation" defaultValue="Xu09">
                <option value="Fr95">Froehlich (1995)</option>
                <option value="We96">Webby (1996)</option>
                <option value="Xu09">Xu and Zhang (2009)</option>
                <option value="Ho14">Hooshyaripor et al. (2014)</option>
                <option value="Az15">Azimi et al. (2015)</option>
                <option value="Fr16">Froehlich (2016)</option>
                <option value="Zh20">Zhong et al. (2020)</option>
                <option value="Ya25">Yassin et al. (2025)</option>
              </select>
              Notes:
              <em>
                <div id="q-eqn-desc" />
              </em>
              <label htmlFor="t-eqn-select">Time to failure equation:</label>
              <select id="t-eqn-select" name="t-equation" defaultValue="Xu09">
                <option value="Fr95">Froehlich (1995)</option>
                <option value="Fr08">Froehlich (2008)</option>
                <option value="Xu09">Xu and Zhang (2009)</option>
                <option value="Zh20">Zhong et al. (2020)</option>
              </select>
              Notes:
              <em>
                <div id="t-eqn-desc" />
              </em>
              <label htmlFor="use-recal">Use recalibrated equation?</label>
              <input type="checkbox" id="use-recal" name="use-recal" />
            </div>
          </div>
          <b id="warning-msg" />
          <br />
          <div className="result-container">
            <p>
              The estimated peak flow is{" "}
              <b>
                <span id="q-pred-result" />
              </b>{" "}
              m³/s.
            </p>
            <p>
              Based on this equation's performance in Yassin et al. (2025),
              there is 95% confidence that the true peak flow is less than{" "}
              <b>
                <span id="q-upper-result" />
              </b>{" "}
              m³/s.
            </p>
            <p>
              The estimated time to failure is{" "}
              <b>
                <span id="t-pred-result" />
              </b>
              .
            </p>
            <p>
              Based on this equation's performance in Yassin et al. (2025),
              there is 95% confidence that the true time to failure is larger
              than{" "}
              <b>
                <span id="t-lower-result" />
              </b>
              .
            </p>
          </div>
          <br />
          <div>
            {" "}
            <canvas id="peak-flow-plot" />{" "}
          </div>
          <br />
          <br />
          <p>
            <em>
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
