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
      <label>First Name</label>
      <input type="text" name="first-name" className="nameBox" required />
      <label>Last Name</label>
      <input type="text" name="last-name" className="nameBox" required />
      <label>Email</label>
      <input type="email" name="email" className="emailBox" required />
      <label>Subject</label>
      <input type="text" name="subject" className="subjectBox" required />
      <label>Message</label>
      <textarea name="message" className="messageBox" required />
      <input type="submit" value="Send" className="sendButton" />
    </form>
  );
}

export default ContactForm;
