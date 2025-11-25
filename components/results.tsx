import {
  DamFailure,
  PeakFlowEquation,
  TimeToFailureEquation,
} from "./empiricalEqn";
import { timeStringFormat } from "./utils/formatting";

interface ResultContainerInputs {
  peakFlowEquationName: string;
  timeToFailureEquationName: string;
  originalOrRecalibrated: string;
  heightOfWater: string;
  volumeOfWater: string;
  depthOfBreach: string;
  heightOfDam: string;
  averageWidth: string;
  failureMode: string;
  erodibility: string;
  damType: string;
}

export function ResultContainer({
  peakFlowEquationName,
  timeToFailureEquationName,
  originalOrRecalibrated,
  heightOfWater,
  volumeOfWater,
  depthOfBreach,
  heightOfDam,
  averageWidth,
  failureMode,
  erodibility,
  damType,
}: ResultContainerInputs) {
  let peakFlowEquation = new PeakFlowEquation(peakFlowEquationName);
  let timeToFailureEquation = new TimeToFailureEquation(
    timeToFailureEquationName
  );
  let h_w = Number(heightOfWater?.replace(/,/g, ""));
  let v_w = Number(volumeOfWater?.replace(/,/g, ""));
  let h_b = Number(depthOfBreach?.replace(/,/g, ""));
  let h_d = Number(heightOfDam?.replace(/,/g, ""));
  let w_avg = Number(averageWidth?.replace(/,/g, ""));
  let useRecalibrated = originalOrRecalibrated === "recalibrated";

  if (!h_w || !v_w) {
    return (
      <div className="result-container text-center border-1 border-white rounded-xl p-5 place-content-center text-orange-600">
        There seems to be a problem with the input.
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

  let inputDam: DamFailure = {
    h_w: h_w,
    v_w: v_w,
    h_d: h_d,
    h_b: h_b,
    w_avg: w_avg,
    erodibility: erodibility,
    mode: failureMode,
    type: damType,
  };

  let peakFlowPrediction = peakFlowEquation.predict(inputDam, useRecalibrated);
  let peakFlowUpperBound =
    peakFlowEquation.getUpperBoundRatio(useRecalibrated) * peakFlowPrediction;

  let peakFlowFormatted = parseFloat(
    peakFlowPrediction.toPrecision(2)
  ).toLocaleString();
  let peakFlowUpperBoundFormatted = parseFloat(
    peakFlowUpperBound.toPrecision(2)
  ).toLocaleString();

  let timeToFailurePrediction = timeToFailureEquation.predict(
    inputDam,
    useRecalibrated
  );
  let timeToFailureUpperBound = timeStringFormat(
    timeToFailureEquation.getLowerBoundRatio(useRecalibrated) *
      timeToFailurePrediction
  );
  let timeToFailureFormatted = timeStringFormat(timeToFailurePrediction);

  return (
    <div className="result-container text-center border rounded-xl p-5 grid grid-col-2">
      <div className="place-content-center">
        The estimated peak flow is
        <div className="text-2xl font-bold">{peakFlowFormatted} m³/s,</div>
        with 95% confidence that the true peak flow is less than
        <div className="text-2xl font-bold">
          {peakFlowUpperBoundFormatted} m³/s.
        </div>
      </div>
      <div className="place-content-center">
        The estimated time to failure is
        <div className="text-2xl font-bold">{timeToFailureFormatted},</div>
        with 95% confidence that the true time to failure is larger than
        <div className="text-2xl font-bold">{timeToFailureUpperBound}.</div>
      </div>
    </div>
  );
}
