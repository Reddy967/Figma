import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`professional-container-wrapper ${className}`}>
      <div className="professional-container">
        <div className="professional-content1">
          <div className="professional-description1">
            <div className="professional-title-parent">
              <div className="professional-title">
                <div className="we-are-professional1">WE ARE PROFESSIONAL</div>
                <h1 className="who-we-are">Who We Are</h1>
              </div>
              <div className="we-offer-fast">
                We offer fast, affordable and quality proofreading services for
                students and professionals. We proofread all documents ranging
                from essays, assignments, dissertations, speeches, proposals,
                presentations, theses to even short stories.
              </div>
            </div>
            <img
              className="professional-description-child"
              loading="lazy"
              alt=""
              src="/group-27@2x.png"
            />
          </div>
          <div className="working-hours">
            <div className="hours-container">
              <div className="rectangle-parent5">
                <div className="frame-child9" />
                <div className="we-are-working-container">
                  <p className="we-are">We Are</p>
                  <p className="we-are">working</p>
                  <p className="we-are">24/7, 365 days</p>
                </div>
              </div>
            </div>
            <div className="rectangle-parent6">
              <div className="frame-child10" />
              <div className="find-out-more3">Find Out More</div>
              <div className="arrow-wrapper1">
                <img className="arrow-icon3" alt="" src="/arrow.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="format-container-wrapper">
          <div className="format-container">
            <div className="format-title">
              <div className="formatt">FORMATT</div>
            </div>
            <h1 className="who-we-are">We Work With Every Major Format</h1>
          </div>
        </div>
        <div className="format-gallery">
          <div className="rectangle-parent7">
            <div className="frame-child11" />
            <img
              className="screenshot-2022-05-21-at-556"
              loading="lazy"
              alt=""
              src="/screenshot-20220521-at-556-1@2x.png"
            />
            <div className="format-names">
              <div className="ms-word">MS Word</div>
            </div>
          </div>
          <div className="rectangle-parent8">
            <div className="frame-child11" />
            <img
              className="screenshot-2022-05-21-at-5561"
              loading="lazy"
              alt=""
              src="/screenshot-20220521-at-556-4@2x.png"
            />
            <div className="pdf-wrapper">
              <div className="pdf">PDF</div>
            </div>
          </div>
          <div className="rectangle-parent9">
            <div className="frame-child11" />
            <img
              className="screenshot-2022-05-21-at-5562"
              loading="lazy"
              alt=""
              src="/screenshot-20220521-at-556-8@2x.png"
            />
            <div className="latex-wrapper">
              <div className="latex">LaTex</div>
            </div>
          </div>
          <div className="rectangle-parent10">
            <div className="frame-child11" />
            <img
              className="screenshot-2022-05-21-at-5563"
              loading="lazy"
              alt=""
              src="/screenshot-20220521-at-556-12@2x.png"
            />
            <div className="ms-excel-wrapper">
              <div className="ms-excel">MS Excel</div>
            </div>
          </div>
          <div className="rectangle-parent11">
            <div className="frame-child11" />
            <div className="screenshot-2022-05-21-at-556-wrapper">
              <img
                className="screenshot-2022-05-21-at-5564"
                loading="lazy"
                alt=""
                src="/screenshot-20220521-at-556-11@2x.png"
              />
            </div>
            <div className="plain-text">Plain Text</div>
          </div>
          <div className="rectangle-parent12">
            <div className="frame-child11" />
            <div className="screenshot-2022-05-21-at-556-container">
              <img
                className="screenshot-2022-05-21-at-5565"
                loading="lazy"
                alt=""
                src="/screenshot-20220521-at-556-9@2x.png"
              />
            </div>
            <div className="ms-powepoint">MS Powepoint</div>
          </div>
          <div className="rectangle-parent13">
            <div className="frame-child11" />
            <div className="screenshot-2022-05-21-at-556-frame">
              <img
                className="screenshot-2022-05-21-at-5566"
                alt=""
                src="/screenshot-20220521-at-556-13@2x.png"
              />
            </div>
            <div className="rich-text">Rich Text</div>
          </div>
          <div className="rectangle-parent14">
            <div className="frame-child11" />
            <img
              className="screenshot-2022-05-21-at-5567"
              alt=""
              src="/screenshot-20220521-at-556-11-1@2x.png"
            />
            <div className="pages-wrapper">
              <div className="pages">Pages</div>
            </div>
          </div>
          <div className="rectangle-parent15">
            <div className="frame-child11" />
            <div className="screenshot-2022-05-21-at-556-wrapper1">
              <img
                className="screenshot-2022-05-21-at-5565"
                alt=""
                src="/screenshot-20220521-at-556-14@2x.png"
              />
            </div>
            <div className="keynote">Keynote</div>
          </div>
          <div className="rectangle-parent16">
            <div className="frame-child11" />
            <div className="screenshot-2022-05-21-at-556-wrapper2">
              <img
                className="screenshot-2022-05-21-at-5569"
                alt=""
                src="/screenshot-20220521-at-556-13-1@2x.png"
              />
            </div>
            <div className="google-slides">Google Slides</div>
          </div>
          <div className="rectangle-parent17">
            <div className="frame-child11" />
            <img
              className="screenshot-2022-05-21-at-55610"
              alt=""
              src="/screenshot-20220521-at-556-12-1@2x.png"
            />
            <div className="odt-wrapper">
              <div className="odt">ODT</div>
            </div>
          </div>
          <div className="rectangle-parent17">
            <div className="frame-child11" />
            <img
              className="screenshot-2022-05-21-at-55610"
              loading="lazy"
              alt=""
              src="/screenshot-20220521-at-556-15@2x.png"
            />
            <div className="jpg-wrapper">
              <div className="jpg">JPG</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
