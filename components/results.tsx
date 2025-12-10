import {
  DamFailure,
  DamFailureInput,
  EquationState,
  PeakFlowEquation,
  TimeToFailureEquation,
} from "./empiricalEqn";
import { timeStringFormat } from "./formatting";

interface ResultContainerInputs {
  damFailure: DamFailureInput;
  equationState: EquationState;
}

export function ResultContainer({
  damFailure,
  equationState
}: ResultContainerInputs) {
  const peakFlowEquation = new PeakFlowEquation(equationState.peakFlowEquationName);
  const timeToFailureEquation = new TimeToFailureEquation(
    equationState.timeToFailureEquationName
  );
  const h_w = Number(damFailure.heightOfWater?.replace(/,/g, ""));
  const v_w = Number(damFailure.volumeOfWater?.replace(/,/g, ""));
  let h_b = Number(damFailure.depthOfBreach?.replace(/,/g, ""));
  let h_d = Number(damFailure.heightOfDam?.replace(/,/g, ""));
  let w_avg = Number(damFailure.averageWidth?.replace(/,/g, ""));
  const useRecalibratedQ = equationState.peakFlowEquationType === "recalibrated";
  const useRecalibratedT = equationState.timeToFailureEquationType === "recalibrated";

  if (!h_w || !v_w) {
    return (
      <div className="result-container text-center border-1 border-white rounded-xl p-5 place-content-center text-orange-600 text-2xl">
        There&apos;s a problem with the input.
      </div>
    );
  }

  if (!h_b) {
    h_b = h_w;
  }

  if (!h_d) {
    h_d = h_w;
  }

  if (!w_avg) {
    w_avg = h_d * 2.6;
  }

  const inputDam: DamFailure = {
    heightOfWater: h_w,
    volumeOfWater: v_w,
    heightOfDam: h_d,
    depthOfBreach: h_b,
    averageWidth: w_avg,
    erodibility: damFailure.erodibility,
    mode: damFailure.failureMode,
    type: damFailure.damType,
  };

  const peakFlowPrediction = peakFlowEquation.predict(
    inputDam,
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
    inputDam,
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
