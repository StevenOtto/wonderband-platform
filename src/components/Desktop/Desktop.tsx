import React, { useState } from "react";
import ContactWindow from "../Windows/ContactWindow/ContactWindow";
import ShowsWindow from "../Windows/ShowsWindow/ShowsWindow";
import StyledDesktop from "./Desktop.styles";
import MembersWindow from "../Windows/MembersWindow/MembersWindow";
import AboutWindow from "../Windows/AboutWindow/AboutWindow";
import PhotoWindow from "../Windows/PhotoWindow/PhotoWindow";
import VideoWindow from "../Windows/VideoWindow/VideoWindow";

enum WindowID {
  "SHOW",
  "ABOUT",
  "VIDEO",
  "CONTACT",
  "MEMBERS",
  "PHOTO",
}

type MenuListType = {
  icon: string;
  title: string;
  id: WindowID;
  component: any;
};

const menuList: MenuListType[] = [
  {
    icon: "",
    title: "Shows",
    id: WindowID.SHOW,
    component: ShowsWindow,
  },
  {
    icon: "",
    title: "Over",
    id: WindowID.ABOUT,
    component: AboutWindow,
  },
  {
    icon: "",
    title: "Video",
    id: WindowID.VIDEO,
    component: VideoWindow,
  },
  {
    icon: "",
    title: "Contact",
    id: WindowID.CONTACT,
    component: ContactWindow,
  },
  {
    icon: "",
    title: "Bandleden",
    id: WindowID.MEMBERS,
    component: MembersWindow,
  },
];

export type PhotoType = {
  title: string;
  size: string;
  source: string;
  dimensions: string;
};

const photosList: PhotoType[] = [
  {
    title: "Whatsapp-12.06.2023.jpg",
    size: "asdf",
    source: "asf",
    dimensions: "asdf",
  },
];

const Desktop: React.FC = () => {
  const [openWindows, setOpenWindows] = useState([WindowID.SHOW]);
  const [windowFocus, setWindowFocus] = useState<WindowID | null>();
  const [currentOpenPhoto, setCurrentOpenPhoto] = useState<PhotoType | null>();

  const openWindow = ({ id }: Pick<MenuListType, "id">) => {
    setOpenWindows((prev) => {
      return prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
    });
    setWindowFocus(id);
  };

  const closeWindow = ({ id }: Pick<MenuListType, "id">) => {
    setOpenWindows((prev) => {
      return prev.filter((item) => item !== id);
    });
    setWindowFocus(null);
  };

  const openPhoto = (photo: PhotoType) => {
    setOpenWindows((prev) => {
      return prev.includes(WindowID.PHOTO)
        ? prev.filter((item) => item !== WindowID.PHOTO)
        : [...prev, WindowID.PHOTO];
    });

    setCurrentOpenPhoto(photo);
  };

  const RenderWindowComponents = () => {
    return menuList.map((item: MenuListType) => {
      const Component = item.component;

      return (
        <Component
          key={item.id}
          style={{ zIndex: windowFocus === item.id ? 2 : 1 }}
          isOpen={openWindows.includes(item.id)}
          closeCallback={() => closeWindow({ id: item.id })}
          onStart={() => setWindowFocus(item.id)}
        />
      );
    });
  };

  return (
    <StyledDesktop>
      <ul className="menu">
        {menuList.map((item: MenuListType, index) => (
          <li key={index}>
            <button onClick={() => openWindow(item)}>{item.title}</button>
          </li>
        ))}
      </ul>

      <ul className="photos">
        {photosList.map((item, index) => (
          <li key={index}>
            <button onClick={() => openPhoto(item)}>{item.title}</button>
          </li>
        ))}
      </ul>

      <RenderWindowComponents />

      {currentOpenPhoto && (
        <PhotoWindow
          {...currentOpenPhoto}
          style={{ zIndex: windowFocus === WindowID.PHOTO ? 2 : 1 }}
          isOpen={openWindows.includes(WindowID.PHOTO)}
          onStart={() => setWindowFocus(WindowID.PHOTO)}
          closeCallback={() => closeWindow({ id: WindowID.PHOTO })}
        />
      )}
    </StyledDesktop>
  );
};

export default Desktop;
