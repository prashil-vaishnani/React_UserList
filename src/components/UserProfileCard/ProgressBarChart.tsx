import React from "react";
// import { ProgressBar } from "react-bootstrap";
import "./ProgressBarChart.css";

const ProgressBarChart = () => {
  function bar() {
    return Math.floor(Math.random() * 5000);
  }
  const process: number = bar();
  return (
    <React.Fragment>
      <label className="cardUserPlanUsage">Plan Uses</label>
      {/* <ProgressBar
        variant="warning"
        className="bar_style"
        now={Math.round((process / 5000) * 100)}
      /> */}
      <progress
        value={Math.round((process / 5000) * 100)}
        max="100"
        color="warning"
        className="bar_style"
      />
      <div className="division">
        <div className="child">
          <div className="status">{process}</div>
          <div className="font_size">clicks reviewed</div>
        </div>
        <div className="child">
          <div className="status">5000</div>
          <div className="font_size">monthly clicks</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProgressBarChart;
