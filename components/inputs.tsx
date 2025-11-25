interface NumericalInputProps {
  variableName: string;
  description: string;
  units: string;
  defaultValue?: number;
  reasonableMaximum?: number;
  required: boolean;
}

export function NumericalInput({
  variableName,
  description,
  units,
  defaultValue = undefined,
  reasonableMaximum = undefined,
  required,
}: NumericalInputProps) {
  let splitVariableName: string[] = variableName.split("_");
  let baseLetter: string = splitVariableName[0];
  let subscript: string = splitVariableName[1];
  let starJSX = !required ? <></> : <span className="text-orange-500">*</span>;

  let reasonableLength = reasonableMaximum?.toString().length;
  let formWidth: number;
  if (reasonableLength && reasonableLength < 3) {
    formWidth = 2;
  } else if (reasonableLength && reasonableLength < 6) {
    formWidth = 3;
  } else {
    formWidth = 4;
  }
  return (
    <>
      <div className="mx-auto flex items-center p-1 grid grid-cols-5 gap-x-2">
        <label htmlFor={variableName}>
          <div className="italic text-4xl font-serif text-shadow-lg/30 text-shadow-slate-600 p-1 col-span-2 text-left">
            {baseLetter}
            <sub>{subscript}</sub>
            {starJSX}
          </div>
        </label>
        <input
          className={
            "col-start-3 col-span-2 text-3xl font-serif rounded-xl bg-slate-700 " +
            "[appearance:textfield] text-right pr-2 " +
            "invalid:border-b-2 invalid:border-orange-500 invalid:text-orange-600 " +
            "hover:bg-slate-600"
          }
          type="number"
          id={variableName}
          name={variableName}
          defaultValue={defaultValue}
          min={0}
          required={required}
          step={0.01}
        />
        <div className="text-3xl font-serif text-left col-5">{units}</div>
        <br />
        <div
          className="italic text-s text-left inline-block align-text-bottom col-span-full
        border-b border-stone-300 border-dashed"
        >
          {description}
        </div>
      </div>
    </>
  );
}

export function SelectionInput({
  name,
  options,
  defaultValue = undefined,
  suppressName = undefined,
}: {
  name: string;
  options: string[];
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
      >
        {optionsJSX}
      </select>
      <label htmlFor={name} className={"text-2xl w-1/4"}>
        {" " + displayName}
      </label>
    </>
  );
}

export function NumericalInputContainer() {
  return (
    <div>
      <NumericalInput
        variableName="H_w"
        description="Height of water from the breach bottom"
        defaultValue={5}
        units="m"
        required={true}
        reasonableMaximum={1000}
      />
      <NumericalInput
        variableName="V_w"
        description="Live storage volume; volume of water above the breach bottom"
        units="m³"
        required={true}
        defaultValue={30000}
        reasonableMaximum={60000000000}
      />
      <NumericalInput
        variableName="H_b"
        description="Depth of breach from the crest"
        units="m"
        required={false}
        reasonableMaximum={1000}
      />
      <NumericalInput
        variableName="H_d"
        description="Height of dam from foundation to crest"
        units="m"
        required={false}
        reasonableMaximum={1000}
      />
      <NumericalInput
        variableName="W_avg"
        description="Average embankment width"
        units="m"
        required={false}
        reasonableMaximum={1000}
      />
    </div>
  );
}

export function DamDescriptionContainer() {
  return (
    <div className="dam-description pb-4 text-center">
      <span className="text-2xl">For the </span>
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
      />
      <span className="text-2xl"> and the time to failure using the </span>
      <SelectionInput
        name="time to failure equation"
        options={[
          "Froehlich (1995b)",
          "Froehlich (2008)",
          "Xu and Zhang (2009)",
          "Zhong et al. (2020)",
        ]}
      />
      <span className="text-2xl">:</span>
    </div>
  );
}
