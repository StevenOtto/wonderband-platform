import React, { useEffect, useState } from "react";
import Desktop from "./Desktop/Desktop";
import Loader from "./common/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [crtEffect, setCrtEffect] = useState(false);

  const handleLoadComplete = () => {
    setCrtEffect(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  // Om ervoor te zorgen dat de loader niet te snel verdwijnt
  // bij snelle laadtijden, stellen we een minimale laadtijd in
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      // Laat de loader minimaal 2.5 seconden zien
      // zelfs als de site sneller laadt
    }, 2500);

    return () => clearTimeout(minLoadTime);
  }, []);

  return (
    <>
      {crtEffect && <div className="crt-on-effect"></div>}
      {loading ? <Loader onComplete={handleLoadComplete} /> : <Desktop />}
    </>
  );
}

export default App;
