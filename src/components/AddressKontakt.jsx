import React from "react";

const AddressKontakt = (props) => {
    console.log(props.adresa)
  return (
    <>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">{props.adresa.kontakt_informacije_group.title}</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <p className="fz-20 lh-1p5 has-black-color">
            {props.adresa.kontakt_informacije_group.adresa}
        </p>
      </div>

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>

      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">{props.adresa.kontakt_informacije_group.email_title}</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <p className="fz-20 lh-1p5 has-black-color">
            {props.adresa.kontakt_informacije_group.email.map((item, i) => (
                <a href={`mailto:${item.email}`} key={i}>
                    {item.email}
                    <br />
                </a>
          ))}
        </p>
      </div>

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>

      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="200">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">{props.adresa.kontakt_informacije_group.telefon_title}</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <p className="fz-20 lh-1p5 has-black-color">
            {props.adresa.kontakt_informacije_group.broj_telefona.map((item, i) => (
                <a href={`tel:${item.broj}`} key={i}>
                    {item.broj}
                    <br />
                </a>
            ))}
        </p>
      </div>

      {/* <!--Spacer--> */}
      <div
        className="ptf-spacer"
        style={{ "--ptf-lg": "4.375rem", "--ptf-md": "2.1875rem" }}
      ></div>
    </>
  );
};

export default AddressKontakt;
