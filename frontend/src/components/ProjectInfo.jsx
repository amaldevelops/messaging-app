function ProjectInfo() {
  return (
    <div>
      <h3>Project Technical Information</h3>
      <h4>Core functionality</h4>
      <ul>
        <li className="completedTick">Authorization</li>
        <li className="pendingEmptyCheckbox">
          Sending messages to another user
        </li>
        <li className="pendingEmptyCheckbox">Customizing a user profile</li>
      </ul>

      <h4>Project Planning</h4>
      <ul>
        <li className="pendingEmptyCheckbox">User interface Design</li>
        <li className="pendingEmptyCheckbox">
          Data model Design: Authentication, Users, Message Storage
        </li>
        <li className="pendingEmptyCheckbox">Backend Design</li>
      </ul>
    </div>
  );
}

export default ProjectInfo;
