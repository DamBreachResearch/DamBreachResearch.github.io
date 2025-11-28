import {
  DamFailure,
  PeakFlowEquation,
  TimeToFailureEquation,
} from "./empiricalEqn";
import { timeStringFormat } from "./utils/formatting";

interface ResultContainerInputs {
  peakFlowEquationName: string;
  timeToFailureEquationName: string;
  originalOrRecalibratedQ: string;
  originalOrRecalibratedT: string;
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
  originalOrRecalibratedQ,
  originalOrRecalibratedT,
  heightOfWater,
  volumeOfWater,
  depthOfBreach,
  heightOfDam,
  averageWidth,
  failureMode,
  erodibility,
  damType,
}: ResultContainerInputs) {
  const peakFlowEquation = new PeakFlowEquation(peakFlowEquationName);
  const timeToFailureEquation = new TimeToFailureEquation(
    timeToFailureEquationName
  );
  const h_w = Number(heightOfWater?.replace(/,/g, ""));
  const v_w = Number(volumeOfWater?.replace(/,/g, ""));
  let h_b = Number(depthOfBreach?.replace(/,/g, ""));
  let h_d = Number(heightOfDam?.replace(/,/g, ""));
  let w_avg = Number(averageWidth?.replace(/,/g, ""));
  const useRecalibratedQ = originalOrRecalibratedQ === "recalibrated";
  const useRecalibratedT = originalOrRecalibratedT === "recalibrated";

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
    h_w: h_w,
    v_w: v_w,
    h_d: h_d,
    h_b: h_b,
    w_avg: w_avg,
    erodibility: erodibility,
    mode: failureMode,
    type: damType,
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
