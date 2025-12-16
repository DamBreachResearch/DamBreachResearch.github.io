import { equationList, type EqnListItem } from "./eqnList";

export interface DamFailure {
  volumeOfWater: number;
  heightOfWater: number;
  heightOfDam: number;
  depthOfBreach: number;
  averageWidth: number;
  erodibility: string;
  mode: string;
  type: string;
}

export interface DamFailureInput {
  heightOfWater: string;
  volumeOfWater: string;
  depthOfBreach: string;
  heightOfDam: string;
  averageWidth: string;
  failureMode: string;
  erodibility: string;
  damType: string;
}

export interface EquationState {
  peakFlowEquationName: string;
  timeToFailureEquationName: string;
  peakFlowEquationType: string;
  timeToFailureEquationType: string;
}

export class EmpiricalEquation {
  shortName: string;
  name: string;
  description: string;
  mean: number;
  stdev: number;
  reMean: number;
  reStdev: number;
  ogPredict: (dam: DamFailure) => number;
  rePredict: (dam: DamFailure) => number;

  constructor(shortName: string) {
    const eqn: EqnListItem = equationList[shortName];
    this.shortName = shortName;
    this.name = eqn.name;
    this.description = eqn.description;

    this.mean = eqn.mean;
    this.stdev = eqn.stdev;

    this.reMean = eqn.reMean;
    this.reStdev = eqn.reStdev;

    this.ogPredict = eqn.func;
    this.rePredict = eqn.reFunc;
  }

  getUpperBoundRatio(useRecalibrated: boolean): number {
    // Note: the mean is negative because these means are pred/obs and we want obs/pred
    if (useRecalibrated) {
      return 10 ** (-1 * this.reMean + 1.645 * this.reStdev); // one-sided 95% confidence interval
    } else {
      return 10 ** (-1 * this.mean + 1.645 * this.stdev);
    }
  }

  getLowerBoundRatio(useRecalibrated: boolean): number {
    // Note: the mean is negative because these means are pred/obs and we want obs/pred
    if (useRecalibrated) {
      return 10 ** (-1 * this.reMean - 1.645 * this.reStdev); // one-sided 95% confidence interval
    } else {
      return 10 ** (-1 * this.mean - 1.645 * this.stdev);
    }
  }

  predict(dam: DamFailure, useRecalibrated: boolean): number {
    if (useRecalibrated) {
      return this.rePredict(dam);
    } else {
      return this.ogPredict(dam);
    }
  }
}

export class PeakFlowEquation extends EmpiricalEquation {
  units: string = "m³/s";
  constructor(name: string) {
    super(name + "-Q");
  }
}

export class TimeToFailureEquation extends EmpiricalEquation {
  units: string = "h";
  constructor(name: string) {
    super(name + "-T");
  }
}

export class BreachWidthEquation extends EmpiricalEquation {
  units: string = "m";
  constructor(name: string) {
    super(name + "-B");
  }
}

export function convertDamInputToFailure(damInput: DamFailureInput): DamFailure {

  const heightOfWater = Number(damInput.heightOfWater?.replace(/,/g, ""));
  const volumeOfWater = Number(damInput.volumeOfWater?.replace(/,/g, ""));
  let depthOfBreach = Number(damInput.depthOfBreach?.replace(/,/g, ""));
  let heightOfDam = Number(damInput.heightOfDam?.replace(/,/g, ""));
  let averageWidth = Number(damInput.averageWidth?.replace(/,/g, ""));

  if (!heightOfDam) {
    heightOfDam = depthOfBreach ? depthOfBreach : heightOfWater;
  }

  if (!depthOfBreach) {
    depthOfBreach = heightOfDam;
  }

  if (!averageWidth) {
    averageWidth = heightOfDam * 2.6;
  }

  return {
    heightOfWater: heightOfWater,
    volumeOfWater: volumeOfWater,
    heightOfDam: heightOfDam,
    depthOfBreach: depthOfBreach,
    averageWidth: averageWidth,
    erodibility: damInput.erodibility,
    mode: damInput.failureMode,
    type: damInput.damType,
  } as DamFailure;
}
