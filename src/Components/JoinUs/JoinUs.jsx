import React, { useRef } from "react";
import "./JoinUs.css";
import emailjs from '@emailjs/browser';


export default function JoinUs() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2ipor67', 'template_04b718h', form.current, 'h2NacagFaNIeQyGKf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="join-us" id="join-us">
      <div className="join-us-left">
        <hr />
        <div>
          <span className="outline-text">Ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="outline-text">with us?</span>
        </div>
      </div>
      <div className="join-us-right">
        <form ref={form} className="email-join-us">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            onSubmit={sendEmail}
            required
          />
          <button className="btn btn-join-us">Join Us</button>
        </form>
      </div>
    </div>
  );
}
