import { useMemo } from "react";
import PropTypes from "prop-types";
import "./UploadDescription.css";

const UploadDescription = ({
  className = "",
  propWidth,
  propMinWidth,
  propFlex,
  group1145,
  container,
  propHeight,
  uploadYour,
  jobDescription,
}) => {
  const uploadDescriptionStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propWidth, propMinWidth, propFlex]);

  const containerIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`upload-description ${className}`}
      style={uploadDescriptionStyle}
    >
      <div className="upload-container">
        <img
          className="upload-container-child"
          loading="lazy"
          alt=""
          src={group1145}
        />
        <div className="upload">
          <img
            className="container-icon1"
            alt=""
            src={container}
            style={containerIconStyle}
          />
        </div>
      </div>
      <h3 className="upload-your-job-container">
        <p className="upload-your">{uploadYour}</p>
        <p className="upload-your">{jobDescription}</p>
      </h3>
    </div>
  );
};

UploadDescription.propTypes = {
  className: PropTypes.string,
  group1145: PropTypes.string,
  container: PropTypes.string,
  uploadYour: PropTypes.string,
  jobDescription: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,
};

export default UploadDescription;
