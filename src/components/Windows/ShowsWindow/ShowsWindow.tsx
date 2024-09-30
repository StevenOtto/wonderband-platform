import React from "react";
import DraggableWindow, {
  DraggableWindowUIProps,
} from "../../common/DraggableWindow/DraggableWindow";
import StyledShowsWindow from "./ShowsWindow.styles";
import Button from "../../common/Button/Button";

const shows = [
  {
    date: new Date("12-12-2025"),
    location: "Poppodium 013, Tilburg",
  },
  {
    date: new Date("12-12-2020"),
    location: "Poppodium 013, Tilburg",
  },
  {
    date: new Date("12-12-2019"),
    location: "Poppodium, Tilburg",
  },
  {
    date: new Date("12-12-2018"),
    location: "Poppodium 013, Tilburg",
  },
  {
    date: new Date("12-12-2017"),
    location: "Poppodium 013, Tilburg",
  },
  {
    date: new Date("12-12-2016"),
    location: "Poppodium 013, Tilburg",
  },
];

const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const ShowsWindow: React.FC<DraggableWindowUIProps> = ({
  isOpen,
  style,
  onStart,
  closeCallback,
}) => {
  return (
    <DraggableWindow
      title="Optredens"
      isOpen={isOpen}
      onStart={onStart}
      closeCallback={closeCallback}
    >
      <StyledShowsWindow style={style}>
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

          <Button theme="secondary" text="Boeken" />
        </div>
      </StyledShowsWindow>
    </DraggableWindow>
  );
};

export default ShowsWindow;
