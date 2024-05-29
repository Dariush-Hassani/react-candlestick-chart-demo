import React from "react";

const SideBar: React.FC<{
  chartWidth: number;
  chartHeight: number;
}> = ({ chartWidth, chartHeight }) => {
  return (
    <div className={"side-container"}>
      <div className={"prop-container"}>
        <div className={"prop-title"}>width - required</div>
        <div className={"prop-value"}>
          <input value={Math.round(chartWidth)} />
          &nbsp;px
        </div>
      </div>
      <div className={"prop-container"}>
        <div className={"prop-title"}>height - required</div>
        <div className={"prop-value"}>
          <input value={Math.round(chartHeight)} />
          &nbsp;px
        </div>
      </div>
    </div>
  );
};

export default SideBar;
