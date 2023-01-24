import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Contact from "../Contact/Contact";
import "./ContactForm.css";

function ContactForm() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d1omjd9",
        "template_ekvjpl1",
        form.current,
        "_6u2OHrg1DPsfVPBu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" className="nameBox"/>
      <label>Email</label>
      <input type="email" name="email" className="emailBox"/>
      <label>Subject</label>
      <input type="text" name="subject" className="subjectBox"/>
      <label>Message</label>
      <textarea name="message" className="messageBox"/>
      <input type="submit" value="Send" className="sendButton"/>
    </form>
  );
}

export default ContactForm;
