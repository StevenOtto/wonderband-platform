import React from "react";
import DraggableWindow from "../common/DraggableWindow/DraggableWindow";
import ContactWindow from "../ContactWindow/ContactWindow";
import StyledDesktop from "./Desktop.styles";
import ShowsWindow from "../ShowsWindow/ShowsWindow";

const menu = [
  {
    title: "Shows",
  },
  {
    title: "About",
  },
  {
    title: "Video",
  },
  {
    title: "Contact",
  },
  {
    title: "Bandmembers",
  },
];

const Desktop: React.FC = () => {
  return (
    <StyledDesktop>
      {/* navigation */}
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>

      {/* all windows for development */}
      <ShowsWindow />

      <ContactWindow />
    </StyledDesktop>
  );
};

export default Desktop;
