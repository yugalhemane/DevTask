import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import "../styles/form.css";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="form-page">
        <h1>Create your<br />PopX account</h1>

        <div className="form-group">
          <label>Full Name<span>*</span></label>
          <input type="text" placeholder="Enter full name" />
        </div>

        <div className="form-group">
          <label>Phone number<span>*</span></label>
          <input type="tel" placeholder="Enter phone number" />
        </div>

        <div className="form-group">
          <label>Email address<span>*</span></label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="form-group">
          <label>Password<span>*</span></label>
          <input type="password" placeholder="Enter password" />
        </div>

        <div className="form-group">
          <label>Company name</label>
          <input type="text" placeholder="Enter company name" />
        </div>

        <div className="radio-group">
          <p>Are you an Agency?<span>*</span></p>
          <div className="radio-options">
            <label>
              <input type="radio" name="agency" defaultChecked />
              <span>Yes</span>
            </label>
            <label>
              <input type="radio" name="agency" />
              <span>No</span>
            </label>
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/profile")}
        >
          Create Account
        </button>
      </div>
    </Container>
  );
}
