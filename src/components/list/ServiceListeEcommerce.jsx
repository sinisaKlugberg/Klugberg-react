import React from "react";

const ServiceListeEcommerce = (props) => {

  return (
    <>
      <ul>
        {props.service.usluge_repeater.map((val, i) => (
          <li key={i}>
            <a href="/">
              <i className={`lnil ${val.icon}`}></i> {val.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServiceListeEcommerce;
