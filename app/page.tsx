import Image from "next/image";

export default function Home() {
  return (
    <>
  <div className="wrapper-masthead">
    <div className="container">
      <header className="masthead">
        <div className="site-name">
          <h1 className="site-name">
            <a href="/">Dam Breach Characteristics Tool</a>
          </h1>
        </div>
      </header>
    </div>
  </div>
  <div id="main" role="main" className="container">
    <article className="page">
      <h3>
        Using Empirical Equations to Predict Embankment Dam Breach
        Characteristics
      </h3>
      <p>
        This tool uses empirical equations for dam breach characteristics as
        well as findings from my study evaluating and recalibrating these
        equations to produce estimates for the <b>peak flow</b>,{" "}
        <b>time to failure</b>, and
        <b> breach width</b> of an embankment dam failure.
      </p>
      <p>
        To use the tool, please enter the required parameters below. See the
        schematic below for information about each parameter.
      </p>
      <img src="public/dimension_schematic.png" className="schematic" />
      <div className="form-container">
          <form id="pred_tool_form" />
                <label htmlFor="H-w">
                  Height of water, H<sub>w</sub> (m), from the breach bottom
                </label>
                <input
                  type="number"
                  id="H-w"
                  name="H-w"
                  defaultValue={5}
                  min={0}
                  required={true}
                />
                <label htmlFor="H-b">
                  Depth of breach, H<sub>b</sub> (m), from the crest
                </label>
                <input type="number" id="H-b" name="H-b" min={0} />
                <label htmlFor="H-d">
                  Height of dam, H<sub>d</sub> (m), from foundation to crest
                </label>
                <input type="number" id="H-d" name="H-d" min={0} />
                <label htmlFor="width">
                  Average embankment width, W<sub>avg</sub> (m)
                </label>
                <input type="number" id="width" name="width" min={0} />
                <label htmlFor="V-w">
                  Volume of water, V<sub>w</sub> (m³), above the breach bottom
                </label>
                <input
                  type="number"
                  id="V-w"
                  name="V-w"
                  defaultValue={30000}
                  min={0}
                  required={true}
                />
                <label htmlFor="erodibility">Erodibility:</label>
                <select id="erodibility" name="erodibility">
                  <option value="low">Low</option>
                  <option value="medium">
                    Medium
                  </option>
                  <option value="high">High</option>
                </select>
                <label htmlFor="failure-mode">Failure mode:</label>
                <select id="failure-mode" name="failure-mode" defaultValue="overtopping">
                  <option value="piping">Piping/internal erosion</option>
                  <option value="overtopping">
                    Overtopping
                  </option>
                </select>
                <label htmlFor="dam-type">Dam type:</label>
                <select id="dam-type" name="dam-type" defaultValue="homogenous">
                  <option value="homogenous">
                    Homogenous-fill
                  </option>
                  <option value="core-wall">Core-wall</option>
                </select>
                <label htmlFor="q-eqn-select">Peak flow equation:</label>
                <select id="q-eqn-select" name="q-equation" defaultValue="Xu09">
                  <option value="Fr95">Froehlich (1995)</option>
                  <option value="We96">Webby (1996)</option>
                  <option value="Xu09">
                    Xu and Zhang (2009)
                  </option>
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
                  <option value="Xu09">
                    Xu and Zhang (2009)
                  </option>
                  <option value="Zh20">Zhong et al. (2020)</option>
                </select>
                Notes:
                <em>
                  <div id="t-eqn-desc" />
                </em>
                <label htmlFor="use-recal">Use recalibrated equation?</label>
                <input type="checkbox" id="use-recal" name="use-recal" />
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
          Based on this equation's performance in Yassin et al. (2025), there is
          95% confidence that the true peak flow is less than{" "}
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
          Based on this equation's performance in Yassin et al. (2025), there is
          95% confidence that the true time to failure is larger than{" "}
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
          The reliability and accuracy of any results obtained from this tool
          should be carefully examined by experienced engineers. In no event
          shall the creator of this tool be liable for lost profits or any
          special, incidental or consequential damages arising out of or in
          connection with use of this tool regardless of cause.
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
