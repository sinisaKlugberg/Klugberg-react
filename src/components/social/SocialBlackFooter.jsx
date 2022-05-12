import React from "react";

const SocialBlackFooter = (props) => {
  return (
    <>
      {props.mreze.acf.mreze.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target="_blank"
          rel="noopener noreferrer"
          href={val.url}
          key={i}
        >
          <i className={val.icon_class}></i>
        </a>
      ))}
    </>
  );
};

export default SocialBlackFooter;
