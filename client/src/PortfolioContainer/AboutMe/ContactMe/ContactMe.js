import React,{useState} from 'react';
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

        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [message, setMessage] = useState("")
        const [banner, setBanner]= useState("")
        const [bool, setBool] = useState(false)

        const handleName = (e) => {
            setName(e.target.value)
        }
        const handleEmail = (e) => {
            setEmail(e.target.value)
        }
        const handleMessge = (e) => {
            setMessage(e.target.value)
        }
        console.log(name)
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
          <div className="back-form">
              <div className="img-back">
                  <h4>Send Your Email Here</h4>
                  <img src={imgBack} alt="image not found"/>
              </div>
              <form>
                  <p>{banner}</p>
                  <label htmlFor='name'>Name</label>
                  <input type="text" 
                  onChange={handleName}
                  value={name}
                  
                  />

                  <label htmlFor='email'>Email</label>
                  <input type="email" 
                  onChange={handleEmail}
                  value={email}
                  />

                  <label htmlFor='message'>Message</label>
                  <textarea type="text" 
                  onChange={handleMessge}
                  value={message}
                  />
                  <div className="send-btn">
                      <button type="submit">
                          send<i className="fa fa-paper-plane"/>
                      </button>
                  </div>
              </form>
          </div>
      </div>

  </div>);
}
