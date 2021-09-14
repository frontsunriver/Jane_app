import React from "react";

import AppBar from "./AppBar";
import Introduction from "./Introduction";
import Demos from "./Demos";
import Integrations from "./Integrations";
import Features from "./Features";
import FAQ from "./FAQ";
import JoinUs from "./JoinUs";
import SubAppBar from "./SubAppBar";
import MainHeader from './MainHeader';
import VideoBarComponent from './VideoBar';
import UnderVideoBarComponent from './UnderVideoBar';
import SplitBarComponent from "./SplitBar";
import Bar1Component from "./Bar1";
import Bar2Component from "./Bar2";
import Bar3Component from "./Bar3";
import Bar4Component from "./Bar4";
import Bar5Component from "./Bar5";

function Presentation() {
  return (
    <React.Fragment>
      <AppBar />
      <SubAppBar />
      <MainHeader />
      <VideoBarComponent />
      <UnderVideoBarComponent />
      <SplitBarComponent />
      <Bar1Component />
      <Bar2Component />
      <Bar3Component />
      <Bar4Component />
      <Bar5Component />
      {/* <Introduction />
      <Demos />
      <Integrations />
      <Features />
      <FAQ />
      <JoinUs /> */}
    </React.Fragment>
  );
}

export default Presentation;
