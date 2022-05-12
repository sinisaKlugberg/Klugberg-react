import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";


const OnamaImageGrid = (props) => {
    const imageList = props.imgGrid.image_grid;
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
          {imageList.map((val, i) => (
            <div className="col-6" key={i}>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                //data-aos-delay={val.delayAnimation}
              >
                {/* <!--Simple Image--> */}
                <div className="ptf-simple-image">
                  <a href={val.image_url} rel="nofollow">
                    <img
                      src={val.image_url}
                      alt=""
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
  );
};

export default OnamaImageGrid;
