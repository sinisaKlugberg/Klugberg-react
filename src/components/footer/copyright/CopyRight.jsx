import React from "react";
import SocialWhiteFooter from "../../social/SocialWhiteFooter";

const CopyRight = (props) => {
  return (
    <>
    {props.copy.map((item, i) => (
    <div className="row align-items-center justify-content-center" key={i}>
      <div className="col-12 col-md">
        <a href="index.html">
          <img src={item.acf.logo} alt={item.acf.usluge_title} loading="lazy" />
        </a>
      </div>
      <div className="col-12 col-md text-md-center text-lg-center">
        <p className="ptf-footer-copyright has-black-color">
          {item.acf.prava}{" "}{new Date().getFullYear()}{" "}
        </p>
      </div>
      <div className="col-12 col-lg text-md-center text-lg-end">
        <div className="ptf-footer-socials has-black-color ">
          <SocialWhiteFooter mreze={item} />
        </div>
      </div>
    </div>
    ))}
    </>
  );
};

export default CopyRight;
