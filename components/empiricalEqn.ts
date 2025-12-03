import { EquationList, type EqnListItem } from "./eqnList";

export interface DamFailure {
  v_w: number;
  h_w: number;
  h_d: number;
  h_b: number;
  w_avg: number;
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

export type Estimate = (dam: DamFailure) => number;

class EmpiricalEquation {
  shortName: string;
  name: string;
  description: string;
  mean: number;
  stdev: number;
  reMean: number;
  reStdev: number;
  ogPredict: Estimate;
  rePredict: Estimate;

  constructor(shortName: string) {
    const eqn: EqnListItem = EquationList[shortName];
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

  getUpperBoundRatio(useRecalibrated: boolean) {
    // Note: the mean is negative because these means are pred/obs and we want obs/pred
    if (useRecalibrated) {
      return 10 ** (-1 * this.reMean + 1.645 * this.reStdev); // one-sided 95% confidence interval
    } else {
      return 10 ** (-1 * this.mean + 1.645 * this.stdev);
    }
  }

  getLowerBoundRatio(useRecalibrated: boolean) {
    // Note: the mean is negative because these means are pred/obs and we want obs/pred
    if (useRecalibrated) {
      return 10 ** (-1 * this.reMean - 1.645 * this.reStdev); // one-sided 95% confidence interval
    } else {
      return 10 ** (-1 * this.mean - 1.645 * this.stdev);
    }
  }

  predict(dam: DamFailure, useRecalibrated: boolean) {
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

/*const q_eqn_map = new Map();
q_eqn_map.set("Fr95", fr95_q);
q_eqn_map.set("We96", we96_q);
q_eqn_map.set("Xu09", xu09_q);
q_eqn_map.set("Ho14", ho14_q);
q_eqn_map.set("Az15", az15_q);
q_eqn_map.set("Fr16", fr16_q);
q_eqn_map.set("Zh20", zh20_q);
q_eqn_map.set("Ya25", ya25_q);*/

/*const t_eqn_map = new Map();
t_eqn_map.set("Fr95", fr95_t);
t_eqn_map.set("Fr08", fr08_t);
t_eqn_map.set("Xu09", xu09_t);
t_eqn_map.set("Zh20", zh20_t);*/
