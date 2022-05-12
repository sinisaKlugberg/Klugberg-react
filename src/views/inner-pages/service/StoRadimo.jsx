import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import ServiceSR from "../../../components/service/ServiceSR";
import ApproachSR from "../../../components/service/ApproachSR";
import ContactJarallax from "../../../components/jarallax/ContactJarallax";
//import CopyRight from "../../../components/footer/copyright/CopyRight";
//import Footer from "../../../components/footer/footers/Footer";
import FooterGlobal from "../../../components/footer/FooterGlobal";

const StoRadimo = (props) => {
  console.log(props.stoRadimo);
  return (
    <div>
      <Helmet>
        <title>Moonex - Services</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--services">
          {/*=============================================
        Service Section
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
                      {props.stoRadimo.sto_radimo_title}
                    </h2>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18" dangerouslySetInnerHTML={{__html: props.stoRadimo.sto_radimo_tekst.split("</p>")}}></p>
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
                  <ServiceSR svojstvo={props.stoRadimo} />
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
            Our Approach Section
        ============================================== */}
          <section
            className="has-accent-1-background"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "assets/img/root/service-bubble.png"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100% calc(100% + 120px)",
            }}
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container-xxl">
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                <h2 className="h1 large-heading">{props.stoRadimo.our_approach}</h2>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": " 3.75rem" }}
              ></div>
              <ApproachSR pristup={props.stoRadimo}/>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

          {/*=============================================
          Start Contact Section 
          ============================================== */}
          <section
            className="jarallax jarallax-img"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                props.stoRadimo.kontakt_group.background_image
              })`,
            }}
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": " 12.5rem", "--ptf-md": "6.25rem" }}
            ></div>
            <ContactJarallax kontakt={props.stoRadimo}/>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
        </div>
      </div>

      {/*=============================================
        Start Footer
        ============================================== */}
      <FooterGlobal />
    </div>
  );
};

export default StoRadimo;
