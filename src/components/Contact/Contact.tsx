import React, { useState } from "react";
import emailjs from "emailjs-com";
import validate, { EMAIL, MAX_LENGTH, MIN_LENGTH, REQUIRED } from "verdad-js";

type FormData = {
  [key: string]: string[];
};

const NAME = "NAME";
const MESSAGE = "MESSAGE";

const initialErrorState: FormData = {
  [EMAIL]: [],
  [NAME]: [],
  [MESSAGE]: [],
};

const config = {
  [EMAIL]: {
    rules: {
      [REQUIRED]: true,
      [EMAIL]: true,
    },
  },
  [NAME]: {
    rules: {
      [REQUIRED]: true,
      [MIN_LENGTH]: 5,
    },
  },
  [MESSAGE]: {
    rules: {
      [REQUIRED]: true,
      [MIN_LENGTH]: 5,
      [MAX_LENGTH]: 1000,
    },
  },
};

export default function Contact({}) {
  const [errors, setErrors] = useState(initialErrorState);
  const [valid, setIsValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      [NAME]: e.target[0].value,
      [EMAIL]: e.target[1].value,
      [MESSAGE]: e.target[2].value,
    };

    const { valid, errorState } = validate(data, config);
    if (!valid) {
      setErrors(errorState);
      setIsLoading(false);
      return setIsValid(false);
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

    if (!valid) {
      setIsValid(true);
      setErrors(initialErrorState);
    }

    setIsLoading(false);
  };
  return (
    <form className="main_form" onSubmit={onSubmit}>
      <input
        className="contactus"
        placeholder="Name"
        type="text"
        name="user_name"
      />
      {!valid && !!errors[NAME].length && <span>{errors[NAME][0]}</span>}
      <input
        className="contactus"
        placeholder="Email"
        type="email"
        name="user_email"
      />
      {!valid && !!errors[EMAIL].length && <span>{errors[EMAIL][0]}</span>}
      <textarea
        className="textarea"
        placeholder="Message"
        name="message"
        maxLength={1000}
      ></textarea>
      {!valid && !!errors[MESSAGE].length && <span>{errors[MESSAGE][0]}</span>}
      <button className="send" type="submit" disabled={isLoading}>
        Send
      </button>
    </form>
  );
}
