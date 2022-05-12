import React from "react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
//import CopyRight from "../../../components/footer/copyright/CopyRight";
//import Footer from "../../../components/footer/footers/Footer";
//import PortfolioSix from "../../../components/portfolio/PortfolioSix";
import PortfolioCustomGrid from "../../../components/portfolio/PortfilioCustomGrid";
//import RelatedPortfolio from "../../../components/portfolio/RelatedPortfolio";
import FooterGlobal from "../../../components/footer/FooterGlobal";

const WorksGrid = () => {
  const [data, setData] = useState([]);

    useEffect(() => {
      let cancel = false;
        fetch(`http://www.klugberg.local/wp-json/wp/v2/custom-portfolio`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (cancel) return;
            setData(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  return (
    <>
    <div className="ptf-site-wrapper animsition ptf-is--works-grid">
      <Helmet>
        <title>Moonex - Works/Portfolio Grid</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div className="ptf-page ptf-page--portfolio-grid">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-10">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">Portfolio</h1>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem" }}
                ></div>
              </div>
              {/* End .container-xxl */}

              {/*=============================================
                Start Portfolio main 
                ============================================== */}
              <div className="container-xxl">
                {/*<PortfolioSix />*/}
                <PortfolioCustomGrid portfolio={data}/>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
                ></div>
              </div>
            </section>
          </div>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
      <FooterGlobal />
    </div>
    </>
    // End .ptf-is--blog-grid
  );
};

export default WorksGrid;
