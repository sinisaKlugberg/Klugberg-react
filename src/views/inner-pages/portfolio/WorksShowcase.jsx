import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
//import CopyRight from "../../../components/footer/copyright/CopyRight";
//import Footer from "../../../components/footer/footers/Footer";
//import Social from "../../../components/social/Social";
//import WorksCaseStudy from "./WorksCaseStudy";
import WorksCaseStudyCustom from "./WorksCaseStudyCustom";
//import ImageGridThree from "../../../components/image-grid/ImageGridThree";
import ImageGridPortfolioCustom from "../../../components/image-grid/ImageGridPortfolioCustom";
import FooterGlobal from "../../../components/footer/FooterGlobal";


const WorksShowcase = () => {
  let params = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://www.klugberg.local/wp-json/wp/v2/custom-portfolio?slug=${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.slug, params.id]);
  return (
    <>
    {data.map((item, i) => (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1" key={i}>
      <Helmet>
        <title>Moonex - Works Showcase</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-page ptf-page--single-work-1">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-12">
                    {/* <!--Animated Block--> */}
                    {<div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">
                        {item.title.rendered}
                      </h1>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "4rem", "--ptf-md": "2.5rem" }}
                      ></div>
                    {/*<Social />*/}
                    </div>}
                    {/* <!--Spacer--> */}
                  </div>
                  {/* End .col */}
                  {/*<WorksCaseStudy />*/}
                  <WorksCaseStudyCustom case={item}/>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.25rem", "--ptf-md": "1rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Simple Image--> */}
                  <div className="ptf-simple-image">
                    <a
                      href={item.acf.opis_zadatka_group.prikaz_zadatka}
                      rel="nofollow"
                    >
                      <img
                        src={item.acf.opis_zadatka_group.prikaz_zadatka}
                        alt="work"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <Text paragraf={item.content.rendered}/>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Gallery--> */}
                  <ImageGridPortfolioCustom port={item}/>
                </div>
              </div>
            </section>
            {/* <!--Spacer--> */}
            <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "3.125rem" }}
              ></div>
          </article>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
      <FooterGlobal />
    </div>
    ))}
    </>
    // End .ptf-is--blog-grid
  );
};

function Text(props) {
  const styleP = {
      textAlign: "left",
  }
  return(
      <>
          {props.paragraf.split("</p>").map((text, index) => <p className="fz-30 has-black-color" key={index} dangerouslySetInnerHTML={{__html: text}} style={styleP}></p>)}
      </>
  )
}

export default WorksShowcase;
