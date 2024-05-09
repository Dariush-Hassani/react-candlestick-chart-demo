const Navbar = () => {
  return (
    <div className={"nav-box"}>
      <div>Demo for react-candlestick-chart (2000 candles)</div>
      <div className={"nav-container"}>
        <a
          href={
            "https://github.com/Dariush-Hassani/react-candlestick-chart-demo"
          }
          target="_blank"
        >
          <div>
            <img alt="git" src="/gitHubLogo.svg" />
            &nbsp;source-code (demo)
          </div>
        </a>
        <div> | </div>
        <a
          href={"https://www.npmjs.com/package/react-candlestick-chart"}
          style={{ width: "120px" }}
          target="_blank"
        >
          <div>
            <img alt="npm" src="/npm.svg" />
            &nbsp;npm package
          </div>
        </a>
        <div> | </div>
        <a
          href={"https://github.com/Dariush-Hassani/react-candlestick-chart"}
          target="_blank"
        >
          <div>
            <img alt="git" src="/gitHubLogo.svg" />
            &nbsp;github repository
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
