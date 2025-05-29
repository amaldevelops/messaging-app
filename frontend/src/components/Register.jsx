import { useNavigate } from "react-router-dom";

function Register() {
  const Navigate = useNavigate();

  return (
    <div>
      <h1>Register</h1>
      <button onClick={() => Navigate("/messaging-app/login")}>
        Login Instead
      </button>
    </div>
  );
}

export default Register;
