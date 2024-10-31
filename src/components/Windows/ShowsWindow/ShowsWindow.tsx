import React from "react";
import DraggableWindow, {
  DraggableWindowUIProps,
} from "../../common/DraggableWindow/DraggableWindow";
import StyledShowsWindow from "./ShowsWindow.styles";
import Button from "../../common/Button/Button";

const shows = [
  {
    date: new Date("2025-09-15"),
    location: "Tante Lien, Brabant",
  },
  {
    date: new Date("2024-08-24"),
    location: "De Harmonie, Tilburg",
  },
  {
    date: new Date("2024-07-13"),
    location: "On Other Drugs, Rotterdam",
  },
  {
    date: new Date("2024-06-07"),
    location: "Handpicked Agencies, Breda",
  },
  {
    date: new Date("2023-12-15"),
    location: "Piet Hein Eek, Eindhoven",
  },
  {
    date: new Date("2023-06-23"),
    location: "Fort Sabina, Heijningen",
  },
];

const options: Intl.DateTimeFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const ShowsWindow: React.FC<
  DraggableWindowUIProps & { setContactOpenCallback?: () => void }
> = ({ isOpen, style, onStart, closeCallback, setContactOpenCallback }) => {
  return (
    <StyledShowsWindow style={style}>
      <DraggableWindow
        title="Optredens"
        isOpen={isOpen}
        onStart={onStart}
        closeCallback={closeCallback}
      >
        <div className="inner">
          <h3>Aankomende optredens</h3>
          <ul>
            {shows
              .filter((item) => item.date.getTime() > new Date().getTime())
              .map((show, index) => (
                <li key={index}>
                  <p>{show.location}</p>
                  <span />
                  <p>{show.date.toLocaleDateString("nl", options)}</p>
                </li>
              ))}
          </ul>

          <h3>Afgelopen optredens</h3>
          <ul>
            {shows
              .filter((item) => item.date.getTime() < new Date().getTime())
              .map((show, index) => (
                <li key={index}>
                  <p>{show.location}</p>
                  <span />
                  <p>{show.date.toLocaleDateString("nl", options)}</p>
                </li>
              ))}
          </ul>

          <Button
            theme="tertiary"
            text="Boeken"
            onClick={() => setContactOpenCallback && setContactOpenCallback()}
          />
        </div>
      </DraggableWindow>
    </StyledShowsWindow>
  );
};

export default ShowsWindow;
