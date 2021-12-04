import React from "react";
import "./App.css";
import HeaderArea from "./HeaderArea/Header";
import Sidebar from "./Sidebar/sidebar";
import RVideo from "./RVideo/Rvideo";


function App() {
  return (

    <div className="app">
      <HeaderArea />
      <div className="app__page">
        <Sidebar />

        <RVideo />
    </div>
    </div>

  );
}

export default App;
