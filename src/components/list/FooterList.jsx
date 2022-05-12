import React from "react";
import { Link } from "react-router-dom";

const FooterList = (props) => {
  return (
    <ul>
      {props.lista.acf.pages.map((item, i) => (
        <li key={i}>
          <Link to={item.page.post_name}>{item.page.post_title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
