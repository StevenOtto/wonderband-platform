import React, { useState } from "react";
import DraggableWindow, {
  DraggableWindowUIProps,
} from "../../common/DraggableWindow/DraggableWindow";
import StyledContactWindow from "./ContactWindow.styles";
import Button from "../../common/Button/Button";

const ContactWindow: React.FC<DraggableWindowUIProps> = ({
  isOpen,
  style,
  closeCallback,
  onStart,
}) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = (event: any) => {
    event.preventDefault();
    window.open(
      `mailto:daphne@handpicked.nl?subject=${subject}&body=${message}`,
      "_blank"
    );
  };

  return (
    <StyledContactWindow style={style}>
      <DraggableWindow
        title="contact"
        isOpen={isOpen}
        onStart={onStart}
        closeCallback={closeCallback}
      >
        <div className="inner">
          <p className="ibm-plex-mono-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            libero nec nisi vestibulum ultricies. Nulla facilisi. Donec sed urna
            at elit condimentum tincidunt. Curabitur ut libero suscipit,
            ultricies sapien a, lacinia risus.
          </p>
          <form onSubmit={formSubmit}>
            <label htmlFor="subject">Onderwerp</label>
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={(event) => setSubject(event.target.value)}
            />
            <label htmlFor="message">Bericht</label>
            <textarea
              id="message"
              name="message"
              onChange={(event) => setMessage(event.target.value)}
            />
            <Button
              theme="primary"
              text="versturen"
              onClick={() => {
                console.log("submit");
              }}
            />
          </form>
        </div>
      </DraggableWindow>
    </StyledContactWindow>
  );
};

export default ContactWindow;
