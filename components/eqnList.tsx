import { JSX } from "react";
import { DamFailure } from "./empiricalEqn.js";

export { equationList, type EqnListItem };

type EqnListItem = {
  name: string;
  description: string;
  mean: number;
  stdev: number;
  reMean: number;
  reStdev: number;
  displayText: JSX.Element;
  reDisplayText: JSX.Element;
  func: (dam: DamFailure) => number;
  reFunc: (dam: DamFailure) => number;
};

interface EquationList {
  [key: string]: EqnListItem;
}

const equationList: EquationList = {
  "Froehlich (1995a)-Q": {
    name: "Froehlich (1995a)",
    description:
      "An early equation that introduced multi-linear regression to this problem, \
outperforming earlier methods which used only simple linear regression. Prone to \
overestimating the peak flow.",
    mean: 0.2558,
    stdev: 0.4828,
    reMean: -0.0831,
    reStdev: 0.438,
    func: (dam: DamFailure) =>
      0.607 * dam.volumeOfWater ** 0.295 * dam.heightOfWater ** 1.24,
    displayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.61{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>1.24</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.30</sup>
      </>
    ),
    reFunc: (dam: DamFailure) =>
      0.04 * dam.volumeOfWater ** 0.46 * dam.heightOfWater ** 1.11,
    reDisplayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.040{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>1.11</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.46</sup>
      </>
    ),
  },
  "Webby (1996)-Q": {
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
      0.0443 *
      9.81 ** 0.5 *
      dam.volumeOfWater ** 0.365 *
      dam.heightOfWater ** 1.4,
    displayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.044 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>1.40</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.37</sup>
      </>
    ),
    reFunc: (dam: DamFailure) =>
      0.015 *
      9.81 ** 0.5 *
      dam.volumeOfWater ** 0.46 *
      dam.heightOfWater ** 1.11,
    reDisplayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.015 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>1.11</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.46</sup>
      </>
    ),
  },
  "Xu and Zhang (2009)-Q": {
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
      const k_m = dam.mode === "overtopping" ? 1.56 : 1.0; // Mode factor
      return (
        k_e *
        k_m *
        0.024 *
        9.81 ** 0.5 *
        dam.heightOfWater ** 1.28 *
        dam.volumeOfWater ** 0.41
      );
    },
    displayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.024 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          k<sub>e</sub> k<sub>m</sub> H<sub>w</sub>
        </em>
        <sup>1.28</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.41</sup><br />
        <em>k<sub>e</sub></em> = 0.39, 1.0, 1.5 for low, medium, or high erodibility, respectively<br />
        <em>k<sub>m</sub></em> = 1.6 for overtopping failure, 1.0 otherwise
      </>
    ),
    reFunc: (dam: DamFailure) => {
      const k_m = dam.mode === "overtopping" ? 0.92 : 1.0; // Mode factor
      let k_e = dam.erodibility === "low" ? 1.0 : 1.0;
      k_e = dam.erodibility === "high" ? 3.8 : k_e;
      return (
        0.012 *
        k_m *
        k_e *
        9.81 ** 0.5 *
        dam.heightOfWater ** 1.11 *
        dam.volumeOfWater ** 0.46
      );
    },
    reDisplayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.012 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          k<sub>e</sub> k<sub>m</sub> H<sub>w</sub>
        </em>
        <sup>1.11</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.46</sup><br />
        <em>k<sub>e</sub></em> = 1.0, 1.0, 3.8 for low, medium, or high erodibility, respectively<br />
        <em>k<sub>m</sub></em> = 0.92 for overtopping failure, 1.00 otherwise
      </>
    ),
  },
  "Hooshyaripor et al. (2014)-Q": {
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
    func: (dam: DamFailure) =>
      0.0454 * dam.heightOfWater ** 1.156 * dam.volumeOfWater ** 0.448,
    displayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.045 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>1.16</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.45</sup>
      </>
    ),
    reFunc: (dam: DamFailure) =>
      0.016 *
      9.81 ** 0.5 *
      dam.volumeOfWater ** 0.45 *
      dam.heightOfWater ** 1.14,
    reDisplayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.016 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>1.14</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.45</sup>
      </>
    ),
  },
  "Azimi et al. (2015)-Q": {
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
      16.553 *
      ((9.81 * dam.volumeOfWater) / 1000000) ** 0.5 *
      dam.heightOfWater,
    displayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.017 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>1.00</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.5</sup>
      </>
    ),
    reFunc: (dam: DamFailure) =>
      0.015 *
      9.81 ** 0.5 *
      dam.volumeOfWater ** 0.46 *
      dam.heightOfWater ** 1.11,
    reDisplayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.015 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>1.11</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.46</sup>
      </>
    ),
  },
  "Froehlich (2016)-Q": {
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
      const k_m = dam.mode === "overtopping" ? 1.85 : 1;
      const k_h =
        dam.heightOfWater >= 6.1 ? (dam.heightOfWater / 6.1) ** (1 / 8.0) : 1.0;
      return (
        0.0175 *
        k_m *
        k_h *
        ((9.81 *
          dam.volumeOfWater *
          dam.heightOfWater *
          dam.depthOfBreach ** 2) /
          dam.averageWidth) **
          0.5
      );
    },
    displayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.018 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          k<sub>m</sub> k<sub>h</sub> H<sub>w</sub>
        </em>
        <sup>0.50</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.50</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>1.00</sup>{" "}
        <em>
          W<sub>avg</sub>
        </em>
        <sup>−0.50</sup><br />
        <em>k<sub>h</sub></em> = (<em>H<sub>b</sub></em>/6.1)<sup>(1/8)</sup> for <em>H<sub>b</sub> &gt; 6.1 m, 1.0 otherwise</em><br />
        <em>k<sub>m</sub></em> = 1.85 for overtopping failure, 1.00 otherwise
      </>
    ),
    reFunc: (dam: DamFailure) => {
      const k_m = dam.mode === "overtopping" ? 0.99 : 1;
      const k_h =
        dam.heightOfWater >= 4.6 ? (dam.heightOfWater / 4.6) ** 0.2 : 1.0; // should be h_b
      return (
        0.013 *
        9.81 ** 0.5 *
        k_m *
        k_h *
        dam.heightOfWater ** 0.32 *
        dam.volumeOfWater ** 0.46 *
        dam.depthOfBreach ** 0.74 *
        dam.averageWidth ** 0.07
      );
    },
    reDisplayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.013 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          k<sub>m</sub> k<sub>h</sub> H<sub>w</sub>
        </em>
        <sup>0.32</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.46</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>0.74</sup>{" "}
        <em>
          W<sub>avg</sub>
        </em>
        <sup>0.07</sup>
        <em>k<sub>h</sub></em> = (<em>H<sub>b</sub></em>/7.2)<sup>(1/4)</sup> for <em>H<sub>b</sub> &gt; 7.2 m, 1.0 otherwise</em><br />
        <em>k<sub>m</sub></em> = 0.99 for overtopping failure, 1.00 otherwise
      </>
    ),
  },
  "Zhong et al. (2020)-Q": {
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
      const c =
        dam.type == "core-wall"
          ? [-1.51, -1.09, -0.12, -3.61]
          : [-1.58, -0.76, 0.1, -4.55];
      return (
        9.81 ** 0.5 *
        dam.volumeOfWater *
        dam.heightOfWater ** -0.5 *
        (dam.volumeOfWater ** (1 / 3) / dam.heightOfWater) ** c[0] *
        (dam.heightOfWater / dam.depthOfBreach) ** c[1] *
        dam.heightOfDam ** c[2] *
        Math.exp(c[3])
      );
    },
    displayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.011 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>0.32</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.47</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>0.76</sup>{" "}
        <em>
          H<sub>d</sub>
        </em>
        <sup>0.10</sup>, homogenous <br />
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.027 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>–0.08</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.50</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>1.09</sup>{" "}
        <em>
          H<sub>d</sub>
        </em>
        <sup>–0.12</sup>, core-wall
      </>
    ),
    reFunc: (dam: DamFailure) => {
      const c =
        dam.type == "core-wall"
          ? [0.019, -0.16, 0.4, 1.45, 0.08]
          : [0.018, 0.4, 0.44, 0.78, -0.04];
      return (
        c[0] *
        9.81 ** 0.5 *
        dam.heightOfWater ** c[1] *
        dam.volumeOfWater ** c[2] *
        dam.depthOfBreach ** c[3] *
        dam.heightOfDam ** c[4]
      );
    },
    reDisplayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.018 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>0.40</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.44</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>0.78</sup>{" "}
        <em>
          H<sub>d</sub>
        </em>
        <sup>–0.04</sup>, homogenous <br />
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.019 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>–0.16</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.40</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>1.45</sup>{" "}
        <em>
          H<sub>d</sub>
        </em>
        <sup>0.08</sup>, core-wall
      </>
    ),
  },
  "Yassin et al. (2025)-Q": {
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
      const k_e = dam.erodibility === "high" ? 3.8 : 1.0; // Erodibility factor
      return (
        0.011 *
        k_e *
        9.81 ** 0.5 *
        dam.heightOfWater ** 1.11 *
        dam.volumeOfWater ** 0.46
      );
    },
    displayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.011 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          k<sub>e</sub> H<sub>w</sub>
        </em>
        <sup>1.11</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.46</sup>
        <em>k<sub>e</sub></em> = 3.8 for high erodibility, 1.0 otherwise
      </>
    ),
    reFunc: (dam: DamFailure) => {
      // same as above
      const k_e = dam.erodibility === "high" ? 3.8 : 1.0; // Erodibility factor
      return (
        0.011 *
        k_e *
        9.81 ** 0.5 *
        dam.heightOfWater ** 1.11 *
        dam.volumeOfWater ** 0.46
      );
    },
    // same as above
    reDisplayText: (
      <>
        <em>
          Q<sub>p</sub>
        </em>{" "}
        = 0.011 <em>g</em>
        <sup>0.5</sup>{" "}
        <em>
          k<sub>e</sub> H<sub>w</sub>
        </em>
        <sup>1.11</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.46</sup>
        <em>k<sub>e</sub></em> = 3.8 for high erodibility, 1.0 otherwise
      </>
    ),
  },

  // TIME TO FAILURE FUNCTIONS

  "Froehlich (1995b)-T": {
    name: "Froehlich (1995b)",
    description: `Placeholder for Froehlich (1995) equation for time to failure.`,
    mean: -0.0997,
    stdev: 0.3562,
    reMean: -0.0079,
    reStdev: 0.3235,
    displayText: (
      <>
        <em>
          T<sub>f</sub>
        </em>{" "}
        = 0.0025{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.53</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>–0.90</sup>
      </>
    ),
    reDisplayText: (
      <>
        <em>
          T<sub>f</sub>
        </em>{" "}
        = 0.026{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.37</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>–0.78</sup>
      </>
    ),
    func: (dam: DamFailure) =>
      3.84 * (dam.volumeOfWater / 10 ** 6) ** 0.53 * dam.depthOfBreach ** -0.9,
    reFunc: (dam: DamFailure) =>
      0.026 * dam.volumeOfWater ** 0.37 * dam.depthOfBreach ** -0.78,
  },
  "Froehlich (2008)-T": {
    name: "Froehlich (2008)",
    description: `Placeholder for Froehlich (2008) equation for time to failure.`,
    mean: -0.0684,
    stdev: 0.341,
    reMean: -0.0185,
    reStdev: 0.3273,
    displayText: (
      <>
        <em>
          T<sub>f</sub>
        </em>{" "}
        = 0.018 <em>g</em>
        <sup>–0.5</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.19</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>–1.0</sup>
      </>
    ),
    func: (dam: DamFailure) =>
      (63.2 * (dam.volumeOfWater / 9.81 / dam.depthOfBreach ** 2) ** 0.5) /
      3600,
    reFunc: (dam: DamFailure) =>
      0.045 *
      9.81 ** -0.5 *
      dam.volumeOfWater ** 0.39 *
      dam.depthOfBreach ** -0.68,
    reDisplayText: (
      <>
        <em>
          T<sub>f</sub>
        </em>{" "}
        = 0.045 <em>g</em>
        <sup>–0.5</sup>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.39</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>–0.68</sup>
      </>
    ),
  },
  "Xu and Zhang (2009)-T": {
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
        0.01122 *
        k_e *
        dam.heightOfDam ** 0.654 *
        dam.volumeOfWater ** 0.415 *
        dam.heightOfWater ** -1.246
      );
    },
    displayText: (
      <>
        <em>
          T<sub>f</sub>
        </em>{" "}
        = 0.011{" "}
        <em>
          k<sub>e</sub>
        </em>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.42</sup>{" "}
        <em>
          H<sub>d</sub>
        </em>
        <sup>0.65</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>–1.25</sup><br />
        <em>k<sub>e</sub></em> = 3.1, 1.0, or 0.58 for low, medium, or high erodibility, respectively
      </>
    ),
    reFunc: (dam: DamFailure) => {
      let k_e = dam.erodibility === "high" ? 0.78 : 1.0; // Erodibility factor
      k_e = dam.erodibility === "low" ? 3.3 : k_e;
      return (
        0.043 *
        k_e *
        dam.heightOfDam ** 0.35 *
        dam.volumeOfWater ** 0.29 *
        dam.heightOfWater ** -0.86
      );
    },
    reDisplayText: (
      <>
        <em>
          T<sub>f</sub>
        </em>{" "}
        = 0.043{" "}
        <em>
          k<sub>e</sub>
        </em>{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.29</sup>{" "}
        <em>
          H<sub>d</sub>
        </em>
        <sup>0.35</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>–0.86</sup><br />
        <em>k<sub>e</sub></em> = 3.3, 1.0, or 0.78 for low, medium, or high erodibility, respectively
      </>
    ),
  },
  "Zhong et al. (2020)-T": {
    name: "Zhong et al. (2020)",
    description: `Placeholder for Zhong et al. (2020) equation for time to failure.`,
    mean: 0.1088,
    stdev: 1.8251,
    reMean: 0.0232,
    reStdev: 0.3075,
    func: (dam: DamFailure) => {
      const c =
        dam.type == "core-wall"
          ? [1.52, -11.36, -0.43, Math.exp(-1.57)]
          : [0.56, -0.85, -0.32, Math.exp(-0.2)];
      return (
        (dam.volumeOfWater ** (1 / 3) / dam.heightOfWater) ** c[0] *
        (dam.heightOfWater / dam.depthOfBreach) ** c[1] *
        dam.heightOfDam ** c[2] *
        c[3]
      );
    },
    displayText: (
      <>
        <em>
          T<sub>f</sub>
        </em>{" "}
        = 0.82{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.19</sup>{" "}
        <em>
          H<sub>d</sub>
        </em>
        <sup>–0.32</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>–1.41</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>0.85</sup>, homogenous <br />
        <em>
          T<sub>f</sub>
        </em>{" "}
        = 4.8{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.51</sup>{" "}
        <em>
          H<sub>d</sub>
        </em>
        <sup>0.43</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>–12.88</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>11.36</sup>, homogenous
      </>
    ),
    reFunc: (dam: DamFailure) => {
      const c =
        dam.type === "core-wall"
          ? [0.0086, 0.45, -0.11, -1.24, 0.47]
          : [0.025, 0.36, -0.22, -0.84, 0.4];
      return (
        c[0] *
        dam.volumeOfWater ** c[1] *
        dam.heightOfWater ** c[2] *
        dam.depthOfBreach ** c[3] *
        dam.heightOfDam ** c[4]
      );
    },
    reDisplayText: (
      <>
        <em>
          T<sub>f</sub>
        </em>{" "}
        = 0.025{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.36</sup>{" "}
        <em>
          H<sub>d</sub>
        </em>
        <sup>0.40</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>–0.22</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>–0.84</sup>, homogenous <br />
        <em>
          T<sub>f</sub>
        </em>{" "}
        = 0.0086{" "}
        <em>
          V<sub>w</sub>
        </em>
        <sup>0.45</sup>{" "}
        <em>
          H<sub>d</sub>
        </em>
        <sup>0.47</sup>{" "}
        <em>
          H<sub>w</sub>
        </em>
        <sup>–0.11</sup>{" "}
        <em>
          H<sub>b</sub>
        </em>
        <sup>–1.24</sup>, homogenous
      </>
    ),
  },
};
