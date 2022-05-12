import React from "react";

const SocialKontakt = (props) => {
  return (
    <div className="ptf-offcanvas-menu__socials">
      {/* <!--Social Icon--> */}
      {props.mreze.kontakt_drustvene_mreze_new.map((icon, i) => (
        <a
          className={`ptf-social-icon ptf-social-icon--style-3  ${icon.iconclass}`}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <i className={icon.iconname}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialKontakt;
