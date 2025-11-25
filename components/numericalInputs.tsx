import { Dispatch, SetStateAction } from "react";

interface NumericalInputProps {
  variableName: string;
  description: string;
  units: string;
  defaultValue?: number;
  reasonableMaximum?: number;
  required: boolean;
  value?: string;
  onValueChange: Dispatch<SetStateAction<string>>;
}

function NumericalInput({
  variableName,
  description,
  units,
  reasonableMaximum = undefined,
  value = undefined,
  onValueChange,
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
          type="text"
          id={variableName}
          name={variableName}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          min={0}
          required={required}
          step="any"
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

interface NumericalInputContainerProps {
  heightOfWater: string;
  volumeOfWater: string;
  depthOfBreach: string;
  heightOfDam: string;
  averageWidth: string;
  onHeightOfWaterChange: Dispatch<SetStateAction<string>>;
  onVolumeOfWaterChange: Dispatch<SetStateAction<string>>;
  onDepthOfBreachChange: Dispatch<SetStateAction<string>>;
  onHeightOfDamChange: Dispatch<SetStateAction<string>>;
  onAverageWidthChange: Dispatch<SetStateAction<string>>;
}

export function NumericalInputContainer({
  heightOfWater,
  volumeOfWater,
  depthOfBreach,
  heightOfDam,
  averageWidth,
  onHeightOfWaterChange,
  onVolumeOfWaterChange,
  onDepthOfBreachChange,
  onHeightOfDamChange,
  onAverageWidthChange,
}: NumericalInputContainerProps) {
  return (
    <div>
      <NumericalInput
        variableName="H_w"
        description="Height of water above the breach bottom"
        value={heightOfWater}
        units="m"
        required={true}
        reasonableMaximum={1000}
        onValueChange={onHeightOfWaterChange}
      />
      <NumericalInput
        variableName="V_w"
        description="Volume of water above the breach bottom"
        units="m³"
        required={true}
        value={volumeOfWater}
        reasonableMaximum={60000000000}
        onValueChange={onVolumeOfWaterChange}
      />
      <NumericalInput
        variableName="H_b"
        description="Depth of breach from the crest to the breach bottom"
        units="m"
        required={false}
        reasonableMaximum={1000}
        value={depthOfBreach}
        onValueChange={onDepthOfBreachChange}
      />
      <NumericalInput
        variableName="H_d"
        description="Height of dam from foundation to crest"
        units="m"
        required={false}
        reasonableMaximum={1000}
        value={heightOfDam}
        onValueChange={onHeightOfDamChange}
      />
      <NumericalInput
        variableName="W_avg"
        description="Average embankment width (in the direction parallel to flow)"
        units="m"
        required={false}
        reasonableMaximum={1000}
        value={averageWidth}
        onValueChange={onAverageWidthChange}
      />
    </div>
  );
}
