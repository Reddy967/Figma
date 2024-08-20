import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import "./Services.css";

const Services = ({ className = "" }) => {
  return (
    <section className={`services ${className}`}>
      <div className="services-content">
        <div className="services-header">
          <div className="services-heading">
            <div className="services-title">
              <div className="our-services">OUR SERVICES</div>
            </div>
            <h1 className="we-offers-the-container1">
              <p className="easier-and-smarter">
                We Offers the best practices,
              </p>
              <p className="easier-and-smarter">easier and smarter</p>
            </h1>
          </div>
        </div>
        <div className="services-list">
          <GroupComponent
            serviceShapes="/rectangle-12@2x.png"
            managedServices="Managed Services"
            weAtThinqorSolutionsUnderstand="We at Thinqor Solutions, understand the unique business and process needs of your clients; we develop solutions..."
          />
          <div className="rectangle-parent2">
            <div className="frame-child6" />
            <img
              className="container-icon"
              alt=""
              src="/rectangle-12-1@2x.png"
            />
            <div className="frame-wrapper1">
              <div className="frame-parent1">
                <div className="erp-sap-crm-consulting-parent">
                  <div className="erp-sap">ERP / SAP / CRM Consulting</div>
                  <blockquote className="we-offers-the2">
                    “We offers the best practices, easier and smarter ways to an
                    effective SAP implementation”
                  </blockquote>
                </div>
                <div className="container-parent">
                  <div className="container1" />
                  <div className="more-link">
                    <div className="more-button1">
                      <div className="find-out-more2">Find Out More</div>
                    </div>
                    <img
                      className="more-link-child"
                      alt=""
                      src="/group-21.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GroupComponent
            serviceShapes="/rectangle-12-2@2x.png"
            managedServices="GENAI, AI , ML..... "
            weAtThinqorSolutionsUnderstand="THINQOR has the capability, focus and skill to provide you uncompromised IoT expertise into the client’s business.."
          />
        </div>
        <div className="view-all-button">
          <div className="rectangle-parent3">
            <div className="frame-child7" />
            <a className="view-all">View All</a>
            <div className="arrow-container">
              <img className="arrow-icon1" alt="" src="/arrow.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;
