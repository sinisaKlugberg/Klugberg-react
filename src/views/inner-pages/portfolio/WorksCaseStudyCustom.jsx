import React from "react";

const WorksCaseStudyCustom = (props) => {
    console.log(props.case)
  return (
    <>
      {props.case.acf.podaci_projekta.map((item, i) => (
        <div className="col-xl-3" key={i}>
          {/* <!--Spacer--> */}
          <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
          {/* <!--Animated Block--> */}
            <div key={i}>
              <div
                className="ptf-animated-block mb-70"
                data-aos="fade"
                data-aos-delay={100}
              >
                <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                  {item.title}
                </h5>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.25rem" }}
                ></div>
                <p className="fz-20 lh-1p5 has-black-color">
                  {item.subtitle} <br />
                  {item.subtitle_two} <br />
                  {item.subtitle_three}
                </p>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{
                  "--ptf-xxl": " 4.375rem",
                  "--ptf-md": "2.1875rem",
                }}
              ></div>
            </div>
        </div>
      ))}
    </>
  );
};

export default WorksCaseStudyCustom;
