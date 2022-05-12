import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";

const HeroAgency = (props) => {
  const [isOpen, setOpen] = useState(false);

  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    fade: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // adaptiveHeight: true,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="ptf-showcase-image">
          <div className="ptf-showcase-slide" style={{backgroundImage: `url(${ process.env.PUBLIC_URL + props.hero.hero_slide_one_image})`}}>
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                {props.hero.hero_title}
              </h1>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>

              <p
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                {props.hero.hero_text}
              </p>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>

              <div className="d-flex justify-content-center">
                {/* <!--Button--> */}
                <a className="ptf-btn ptf-btn--primary" href="" target="_self">
                  Get Started
                </a>
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--secondary"
                  to="/service"
                  style={{ marginLeft: "2rem" }}
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}

        <div className="ptf-showcase-image">
          <div className="ptf-showcase-slide" style={{backgroundImage: `url(${ process.env.PUBLIC_URL + props.hero.hero_slide_two_image})`}}>
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                {props.hero.hero_slide_two_title}
              </h1>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>
              <p
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                {props.hero.hero_slide_two_text}
              </p>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>
              <div className="d-flex justify-content-center">
                {/* <!--Button--> */}
                <a className="ptf-btn ptf-btn--primary" href="" target="_self">
                  Get Started
                </a>
                {/* <!--Button--> */}
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}

        <div className="ptf-showcase-image">
          <div className="ptf-showcase-slide" style={{backgroundImage: `url(${ process.env.PUBLIC_URL + props.hero.hero_slide_three_image})`}}>
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color">
                {props.hero.hero_slide_three_title}
              </h1>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.125rem" }}
              ></div>
              <p
                className="fz-24 has-white-color"
                style={{ maxWidth: "34.375rem" }}
              >
                {props.hero.hero_slide_three_text}
              </p>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>
              <div className="d-flex">
                {/* <!--Button--> */}
                <a className="ptf-btn ptf-btn--primary" href="" target="_self">
                  Get Started
                </a>
                {/* <!--Video Button--> */}
                <div
                  className="ptf-video-button"
                  onClick={() => setOpen(true)}
                  style={{
                    "--ptf-title-color": "var(--ptf-color-white)",
                    marginLeft: "2rem",
                  }}
                >
                  <a href="#" rel="nofollow">
                    <i className="lnil lnil-play"></i>
                  </a>
                  <div className="ptf-video-button__title">
                    {props.hero.video_text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}
      </Slider>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={props.hero.videoid_slider}
        onClose={() => setOpen(false)}
      />
      {/* End Youtube Modal video */}
    </>
  );
};

export default HeroAgency;
