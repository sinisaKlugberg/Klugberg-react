import React from "react";
//import { Link } from "react-router-dom";
/*
const listContent = [
  "SEO",
  "Marketing Strategy",
  "Email Marketing",
  "GG/FB ADs",
  "Content Writing",
];*/

const HomeListThree = (props) => {
  //console.log(props.digitMark);
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
        <h4>{props.digitMark.digital_marketing_subtitle}</h4>
      </li>
      <li>
        <Text paragraf={props.digitMark} />
      </li>
    </ul>
  );
};

function Text(props) {
  return(
      <div>
          {props.paragraf.digital_marketing_text.split("</p>").map((place, index) => <p key={index} dangerouslySetInnerHTML={{__html: place}}></p>)}
      </div>
  )
}

export default HomeListThree;
