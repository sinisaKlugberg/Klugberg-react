import React from "react";

const Approach2 = (props) => {

  return (
    <ul className="ptf-process-steps">
      {props.approach.pristup_repeater.map((val, i) => (
        <li
          className="ptf-process-item"
          data-aos="fade"
          data-aos-delay={0}
          key={i}
        >
          <h6 className="ptf-process-item__title">{val.title}</h6>
          <p className="ptf-process-item__text">{val.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Approach2;
