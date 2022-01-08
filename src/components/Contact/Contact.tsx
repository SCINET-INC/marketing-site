import React, { useState } from "react";
import emailjs from "emailjs-com";
import validate, { EMAIL, MAX_LENGTH, MIN_LENGTH, REQUIRED } from "verdad-js";
import styled from "styled-components";

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
  const [errorsPresent, setErrorsPresent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      [NAME]: name,
      [EMAIL]: email,
      [MESSAGE]: message,
    };

    const { valid, errorState } = validate(data, config);
    if (!valid) {
      setErrors(errorState);
      setIsLoading(false);
      return setErrorsPresent(true);
    }

    if (valid && errorsPresent) {
      setErrorsPresent(false);
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
          setHasSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
          setIsLoading(false);
          console.log(result.text, " success");
        },
        (error) => {
          console.log(error.text, "failure");
          setIsLoading(false);
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errorsPresent && !!errors[NAME].length && (
        <Error>{errors[NAME][0]}</Error>
      )}
      <input
        className="contactus"
        placeholder="Email"
        type="email"
        name="user_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errorsPresent && !!errors[EMAIL].length && (
        <Error>{errors[EMAIL][0]}</Error>
      )}
      <textarea
        className="textarea"
        placeholder="Message"
        name="message"
        maxLength={1000}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      {errorsPresent && !!errors[MESSAGE].length && (
        <Error>{errors[MESSAGE][0]}</Error>
      )}
      <Button
        className="send"
        type="submit"
        disabled={isLoading || hasSubmitted}
      >
        {isLoading ? "Loading" : hasSubmitted ? "Submitted" : "Send"}
      </Button>
    </form>
  );
}

const Button = styled.button`
  &:disabled {
    background: #7400b8 !important;
    color: #fff !important;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;
