import PropTypes from "prop-types";
import "./JobListings.css";

const JobListings = ({ className = "" }) => {
  return (
    <div className={`job-listings ${className}`}>
      <div className="job-listings-inner">
        <div className="frame-parent27">
          <div className="rectangle-parent31">
            <div className="frame-child55" />
            <div className="listing-content">
              <div className="listing-content-child" />
              <h3 className="python-full-stack">{`Python Full Stack  `}</h3>
              <div className="job-description-we-container">
                <p className="we-are-looking">Job Description:</p>
                <p className="we-are-looking">
                  We are looking for motivated , who are driven to make an
                  impact in the healthcare.
                </p>
                <p className="we-are-looking">&nbsp;</p>
                <p className="we-are-looking">Experience: 5-7 Years</p>
                <p className="we-are-looking">Location: Hyderabad</p>
                <p className="we-are-looking">&nbsp;</p>
                <p className="we-are-looking">
                  Key Skills : Django, Rest Framework
                </p>
              </div>
            </div>
            <div className="python-link">
              <div className="line-group">
                <div className="frame-child56" />
                <div className="find-more-button">
                  <div className="find-out-more5">Find Out More</div>
                  <img
                    className="find-more-button-child"
                    loading="lazy"
                    alt=""
                    src="/group-21.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper19">
            <div className="rectangle-parent32">
              <div className="frame-child57" />
              <div className="download1">Download</div>
            </div>
          </div>
        </div>
      </div>
      <div className="dot-net-listing">
        <div className="frame-parent28">
          <div className="rectangle-parent33">
            <div className="frame-child55" />
            <div className="frame-wrapper20">
              <div className="frame-parent29">
                <div className="dot-net-senior-engineer-wrapper">
                  <h3 className="dot-net-senior-engineer">
                    Dot-Net Senior Engineer
                  </h3>
                </div>
                <div className="job-description-we-container1">
                  <p className="we-are-looking">Job Description:</p>
                  <p className="we-are-looking">
                    We are looking for motivated , who are driven to make an
                    impact in the healthcare.
                  </p>
                  <p className="we-are-looking">&nbsp;</p>
                  <p className="we-are-looking">Experience: 5-7 Years</p>
                  <p className="we-are-looking">Location: Hyderabad</p>
                  <p className="we-are-looking">&nbsp;</p>
                  <p className="we-are-looking">
                    Key Skills : Django, Rest Framework
                  </p>
                </div>
              </div>
            </div>
            <div className="dot-net-link">
              <div className="dot-net-link-inner">
                <div className="frame-child59" />
              </div>
              <div className="find-more-button">
                <div className="find-out-more-container">
                  <div className="find-out-more5">Find Out More</div>
                </div>
                <img className="frame-child60" alt="" src="/group-21.svg" />
              </div>
            </div>
          </div>
          <div className="frame-wrapper21">
            <div className="rectangle-parent32">
              <div className="frame-child57" />
              <div className="download1">Download</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sales-listing">
        <div className="rectangle-parent35">
          <div className="frame-child55" />
          <div className="rectangle-parent36">
            <div className="frame-child63" />
            <div className="sales-executive-wrapper">
              <h3 className="sales-executive">Sales Executive</h3>
            </div>
            <div className="our-proofreaders-correct-container">
              <p className="we-are-looking">Our Proofreaders correct gramm</p>
              <p className="we-are-looking">
                -atical errors that you may have overlooked including
                punctuation
              </p>
              <p className="we-are-looking">verb tense, spelling, and</p>
            </div>
          </div>
          <div className="sales-link">
            <div className="vector-parent">
              <img
                className="line-icon"
                loading="lazy"
                alt=""
                src="/line-2.svg"
              />
              <div className="frame-parent31">
                <div className="find-out-more-frame">
                  <div className="find-out-more5">Find Out More</div>
                </div>
                <img
                  className="find-more-button-child"
                  alt=""
                  src="/group-21.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sales-listing-inner">
          <div className="rectangle-parent32">
            <div className="frame-child57" />
            <div className="download1">Download</div>
          </div>
        </div>
      </div>
    </div>
  );
};

JobListings.propTypes = {
  className: PropTypes.string,
};

export default JobListings;
