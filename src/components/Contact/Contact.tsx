import React from "react";
import emailjs from "emailjs-com";

export default function Contact({}) {
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!e.target[0].value || !e.target[1].value || !e.target[2].value) {
      return;
    }
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "user_IyPdDHtYTG3DDGWOZKogS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form className="main_form" onSubmit={onSubmit}>
      <input
        className="contactus"
        placeholder="Name"
        type="text"
        name="user_name"
      />
      <input
        className="contactus"
        placeholder="Email"
        type="email"
        name="user_email"
      />
      <textarea
        className="textarea"
        placeholder="Message"
        name="message"
      ></textarea>
      <button className="send" type="submit">
        Send
      </button>
    </form>
  );
}
