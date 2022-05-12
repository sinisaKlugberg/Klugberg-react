import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const HomePortfolio = (props) => {
  return (
    <>
      <div className=" grid-item ">
        {/* <!--Portfolio Item--> */}
        {props.port.portfolio.map((val, i) => (
          <article
            className="ptf-work ptf-work--style-4"
            data-tip
            data-for={val.image.name}
            key={i}
          >
            <Link className="ptf-work__link" to={`/${val.naziv.post_name}`}></Link>
            <ReactTooltip
              id={val.image.name}
              place="right"
              type="dark"
              effect="float"
            >
              <div className="poup-link">
                <img
                  src={val.image.url}
                  alt="popup"
                />
              </div>
            </ReactTooltip>
            <div className="ptf-work__category">{val.kategorija}</div>
            <h4 className="ptf-work__title">{val.naziv.post_title}</h4>
            <div className="ptf-work__date">{val.godina_izrade}</div>
          </article>
        ))}
      </div>
      {/* End .grid-item */}
      <div></div>
      {/* End .grid-item */}
    </>
  );
};

export default HomePortfolio;
