import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterHome = (props) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {props.count.kontakt_naslovna_repeater.map((val, i) => (
        <div className={`col-12 col-xl`} key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={100}
          >
            {/* <!--Counter Up--> */}
            <div className="ptf-counter-up ptf-counter-up--style-2">
              <div className="ptf-counter-up__value">
                {" "}
                <CountUp
                  start={focus ? 0 : null}
                  end={val.number}
                  duration={1}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
              <h5 className="ptf-counter-up__title">
                {val.title}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CounterHome;
