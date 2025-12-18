import { Dispatch, SetStateAction } from "react";
import { DamFailureInput } from "./empiricalEqn";

interface NumericalInputProps {
  variableName: string;
  description: string;
  units: string;
  defaultValue?: number;
  required: boolean;
  value?: string;
  onValueChange: (e: string) => void;
}

function NumericalInput({
  variableName,
  description,
  units,
  value = undefined,
  onValueChange,
  required,
}: NumericalInputProps) {
  const splitVariableName: string[] = variableName.split("_");
  const baseLetter: string = splitVariableName[0];
  const subscript: string = splitVariableName[1];
  const starJSX = !required ? (
    <></>
  ) : (
    <span className="text-orange-500">*</span>
  );
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
            "col-start-3 col-span-2 text-2xl font-serif rounded-xl bg-slate-700 " +
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
        <div className="text-2xl font-serif text-left col-5">{units}</div>
        <br />
        <div
          className="italic text-sm text-left inline-block align-text-bottom col-span-full
        border-b border-stone-300 border-dashed"
        >
          {description}
        </div>
      </div>
    </>
  );
}

interface NumericalInputContainerProps {
  damFailure: DamFailureInput;
  setDamFailure: Dispatch<SetStateAction<DamFailureInput>>;
}

export function NumericalInputContainer({
  damFailure,
  setDamFailure,
}: NumericalInputContainerProps) {
  return (
    <div>
      <NumericalInput
        variableName="H_w"
        description="Height of water above the breach bottom"
        value={damFailure.heightOfWater}
        units="m"
        required={true}
        onValueChange={(e: string) =>
          setDamFailure({ ...damFailure, heightOfWater: e })
        }
      />
      <NumericalInput
        variableName="V_w"
        description="Volume of water above the breach bottom"
        units="m³"
        required={true}
        value={damFailure.volumeOfWater}
        onValueChange={(e: string) =>
          setDamFailure({ ...damFailure, volumeOfWater: e })
        }
      />
      <NumericalInput
        variableName="H_b"
        description="Depth of breach from the crest to the breach bottom"
        units="m"
        required={false}
        value={damFailure.depthOfBreach}
        onValueChange={(e: string) =>
          setDamFailure({ ...damFailure, depthOfBreach: e })
        }
      />
      <NumericalInput
        variableName="H_d"
        description="Height of dam from foundation to crest"
        units="m"
        required={false}
        value={damFailure.heightOfDam}
        onValueChange={(e: string) =>
          setDamFailure({ ...damFailure, heightOfDam: e })
        }
      />
      <NumericalInput
        variableName="W_avg"
        description="Average embankment width (in the direction parallel to flow)"
        units="m"
        required={false}
        value={damFailure.averageWidth}
        onValueChange={(e: string) =>
          setDamFailure({ ...damFailure, averageWidth: e })
        }
      />
    </div>
  );
}
