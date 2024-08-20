import Item from "../components/Item";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent3 from "../components/GroupComponent3";
import "./HttpswwwriddaracomGM.css";

const HttpswwwriddaracomGM = () => {
  return (
    <div className="httpswwwriddaracom-gm">
      <Item />
      <Hero />
      <Features />
      <Services />
      <section className="vision">
        <div className="vision-content">
          <img
            className="vision-shape-icon"
            loading="lazy"
            alt=""
            src="/rectangle-13@2x.png"
          />
          <div className="vision-heading-parent">
            <div className="vision-heading">
              <h1 className="vision1">VISION</h1>
            </div>
            <div className="to-be-part-container">
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">
                To be part of the futuristic technological solutions and become
                the most trusted and
              </p>
              <p className="blank-line">
                {" "}
                sought-after global digital transformation partner.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
      <FrameComponent1 />
      <GroupComponent3 />
    </div>
  );
};

export default HttpswwwriddaracomGM;
