import aboutImage1 from "../assets/images/about-image-1.jpeg";
import aboutImage2 from "../assets/images/about-image-2.png";

const About = () => {
  return (
    <div className="about-page">
      {/* Who We Are Section */}
      <section className="about-section about-who-we-are">
        <div className="container">
          <div className="about-content">
            <div className="about-content__text">
              <h2 className="about-section__title">Who We Are</h2>
              <div className="about-content__description">
                <p>
                  <span style={{ color: "#f1c111" }}>I</span>nt
                  <span style={{ color: "#f1c111" }}>M</span>avens stands at the
                  forefront as a prominent provider of cutting-edge cloud
                  solutions. Our expertise spans across an array of services,
                  including Cloud Management, Multi-Cloud Strategy, Cloud
                  Migration, Application Modernization, Data Analytics & AI,
                  DevOps as a Service, Cloud Security, and Artificial
                  Intelligence.
                </p>
                <p>
                  Our dedicated team comprises certified cloud architects and
                  proficient data professionals who are unwavering in their
                  commitment to crafting solutions that are scalable, robust,
                  and precisely aligned with the unique requirements of your
                  business.
                </p>
              </div>
            </div>
            <div className="about-content__image">
              <img
                src={aboutImage1}
                alt="IntMavens Team"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose IntMavens Section */}
      <section className="about-section about-why-choose">
        <div className="container">
          <div className="about-content">
            <div className="about-content__image">
              <img
                src={aboutImage2}
                alt="Why Choose IntMavens"
                className="about-image"
              />
            </div>
            <div className="about-content__text">
              <h2 className="about-section__title">
                Why Choose <span style={{ color: "#f1c111" }}>I</span>nt
                <span style={{ color: "#f1c111" }}>M</span>avens
              </h2>
              <div className="about-features">
                <div className="about-feature">
                  <h3 className="about-feature__title">
                    Expertise from Microsoft Alumni
                  </h3>
                  <p className="about-feature__description">
                    Our team of experts includes individuals with hands-on
                    experience and deep knowledge gained from working at
                    Microsoft. This insider perspective gives us unique insights
                    into Microsoft's cloud services and technologies, ensuring
                    that we can provide the best guidance and solutions to our
                    clients.
                  </p>
                </div>

                <div className="about-feature">
                  <h3 className="about-feature__title">
                    Comprehensive Cloud Services
                  </h3>
                  <p className="about-feature__description">
                    IntMavens offers a wide range of cloud services, including
                    Cloud Management, Multi-Cloud Strategy, Cloud Migration,
                    Application Modernization, Data Analytics & AI, DevOps as a
                    Service, Cloud Security, and Site Reliability Engineering
                    (SRE). This comprehensive suite of services ensures that we
                    can address diverse cloud-related needs.
                  </p>
                </div>

                <div className="about-feature">
                  <h3 className="about-feature__title">
                    Security and Compliance
                  </h3>
                  <p className="about-feature__description">
                    Security is paramount in the cloud. Our expertise ensures
                    that client data is secure and that we adhere to
                    industry-specific compliance standards, providing peace of
                    mind.
                  </p>
                </div>

                <div className="about-feature">
                  <h3 className="about-feature__title">Proven Track Record</h3>
                  <p className="about-feature__description">
                    Our Microsoft alumni-led team has a proven track record of
                    successfully delivering cloud solutions to a wide range of
                    clients across industries. Client success stories and
                    testimonials speak to our capabilities and dedication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
