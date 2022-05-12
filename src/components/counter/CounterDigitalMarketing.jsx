import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";



const CounterDigitalMarketing = (props) => {
  
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {props.count.counter_repater.map((val, i) => (
        <div className="col-12 col-sm-6 col-md-4" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={0}
          >
            {/* <!--Counter Up--> */}
            <div
              className="ptf-counter-up ptf-counter-up--style-3"
              style={{
                "--ptf-title-color": "var(--ptf-color-black)",
              }}
            >
              <h5 className="ptf-counter-up__title">
                {val.title}
              </h5>
              <div
                className="ptf-counter-up__value"
                data-prefix=""
                data-suffix="%"
              >
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
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CounterDigitalMarketing;
