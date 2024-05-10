import React, { useEffect, useState } from "react";
import CandlestickChart from "react-candlestick-chart";
import data from "./data";

function Candlestick() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const resizeHandler = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    resizeHandler();

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <CandlestickChart
      data={data}
      id={"chart1"}
      width={width}
      height={height - 80}
      decimal={5}
      scrollZoom={{
        enable: true,
        max: 100,
      }}
      rangeSelector={{
        enable: true,
        height: 150,
        initialRange: { type: "month", value: 12 },
      }}
      responsiveBreakPoint={450}
    />
  );
}

export default Candlestick;
