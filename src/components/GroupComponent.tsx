import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({
  className = "",
  serviceShapes,
  managedServices,
  weAtThinqorSolutionsUnderstand,
}) => {
  return (
    <div className={`rectangle-parent1 ${className}`}>
      <div className="frame-child5" />
      <img
        className="service-shapes-icon"
        loading="lazy"
        alt=""
        src={serviceShapes}
      />
      <div className="service-content-wrapper">
        <div className="service-content">
          <h3 className="managed-services">{managedServices}</h3>
          <div className="service-descriptions">
            <div className="we-at-thinqor">
              {weAtThinqorSolutionsUnderstand}
            </div>
          </div>
          <div className="separators" />
          <div className="more-buttons">
            <div className="more-links">
              <div className="find-out-more1">Find Out More</div>
            </div>
            <img
              className="more-buttons-child"
              loading="lazy"
              alt=""
              src="/group-21.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  serviceShapes: PropTypes.string,
  managedServices: PropTypes.string,
  weAtThinqorSolutionsUnderstand: PropTypes.string,
};

export default GroupComponent;
