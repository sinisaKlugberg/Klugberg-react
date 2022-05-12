import React from "react";
import { Link } from "react-router-dom";


const PortfolioCustomGrid = (props) => {
    console.log(props.portfolio)
  return (
    <>
        <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="0"
        >
            <div
            className="ptf-isotope-grid row"
            style={{
                "--bs-gutter-x": "4.75rem",
                "--bs-gutter-y": "4.75rem",
            }}
            >
            {props.portfolio.map((item, i) => (
                <div className="col-lg-6" key={i}>
                <article className="ptf-work ptf-work--style-1">
                    <div className="ptf-work__media">
                    <Link
                        className="ptf-work__link"
                        to={`/${item.slug}`}
                    ></Link>
                    <img
                        src={item.acf.image.url}
                        alt=""
                        loading="lazy"
                    />
                    </div>
                    <div className="ptf-work__meta">
                        {item.acf.kategorije.map((val, i) =>(
                            <div className="ptf-work__category" key={i}>
                                {val}
                            </div>
                        ))}
                    <h4 className="ptf-work__title">
                        <Link to={`/${item.slug}`}>{item.title.rendered}</Link>
                    </h4>
                    </div>
                </article>
                </div>
            ))}
            {/* End .col */}
            </div>
        </div>
    </>
  );
};

export default PortfolioCustomGrid;
