import React, { useCallback, useMemo, useState } from "react";
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
    icon: "/images/shows.png",
    title: "Shows",
    id: WindowID.SHOW,
    component: ShowsWindow,
  },
  {
    icon: "/images/members.png",
    title: "Bandleden",
    id: WindowID.MEMBERS,
    component: MembersWindow,
  },
  {
    icon: "/images/about.png",
    title: "Over",
    id: WindowID.ABOUT,
    component: AboutWindow,
  },

  {
    icon: "/images/video.png",
    title: "Video",
    id: WindowID.VIDEO,
    component: VideoWindow,
  },
  {
    icon: "/images/contact.png",
    title: "Contact",
    id: WindowID.CONTACT,
    component: ContactWindow,
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
    title: "WHATSAPP-02-04-2024.jpg",
    size: "1.2MB",
    source: "/images/600x400.svg",
    dimensions: "600px x 400px",
  },
  {
    title: "WHATSAPP-12-06-2023.jpg",
    size: "1.2MB",
    source: "/images/600x400.svg",
    dimensions: "600px x 400px",
  },
  {
    title: "WETRANSFER-12-06-2024_final.jpg",
    size: "1.2MB",
    source: "/images/600x400.svg",
    dimensions: "600px x 400px",
  },
  {
    title: "WHATSAPP-12-06-2023.jpg",
    size: "1.2MB",
    source: "/images/600x400.svg",
    dimensions: "600px x 400px",
  },
  {
    title: "WETRANSFER-12-06-2023.jpg",
    size: "1.2MB",
    source: "/images/600x400.svg",
    dimensions: "600px x 400px",
  },
  {
    title: "WHATSAPP-12-06-2023.jpg",
    size: "1.2MB",
    source: "/images/600x400.svg",
    dimensions: "600px x 400px",
  },
  {
    title: "WHATSAPP-12-03-2024.jpg",
    size: "1.2MB",
    source: "/images/600x400.svg",
    dimensions: "600px x 400px",
  },
];

const Desktop: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<WindowID[]>([]);
  const [windowFocus, setWindowFocus] = useState<WindowID | null>();
  const [currentOpenPhoto, setCurrentOpenPhoto] = useState<PhotoType | null>();

  const openWindow = useCallback(({ id }: Pick<MenuListType, "id">) => {
    setOpenWindows((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setWindowFocus(id);
  }, []);

  const closeWindow = useCallback(({ id }: Pick<MenuListType, "id">) => {
    setOpenWindows((prev) => prev.filter((item) => item !== id));
    setWindowFocus(null);
  }, []);

  const openPhoto = useCallback((photo: PhotoType) => {
    setOpenWindows((prev) =>
      prev.includes(WindowID.PHOTO) ? prev : [...prev, WindowID.PHOTO]
    );
    setCurrentOpenPhoto(photo);
  }, []);

  const windowComponents = useMemo(
    () =>
      menuList.map((item: MenuListType) => {
        const Component = item.component;
        return (
          <Component
            key={item.id}
            style={{
              zIndex: windowFocus === item.id ? 2 : 1,
              visibility: openWindows.includes(item.id) ? "visible" : "hidden",
              pointerEvents: openWindows.includes(item.id) ? "auto" : "none",
            }}
            isOpen={openWindows.includes(item.id)}
            closeCallback={() => closeWindow({ id: item.id })}
            setContactOpenCallback={() => openWindow({ id: WindowID.CONTACT })}
            onStart={() => setWindowFocus(item.id)}
          />
        );
      }),
    [openWindows, windowFocus, closeWindow, setWindowFocus, openWindow]
  );

  return (
    <StyledDesktop>
      <ul className="menu">
        {menuList.map((item: MenuListType, index) => (
          <li key={index}>
            <button
              onDoubleClick={() => openWindow(item)}
              className={windowFocus === item.id ? "active" : ""}
            >
              <img src={item.icon} alt={item.title} />
              <span>{item.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <ul className="photos">
        {photosList.map((item, index) => (
          <li key={index}>
            <button
              onDoubleClick={() => openPhoto(item)}
              className={currentOpenPhoto === item ? "active" : ""}
            >
              <img src={"/images/photo.png"} alt={item.title} />
              <span>{item.title}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* background logo image svg */}
      <img src="/images/fulllogo_groen.svg" alt="" className="logo" />

      {windowComponents}

      {currentOpenPhoto && (
        <PhotoWindow
          {...currentOpenPhoto}
          style={{
            zIndex: windowFocus === WindowID.PHOTO ? 2 : 1,
            visibility: openWindows.includes(WindowID.PHOTO)
              ? "visible"
              : "hidden",
            pointerEvents: openWindows.includes(WindowID.PHOTO)
              ? "auto"
              : "none",
          }}
          isOpen={openWindows.includes(WindowID.PHOTO)}
          onStart={() => setWindowFocus(WindowID.PHOTO)}
          closeCallback={() => closeWindow({ id: WindowID.PHOTO })}
        />
      )}
    </StyledDesktop>
  );
};

export default Desktop;
