import Navbar from "./Navbar";
import Candlestick from "./Candlestick";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const App = () => {
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
    <>
      {width < 970 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            padding: "20px",
            textAlign: "center",
          }}
        >
          This demo only is available for desktops. Mobile version will be
          available in a few days ...
        </div>
      ) : (
        <>
          <Navbar />
          <Candlestick width={width} height={height} />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
