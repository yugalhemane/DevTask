import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import "../styles/form.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="form-page">
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p className="form-subtext">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <button
          className="btn btn-disabled"
          onClick={() => navigate("/profile")}
        >
          Login
        </button>
      </div>
    </Container>
  );
}
