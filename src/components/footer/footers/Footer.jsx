import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
    {props.foot.map((val, i) => (
    <div className="row" key={i}>
      <div className="col-12 col-xl-6">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div
            className="ptf-footer-heading has-black-color"
            style={{ maxWidth: "37.5rem" }}
          >
            {val.acf.title}
          </div>
          {val.acf.subtitle.map((item, i) => (
          <div className="ptf-footer-heading has-black-color" key={i}>
            {item.front_text}
            <Link
              className="has-accent-1 text-decoration-underline"
              to={item.url.url}
            >
              {item.url.title}
            </Link>
          </div>
          ))}

          <p className="fz-24">{val.acf.lokacija}</p>
          <a className="fz-40 has-black-color" href={`mailto:${val.acf.email}`}>
            {val.acf.email}
          </a>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-black-color">
            <h4 className="ptf-widget-title">{val.acf.linkovi_title}</h4>
            <ul>
              {val.acf.linkovi_repea.map((val, i) => (
                <li key={i}>
                  <Link to={val.link.post_name}>{val.link.post_title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <h4 className="ptf-widget-title">{val.acf.usluge_title}</h4>
            <div className="ptf-widget ptf-widget-links has-black-color">
              <ul>
                {val.acf.usluge.map((item, i) => (
                  <li key={i}>
                    <Link to={item.page.post_name}>{item.page.post_title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    ))}
    </>
  );
};

export default Footer;
