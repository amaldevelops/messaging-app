import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";

function Layout() {
  return (
    <div className="layoutContainer">
      <div>
        <MenuBar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
