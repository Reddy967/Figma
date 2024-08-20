import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ className = "" }) => {
  return (
    <header className={`item ${className}`}>
      <div className="inner-item">
        <div className="nested-item">
          <div className="deep-nested-item">
            <div className="frame-parent">
              <div className="frame-group">
                <div className="group-wrapper">
                  <img
                    className="group-icon"
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                </div>
                <div className="enquiriesthinqorsolutionscom">
                  enquiries@thinqorsolutions.com
                </div>
              </div>
              <div className="frame-container">
                <div className="group-wrapper">
                  <img className="group-icon1" alt="" src="/group-1.svg" />
                </div>
                <a className="a">1-800-555-1234</a>
              </div>
            </div>
            <div className="frame-div">
              <img
                className="frame-child"
                loading="lazy"
                alt=""
                src="/group-1024.svg"
              />
              <div className="frame-wrapper">
                <img
                  className="frame-item"
                  loading="lazy"
                  alt=""
                  src="/group-1022.svg"
                />
              </div>
              <img
                className="frame-inner"
                loading="lazy"
                alt=""
                src="/group-1021.svg"
              />
              <img
                className="frame-child1"
                loading="lazy"
                alt=""
                src="/group-1023.svg"
              />
            </div>
          </div>
        </div>
        <div className="container" />
      </div>
      <div className="content">
        <nav className="header">
          <div className="logo-container">
            <a className="logohere">
              <span>Logo</span>
              <span className="here">Here</span>
            </a>
          </div>
          <nav className="navigation">
            <nav className="menu">
              <div className="home-button">
                <a className="home">Home</a>
              </div>
              <a className="jd-repo">JD Repo</a>
              <a className="jd-upload">JD Upload</a>
              <a className="about-us">About Us</a>
            </nav>
          </nav>
          <div className="contact-button">
            <div className="rectangle-parent">
              <div className="rectangle-div" />
              <a className="contact-us">Contact Us</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

Item.propTypes = {
  className: PropTypes.string,
};

export default Item;
