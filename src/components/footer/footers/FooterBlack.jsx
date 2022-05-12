import React from "react";
import FooterList from "../../list/FooterList";

const FooterBlack = (props) => {
    return(
        <>
        <div className="row">
        <div className="col-12 col-lg-7">
          {/* <!--Animated Block--> */}
          <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
            <div className="ptf-widget ptf-widget-contacts has-white-color">
              <ul>
                <li>
                  <span>{props.black.acf.adress_title}</span>
                  <p>
                    {props.black.acf.address}
                  </p>
                </li>
                <li>
                  <span>{props.black.acf.phone_title}</span>
                  <a href={`tel:${props.black.acf.phone}`}>{props.black.acf.phone}</a>
                </li>
                <li>
                  <span>{props.black.acf.email_title}</span>
                  <a href={`mailto:${props.black.acf.email}`}>
                    {props.black.acf.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End .col */}
  
        <div className="col-12 col-lg-5">
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="100"
          >
            <div className="ptf-widget ptf-widget-links has-white-color">
              <FooterList lista={props.black}/>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default FooterBlack;