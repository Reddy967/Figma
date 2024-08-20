import PropTypes from "prop-types";
import "./Features.css";

const Features = ({ className = "" }) => {
  return (
    <section className={`features ${className}`}>
      <div className="professional">
        <div className="professional-content">
          <div className="professional-heading">
            <div className="we-are-professional">WE ARE PROFESSIONAL</div>
          </div>
          <div className="professional-description">
            <div className="solutions-description">
              <div className="solutions-content">
                <h1 className="we-are-providing-container">
                  <p className="we-are-providing">{`We are Providing best `}</p>
                  <p className="we-are-providing">Solutions</p>
                </h1>
              </div>
              <div className="our-team-of">
                Our team of seasoned professionals is dedicated to delivering
                exceptional services that meet your business objectives. We
                leverage the latest technologies and industry best practices to
                ensure that you receive the best possible solutions. Our client-
                oriented approach means that we take the time to understand your
                business, enabling us to provide personalized consultancy
                services that align with your goals.
              </div>
            </div>
            <div className="proofreading">
              <div className="proofreading-content">
                <img
                  className="an-intelligent-ev-brand-focusi"
                  alt=""
                  src="/an-intelligent-ev-brand-focusing-on-the-outdoor-ec@2x.png"
                />
                <div className="rectangle-container">
                  <div className="frame-child3" />
                  <div className="practices">
                    <img
                      className="proofreading-1-icon"
                      loading="lazy"
                      alt=""
                      src="/proofreading-1.svg"
                    />
                    <div className="we-offers-the-best-practices-parent">
                      <div className="we-offers-the-container">
                        <p className="we-are-providing">{`We offers the best practices, easier and `}</p>
                        <p className="we-are-providing">smarter</p>
                      </div>
                      <div className="practices-shapes">
                        <div className="shapes" />
                        <div className="shapes1" />
                      </div>
                    </div>
                  </div>
                  <div className="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="professional-inner">
          <div className="group-div">
            <div className="frame-child4" />
            <div className="get-started">Get Started</div>
            <div className="arrow-wrapper">
              <img className="arrow-icon" alt="" src="/arrow.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
