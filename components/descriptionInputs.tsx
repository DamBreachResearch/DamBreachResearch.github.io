import { Dispatch, SetStateAction } from "react";

function SelectionInput({
  name,
  options,
  value,
  onValueChange,
  defaultValue = undefined,
  suppressName = undefined,
}: {
  name: string;
  options: string[];
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
  defaultValue?: string;
  suppressName?: boolean;
}) {
  let optionsJSX = [];
  let maxSize: number = 0;
  let displayName = suppressName ? "" : name;
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
          "w-" +
          maxSize * 12 +
          " text-center bg-slate-700 hover:bg-slate-600 rounded-xl pl-2 text-2xl"
        }
        defaultValue={defaultValue}
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
}

export function DamDescriptionContainer({
  peakFlowEquationName,
  onPeakFlowEquationChange
}: DamDescriptionProperties) {
  return (
    <div className="dam-description pb-4 text-center">
      {/*      <span className="text-2xl">For the </span>
      <SelectionInput name="failure" options={["overtopping", "piping"]} />
      <span className="text-2xl"> of a </span>
      <SelectionInput
        name="erodibility"
        options={["low", "medium", "high"]}
        defaultValue="medium"
      />
      <span className="text-2xl"> </span>
      <SelectionInput name="dam" options={["homogenous-fill", "core-wall"]} />
      <span className="text-2xl">, calculate the peak flow using the </span>
      <SelectionInput
        name="recalibrated"
        suppressName={true}
        options={["original", "recalibrated"]}
      /> */}
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
      {/*       <span className="text-2xl"> and the time to failure using the </span>
      <SelectionInput
        name="time to failure equation"
        options={[
          "Froehlich (1995b)",
          "Froehlich (2008)",
          "Xu and Zhang (2009)",
          "Zhong et al. (2020)",
        ]}
      />
      <span className="text-2xl">:</span> */}
    </div>
  );
}
