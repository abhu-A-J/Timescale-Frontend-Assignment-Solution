import React from "react";
import "./App.scss";

/* Child Components */
import Navbar from "./components/Navbar";
import Herobox from "./components/Herobox";
import ProfileSection from "./components/ProfileSection";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Herobox/>
      <main>
        <ProfileSection/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
