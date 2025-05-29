import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import JWTStatus from "./JwtStatus";

function Layout() {
  return (
    <div className="layoutContainer">
      <div>
        <MenuBar />
      </div>
      <div>
        <JWTStatus/>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
