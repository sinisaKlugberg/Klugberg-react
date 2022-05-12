import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const ImageGridPortfolioCustom = (props) => {
  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div
            className="ptf-justified-gallery row"
            style={{
              "--bs-gutter-x": "2rem",
              "--bs-gutter-y": "2rem",
            }}
          >
            {props.port.acf.image_grid.map((val, i) => (
              <div className="col-lg-6" key={i}>
                <div className="ptf-gallery__item">
                  <div className="ptf-simple-image">
                    <a
                      href={val.image.url}
                      rel="nofollow"
                    >
                      <img
                        src={val.image.url}
                        alt={val.image.alt}
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
};

export default ImageGridPortfolioCustom;
