import React from "react";
import DraggableWindow from "../common/DraggableWindow/DraggableWindow";
import StyledContactWindow from "./ContactWindow.styles";
import Button from "../common/Button/Button";

const ContactWindow: React.FC = () => {
  return (
    <StyledContactWindow>
      <DraggableWindow title="contact">
        <div className="inner">
          <p className="ibm-plex-mono-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            libero nec nisi vestibulum ultricies. Nulla facilisi. Donec sed urna
            at elit condimentum tincidunt. Curabitur ut libero suscipit,
            ultricies sapien a, lacinia risus.
          </p>
          <form>
            <label htmlFor="name">Naam</label>
            <input type="text" id="name" name="name" placeholder="Naam" />
            <label htmlFor="email">E-mailadres</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="hello@wonderband.com"
            />
            <label htmlFor="message">Bericht</label>
            <textarea id="message" name="message" />
            <Button
              theme="primary"
              text="versturen"
              onClick={() => {
                console.log("test");
              }}
            />
          </form>
        </div>
      </DraggableWindow>
    </StyledContactWindow>
  );
};

export default ContactWindow;
