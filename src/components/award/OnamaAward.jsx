import React from "react";


const OnamaAward = (props) => {
    console.log(props.award);
    
    const awardContent = props.award.nase_nagrade_content;

  return (
    <ul
      className="ptf-rewards-list ptf-rewards-list--small"
      style={{
        "--ptf-border-width": "2px",
        "--ptf-border-color": "var(--ptf-color-black)",
      }}
    >
      {awardContent.map((val, i) => (
        <li
          className="ptf-rewards-item"
          data-aos="fade"
          data-aos-delay={val.delay_animation}
          key={i}
        >
          <div className="ptf-rewards-item__date">{val.datum}</div>
          <div className="ptf-rewards-item__logo">
            <img
              src={val.image}
              alt="brand"
              loading="lazy"
            />
          </div>
          {/* End .ptf-rewards-item__logo */}

          <div className="ptf-rewards-item__content">
            {val.nase_nagrade_lista.map((list, i) => (
              <div className="ptf-rewards-project" key={i}>
                <div className="ptf-rewards-project__content">
                  <h5>
                    <a href="/">{list.title}</a>
                  </h5>
                  <span>{list.subtitle}</span>
                </div>
                <div className="ptf-rewards-project__link">
                  <a
                    className="ptf-link-with-arrow text-uppercase fz-14"
                    href={list.url}
                  >
                    {list.see_project}
                  </a>
                </div>
              </div>
            ))}
            {/* End .ptf-rewards-project */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OnamaAward;
