import React from "react";
import DraggableWindow, {
  DraggableWindowUIProps,
} from "../../common/DraggableWindow/DraggableWindow";
import StyledShowsWindow from "./MembersWindow.styles";
import Button from "../../common/Button/Button";

const members = [
  {
    name: "Jesper",
    role: "Keys",
    image: "https://via.placeholder.com/150",
    icon: "https://via.placeholder.com/50",
  },
  {
    name: "Jascha",
    role: "Gitaar & synthesizer",
    image: "https://via.placeholder.com/150",
    icon: "https://via.placeholder.com/50",
  },
  {
    name: "Daan",
    role: "Drums",
    image: "https://via.placeholder.com/150",
    icon: "https://via.placeholder.com/50",
  },
  {
    name: "Daphne",
    role: "Bandmanager",
    image: "https://via.placeholder.com/150",
    icon: "https://via.placeholder.com/50",
  },
  {
    name: "Vere",
    role: "Zang",
    image: "https://via.placeholder.com/150",
    icon: "https://via.placeholder.com/50",
  },
  {
    name: "Martin",
    role: "Geluidstechnicus",
    image: "https://via.placeholder.com/150",
    icon: "https://via.placeholder.com/50",
  },
  {
    name: "Nigel",
    role: "Zang",
    image: "https://via.placeholder.com/150",
    icon: "https://via.placeholder.com/50",
  },
  {
    name: "Steven",
    role: "Gitaar",
    image: "https://via.placeholder.com/150",
    icon: "https://via.placeholder.com/50",
  },
  {
    name: "Paul",
    role: "Basgitaar",
    image: "https://via.placeholder.com/150",
    icon: "https://via.placeholder.com/50",
  },
];

const MembersWindow: React.FC<DraggableWindowUIProps> = ({
  isOpen,
  style,
  onStart,
  closeCallback,
}) => {
  return (
    <StyledShowsWindow style={style}>
      <DraggableWindow
        title="Bandleden"
        isOpen={isOpen}
        onStart={onStart}
        closeCallback={closeCallback}
      >
        <div className="inner">
          <ul>
            {members.map((member, index) => (
              <li key={index}>
                <div className="image-wrap">
                  <img src={member.image} alt={member.name} />
                </div>
                <p className="name">{member.name}</p>
                <p className="role">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </DraggableWindow>
    </StyledShowsWindow>
  );
};

export default MembersWindow;
