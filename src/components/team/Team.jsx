import React from "react";

const teamContent = [
  {
    delayAnimation: "0",
    img: "team-1",
    title: "Stephan Bowie",
    designation: "CEO Founder",
  },
  {
    delayAnimation: "100",
    img: "team-2",
    title: "Robert Downey Jr",
    designation: "CO Founder",
  },
  {
    delayAnimation: "200",
    img: "team-3",
    title: "Laura Lorwence",
    designation: "Project Management",
  },
  {
    delayAnimation: "300",
    img: "team-4",
    title: "David De Berg",
    designation: "Lead of Technical",
  },
  {
    delayAnimation: "0",
    img: "team-5",
    title: "Elena Stephan",
    designation: "SEO/Marketing",
  },
  {
    delayAnimation: "100",
    img: "team-6",
    title: "Andy Robertson",
    designation: "Content Writer",
  },
  {
    delayAnimation: "200",
    img: "new-member",
    title: "",
    designation: "",
  },
];

const Team = (props) => {
  return (
    <>
      {props.tm.team.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={100}
          key={i}
        >
          {/* <!--Team Member--> */}
          <div className="ptf-team-member ptf-team-member--has-effect">
            <div className="ptf-team-member__avatar">
              <div className="shadow-effect"></div>
              <a href="#">
                {" "}
                <img
                  src={val.image.url}
                  alt={val.ime_i_prezime}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="ptf-team-member__content">
              <h6 className="ptf-team-member__name">
                <a href="#">{val.ime_i_prezime}</a>
              </h6>
              <p className="ptf-team-member__function">{val.pozicija}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;
