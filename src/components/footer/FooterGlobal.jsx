import React from "react";
import { useState, useEffect } from "react";
import Footer from "./footers/Footer";
import CopyRight from "./copyright/CopyRight";

const FooterGlobal = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
      fetch(`http://www.klugberg.local/wp-json/wp/v2/footer?slug=footer-white`)
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
        <footer className="ptf-footer ptf-footer--style-1">
            <div className="container-xxl">
                <div className="ptf-footer__top">
                    <Footer foot={data}/>
                </div>
                <div className="ptf-footer__bottom">
                    <CopyRight copy={data}/>
                </div>
            </div>
        </footer>
    )
}

export default FooterGlobal;