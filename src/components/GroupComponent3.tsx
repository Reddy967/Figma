import PropTypes from "prop-types";
import "./GroupComponent3.css";

const GroupComponent3 = ({ className = "" }) => {
  return (
    <footer className={`group-footer ${className}`}>
      <div className="frame-child23" />
      <div className="footer-content">
        <div className="footer-left-parent">
          <div className="footer-left">
            <div className="logohere-parent">
              <h3 className="logohere1">
                <span>Logo</span>
                <span className="here1">Here</span>
              </h3>
              <div className="proofers-offer-a">
                Proofers offer a wide variety of tailor-made services to meet
                your individual needs. Proofers offer a number of core services
                which include proofreading and copy-editing (thesis,
                dissertations, essays reports), document formatting and
                plagiarism
              </div>
            </div>
          </div>
          <div className="quick-links-parent">
            <h3 className="quick-links">Quick Links</h3>
            <div className="link-list">
              <div className="home1">Home</div>
              <a className="services1">Services</a>
              <div className="pricing">Pricing</div>
              <div className="submit-ordr">Submit Ordr</div>
            </div>
          </div>
          <div className="newsletter">
            <div className="subscribe">
              <h3 className="quick-links">Subscribe Newsletter</h3>
              <div className="email-input">
                <div className="input-container">
                  <div className="input-container-child" />
                  <div className="email-field">
                    <div className="your-email">Your Email</div>
                  </div>
                  <div className="submit-button">
                    <div className="submit-button-child" />
                    <img className="margin-icon" alt="" src="/margin.svg" />
                  </div>
                </div>
                <div className="social-icons">
                  <img
                    className="social-icons-child"
                    alt=""
                    src="/group-987.svg"
                  />
                  <img
                    className="social-icons-child"
                    alt=""
                    src="/group-988.svg"
                  />
                  <img
                    className="social-icons-child"
                    alt=""
                    src="/group-989.svg"
                  />
                  <img
                    className="social-icons-child"
                    alt=""
                    src="/group-990.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="container-icon2" alt="" />
      <div className="copyright-container-parent">
        <div className="copyright-container">
          <div className="container2" />
        </div>
        <div className="copyright-2022-all-rights-parent">
          <div className="copyright-2022">
            Copyright: © 2022 | All Rights Reserved
          </div>
          <div className="legal-links">
            <a className="privacy-policy">Privacy Policy</a>
            <div className="legal-separator">
              <div className="legal-separator-child" />
            </div>
            <div className="trms-condition">{`Trms & Condition`}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent3;
