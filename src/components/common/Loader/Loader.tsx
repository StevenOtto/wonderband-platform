// src/components/Loader/Loader.tsx
import React, { useState, useEffect } from "react";
import StyledLoader from "./Loader.styles";

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("Initialiseren...");

  useEffect(() => {
    const loadingTexts = [
      "Initialiseren...",
      "Wonderband systeem opstarten...",
      "Bandleden laden...",
      "Foto's voorbereiden...",
      "Muziek inladen...",
      "Bijna klaar...",
    ];

    let interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.floor(Math.random() * 5) + 1;

        // Update tekst gebaseerd op vooruitgang
        const textIndex = Math.min(
          Math.floor((newProgress / 100) * loadingTexts.length),
          loadingTexts.length - 1
        );
        setText(loadingTexts[textIndex]);

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 225);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <StyledLoader>
      <div className="loader-content">
        <div className="logo-container">
          <img src="/images/fulllogo_groen.svg" alt="Wonderband" />
        </div>
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-text">{text}</div>
          <div className="progress-percentage">{progress}%</div>
        </div>
        <div className="disk-led">
          <div className={`led ${progress % 4 === 0 ? "active" : ""}`}></div>
          <span>Disk Access</span>
        </div>
      </div>
    </StyledLoader>
  );
};

export default Loader;
