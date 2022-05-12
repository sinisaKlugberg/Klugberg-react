import React from "react";
import { Helmet } from "react-helmet";
//import Award from "../../../components/award/Award";
import OnamaAward from "../../../components/award/OnamaAward";
//import Brand from "../../../components/brand/Brand";
import OnamaBrand from "../../../components/brand/OnamaBrand";
//import Counter from "../../../components/counter/Counter";
//import OnamaCounter from "../../../components/counter/OnamaCounter";
//import CopyRight from "../../../components/footer/copyright/CopyRight";
//import Footer from "../../../components/footer/footers/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
//import ImageGrid from "../../../components/image-grid/ImageGrid";
import OnamaImageGrid from "../../../components/image-grid/OnamaImageGrid";
import OnamaUsluge from "../../../components/service/OnamaUsluge";
//import Testimonial from "../../../components/testimonial/Testimonial";
import OnamaTestimonial from "../../../components/testimonial/OnamaTestimonial";
import FooterGlobal from "../../../components/footer/FooterGlobal";

const AboutUs = (props) => {
  console.log(props.onama)
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--about-us">
      <Helmet>
        <title>Moonex - About Us</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--about-us">
            {/*=============================================
                Start About Us Hero Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">{props.onama.o_nama_title}</h1>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.8125rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-30 fw-bold text-uppercase has-3-color">
                        {props.onama.o_nama_subtitle}
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                    ></div>
                    <div className="row">
                      <div className="col-xl-8">
                        <div style={{ maxWidth: "29.6875rem" }}>
                          {/* <!--Animated Block--> */}
                          <div
                            className="ptf-animated-block"
                            data-aos="fade"
                            data-aos-delay="200"
                          >
                            {/* <!--Divider--> */}
                            <div className="ptf-divider"></div>
                            {/* <!--Spacer--> */}

                            <div
                              className="ptf-spacer"
                              style={{
                                "--ptf-xxl": "4.375rem",
                                "--ptf-md": "2.1875rem",
                              }}
                            ></div>
                              <Text paragraf={props.onama}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "5.625rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <div className="text-center">
                        {/* <!--Mask Image--> */}
                        <div className="ptf-mask-image">
                          <img
                            src={props.onama.o_nama_slika}
                            alt="layer"
                            loading="lazy"
                            className="lay2"
                            style={{
                              zIndex: "1",
                            }}
                            srcSet={props.onama.o_nama_slika}
                          />
                          <img
                            src={props.onama.o_nama_slika_bg}
                            alt="layer"
                            loading="lazy"
                            style={{ zIndex: "2" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            {/*=============================================
                Start Service Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-3">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading">
                        {props.onama.usluge_title}
                      </h2>
                      {/* <!--Spacer--> */}
                      {/*<div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem" }}
                      ></div>
                        <TextUsluga paragraf={props.onama}/>*/}
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-lg": "4.375rem",
                        "--ptf-md": "2.1875rem",
                      }}
                    ></div>
                  </div>
                  <div className="col-lg-8 offset-lg-1">
                    <OnamaUsluge usluge={props.onama}/>
                  </div>
                </div>
                {/* End .row */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                ></div>
                {/*<ImageGrid />*/}
                <OnamaImageGrid imgGrid={props.onama}/>
              </div>
              {/* End .container-xxl */}
            </section>
            {/* End service */}

            {/*=============================================
                Start Brand and Counterup Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading">{props.onama.o_nama_partner_title}</h2>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                    ></div>
                  </div>
                </div>
                {/* End .row */}
                {/*<Brand />*/}
                <OnamaBrand partner={props.onama}/>
                <div className="row">
                  <div className="col-12">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
                    ></div>
                    {/* <!--Divider--> */}
                    <div className="ptf-divider"></div>
                    {/* <!--Spacer--> */}
                    {/*<div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                      ></div>*/}
                  </div>
                </div>
                {/* End .row */}

                {/*<Counter />*/}
                {/*<OnamaCounter count={props.onama}/>*/}
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Jaralax Testimonial Section
              ============================================== */}
            <section
              className="jarallax jarallax-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  props.onama.testimonial_background_image
                })`,
              }}
            >
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-4">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <img
                        src="assets/img/root/quote.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "3.75rem" }}
                    ></div>
                  </div>
                  <div className="col-xl-8">
                    {/*<Testimonial />*/}
                    <OnamaTestimonial testemonail={props.onama}/>
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Award Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "11.875rem", "--ptf-md": "5.9375rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-4">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading">
                        {props.onama.nase_nagrade_title}
                      </h2>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-lg": "3.75rem" }}
                    ></div>
                  </div>
                  <div className="col-lg-8">
                    {/*<Award />*/}
                    <OnamaAward award={props.onama}/>
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          </div>
        </div>
        {/* End ptf-main */}

        {/* <!--Footer--> */}
        <FooterGlobal />
      </div>
    </div>
  );
};

export default AboutUs;

function Text(props) {
  return(
      <div>
          {props.paragraf.o_nama_text.split("</p>").map((place, index) => <p className="fz-24" key={index} dangerouslySetInnerHTML={{__html: place}}></p>)}
      </div>
  )
}

function TextUsluga(props) {
  return(
      <div>
          {props.paragraf.nase_usluge_text.split("</p>").map((place, index) => <p className="fz-18" key={index} dangerouslySetInnerHTML={{__html: place}}></p>)}
      </div>
  )
}