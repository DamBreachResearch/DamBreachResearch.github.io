import {
  convertDamInputToFailure,
  DamFailure,
  DamFailureInput,
  EquationState,
  PeakFlowEquation,
  TimeToFailureEquation,
} from "./empiricalEqn";
import { timeStringFormat } from "./formatting";

interface ResultContainerInputs {
  damInput: DamFailureInput;
  equationState: EquationState;
}

export function ResultContainer({
  damInput,
  equationState,
}: ResultContainerInputs) {
  const peakFlowEquation = new PeakFlowEquation(
    equationState.peakFlowEquationName
  );
  const timeToFailureEquation = new TimeToFailureEquation(
    equationState.timeToFailureEquationName
  );
  const hasHeightOfWater = damInput.heightOfWater?.replace(/,/g, "")
    ? true
    : false;
  const hasVolumeOfWater = damInput.volumeOfWater?.replace(/,/g, "")
    ? true
    : false;
  const useRecalibratedQ =
    equationState.peakFlowEquationType === "recalibrated";
  const useRecalibratedT =
    equationState.timeToFailureEquationType === "recalibrated";

  if (!hasHeightOfWater || !hasVolumeOfWater) {
    return (
      <div className="result-container text-center border-1 border-white rounded-xl p-5 place-content-center text-orange-600 text-2xl">
        There&apos;s a problem with the input.
      </div>
    );
  }

  const damFailure = convertDamInputToFailure(damInput);

  const peakFlowPrediction = peakFlowEquation.predict(
    damFailure,
    useRecalibratedQ
  );
  const peakFlowUpperBound =
    peakFlowEquation.getUpperBoundRatio(useRecalibratedQ) * peakFlowPrediction;

  const peakFlowFormatted = parseFloat(
    peakFlowPrediction.toPrecision(2)
  ).toLocaleString();
  const peakFlowUpperBoundFormatted = parseFloat(
    peakFlowUpperBound.toPrecision(2)
  ).toLocaleString();

  const timeToFailurePrediction = timeToFailureEquation.predict(
    damFailure,
    useRecalibratedT
  );
  const timeToFailureUpperBound = timeStringFormat(
    Number(
      timeToFailureEquation.getLowerBoundRatio(useRecalibratedT) *
        timeToFailurePrediction
    ).toPrecision(2)
  );
  const timeToFailureFormatted = timeStringFormat(timeToFailurePrediction);

  return (
    <div className="result-container text-center border rounded-xl p-5 grid grid-col-2">
      <div className="place-content-center text-lg">
        The estimated peak flow is
        <div className="text-3xl font-bold">{peakFlowFormatted} m³/s,</div>
        with 95% confidence that the true peak flow is less than
        <div className="text-3xl font-bold">
          {peakFlowUpperBoundFormatted} m³/s.
        </div>
      </div>
      <div className="place-content-center text-lg">
        The estimated time to failure is
        <div className="text-3xl font-bold">{timeToFailureFormatted},</div>
        with 95% confidence that the true time to failure is larger than
        <div className="text-3xl font-bold">{timeToFailureUpperBound}.</div>
      </div>
    </div>
  );
}
