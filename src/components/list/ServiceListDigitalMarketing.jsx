import React from "react";

const ServiceListeDigitalMarketing = (props) => {

  const serviceContent = [
    { icon: "lnil-cup", name: props.webList.popis_usluga_one },
    { icon: "lnil-website-rank", name: props.webList.popis_usluga_two },
    { icon: "lnil-3d", name: props.webList.popis_usluga_three },
    { icon: "lnil-video-camera-alt-1", name: props.webList.popis_usluga_four },
  ];

  return (
    <>
      <ul>
        {props.webList.usluge_repeater.map((val, i) => (
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

export default ServiceListeDigitalMarketing;
