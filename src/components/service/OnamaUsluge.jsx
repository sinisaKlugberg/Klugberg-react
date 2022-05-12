import React from "react";
import { Link } from "react-router-dom"

const OnamaUsluge = (props) => {
    const serviceContent = props.usluge.onama_usluge;
    return(
      <>
      {serviceContent.map((item, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="0"
          key={i}
        >
          <div className="ptf-service-box">
            <Link
              to={item.page_title.post_name}
              className="ptf-service-box__link"
            ></Link>
            <div className="ptf-service-box__icon">
              <img src={item.image} alt={item.page_title.post_title}/>
            </div>
            <h5 className="ptf-service-box__title">
              {item.page_title.post_title}
            </h5>
            <div className="ptf-service-box__content">
              <p dangerouslySetInnerHTML={{__html: item.page_title.post_content}}></p>
            </div>
            <div className="ptf-service-box__arrow">
              <i className="lnil lnil-chevron-right"></i>
            </div>
          </div>
        </div>
        ))}
      </>
    )
}
export default OnamaUsluge;