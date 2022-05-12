import React, { Fragment } from "react";
import { useState, useEffect } from "react";

import WorksShowcase from "../views/inner-pages/portfolio/WorksShowcase";
import Page from "../views/Page";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//import ScrollTopBehaviour from "../components/ScrollTopBehaviour";


const Routes = () => {
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
  return (
    <>
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
        <Switch>
          <Route path="/" render={() => <Redirect to="/home-agency" />} />
        </Switch>
        </Fragment>
      </Router>
    </>
  );
};

export default Routes;
