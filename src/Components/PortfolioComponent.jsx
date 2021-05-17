import React from "react";
import GrilltoChillPresentation from "./GrilltoChillPresentation";
import SissPresentation from "./SissPresentation";
import Portfolio from "./Portfolio";
const PortfolioComponent = () => {
    return(
        <React.Fragment>
              <Portfolio />
              <GrilltoChillPresentation />
              <SissPresentation />
        </React.Fragment>
    );
}
export default PortfolioComponent;