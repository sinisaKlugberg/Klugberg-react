import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
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
    <ul className="sf-menu">
      {data.items?.map((item, i) => (
        <li className={`menu-item-has-children`} key={i}>
          <Link to={item.object_slug}>
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;