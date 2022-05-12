import React from "react";
import { useState, useEffect } from "react";

import FooterBlack from "./footers/FooterBlack";
import CopyRightBlack from "./copyright/CopyRightBlack";

const FooterGlobalBlack = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
      fetch(`http://www.klugberg.local/wp-json/wp/v2/footer?slug=footer-black`)
      .then((res) => res.json())
      .then((data) => {
          //console.log(data);
          setData(data);
      })
      .catch((err) => {
          console.log(err);
      });
  }, []);
    return(
        <>
        {data.map((item, i) => (
            <footer className="ptf-footer ptf-footer--style-3" key={i} style={{backgroundImage: `url(${ process.env.PUBLIC_URL + item.acf.background_logo})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-2">
                        <div className="ptf-footer__top">
                            <FooterBlack black={item}/>
                        </div>
                        {/* End .ptf-footer__top */}

                        <div className="ptf-footer__bottom">
                            <CopyRightBlack copy={item}/>
                        </div>
                        {/* End .ptf-footer__bottom */}
                        </div>
                    </div>
                </div>
            </footer>
        ))}
      </>
    )
}

export default FooterGlobalBlack;