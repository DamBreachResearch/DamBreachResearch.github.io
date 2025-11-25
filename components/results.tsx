export function ResultContainer() {
  return (
    <div className="result-container">
      <p>
        The estimated peak flow is{" "}
        <b>
          <span id="q-pred-result" />
        </b>{" "}
        m³/s.
      </p>
      <p>
        Based on this equation's performance in Yassin et al. (2025), there is
        95% confidence that the true peak flow is less than{" "}
        <b>
          <span id="q-upper-result" />
        </b>{" "}
        m³/s.
      </p>
      <p>
        The estimated time to failure is{" "}
        <b>
          <span id="t-pred-result" />
        </b>
        .
      </p>
      <p>
        Based on this equation's performance in Yassin et al. (2025), there is
        95% confidence that the true time to failure is larger than{" "}
        <b>
          <span id="t-lower-result" />
        </b>
        .
      </p>
    </div>
  );
}
