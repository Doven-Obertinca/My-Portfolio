import React from 'react';
import Typical from 'react-typical'

import imgBack from "../../../images/mailz.jpeg"
import load1 from "../../../images/load2.gif"
import ScreenHeading from "../../../utilities/ScreenHeading/ScreenHeading"
import ScrollService from "../../../utilities/ScrollService"
import Animation from "../../../utilities/Animation"


export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animation.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
  <div className="main-container" id={props.id || ""}>
      <ScreenHeading 
      subHeading={"lets keep in touch"}
      title={"Contact Me"}
      />
      <div className="central-form">
          <div className="col">
          <h2 className="title">
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Get in touch!!",
                    1000,
                   
                  ]}
                />
              </h2>
              <a href="https://github.com/Doven-Obertinca" target="_blank">
                <i className="fa fa-github-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/doven-obertinca/"
                target="_blank"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
          </div>
      </div>

  </div>);
}
