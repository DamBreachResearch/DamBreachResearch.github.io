interface NumericalInputProps {
  variableName: string;
  description: string;
  units: string;
  defaultValue?: number;
  required: boolean;
}

export function NumericalInput({
  variableName,
  description,
  units,
  defaultValue = undefined,
  required,
}: NumericalInputProps) {
  let splitVariableName: string[] = variableName.split("_");
  let baseLetter: string = splitVariableName[0];
  let subscript: string = splitVariableName[1];
  let starJSX = !required ? <></> : <span className="text-orange-500">*</span>;
  return (
    <>
      <div className="mx-auto flex items-center p-1 grid grid-cols-12 gap-x-2">
        <label htmlFor={variableName}>
          <div className="italic text-4xl font-serif text-shadow-lg/30 text-shadow-slate-600 p-1">
            {baseLetter}
            <sub>{subscript}</sub>
            {starJSX}
          </div>
        </label>
        <input
          className="text-3xl font-serif col-start-4 col-span-8 rounded-xl bg-slate-700
          [appearance:textfield] text-right pr-2
          invalid:border-b-2 invalid:border-orange-500 invalid:text-orange-600 invalid:border-dotted
          hover:bg-slate-600"
          type="number"
          id={variableName}
          name={variableName}
          defaultValue={defaultValue}
          min={0}
          required={required}
          step={0.01}
        />
        <div className="text-3xl font-serif text-left col-start-12">
          {units}
        </div>
        <br />
        <div className="italic text-s inline-block align-text-bottom col-span-12
        border-b border-stone-300 border-dashed">
          {description}
        </div>
      </div>
    </>
  );
}

export function SelectionInput({
  name,
  options,
}: {
  name: string;
  options: string[];
}) {
  let optionsJSX = [
    <option key={options[0]} value={options[0]}>
      {options[0]}
    </option>,
  ];
  for (let i = 1; i < options.length; i++) {
    optionsJSX.push(
      <option key={options[i]} value={options[i]}>
        {options[i]}
      </option>
    );
  }
  return (
    <>
      <br />
      <select
        id={name}
        name={name}
        className="text-2xl text-left w-1/2 bg-slate-700 hover:bg-slate-600 rounded-xl pl-2"
      >
        {optionsJSX}
      </select>
      <label htmlFor={name} className="w-1/4 text-2xl">
        {" " + name}
      </label>
    </>
  );
}
