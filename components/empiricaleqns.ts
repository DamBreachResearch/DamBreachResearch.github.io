interface DamFailure {
    v_w: number;
    h_w: number;
    h_d: number;
    h_b: number;
    w_avg: number;
    erodibility: string;
    mode: string;
    type: string;
}

type Estimate = (dam: DamFailure) => number;

class EmpiricalEquation {
    mean: number = 0;
    stdev: number = 0;
    mean_re: number = 0;
    stdev_re: number = 0;
}

class PeakFlowEquation extends EmpiricalEquation {
    shortName: string;
    name: string = "Loading...";
    description: string = "Loading...";
    predict: Estimate = (dam) => 0;

    constructor(shortName: string) {
        super()
        this.shortName = shortName;
    }
}

var fr95_q = {
    name: "Froehlich (1995)",
    func: (dam: DamFailure) => 0.607 * dam.v_w**0.295 * dam.h_w**1.24,
    func_re: (dam: DamFailure) => 0.040 * dam.v_w**0.46 * dam.h_w**1.11,
    description: `An early equation that introduced multi-linear regression to this problem, outperforming earlier methods which used only simple linear regression. Prone to overestimating the peak flow.`,
    mean: 0.2558,
    stdev: 0.4828,
    mean_re: -0.0831,
    stdev_re: 0.4380
}

var we96_q = {
    "name": "Webby (1996)",
    "func": (dam: DamFailure) => 0.0443 * 9.81**0.5 * dam.v_w**0.365 * dam.h_w**1.40,
    "func_re": (dam: DamFailure) => 0.015 * 9.81**0.5 * dam.v_w**0.46 * dam.h_w**1.11,
    "description": `A simple, dimensionally homogenous equation that uses only height and volume of water, calibrated using simple linear regression. The form of this equation became the basis for subsequent models.`,
    "mean": 0.1738,
    "stdev": 0.4483,
    "mean_re": -0.0132,
    "stdev_re": 0.4380
}

var xu09_q = {
    "name": "Xu and Zhang (2009)",
    "func": (dam: DamFailure) => 0,
    "func_re": (dam: DamFailure) => 0,
    "description": `A dimensionally homogenous equation that includes discrete variables as well as continuous variables, allowing the model to account for the effect of dam erodibility and failure mode of the dam. This is one of the only equations that includes an indication of the erodibility of the dam, which is a key factor in accurately predicting the peak flow.`,
    "mean": 0.2136,
    "stdev": 0.4268,
    "mean_re": -0.0070,
    "stdev_re": 0.3633
}

xu09_q.func = function(dam: DamFailure) {
    // Xu and Zhang (2009) equation for peak flow
    let k_e = 1.0; // Erodibility factor
    if (dam.erodibility === "high") {
        k_e = 1.51;
    } else if (dam.erodibility === "low") {
        k_e = 0.39;
    }
    let k_m = dam.mode === "overtopping" ? 1.56 : 1.0; // Mode factor
    return k_e * k_m * 0.024 * (9.81**0.5) * (dam.h_w**1.28) * (dam.v_w**0.41);
}

xu09_q.func_re = (dam: DamFailure) => {
    let k_m = dam.mode === "overtopping" ? .92 : 1.0; // Mode factor
    let k_e = 1.0;
    if (dam.erodibility === "low") {
        k_e = 1.0;
    } else if (dam.erodibility === "high") {
        k_e = 3.8;
    }
    return 0.012 * k_m * k_e * 9.81**0.5 * dam.h_w**1.11 * dam.v_w**0.46
}

var ho14_q = {
    "name": "Hooshyaripor et al. (2014)",
    "func": (dam: DamFailure) => 0.0454 * dam.h_w**1.156 * dam.v_w**0.448,
    "func_re": (dam: DamFailure) => 0.016 * 9.81**0.5 * dam.v_w**0.45 * dam.h_w**1.14,
    "description": `A simple, dimensionally homogenous equation that uses only height and volume of water. This equation uses a 3-dimensional Gaussian copula to generate synthetic data to assist in the calibration of the model, but Yassin et al. (2025) found that the effect of the copula on the model performance is negligible.`,
    "mean": -0.0551,
    "stdev": 0.4381,
    "mean_re": -0.0155,
    "stdev_re": 0.4382
}


var az15_q = {
    "name": "Azimi et al. (2015)",
    "func": (dam: DamFailure) => 16.553 * (9.81 * dam.v_w/1000000.)**0.5 * dam.h_w,
    "func_re": (dam: DamFailure) => 0.015 * 9.81**0.5 * dam.v_w**0.46 * dam.h_w**1.11,
    "description": `A simple, dimensionally homogenous equation that uses only height and volume of water. This equation was developed using a large dataset of dam failures and used cross-validation to ensure that the model performance is robust. Yassin et al. (2025) found that this is one of the most accurate models available, but it can still produce large errors.`,
    "mean": 0.1602,
    "stdev": 0.4393,
    "mean_re": -0.0132,
    "stdev_re": 0.4380
}

var fr16_q = {
    "name": "Froehlich (2016)",
    "func": (dam: DamFailure) => 0,
    "func_re": (dam: DamFailure) => 0,
    "description": `A more complicated equation that accounts for the mode of failure, as well as the depth of the breach and the average embankment width. This equation also includes a height factor that adjusts the peak flow for dams larger than 6.1 m, making this the only equation to treat smaller and larger dams differently. Despite this, Yassin et al. (2025) found that none of these innovations significantly improved the model performance compared to simpler models.`,
    "mean": 0.2234,
    "stdev": 0.4517,
    "mean_re": 0.0318,
    "stdev_re": 0.4274
}

fr16_q.func = function(dam: DamFailure){
    let k_m = dam.mode === "overtopping" ? 1.85 : 1.;
    let k_h = dam.h_w >= 6.1 ? (dam.h_w / 6.1)**(1 / 8.0) : 1.0;
    return 0.0175 * k_m * k_h * (9.81 * dam.v_w * dam.h_w * dam.h_b**2 / dam.w_avg)**0.5;
}

fr16_q.func_re = (dam: DamFailure) => {
    let k_m = dam.mode === "overtopping" ? 1.01 : 1.;
    let k_h = dam.h_w >= 4.6 ? (dam.h_w / 4.6)**0.20 : 1.0; // should be h_b
    return 0.012 * 9.81**0.5 * k_m * k_h * dam.h_w**0.31 * dam.v_w**0.46 * dam.h_b**0.76 * dam.w_avg**0.067;
}

var zh20_q = {
    "name": "Zhong et al. (2020)",
    "func": (dam: DamFailure) => 0,
    "func_re": (dam: DamFailure) => 0,
    "description": `This equation separates homogenous-fill and core-wall dams in its calibration, which allows it to account for the different properties of these two types of dams. However, this does not significantly improve the model performance compared to simpler models (Yassin et al., 2025).`,
    "mean": 0.0927,
    "stdev": 0.4504,
    "mean_re": 0.0318,
    "stdev_re": 0.4274
}

zh20_q.func = function(dam: DamFailure){
    // homogenous
    let c0 = -1.58;
    let c1 = -0.76;
    let c2 = 0.10;
    let c3 = -4.55;
    if (dam.type == 'core-wall') {
        c0 = -1.51;
        c1 = -1.09;
        c2 = -0.12;
        c3 = -3.61;
    }
    let v_w = dam.v_w;
    let h_w = dam.h_w;
    let h_d = dam.h_d;
    let h_b = dam.h_b;
    return 9.81**0.5 * v_w * h_w**-0.5 * (v_w**(1./3.) / h_w)**c0 * (h_w / h_b)**c1 * h_d**c2 * Math.exp(c3);
}

zh20_q.func_re = function(dam: DamFailure){
    // homogenous
    let c = 0.018
    let c0 = 0.40
    let c1 = 0.44
    let c2 = 0.78
    let c3 = -0.04
    if (dam.type == 'core-wall') {
        c = 0.019
        c0 = -0.16
        c1 = 0.40
        c2 = 1.45
        c3 = 0.08
    }
    return c * 9.81**0.5 * dam.h_w**c0 * dam.v_w**c1 * dam.h_b**c2 * dam.h_d**c3
}

var ya25_q = {
    "name": "Yassin et al. (2025)",
    "func": (dam: DamFailure) => 0,
    "func_re": (dam: DamFailure) => 0,
    "description": `This equation is a simple equation that uses height and volume of water, but also includes a "high erodibility" adjustment factor. It is the most robust and accurate of the models, but it is still prone to large errors in some cases.`,
    "mean": -0.0174,
    "stdev": 0.3635,
    "mean_re": -0.0174,
    "stdev_re": 0.3635
}

ya25_q.func = function(dam: DamFailure) {
    let k_e = dam.erodibility === "high" ? 3.8 : 1.0; // Erodibility factor
    return 0.011 * k_e * (9.81**0.5) * (dam.h_w**1.11) * (dam.v_w**0.46);
}

ya25_q.func_re = ya25_q.func // recalibration is not available for this equation

const q_eqn_map = new Map();
q_eqn_map.set("Fr95", fr95_q);
q_eqn_map.set("We96", we96_q);
q_eqn_map.set("Xu09", xu09_q);
q_eqn_map.set("Ho14", ho14_q);
q_eqn_map.set("Az15", az15_q);
q_eqn_map.set("Fr16", fr16_q);
q_eqn_map.set("Zh20", zh20_q);
q_eqn_map.set("Ya25", ya25_q);

// T eqns

var fr95_t = {
    name: "Froehlich (1995)",
    func: (dam: DamFailure) => 3.84 * (dam.v_w/10**6)**0.53 * dam.h_b**-0.90,
    func_re: (dam: DamFailure) => 0.026 * dam.v_w**0.37 * dam.h_b**-0.78,
    description: `Placeholder for Froehlich (1995) equation for time to failure.`,
    "mean": -0.0997,
    "stdev": 0.3562,
    "mean_re": -0.0079,
    "stdev_re": 0.3235
}

var fr08_t = {
    name: "Froehlich (2008)",
    func: (dam: DamFailure) => 63.2 * (dam.v_w / 9.81 / dam.h_b**2)**0.5 / 3600,
    func_re: (dam: DamFailure) => 0.045 * 9.81**-0.5 * dam.v_w**0.39 * dam.h_b**-0.68,
    description: `Placeholder for Froehlich (2008) equation for time to failure.`,
    "mean": -0.0684,
    "stdev": 0.3410,
    "mean_re": -0.0185,
    "stdev_re": 0.3273
}

var xu09_t = {
    name: "Xu and Zhang (2009)",
    func: (dam: DamFailure) => 0,
    func_re: (dam: DamFailure) => 0,
    description: `Placeholder for Xu and Zhang (2009) equation for time to failure.`,
    "mean": 0.1456,
    "stdev": 0.3495,
    "mean_re": 0.0192,
    "stdev_re": 0.3194,
}

xu09_t.func = (dam: DamFailure) => {
    // Xu and Zhang (2009) equation for time to failure
    var k_e = 1.0; // Erodibility factor
    if (dam.erodibility === "high") {
        k_e = 0.58;
    } else if (dam.erodibility === "low") {
        k_e = 3.11;
    }
    return 0.01122 * k_e * dam.h_d**0.654 * dam.v_w**0.415 * dam.h_w**-1.246;
}

xu09_t.func_re = (dam: DamFailure) => {
    var k_e = 1.0; // Erodibility factor
    if (dam.erodibility === "high") {
        k_e = 0.78;
    } else if (dam.erodibility === "low") {
        k_e = 3.3;
    }
    return 0.043 * k_e * dam.h_d**0.35 * dam.v_w**0.29 * dam.h_w**-0.86
}

var zh20_t = {
    name: "Zhong et al. (2020)",
    func: (dam: DamFailure) => 0,
    func_re: (dam: DamFailure) => 0,
    description: `Placeholder for Zhong et al. (2020) equation for time to failure.`,
    "mean": 0.1088,
    "stdev": 1.8251,
    "mean_re": 0.0232,
    "stdev_re": 0.3075
}

zh20_t.func = (dam: DamFailure) => {
    // homogenous
    let c0 = 0.56;
    let c1 = -0.85;
    let c2 = -0.32;
    let c3 = Math.exp(-0.2);
    if (dam.type == 'core-wall') {
        c0 = 1.52;
        c1 = -11.36;
        c2 = -0.43;
        c3 = Math.exp(-1.57);
    }
    return (dam.v_w**(1/3) / dam.h_w)**c0 * (dam.h_w / dam.h_b)**c1 * dam.h_d**c2 * c3;
}

zh20_t.func_re = (dam: DamFailure) => {
    // homogenous
    let c0 = 0.025;
    let c1 = 0.36;
    let c2 = -0.22;
    let c3 = 0.40;
    let c4 = 0.40;
    if (dam.type == 'core-wall') {
        c0 = .0086;
        c1 = .45;
        c2 = -0.11;
        c3 = -1.24;
        c4 = 0.47;
    }
   return c0 * dam.v_w**c1 * dam.h_w**c2 * dam.h_b**c3 * dam.h_d**c4;
}

const t_eqn_map = new Map();
t_eqn_map.set("Fr95", fr95_t);
t_eqn_map.set("Fr08", fr08_t);
t_eqn_map.set("Xu09", xu09_t);
t_eqn_map.set("Zh20", zh20_t);
