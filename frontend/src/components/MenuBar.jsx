import { Link } from "react-router-dom";
function MenuBar() {
  return (
    <>
      <div className="menuBar">
        <Link to="/messaging-app">Home</Link>
        <Link to="/messaging-app/projectinfo">Technical Info</Link>
        <Link to="/messaging-app/profile">Profile</Link>
        <a
          href="https://github.com/amaldevelops/messaging-app/"
          target="_blank"
        >
          Github Source code
        </a>
        <a href="https://www.amalk.au/messaging-app/" target="_blank">
          Live Demo
        </a>
      </div>
    </>
  );
}

export default MenuBar;
