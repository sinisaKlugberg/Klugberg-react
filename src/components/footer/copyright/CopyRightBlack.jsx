import React from "react";

import SocialBlackFooter from "../../social/SocialBlackFooter";

const CopyRightBlack = (props) => {
  return (
    <div className="row align-items-center">
      <div className="col-12 col-md-3">
        <a href="index.html">
          <img src={props.copy.acf.logo} alt="" loading="lazy" />
        </a>
      </div>
      {/* End .col */}

      <div className="col-12 col-md-5">
        <p className="ptf-footer-copyright has-3-color">
          {props.copy.acf.prava}{" "}{new Date().getFullYear()}
        </p>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        <div className="ptf-footer-socials has-white-color">
          <SocialBlackFooter mreze={props.copy}/>
          {/* <!--Social Icon--> */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyRightBlack;
