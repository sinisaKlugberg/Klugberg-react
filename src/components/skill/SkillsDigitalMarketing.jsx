import React from "react";

const SkillsDigitalMarketing = (props) => {

  const skillContent = [
    { logo: props.skill.image_skils_one, title: props.skill.image_skils_one_title, delayAnimation: "0" },
    { logo: props.skill.image_skils_two, title: props.skill.image_skils_two_title, delayAnimation: "100" },
    { logo: props.skill.image_skils_three, title: props.skill.image_skils_three_title, delayAnimation: "200" },
    { logo: props.skill.image_skils_four, title: props.skill.image_skils_four_title, delayAnimation: "300" },
  ];
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

export default SkillsDigitalMarketing;
