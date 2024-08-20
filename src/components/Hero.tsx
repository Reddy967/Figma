import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={`hero ${className}`}>
      <div className="hero-content">
        <img
          className="hero-shape-icon"
          loading="lazy"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className="welcome">
          <div className="welcome-child" />
          <div className="welcome-message">
            <div className="welcome-to-thinqor">
              WELCOME TO THINQOR SOLUTIONS
            </div>
            <h1 className="at-thinqor-solutions-container">
              <p className="at-thinqor-solutions">{`At Thinqor Solutions, `}</p>
              <p className="at-thinqor-solutions">{`we understand that `}</p>
              <p className="at-thinqor-solutions">
                every client's needs are unique.
              </p>
            </h1>
          </div>
          <div className="more-button">
            <div className="rectangle-group">
              <div className="frame-child2" />
              <div className="find-out-more">Find out more</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
