import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <div className={`frame-parent26 ${className}`}>
      <div className="logohere-container">
        <a className="logohere3">
          <span>Logo</span>
          <span className="here3">Here</span>
        </a>
      </div>
      <nav className="nav-bar">
        <nav className="nav-bar-items">
          <div className="nav-bar-links">
            <a className="home3">Home</a>
          </div>
          <a className="jd-repo2">JD Repo</a>
          <div className="nav-bar-links1">
            <a className="jd-upload2">JD Upload</a>
          </div>
          <a className="about-us2">About Us</a>
        </nav>
      </nav>
      <div className="rectangle-parent30">
        <div className="frame-child54" />
        <a className="contact-us2">Contact Us</a>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
