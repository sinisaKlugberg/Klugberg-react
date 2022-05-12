import React from "react";
//import { Link } from "react-router-dom";
/*
const listContent = [
  "Branding & Strategy",
  "3D Packaging",
  "Illustration",
  "UI/UX Website Design",
  "UI/UX Mobile Design",
  "Motion TVC",
];*/

const HomeListOne = (props) => {
  //console.log(props.ecommerce);
  return (
    <ul
      className="ptf-services-list ptf-services-list--style-5"
      style={{ "--ptf-font-family": "var(--ptf-primary-font)" }}
    >
      {/*listContent.map((val, i) => (
        <li key={i}>
          <Link to="/service-details">{val}</Link>
        </li>
      ))*/}
      <li>
        <h4>{props.ecommerce.ecommerce_subtitle}</h4>
      </li>
      <li>
        <Text paragraf={props.ecommerce} />
      </li>
    </ul>
  );
};

function Text(props) {
  return(
      <div>
          {props.paragraf.ecommerce_text.split("</p>").map((place, index) => <p key={index} dangerouslySetInnerHTML={{__html: place}}></p>)}
      </div>
  )
}

export default HomeListOne;
