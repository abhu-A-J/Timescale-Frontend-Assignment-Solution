import React from "react";

/* Styling */
import "./index.scss";

/* Assets */
import heroboxImage from "../../images/hero-background.jpg";

const Herobox = () => {
  return (
    <header className="herobox" style={{backgroundImage:`url(${heroboxImage})`}}>
    </header>
  );
};

export default Herobox;
