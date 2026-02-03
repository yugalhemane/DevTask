import Container from "../components/Container";
import "../styles/form.css";

export default function Profile() {
  return (
    <Container>
      <div className="profile-page">
        <h2 className="profile-title">Account Settings</h2>

        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar">
              <span>U</span>
            </div>

            <div className="profile-info">
              <h3>Mary Doe</h3>
              <p>mary.doe@example.com</p>
            </div>
          </div>

          <p className="profile-desc">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
            Sed Diam Nonummy Nibh Euismod Tincidunt Ut Laoreet Dolore
            Magna Aliquam Erat.
          </p>
        </div>
      </div>
    </Container>
  );
}
