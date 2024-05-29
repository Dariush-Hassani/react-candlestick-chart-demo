import Navbar from "./Navbar";
import Candlestick from "./Candlestick";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import SideBar from "./SideBar";

const App = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [isResponsive, setIsResponsive] = useState<number>(0);

  //chart props
  const [chartWidth, setChartWidth] = useState<number>(10);
  const [chartHeight, setChartHeight] = useState<number>(10);
  const [decimal, setDecimal] = useState<number>(5);
  const [scrollZoom, setScrollZoom] = useState<{
    enable: boolean;
    max: number;
  }>({ enable: true, max: 100 });

  const resizeHandler = () => {
    setWidth(
      window.visualViewport
        ? (window.visualViewport?.width as number)
        : window.innerWidth,
    );
    setHeight(
      window.visualViewport
        ? (window.visualViewport?.height as number)
        : window.innerHeight,
    );
    setIsResponsive(
      window.visualViewport
        ? window.visualViewport?.width < 970
          ? 1
          : 2
        : window.innerWidth < 970
          ? 1
          : 2,
    );
  };
  useEffect(() => {
    resizeHandler();

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    setChartWidth(width - 300);
  }, [width]);

  useEffect(() => {
    setChartHeight(isResponsive === 1 ? height - 70 : height - 80);
  }, [height, isResponsive]);

  return (
    <>
      {isResponsive === 1 ? (
        <MobileNavbar />
      ) : isResponsive === 2 ? (
        <Navbar />
      ) : (
        <></>
      )}
      <div className={"chart-side-container"}>
        <SideBar chartWidth={chartWidth} chartHeight={chartHeight} />
        <Candlestick width={chartWidth} height={chartHeight} />
      </div>
      <Footer />
    </>
  );
};

export default App;
