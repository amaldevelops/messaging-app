function ProjectInfo() {
  return (
    <div>
      <h3>Project Technical Information</h3>

      <h3>Core functionality</h3>

      <ul>
        <li className="completedTick">Authorization</li>
        <li className="completedTick">Sending messages to another user</li>
        <li className="completedTick">Customizing a user profile</li>
        <li className="completedTick">
          Front End:React, Javascript, HTML, CSS{" "}
        </li>
        <li className="completedTick">Back End: Node.js, Express.js </li>
        <li className="completedTick">Database: PostgreSQL </li>
      </ul>

      <h3>Design and Tasks</h3>

      <h4>Front End : User interface Design</h4>

      <ul>
        <li className="pendingEmptyCheckbox">
          <span>
            User interface Design: Decide on number of UI elements and React
            components required{" "}
          </span>
        </li>
      </ul>

      <h4>Backend : Database Design</h4>
      <ul>
        <li className="pendingEmptyCheckbox">
          Data model Design : Authentication, Users, Message Storage
        </li>
      </ul>

      <h4>Back End : Architecture</h4>
      <ul>
        <li className="pendingEmptyCheckbox">
          Authorization : Decide on Passport.js, JWT, cookie based or 3rd Party
          API based authentication
        </li>
        <li className="pendingEmptyCheckbox">
          Sending messages to another user, decide on realtime or JSON API based{" "}
        </li>
        <li className="pendingEmptyCheckbox">Customizing a user profile</li>
        <li className="pendingEmptyCheckbox">Customizing a user profile</li>
      </ul>

      <h4>Back End : Infrastructure and Deployment</h4>

      <ul>
        <li className="pendingEmptyCheckbox">
          Render for Backend code hosting
        </li>
        <li className="pendingEmptyCheckbox">Neon for Database hosting</li>

        <li className="pendingEmptyCheckbox">Github Pages for FrontEnd</li>
      </ul>
    </div>
  );
}

export default ProjectInfo;
