import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../components/header/HeaderDefault";

//import Social from "../../components/social/Social";
import SocialKontakt from "../../components/social/SocialKontakt";
//import ContactForm from "../../components/ContactForm";
import ContactCustomForm from "../../components/ContactCustomForm";
//import Address from "../../components/Address";
import AddressKontakt from "../../components/AddressKontakt";
import FooterGlobal from "../../components/footer/FooterGlobal";

const Contact = (props) => {
  console.log(props.kontakt)
  return (
    <div>
      <Helmet>
        <title>Moonex - Contact</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--contact">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>

            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-10">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">
                      {props.kontakt.kontakt_title_new}
                    </h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3rem", "--ptf-md": "2.5rem" }}
                    ></div>

                    <SocialKontakt mreze={props.kontakt}/>
                    {/* <!--Social Icon--> */}
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* Contact top portion */}

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
          </section>
          {/* End section contact header */}

          <section>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-4">
                  <AddressKontakt adresa={props.kontakt} />
                </div>
                {/* End .col */}

                <div className="col-lg-8">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                      {props.kontakt.form_subtitle}
                    </h5>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3.125rem" }}
                    ></div>
                    <ContactCustomForm />
                    {/* End ContactForm */}
                  </div>
                </div>
                {/* End .col */}
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

      {/*=============================================
        Start Footer
        ============================================== */}
      <FooterGlobal />
    </div>
  );
};

export default Contact;
