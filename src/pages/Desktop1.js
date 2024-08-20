import FrameComponent8 from "../components/FrameComponent8";
import JobListings from "../components/JobListings";
import "./Desktop1.css";

const Desktop = () => {
  return (
    <div className="desktop-11">
      <header className="frame-group">
        <div className="frame-container">
          <div className="frame-wrapper">
            <div className="frame-div">
              <div className="frame-wrapper1">
                <div className="frame-parent1">
                  <div className="frame-parent2">
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
                  <div className="frame-wrapper2">
                    <div className="frame-parent3">
                      <div className="group-container">
                        <img
                          className="group-icon1"
                          alt=""
                          src="/group-11.svg"
                        />
                      </div>
                      <a className="a">1-800-555-1234</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent4">
                <img
                  className="frame-item"
                  loading="lazy"
                  alt=""
                  src="/group-10241.svg"
                />
                <div className="frame-wrapper3">
                  <img
                    className="frame-inner"
                    loading="lazy"
                    alt=""
                    src="/group-10221.svg"
                  />
                </div>
                <img
                  className="frame-child1"
                  loading="lazy"
                  alt=""
                  src="/group-10211.svg"
                />
                <img
                  className="frame-child2"
                  loading="lazy"
                  alt=""
                  src="/group-10231.svg"
                />
              </div>
            </div>
          </div>
          <div className="line-div" />
        </div>
        <div className="frame-wrapper4">
          <FrameComponent8 />
        </div>
      </header>
      <section className="rectangle-group">
        <img className="rectangle-icon" alt="" src="/rectangle-13@2x.png" />
        <img className="files-icon" loading="lazy" alt="" src="/files@2x.png" />
        <div className="job-description-repository-wrapper">
          <h1 className="job-description-repository">
            Job Description Repository
          </h1>
        </div>
      </section>
      <div className="desktop-1-inner">
        <div className="frame-parent5">
          <div className="frame-wrapper5">
            <div className="upload-parent">
              <img
                className="upload-icon"
                loading="lazy"
                alt=""
                src="/upload@2x.png"
              />
              <div className="upload-button">
                <div className="rectangle-container">
                  <div className="rectangle-div" />
                  <div className="upload">Upload</div>
                </div>
              </div>
            </div>
          </div>
          <JobListings />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
