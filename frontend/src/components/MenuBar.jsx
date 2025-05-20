import { Link } from "react-router-dom";
function MenuBar() {
  return (
    <>
    <div className="menuBar">
      <Link to="/messaging-app">Home</Link>
      <Link to="/messaging-app/projectinfo">Technical Info</Link>
      </div>
    </>
  );
}

export default MenuBar;
