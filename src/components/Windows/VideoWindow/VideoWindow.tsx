import React, { useEffect, useRef, useState } from "react";
import DraggableWindow, {
  DraggableWindowUIProps,
} from "../../common/DraggableWindow/DraggableWindow";
import StyledPhotoWindow from "./VideoWindow.styles";
import { StyledMetaData } from "../PhotoWindow/PhotoWindow.styles";
import Button from "../../common/Button/Button";

type VideoWindowProps = DraggableWindowUIProps;

const videoSrc =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const title = "Wonderband_sept_2024_01.mp4 (3.2MB)";

const VideoWindow: React.FC<VideoWindowProps> = ({
  isOpen,
  style,
  onStart,
  closeCallback,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [currentTime, setCurrentTime] = useState("00:00");

  const updateTime = () => {
    if (videoRef.current) {
      const minutes = Math.floor(videoRef.current.currentTime / 60);
      const seconds = Math.floor(videoRef.current.currentTime % 60);
      setCurrentTime(
        `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
      );
    }
  };

  useEffect(() => {
    if (isOpen) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [isOpen]);

  useEffect(() => {
    const ref = videoRef.current;
    ref?.addEventListener("timeupdate", updateTime);
    return () => {
      ref?.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const playVideo = () => {
    videoRef.current?.play();
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <StyledPhotoWindow style={style}>
      <DraggableWindow
        title={"Video"}
        size="large"
        isOpen={isOpen}
        onStart={onStart}
        closeCallback={closeCallback}
      >
        <div className="inner">
          <div className="video-wrap">
            <StyledMetaData>
              <p className="title">{title}</p>
              <div className="video-progress">
                <span>{currentTime}</span>
              </div>
            </StyledMetaData>
            <video ref={videoRef} controls={false} playsInline src={videoSrc} />

            <div className="controls">
              <Button text="Afspelen" onClick={playVideo} />
              <Button text="Pauze" onClick={pauseVideo} />
              <Button text="Herstart" onClick={restartVideo} />
            </div>
          </div>
        </div>
      </DraggableWindow>
    </StyledPhotoWindow>
  );
};

export default VideoWindow;
