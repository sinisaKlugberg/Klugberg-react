import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://www.klugberg.local/wp-json/wp/v2/media/251`)
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
            <Link className="ptf-navbar-logo" to="/home-agency">
                <img
                  className="black"
                  src={data.source_url}
                  alt=""
                  loading="lazy"
                />
                <img
                  className="white"
                  src={data.source_url}
                  alt=""
                  loading="lazy"
                />
            </Link>
        </>
    )
}

export default HeaderLogo;