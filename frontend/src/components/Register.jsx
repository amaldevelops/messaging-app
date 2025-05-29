import { useNavigate } from "react-router-dom";

function Register() {
  const Navigate = useNavigate();

  const handleSubmit = () => {
    Navigate("/messaging-app/login");
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Name</label>
        <br />
        <input name="fullname" id="fullname" type="text" required></input>
        <br />
        <label htmlFor="email">E-Mail</label>
        <br />
        <input name="email" id="email" type="email" required></input>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input name="password" id="password" type="password" required></input>
        <br />
        <label htmlFor="bio">Bio</label>
        <br />
        <textarea name="bio" id="bio" required></textarea>

        <div className="form-button-container">
          <button>Register</button>
        </div>
      </form>

      <div className="form-button-container">
        <button onClick={() => Navigate("/messaging-app/login")}>
          Login Instead
        </button>
      </div>
    </div>
  );
}

export default Register;
