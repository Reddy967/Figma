import { useCallback } from "react";
import UploadDescription from "./UploadDescription";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const onGroupContainerClick = useCallback(() => {
    window.open(
      "https://www.figma.com/design/hyFKL6HDwsQ7TNMKrgt5MW/Website-Design-Landing-Page-(Community)?node-id=1010-10"
    );
  }, []);

  return (
    <section className={`process-container-wrapper ${className}`}>
      <div className="process-container">
        <div className="process-flow">
          <div className="process-step-one">
            <div className="process-title">
              <div className="process">PROCESS</div>
            </div>
            <h1 className="how-it-woks">How It Woks</h1>
          </div>
        </div>
        <div className="process-step-two">
          <UploadDescription
            group1145="/group-1145.svg"
            container="/container.svg"
            uploadYour="Upload your"
            jobDescription="Job Description"
          />
          <div className="display-resume">
            <UploadDescription
              propWidth="unset"
              propMinWidth="244px"
              propFlex="1"
              group1145="/group-1144.svg"
              container="/boundless-exploration.svg"
              propHeight="64px"
              uploadYour="Displaying the "
              jobDescription="matching resume"
            />
            <div className="download-resume">
              <img
                className="download-resume-child"
                loading="lazy"
                alt=""
                src="/group-1143.svg"
              />
              <h3 className="download-matched-resume-container">
                <p className="download-matched">Download matched</p>
                <p className="download-matched">{`resume `}</p>
              </h3>
            </div>
          </div>
        </div>
        <div className="process-link">
          <div className="rectangle-parent4" onClick={onGroupContainerClick}>
            <div className="frame-child8" />
            <div className="find-out-here">Find out here</div>
            <div className="arrow-frame">
              <img className="arrow-icon2" alt="" src="/arrow.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
