import FacebookIcon from "/src/assets/facebook.svg";
import TwitterIcon from "/src/assets/Twitter.svg";
import YouTubeIcon from "/src/assets/YouTube.svg";
import InstagramIcon from "/src/assets/Instagram.svg";
import LinkedInIcon from "/src/assets/linkedIn.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>
          <h2 className="footer-title">N A K E D</h2>
          <p className="footer-subtitle">Luxury shapewear</p>
          <div className="socials">
            <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
            <img src={FacebookIcon} alt="Facebook" className="social-icon" />
            <img src={InstagramIcon} alt="Instagram" className="social-icon" />
            <img src={TwitterIcon} alt="Twitter" className="social-icon" />
            <img src={YouTubeIcon} alt="YouTube" className="social-icon" />
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h2 className="footer-section-title">Menu</h2>
            <div className="footer-section-links">
              <a href="/">Home</a>
              <a href="#">Gallery</a>
              <a href="#">Contact Us</a>
              <a href="#">FAQs</a>
            </div>
          </div>

          <div className="footer-section">
            <h2 className="footer-section-title">Quick links</h2>
            <div className="footer-section-links">
              <a href="#">Shipping Policies</a>
              <a href="#">Return policy</a>
              <a href="#">Our Sales Outlets</a>
            </div>
          </div>

          <div className="footer-section">
            <h2 className="footer-section-title">Download app</h2>
            <div className="footer-section-links">
              <a href="#">Download app on Android</a>
              <a href="#">Download app on iOS</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <div className="footer-bottom-content">
          <p>Copyright 2024 NAKED. All Rights Reserved. Privacy & Cookie Policy</p>
          <p>Powered by NAKED</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
