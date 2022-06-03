import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

//import FooterBlackHome from "../../components/footer/footers/FooterBlackHome";
import FooterGlobalBlack from "../../components/footer/FooterGlobalBalck";

import CounterHome from "../../components/counter/CouterHome";
//import CopyRightTwo from "../../components/footer/copyright/CopyRightTwo";

import HeaderAgency from "../../components/header/HeaderAgency";
import HeroAgency from "../../components/hero/HeroAgency";
import HomePortfolio from "../../components/portfolio/HomePortfolio";

import Team from "../../components/team/Team";
import TestimonialTwo from "../../components/testimonial/TestimonialTwo";

const HomeAgency = (props) => {
  //console.log(props.homeAgency);

  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-agency">
      <Helmet>
        <title>Klugberg</title>
      </Helmet>
      {/* End Page SEO Content */}

      <div className="ptf-site-wrapper__inner">
        <HeaderAgency />
        {/* End Header Agency */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-agency">
            {/*=============================================
          Start Our Hero Section howcase 3
          ============================================== */}
            <div className="ptf-showcase-3 swiper-container">
              <div className="swiper-wrapper">
                <HeroAgency hero={props.homeAgency}/>
              </div>
            </div>

            {/*=============================================
          Start Call to Counter section
          ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.75rem" }}
              ></div>
              <div className="container">
                
                <div
                  className="row align-items-center"
                  style={{ "--bs-gutter-y": "2rem" }}
                >
                  
                  <div className="col-12 col-xl-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                      >
                      {/* <!--Phone Block--> */}
                      <div className="ptf-phone-block">
                        <div className="ptf-phone-block__icon">
                          <i className="lnil lnil-phone"></i>
                        </div>
                        <div className="ptf-phone-block__caption">
                          {props.homeAgency.kontakt_naslovna_group.subtitle}
                        </div>
                        <div className="ptf-phone-block__phone">
                          <a href={`tel:${props.homeAgency.kontakt_naslovna_group.telefon}`}>{props.homeAgency.kontakt_naslovna_group.telefon}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End .col */}
                  {/*<CounterTwo />*/}
                  <CounterHome count={props.homeAgency}/>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.75rem" }}
              ></div>
            </section>

            <section>
              <div className="container">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>
            {/* End .ptf-devider */}

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-7">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading has-accent-1">
                        {props.homeAgency.kontakt_naslovna_group.title}
                      </h2>
                    </div>
                  </div>
                  <div className="col-xl-5 d-none d-xl-block">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <div className="has-black-color fz-90 lh-1 text-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          style={{ height: "1em" }}
                          viewBox="0 0 17 17"
                        >
                          <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>
            </section>
            {/* End  Advertising Big Title */}

            <section className="ptf-custom--3993 jarallax" style={{backgroundImage: `url(${ process.env.PUBLIC_URL + props.homeAgency.o_nama_background_image})`}}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 offset-lg-7">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "8.125rem", "--ptf-lg": "0" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h6 className="fz-16 has-accent-1 text-uppercase">
                        {props.homeAgency.o_nama_title_naslovna}
                      </h6>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.875rem" }}
                      ></div>
                      <h3 style={{ maxWidth: "30rem" }}>
                        {props.homeAgency.o_nama_subtitle_naslovna}
                      </h3>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>
                        <ONamaText paragraf={props.homeAgency}/>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "8.125rem", "--ptf-lg": "0" }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
            {/* End  Advertising Banner */}

            {/*=============================================
          Start Service section
          ============================================== */}

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1">{props.homeAgency.what_we_do_title}</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
                ></div>
                <div
                  className="row"
                  style={{
                    "--bs-gutter-x": "10.625rem",
                    "--bs-gutter-y": " 5.3125rem",
                  }}
                >
                  {props.homeAgency.what_we_do.map((item, i) => (
                    <div className="col-12 col-md-6" key={i}>
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h2>{item.title}</h2>
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1.5625rem" }}
                        ></div>
                        {/* <!--Divider--> */}
                        <div className="ptf-divider"></div>
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "3.125rem" }}
                        ></div>
                        {/* <!--Services List--> */}
                        <ul
                          className="ptf-services-list ptf-services-list--style-5"
                          style={{ "--ptf-font-family": "var(--ptf-primary-font)" }}
                        >
                          <li>
                            <h4>{item.subtitle}</h4>
                          </li>
                          <li>
                            <Text paragraf={item.text} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
          Start Latest Works section
          ============================================== */}
            <section>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1 d-inline-flex">
                    {props.homeAgency.portfolio_title}
                  </h2>
                  <Link 
                    to="/works-carousel"
                    className="ptf-link-with-arrow fz-18 text-uppercase d-none d-lg-inline-flex"
                    style={{ marginLeft: "5.625rem" }}
                  >
                    All Projects{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ height: "1em" }}
                      viewBox="0 0 17 17"
                    >
                      <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                    </svg>
                  </Link>
                </div>
                {/* End .ptf-animated-block */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div className="ptf-isotope-grid">
                    <HomePortfolio port={props.homeAgency}/>
                  </div>
                  {/* End .ptf-isotope-grid */}
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
          Start Our Crew/Team section
          ============================================== */}
            <section className="ptf-custom--1569" style={{backgroundImage: `url(${ process.env.PUBLIC_URL + props.homeAgency.team_background_logo})`}}>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1">{props.homeAgency.team_title}</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
              </div>
              <div className="container">
                <div className="ptf-team-member-grid ptf-team-member-grid--4-columns">
                  <Team tm={props.homeAgency}/>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
            Start Pricing section
            ============================================== */}
            {/*<section>
              {/* <!--Spacer--> *//*}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> *//*}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1">
                    Pricing & Plan
                  </h2>
                </div>
                {/* <!--Spacer--> *//*}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "3.75rem", "--ptf-md": "1.875rem" }}
                ></div>
              </div>
              <div className="container">
                <div className="row" style={{ "--bs-gutter-x": "2rem" }}>
                  <Pricing />
                </div>
              </div>
              {/* <!--Spacer--> *//*}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
            </section>}

            <section>
              <div className="container">
                {/* <!--Divider--> *//*}
                <div className="ptf-divider"></div>
              </div>
            </section>

            {/*=============================================
          Start Testimonial section
          ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-8">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading has-accent-1">
                        {props.homeAgency.testimonial_title}
                      </h2>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": " 4.375rem" }}
                ></div>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Content Slider--> */}
                  <div className="ptf-content-slider swiper-container ">
                    <div className="swiper-wrapper testimonial-100-spacer">
                      <TestimonialTwo tes={props.homeAgency}/>
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

            {/*=============================================
          Start Footer section
          ============================================== */}
            <FooterGlobalBlack />
          </div>
          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}
    </div>
  );
};

export default HomeAgency;

function ONamaText(props) {
  return(
      <div>
          {props.paragraf.o_nama_text_naslovna.split("</p>").map((place, index) => <p className="fz-18" style={{ maxWidth: "30rem" }} key={index} dangerouslySetInnerHTML={{__html: place}}></p>)}
      </div>
  )
}

function Text(props) {
  return(
      <div>
          {props.paragraf.split("</p>").map((place, index) => <p key={index} dangerouslySetInnerHTML={{__html: place}}></p>)}
      </div>
  )
}