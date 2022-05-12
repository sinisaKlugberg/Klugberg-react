import React from "react";

const SkillsWebAndMobile = (props) => {

  return (
    <>
      {props.skill.skils_repeater.map((item, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={0}
          key={i}
        >
          {/* <!--Skill Box--> */}
          <div className="ptf-skill-box">
            <div className="ptf-skill-box__content">
              <div className="ptf-skill-box__image">
                <img
                  src={`${item.image}`}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <h6 className="ptf-skill-box__title">{item.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillsWebAndMobile;
