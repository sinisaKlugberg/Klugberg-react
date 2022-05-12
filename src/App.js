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
        <title>Moonex - Portfolio & Agency React Template</title>
        <meta name="description" content="Portfolio & Agency React Template" />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, clean, corporate, creative, fullpage, minimal, modern, multipurpose, parallax, personal, photography, portfolio, showcase"
        />
      </Helmet>
      {/* End React Helmet for SEO */}

      {/*<AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="220, 53, 69"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
  />*/}
      {/* End Animated Cursor */}

      <ScrollToTop />
      {/* End Scroll To Top */}


      <Router>
      <Fragment>
        {/*<ScrollTopBehaviour />*/}
        {data.map((page, index) => {
          return(
            <Switch key={index}>
              <Route 
                exact 
                key={page.id} 
                path={`/${page.slug}`} 
                render={() => <Page {...page} page={page} />} 
              />
            </Switch>
          );
        })}
        <Switch>
          <Route path="/:slug" render={() => <WorksShowcase />} />
        </Switch>
        {/*<Switch>
          <Route path="/" render={() => <Redirect to="/home-agency" />} />
      </Switch>*/}
        </Fragment>
      </Router>

      {/*<Routes />*/}
      {/* End All Routes */}
    </>
  );
};

export default App;
