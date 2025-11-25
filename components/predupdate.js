import { DamFailure } from "./empiricalEqn.js";

let hwForm, vwForm, hdForm, hbForm, wForm;
let recalForm, erodForm, modeForm, typeForm;
let qEqnSelect, qPredResult, qUpperResult;
let warningOutput, qDesc;
let tEqnSelect, tPredResult, tLowerResult, tDesc;
let peakFlowPlot;

function get_peak_flow(dam) {
  let eqn = qEqnSelect.value;
  try {
    let func = dam.re ? q_eqn_map.get(eqn).func_re : q_eqn_map.get(eqn).func;
    return func(dam);
  } catch (e) {
    if (e instanceof TypeError) {
      console.warn("Equation function not implemented for: " + eqn);
    } else {
      console.warn(e);
    }
    return 0;
  }
}

function get_time_to_failure(dam) {
  let eqn = tEqnSelect.value;
  try {
    let func = dam.re ? t_eqn_map.get(eqn).func_re : t_eqn_map.get(eqn).func;
    return func(dam);
  } catch (e) {
    if (e instanceof TypeError) {
      console.warn("Equation function not implemented for: " + eqn);
    } else {
      console.warn(e);
    }
    return 0;
  }
}

// Determine input values and calculate the peak flow/time to failure
function update_pred_result() {
  let hd = hdForm.value;
  let hb = hbForm.value;
  let w = wForm.value;
  let use_recal = recalForm.checked;
  if (!hd) {
    hd = hwForm.value;
  }
  if (!hb) {
    hb = hwForm.value;
  }
  if (!w) {
    w = hwForm.value * 2.6; // assumption based on average 2.6:1 side slopes
  }
  let inputted_dam = {
    re: use_recal,
    H_w: parseFloat(hwForm.value),
    V_w: parseFloat(vwForm.value),
    H_b: hb,
    H_d: hd,
    W: w,
    erodibility: erodForm.value,
    mode: modeForm.value,
    type: typeForm.value,
  };
  let q = get_peak_flow(inputted_dam);
  if (q) {
    qPredResult.innerText = q.toFixed(0);
    warningOutput.innerText = "";
  } else {
    qPredResult.innerText = "-";
    warningOutput.innerHTML =
      "Warning: Peak flow prediction is not available. Ensure H<sub>w</sub> and V<sub>w</sub> have valid values.";
  }

  // Get the upper bound based on the selected equation's performance
  var q_eqn = qEqnSelect.value;
  if (q_eqn_map.has(q_eqn)) {
    var mean;
    var stdev;
    if (use_recal) {
      mean = q_eqn_map.get(q_eqn).mean_re;
      stdev = q_eqn_map.get(q_eqn).stdev_re;
    } else {
      mean = q_eqn_map.get(q_eqn).mean;
      stdev = q_eqn_map.get(q_eqn).stdev;
    }
    // Note: the mean is negative because these means are pred/obs and we want obs/pred
    let upper_bound = q * 10 ** (-1 * mean + 1.645 * stdev); // one-sided 95% confidence interval
    if (upper_bound) {
      qUpperResult.innerText = upper_bound.toFixed(0);
    } else {
      qUpperResult.innerText = "-";
    }
  } else {
    qUpperResult.innerText = "-";
  }
  // Update the time to failure prediction
  let tf = get_time_to_failure(inputted_dam);
  let hours = Math.floor(tf);
  let minutes = Math.floor((tf - hours) * 60);
  let seconds = Math.floor(((tf - hours) * 60 - minutes) * 60);
  if (tf) {
    tPredResult.innerText = hours + "h " + minutes + "m " + seconds + "s";
    warningOutput.innerText = "";
  } else {
    tPredResult.innerText = "-";
    warningOutput.innerHTML =
      "Warning: Time to failure prediction is not available. Ensure H<sub>w</sub> and V<sub>w</sub> have valid values.";
  }
  // Get the upper bound based on the selected equation's performance
  var t_eqn = tEqnSelect.value;
  if (t_eqn_map.has(t_eqn)) {
    var mean;
    var stdev;
    if (use_recal) {
      mean = t_eqn_map.get(t_eqn).mean_re;
      stdev = t_eqn_map.get(t_eqn).stdev_re;
    } else {
      mean = t_eqn_map.get(t_eqn).mean;
      stdev = t_eqn_map.get(t_eqn).stdev;
    }
    // Note: the mean is negative because these means are pred/obs and we want obs/pred
    var lower_bound = tf * 10 ** (-1 * mean - 1.645 * stdev); // one-sided 95% confidence interval
    hours = Math.floor(lower_bound);
    minutes = Math.floor((lower_bound - hours) * 60);
    seconds = Math.floor(((lower_bound - hours) * 60 - minutes) * 60);
    if (lower_bound) {
      tLowerResult.innerText = hours + "h " + minutes + "m " + seconds + "s";
    } else {
      tLowerResult.innerText = "-";
    }
  } else {
    tLowerResult.innerText = "-";
  }
}

// When the equation selection changes, update the description
function update_eqn_desc() {
  let q_eqn = qEqnSelect.value;
  if (q_eqn_map.has(q_eqn)) {
    qDesc.innerText = q_eqn_map.get(q_eqn).description;
  } else {
    qDesc.innerText = "No description available.";
  }
  let t_eqn = tEqnSelect.value;
  if (t_eqn_map.has(t_eqn)) {
    tDesc.innerText = t_eqn_map.get(t_eqn).description;
  } else {
    tDesc.innerText = "No description available.";
  }
}

function draw_qp_chart() {
  let hw = parseFloat(hwForm.value);
  let vw = parseFloat(vwForm.value);
  let hb = parseFloat(hbForm.value);
  let w = parseFloat(wForm.value);
  let minV = Infinity;
  if (!hb) {
    hb = hw;
  }
  let hd = parseFloat(hdForm.value);
  if (!hd) {
    hd = hw;
  }
  if (!w) {
    w = hwForm.value * 2.6; // assumption based on average 2.6:1 side slopes
  }
  let qEqn = qEqnSelect.value;
  let qFunc = recalForm.checked
    ? q_eqn_map.get(qEqn).func_re
    : q_eqn_map.get(qEqn).func;
  let getQ = (v) =>
    qFunc({
      re: recalForm.checked,
      H_w: hw,
      V_w: v,
      H_b: hb,
      H_d: hd,
      W: w,
      erodibility: erodForm.value,
      mode: modeForm.value,
      type: typeForm.value,
    });

  let data = [];

  for (let i = 0.1; i < 10; i *= 1.8) {
    let v = vw * i;
    let q = getQ(v);
    data.push({ x: v, y: q });

    minV = v < minV ? v : minV;
  }

  let estimate_data = [
    { x: vw, y: 0 },
    { x: vw, y: getQ(vw) },
    { x: minV, y: getQ(vw) },
  ];

  new Chart(peakFlowPlot.getContext("2d"), {
    type: "scatter",
    data: {
      datasets: [
        {
          data: data,
          showLine: true,
        },
        {
          data: estimate_data,
          showLine: true,
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: "logarithmic",
          title: {
            text: "Volume (m³)",
            display: true,
            font: { size: 20 },
          },
        },
        y: {
          title: {
            text: "Peak Flow (m³/s)",
            display: true,
            font: { size: 20 },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        point: { radius: 0 },
        line: { borderWidth: 2 },
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  hwForm = document.getElementById("H-w");
  vwForm = document.getElementById("V-w");
  hdForm = document.getElementById("H-d");
  hbForm = document.getElementById("H-b");
  wForm = document.getElementById("width");
  recalForm = document.getElementById("use-recal");
  erodForm = document.getElementById("erodibility");
  modeForm = document.getElementById("failure-mode");
  typeForm = document.getElementById("dam-type");

  qEqnSelect = document.getElementById("q-eqn-select");
  qPredResult = document.getElementById("q-pred-result");
  qUpperResult = document.getElementById("q-upper-result");
  warningOutput = document.getElementById("warning-msg");
  qDesc = document.getElementById("q-eqn-desc");

  tEqnSelect = document.getElementById("t-eqn-select");
  tPredResult = document.getElementById("t-pred-result");
  tLowerResult = document.getElementById("t-lower-result");
  tDesc = document.getElementById("t-eqn-desc");

  peakFlowPlot = document.getElementById("peak-flow-plot");
  // Set the initial value of the prediction result
  draw_qp_chart();
  update_pred_result();
  update_eqn_desc();
  // Add event listeners to input fields
  hwForm?.addEventListener("input", update_pred_result);
  vwForm?.addEventListener("input", update_pred_result);
  hbForm?.addEventListener("input", update_pred_result);
  hdForm?.addEventListener("input", update_pred_result);
  wForm?.addEventListener("input", update_pred_result);
  erodForm?.addEventListener("input", update_pred_result);
  modeForm?.addEventListener("input", update_pred_result);
  typeForm?.addEventListener("input", update_pred_result);
  recalForm?.addEventListener("input", update_pred_result);
  qEqnSelect?.addEventListener("input", update_pred_result);
  tEqnSelect?.addEventListener("input", update_pred_result);

  // Update equation description as well
  qEqnSelect?.addEventListener("input", update_eqn_desc);
  tEqnSelect?.addEventListener("input", update_eqn_desc);
});
