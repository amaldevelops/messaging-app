import { useState } from "react";
import ProjectInfo from "./components/ProjectInfo";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  const Navigate = useNavigate();

  function loginButton() {
    Navigate("login");
  }

  return (
    <>
      <div>
        <h1>Web Based Messaging App </h1>
        <button onClick={() => loginButton()}></button>
        <Outlet />
      </div>
    </>
  );
}

export default App;
