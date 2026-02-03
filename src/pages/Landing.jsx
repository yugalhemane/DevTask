import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import "../styles/form.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="landing">
        <div className="landing-content">
          <h1>Welcome to PopX</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="landing-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </Container>
  );
}
