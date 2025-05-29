import { useNavigate } from "react-router-dom";

function Login() {
  const Navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => Navigate("/messaging-app/register")}>
        Register Instead
      </button>
    </div>
  );
}

export default Login;
