import Container from "../components/Container";
import "../styles/form.css";
import profileImage from "../assets/Ellipse 114@2x.png";
import cameraIcon from "../assets/Group 1585@2x.png";

export default function Profile() {
  return (
    <Container>
      <div className="profile-page">
        <h2 className="profile-title">Account Settings</h2>

        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar">
              <img src={profileImage} alt="Mary Doe" 
                   style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
              <div className="camera-icon">
                <img src={cameraIcon} alt="Edit" style={{width: '12px', height: '12px'}} />
              </div>
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
