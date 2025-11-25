import { EquationList, EqnListItem } from "./eqnList.js";

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

export type Estimate = (dam: DamFailure) => number;

class EmpiricalEquation {
  shortName: string;
  name: string;
  description: string;
  mean: number;
  stdev: number;
  reMean: number;
  reStdev: number;
  predict: Estimate;
  rePredict: Estimate;

  constructor(shortName: string) {
    let eqn: EqnListItem = EquationList[shortName];
    this.shortName = shortName;
    this.name = eqn.name;
    this.description = eqn.description;

    this.mean = eqn.mean;
    this.stdev = eqn.stdev;

    this.reMean = eqn.reMean;
    this.reStdev = eqn.reStdev;

    this.predict = eqn.func;
    this.rePredict = eqn.reFunc;
  }
}

class PeakFlowEquation extends EmpiricalEquation {
  units: string = "m³/s";
  constructor(shortName: string) {
    super(shortName + "-Q");
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
