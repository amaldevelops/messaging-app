import { useState } from "react";
import ProjectInfo from "./components/ProjectInfo";

import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Web Based Messaging App</h1>
        <Outlet />
      </div>
    </>
  );
}

export default App;
