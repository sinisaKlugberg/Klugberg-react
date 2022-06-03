import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarContent,
} from "react-pro-sidebar";
//import Social from "../../social/Social";

const MobileMenu = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
      fetch(`http://www.klugberg.local/wp-json/wp-api-menus/v2/menus/10`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
          console.log(err);
      });
  }, []);

  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
              <ul className="sidebar-menu_wrapper">
              {data.items?.map((item, i) => (
                <li style={{fontSize: "1.875rem", fontWeight: "700", lineHeight: "2.0"}} key={i}>
                  <Link to={item.object_slug}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>Klugberg</span>. All Rights Reserved.{" "}
          <br />
          Development by{" "}
          <span>
            <a
              href="https://klugberg.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Klugberg
            </a>
          </span>
          .
        </p>
        {/*<Social />*/}
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
