import React from "react";
import DraggableWindow, {
  DraggableWindowUIProps,
} from "../../common/DraggableWindow/DraggableWindow";
import StyledShowsWindow from "./ShowsWindow.styles";
import Button from "../../common/Button/Button";

const shows = [
  {
    date: new Date("09-14-2025"),
    location: "Tante Lien, Brabant",
  },
  {
    date: new Date("08-24-2024"),
    location: "De Harmonie, Tilburg",
  },
  {
    date: new Date("07-13-2024"),
    location: "On Other Drugs, Rotterdam",
  },
  {
    date: new Date("06-07-2024"),
    location: "Handpicked Agencies, Breda",
  },
  {
    date: new Date("12-15-2023"),
    location: "Piet Hein Eek, Eindhoven",
  },
  {
    date: new Date("06-23-2023"),
    location: "Fort Sabina, Heijningen",
  },
];

const options = {
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
              .filter((item) => item.date > new Date())
              .map((show, index) => (
                <li key={index}>
                  <p>{show.location}</p>
                  <span />
                  <p>{show.date.toLocaleDateString("nl", options as any)}</p>
                </li>
              ))}
          </ul>

          <h3>Afgelopen optredens</h3>
          <ul>
            {shows
              .filter((item) => item.date < new Date())
              .map((show, index) => (
                <li key={index}>
                  <p>{show.location}</p>
                  <span />
                  <p>{show.date.toLocaleDateString("nl", options as any)}</p>
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
