import React from "react";

const OnamaBrand = (props) => {
    const brandContent = props.partner.o_nama_partner;
  return (
    <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
      {brandContent.map((item, i) => (
        <div className="col-6 col-md-3 col-lg-2" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="100"
          >
            {/* <!--Partner Box--> */}
            <div
              className="ptf-partner-box"
              style={{
                "--ptf-hover-background": item.hoverBg,
                "--ptf-image-height": item.imgHeight,
              }}
            >
              <div className="ptf-partner-box__image">
                <img
                  src={item.image}
                  alt="Zeplin"
                  loading="lazy"
                />
              </div>
              <h6 className="ptf-partner-box__title">{item.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnamaBrand;
