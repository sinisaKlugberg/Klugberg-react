import React, { useState, useEffect, Fragment } from "react";
//import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { jarallax } from "jarallax";
//import AnimatedCursor from "react-animated-cursor";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Page from "./views/Page";
import WorksShowcase from "./views/inner-pages/portfolio/WorksShowcase";
import HomeAgency from "./views/all-home-version/HomeAgency";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch(`http://www.klugberg.local/wp-json/wp/v2/pages`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
          setData(data);
      })
      .catch((err) => {
          console.log(err);
      });
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Klugberg</title>
        <meta name="description" content="Portfolio & Agency React Template" />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, clean, corporate, creative, fullpage, minimal, modern, multipurpose, parallax, personal, photography, portfolio, showcase"
        />
      </Helmet>
      {/* End React Helmet for SEO */}

      <ScrollToTop />
      {/* End Scroll To Top */}

      <Router>
      <Fragment>
      
          {data.map(page => {
            return(
              <Route  
                key={page.id} 
                path={`/${page.slug}`} 
                render={() => <Page {...page} page={page} />} 
              />
            );
          })}
            <Route path="/:slug" render={() => <WorksShowcase />} />
            {/*<Route path="" render={() => <Redirect to="/home-agency" />} />*/}
                {/*<Route path="/" render={() => <HomeAgency />} />*/}
        
        </Fragment>
      </Router>

      {/*<Routes />*/}
      {/* End All Routes */}
    </>
  );
};

export default App;
