import { DamFailure, Estimate } from "./empiricalEqn.js";

export { EquationList, type EqnListItem };

type EqnListItem = {
  name: string;
  description: string;
  mean: number;
  stdev: number;
  reMean: number;
  reStdev: number;
  func: Estimate;
  reFunc: Estimate;
};

interface EqnList {
  [key: string]: EqnListItem;
}

const EquationList: EqnList = {
  "Fr95-Q": {
    name: "Froehlich (1995a)",
    description:
      "An early equation that introduced multi-linear regression to this problem, \
outperforming earlier methods which used only simple linear regression. Prone to \
overestimating the peak flow.",
    mean: 0.2558,
    stdev: 0.4828,
    reMean: -0.0831,
    reStdev: 0.438,
    func: (dam: DamFailure) => 0.607 * dam.v_w ** 0.295 * dam.h_w ** 1.24,
    reFunc: (dam: DamFailure) => 0.04 * dam.v_w ** 0.46 * dam.h_w ** 1.11,
  },
  "We96-Q": {
    name: "Webby (1996)",
    description:
      "A simple, dimensionally homogenous equation that uses only height and \
volume of water, calibrated using simple linear regression. The form of this \
equation became the basis for subsequent models.",
    mean: 0.1738,
    stdev: 0.4483,
    reMean: -0.0132,
    reStdev: 0.438,
    func: (dam: DamFailure) =>
      0.0443 * 9.81 ** 0.5 * dam.v_w ** 0.365 * dam.h_w ** 1.4,
    reFunc: (dam: DamFailure) =>
      0.015 * 9.81 ** 0.5 * dam.v_w ** 0.46 * dam.h_w ** 1.11,
  },
  "Xu09-Q": {
    name: "Xu and Zhang (2009)",
    description:
      "A dimensionally homogenous equation that includes discrete variables \
as well as continuous variables, allowing the model to account for the effect of \
dam erodibility and failure mode of the dam. This is one of the only equations that \
includes an indication of the erodibility of the dam, which is a key factor in \
accurately predicting the peak flow.",
    mean: 0.2136,
    stdev: 0.4268,
    reMean: -0.007,
    reStdev: 0.3633,
    func: (dam: DamFailure) => {
      let k_e = dam.erodibility === "high" ? 1.51 : 1.0; // Erodibility factor
      k_e = dam.erodibility === "low" ? 0.39 : k_e;
      let k_m = dam.mode === "overtopping" ? 1.56 : 1.0; // Mode factor
      return (
        k_e * k_m * 0.024 * 9.81 ** 0.5 * dam.h_w ** 1.28 * dam.v_w ** 0.41
      );
    },
    reFunc: (dam: DamFailure) => {
      let k_m = dam.mode === "overtopping" ? 0.92 : 1.0; // Mode factor
      let k_e = dam.erodibility === "low" ? 1.0 : 1.0;
      k_e = dam.erodibility === "high" ? 3.8 : k_e;
      return (
        0.012 * k_m * k_e * 9.81 ** 0.5 * dam.h_w ** 1.11 * dam.v_w ** 0.46
      );
    },
  },
  "Ho14-Q": {
    name: "Hooshyaripor et al. (2014)",
    description:
      "A simple, dimensionally homogenous equation that uses only height and \
volume of water. This equation uses a 3-dimensional Gaussian copula to generate \
synthetic data to assist in the calibration of the model, but Yassin et al. (2025) \
found that the effect of the copula on the model performance is negligible.",
    mean: -0.0551,
    stdev: 0.4381,
    reMean: -0.0155,
    reStdev: 0.4382,
    func: (dam: DamFailure) => 0.0454 * dam.h_w ** 1.156 * dam.v_w ** 0.448,
    reFunc: (dam: DamFailure) =>
      0.016 * 9.81 ** 0.5 * dam.v_w ** 0.45 * dam.h_w ** 1.14,
  },
  "Az15-Q": {
    name: "Azimi et al. (2015)",
    description:
      "A simple, dimensionally homogenous equation that uses only height and \
volume of water. This equation was developed using a large dataset of dam failures \
and used cross-validation to ensure that the model performance is robust. Yassin et \
al. (2025) found that this is one of the most accurate models available, but it can \
still produce large errors.",
    mean: 0.1602,
    stdev: 0.4393,
    reMean: -0.0132,
    reStdev: 0.438,
    func: (dam: DamFailure) =>
      16.553 * ((9.81 * dam.v_w) / 1000000) ** 0.5 * dam.h_w,
    reFunc: (dam: DamFailure) =>
      0.015 * 9.81 ** 0.5 * dam.v_w ** 0.46 * dam.h_w ** 1.11,
  },
  "Fr16-Q": {
    name: "Froehlich (2016)",
    description:
      "A more complicated equation that accounts for the mode of failure, as \
well as the depth of the breach and the average embankment width. This equation \
also includes a height factor that adjusts the peak flow for dams larger than 6.1 m, \
making this the only equation to treat smaller and larger dams differently. Despite \
this, Yassin et al. (2025) found that none of these innovations significantly \
improved the model performance compared to simpler models.",
    mean: 0.2234,
    stdev: 0.4517,
    reMean: 0.0318,
    reStdev: 0.4274,
    func: (dam: DamFailure) => {
      let k_m = dam.mode === "overtopping" ? 1.85 : 1;
      let k_h = dam.h_w >= 6.1 ? (dam.h_w / 6.1) ** (1 / 8.0) : 1.0;
      return (
        0.0175 *
        k_m *
        k_h *
        ((9.81 * dam.v_w * dam.h_w * dam.h_b ** 2) / dam.w_avg) ** 0.5
      );
    },
    reFunc: (dam: DamFailure) => {
      let k_m = dam.mode === "overtopping" ? 1.01 : 1;
      let k_h = dam.h_w >= 4.6 ? (dam.h_w / 4.6) ** 0.2 : 1.0; // should be h_b
      return (
        0.012 *
        9.81 ** 0.5 *
        k_m *
        k_h *
        dam.h_w ** 0.31 *
        dam.v_w ** 0.46 *
        dam.h_b ** 0.76 *
        dam.w_avg ** 0.067
      );
    },
  },
  "Zh20-Q": {
    name: "Zhong et al. (2020)",
    description:
      "This equation separates homogenous-fill and core-wall dams in its \
calibration, which allows it to account for the different properties of these two \
types of dams. However, this does not significantly improve the model performance \
compared to simpler models (Yassin et al., 2025).",
    mean: 0.0927,
    stdev: 0.4504,
    reMean: 0.0318,
    reStdev: 0.4274,
    func: (dam: DamFailure) => {
      let c =
        dam.type == "core-wall"
          ? [-1.51, -1.09, -0.12, -3.61]
          : [-1.58, -0.76, 0.1, -4.55];
      return (
        9.81 ** 0.5 *
        dam.v_w *
        dam.h_w ** -0.5 *
        (dam.v_w ** (1 / 3) / dam.h_w) ** c[0] *
        (dam.h_w / dam.h_b) ** c[1] *
        dam.h_d ** c[2] *
        Math.exp(c[3])
      );
    },
    reFunc: (dam: DamFailure) => {
      let c =
        dam.type == "core-wall"
          ? [0.019, -0.16, 0.4, 1.45, 0.08]
          : [0.018, 0.4, 0.44, 0.78, -0.04];
      return (
        c[0] *
        9.81 ** 0.5 *
        dam.h_w ** c[1] *
        dam.v_w ** c[2] *
        dam.h_b ** c[3] *
        dam.h_d ** c[4]
      );
    },
  },
  "Ya25-Q": {
    name: "Yassin et al. (2025)",
    description:
      "This equation is a simple equation that uses height and volume of water, but \
also includes a 'high erodibility' adjustment factor. It is the most robust and \
accurate of the models, but it is still prone to large errors in some cases.",
    mean: -0.0174,
    stdev: 0.3635,
    reMean: -0.0174,
    reStdev: 0.3635,
    func: (dam: DamFailure) => {
      let k_e = dam.erodibility === "high" ? 3.8 : 1.0; // Erodibility factor
      return 0.011 * k_e * 9.81 ** 0.5 * dam.h_w ** 1.11 * dam.v_w ** 0.46;
    },
    reFunc: (dam: DamFailure) => {
      // same as above
      let k_e = dam.erodibility === "high" ? 3.8 : 1.0; // Erodibility factor
      return 0.011 * k_e * 9.81 ** 0.5 * dam.h_w ** 1.11 * dam.v_w ** 0.46;
    },
  },

  // TIME TO FAILURE FUNCTIONS

  "Fr95-T": {
    name: "Froehlich (1995b)",
    description: `Placeholder for Froehlich (1995) equation for time to failure.`,
    mean: -0.0997,
    stdev: 0.3562,
    reMean: -0.0079,
    reStdev: 0.3235,
    func: (dam: DamFailure) =>
      3.84 * (dam.v_w / 10 ** 6) ** 0.53 * dam.h_b ** -0.9,
    reFunc: (dam: DamFailure) => 0.026 * dam.v_w ** 0.37 * dam.h_b ** -0.78,
  },
  "Fr08-T": {
    name: "Froehlich (2008)",
    description: `Placeholder for Froehlich (2008) equation for time to failure.`,
    mean: -0.0684,
    stdev: 0.341,
    reMean: -0.0185,
    reStdev: 0.3273,
    func: (dam: DamFailure) =>
      (63.2 * (dam.v_w / 9.81 / dam.h_b ** 2) ** 0.5) / 3600,
    reFunc: (dam: DamFailure) =>
      0.045 * 9.81 ** -0.5 * dam.v_w ** 0.39 * dam.h_b ** -0.68,
  },
  "Xu09-T": {
    name: "Xu and Zhang (2009)",
    description: `Placeholder for Xu and Zhang (2009) equation for time to failure.`,
    mean: 0.1456,
    stdev: 0.3495,
    reMean: 0.0192,
    reStdev: 0.3194,
    func: (dam: DamFailure) => {
      let k_e = dam.erodibility === "high" ? 0.58 : 1.0; // Erodibility factor
      k_e = dam.erodibility === "low" ? 3.11 : k_e;
      return (
        0.01122 * k_e * dam.h_d ** 0.654 * dam.v_w ** 0.415 * dam.h_w ** -1.246
      );
    },
    reFunc: (dam: DamFailure) => {
      let k_e = dam.erodibility === "high" ? 0.78 : 1.0; // Erodibility factor
      k_e = dam.erodibility === "low" ? 3.3 : k_e;
      return 0.043 * k_e * dam.h_d ** 0.35 * dam.v_w ** 0.29 * dam.h_w ** -0.86;
    },
  },
  "Zh20-T": {
    name: "Zhong et al. (2020)",
    description: `Placeholder for Zhong et al. (2020) equation for time to failure.`,
    mean: 0.1088,
    stdev: 1.8251,
    reMean: 0.0232,
    reStdev: 0.3075,
    func: (dam: DamFailure) => {
      let c =
        dam.type == "core-wall"
          ? [1.52, -11.36, -0.43, Math.exp(-1.57)]
          : [0.56, -0.85, -0.32, Math.exp(-0.2)];
      return (
        (dam.v_w ** (1 / 3) / dam.h_w) ** c[0] *
        (dam.h_w / dam.h_b) ** c[1] *
        dam.h_d ** c[2] *
        c[3]
      );
    },
    reFunc: (dam: DamFailure) => {
      let c =
        dam.type === "core-wall"
          ? [0.0086, 0.45, -0.11, -1.24, 0.47]
          : [0.025, 0.36, -0.22, 0.4, 0.4];
      return (
        c[0] *
        dam.v_w ** c[1] *
        dam.h_w ** c[2] *
        dam.h_b ** c[3] *
        dam.h_d ** c[4]
      );
    },
  },
};
