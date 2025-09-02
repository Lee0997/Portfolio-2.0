import "./contact.css";
import Phone from "../../img/phone-icon.png";
import Email from "../../img/email-icon.png";
import Address from "../../img/address-icon.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7gqqrsd",
        "template_1el71fn",
        formRef.current,
        "user_BulIIbyjXDpBWZj55aT9D"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Get in touch</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="Phone Icon" className="c-icon" />
              +44 7506 062366
            </div>
            <div className="c-info-item">
              <img src={Email} alt="Email Icon" className="c-icon" />
              leenock2012@yahoo.co.uk
            </div>
            <div className="c-info-item">
              <img src={Address} alt="Address Icon" className="c-icon" />
              Dudley, England
            </div>
            <div className="c-info-item">
              <a
                href="https://docs.google.com/document/d/1YL1Bsboo3sIkeBSC9hBdthAf_Glgv7G1/edit?usp=sharing&ouid=108683363049057376621&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="c-link"
              >
                <img
                  src={require("../../img/cv-icon.png")}
                  alt="CV Icon"
                  className="c-icon"
                />
                View My CV
              </a>
            </div>
            <div className="c-info-item">
              <a
                href="https://github.com/Lee0997"
                target="_blank"
                rel="noopener noreferrer"
                className="c-link"
              >
                <img
                  src={require("../../img/github-mark.png")}
                  alt="GitHub Icon"
                  className="c-icon"
                />
                My GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-description">
            <b>Want to drop me an email?</b> Just use the form below and I'll be
            sure to get back to you as soon as possible. Please feel free to
            give me a call with the number provided. Thanks!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thanks for contacting me, be with you soon..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
