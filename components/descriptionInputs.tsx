import { Dispatch, SetStateAction } from "react";

function SelectionInput({
  name,
  options,
  value,
  onValueChange,
  suppressName = undefined,
}: {
  name: string;
  options: string[];
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
  suppressName?: boolean;
}) {
  const optionsJSX = [];
  let maxSize: number = 0;
  const displayName = suppressName ? "" : name;
  for (let i = 0; i < options.length; i++) {
    maxSize = options[i].length > maxSize ? options[i].length : maxSize;
    optionsJSX.push(
      <option key={options[i]} value={options[i]}>
        {options[i]}
      </option>
    );
  }
  return (
    <>
      <select
        id={name}
        name={name}
        className={
          "text-center bg-slate-700 hover:bg-slate-600 rounded-xl pl-2 text-2xl"
        }
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      >
        {optionsJSX}
      </select>
      <label htmlFor={name} className={"text-2xl w-1/4"}>
        {" " + displayName}
      </label>
    </>
  );
}

interface DamDescriptionProperties {
  peakFlowEquationName: string;
  onPeakFlowEquationChange: Dispatch<SetStateAction<string>>;
  timeToFailureEquationName: string;
  onTimeToFailureEquationChange: Dispatch<SetStateAction<string>>;
  failureMode: string;
  onFailureModeChange: Dispatch<SetStateAction<string>>;
  erodibility: string;
  onErodibilityChange: Dispatch<SetStateAction<string>>;
  damType: string;
  onDamTypeChange: Dispatch<SetStateAction<string>>;
  originalOrRecalibratedQ: string;
  onRecalibratedQChange: Dispatch<SetStateAction<string>>;
  originalOrRecalibratedT: string;
  onRecalibratedTChange: Dispatch<SetStateAction<string>>;
}

export function DamDescriptionContainer({
  peakFlowEquationName,
  onPeakFlowEquationChange,
  timeToFailureEquationName,
  onTimeToFailureEquationChange,
  failureMode,
  onFailureModeChange,
  erodibility,
  onErodibilityChange,
  damType,
  onDamTypeChange,
  originalOrRecalibratedQ,
  onRecalibratedQChange,
  originalOrRecalibratedT,
  onRecalibratedTChange,
}: DamDescriptionProperties) {
  return (
    <div className="dam-description text-center">
      <span className="text-2xl">For the </span>
      <SelectionInput
        name="failure"
        options={["overtopping", "piping"]}
        value={failureMode}
        onValueChange={onFailureModeChange}
      />
      <br />
      <span className="text-2xl"> of a </span>
      <SelectionInput
        name="erodibility"
        options={["low", "medium", "high"]}
        value={erodibility}
        onValueChange={onErodibilityChange}
      />
      <br />
      <span className="text-2xl"> </span>
      <SelectionInput
        name="dam"
        options={["homogenous-fill", "core-wall"]}
        value={damType}
        onValueChange={onDamTypeChange}
      />
      <span className="text-2xl">, </span>
      <br />
      <span className="text-2xl">calculate the peak flow using the </span>
      <br />
      <SelectionInput
        name="recalibrated"
        suppressName={true}
        options={["original", "recalibrated"]}
        value={originalOrRecalibratedQ}
        onValueChange={onRecalibratedQChange}
      />
      <SelectionInput
        name="peak flow equation"
        options={[
          "Froehlich (1995a)",
          "Webby (1996)",
          "Xu and Zhang (2009)",
          "Hooshyaripor et al. (2014)",
          "Azimi et al. (2015)",
          "Froehlich (2016)",
          "Zhong et al. (2020)",
          "Yassin et al. (2025)",
        ]}
        value={peakFlowEquationName}
        onValueChange={onPeakFlowEquationChange}
      />
      <br />
      <span className="text-2xl"> and the time to failure using the </span>
      <br />
      <SelectionInput
        name="recalibrated"
        suppressName={true}
        options={["original", "recalibrated"]}
        value={originalOrRecalibratedT}
        onValueChange={onRecalibratedTChange}
      />
      <SelectionInput
        name="time to failure equation"
        options={[
          "Froehlich (1995b)",
          "Froehlich (2008)",
          "Xu and Zhang (2009)",
          "Zhong et al. (2020)",
        ]}
        value={timeToFailureEquationName}
        onValueChange={onTimeToFailureEquationChange}
      />
      <span className="text-2xl">:</span>
    </div>
  );
}
