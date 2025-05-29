import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ApiLogin } from "../ApiQueries.js";

function Login() {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    Navigate("/messaging-app/messages");
    ApiLogin(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-Mail: </label>
        <br />
        <input
          name="email"
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            });
          }}
          autoComplete="username" // Recommended for email fields to help password managers
          required // Make email input required
        ></input>
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          name="password"
          id="password"
          type="password"
          value={formData.password}
          onChange={(event) => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            });
          }}
          autoComplete="current-password" // CRITICAL for security and password managers
          required // Make password input required
        ></input>
        <br />
        <div className="form-button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
      <br />
      <button onClick={() => Navigate("/messaging-app/register")}>
        Register Instead
      </button>
    </div>
  );
}

export default Login;
