import React from "react";
import Slider from "react-slick";


const OnamaTestimonial = (props) => {
    //console.log(props.testemonail);
    const testimonialContent = props.testemonail.testimonial_content;
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings} className="arrow-none">
        {testimonialContent.map((val, i) => (
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="100"
            key={i}
          >
            <div
              className="ptf-testimonial ptf-testimonial--style-2"
              style={{
                "--ptf-text-align": "left",
                "--ptf-content-color": "var(--ptf-color-white)",
                "--ptf-author-color": "var(--ptf-color-white)",
                "--ptf-info-color": "var(--ptf-color-white)",
              }}
            >
              <div className="ptf-testimonial__content">
                <p>{val.deskripcija}</p>
              </div>
              <div className="ptf-testimonial__meta">
                <h6 className="ptf-testimonial__author">{val.ime}</h6>
                <div className="ptf-testimonial__info">{val.oznaka}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default OnamaTestimonial;
