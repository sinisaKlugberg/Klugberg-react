import React from "react";

const SocialWhiteFooter = (props) => {
  return (
    <>
      {props.mreze.acf.footer_social_media.map((val, i) => (
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

export default SocialWhiteFooter;
