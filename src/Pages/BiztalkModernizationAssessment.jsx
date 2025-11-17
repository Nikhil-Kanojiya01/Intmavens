import React from "react";
import modernizationImage from "../assets/images/biztalk-modernization-assessment.jpg";

const BiztalkModernizationAssessment = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero section--sm">
        <div className="container">
          <div className="service-hero__content">
            <h1 className="service-hero__title animate-slide-up-title">
              BizTalk Modernization Assessment
            </h1>
            <p className="service-hero__subtitle animate-slide-up-delay-1">
              Gain valuable insights into BizTalk Migration Readiness to Cloud.
              Aims to propose Modernisation plan and possible paths/options in
              compliance to Well Architecture Framework (WAF) guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* AIS Migration Focus Areas Section */}
      <section className="service-content section--light section--sm">
        <div className="container">
          <div className="u-text-center">
            <h2 className="service-section__title center animate-slide-up-title">
              AIS Migration Focus Areas
            </h2>
            <p className="service-hero__subtitle animate-slide-up-delay-1">
              Our comprehensive assessment evaluates your current{" "}
              <span style={{ color: "var(--primary)" }}>BizTalk</span>{" "}
              environment and provides strategic modernization pathways to Azure
              Integration Services.
            </p>
            <div className="health-check-diagram animate-slide-up-delay-2">
              <img
                src={modernizationImage}
                alt="BizTalk Modernization Assessment Focus Areas"
                className="service-image"
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="service-content section--sm">
        <div className="container">
          <div className="u-text-center">
            <h2 className="service-section__title center animate-slide-up-title">
              Objectives
            </h2>
            <p
              className="service-hero__subtitle animate-slide-up-delay-1"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Evaluate your BizTalk workloads and set up to understand best
              possible Migration Path. Get recommendations and assistance to
              reduce the downtime and risks to your service in Production and
              optimize performance in cost effective manner.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="service-content section--light section--sm">
        <div className="container">
          <div className="u-text-center">
            <h2 className="service-section__title center animate-slide-up-title">
              How it Works?
            </h2>

            <div
              className="grid grid--3 grid--gap-lg"
              style={{ marginTop: "3rem" }}
            >
              <div className="health-check-column">
                <h3 className="health-check-column__title">Stakeholders</h3>
                <ul className="health-check-list">
                  <li>BizTalk Admin</li>
                  <li>Integration Lead/Architect</li>
                  <li>Business Managers</li>
                  <li>Leadership Team</li>
                </ul>
              </div>

              <div className="health-check-column">
                <h3 className="health-check-column__title">Data Collected</h3>
                <ul className="health-check-list">
                  <li>BHM Report</li>
                  <li>BizTalk Documenter</li>
                  <li>Dependency Analysis</li>
                  <li>Known Issues and bottlenecks</li>
                  <li>Endpoints</li>
                </ul>
              </div>

              <div className="health-check-column">
                <h3 className="health-check-column__title">Deliverables</h3>
                <ul className="health-check-list">
                  <li>Presentation on Migration Paths & Plan</li>
                  <li>Landing Zone Guidelines and best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timelines Section */}
      <section className="service-content section--sm">
        <div className="container">
          <div className="u-text-center">
            <h2 className="service-section__title center animate-slide-up-title">
              Timelines
            </h2>

            <div
              className="timeline-cards"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                marginTop: "3rem",
                flexWrap: "wrap",
              }}
            >
              <div className="timeline-card timeline-card--day1">
                <div className="timeline-card__header">Day1</div>
                <div className="timeline-card__content">
                  <ul>
                    <li>Introduction</li>
                    <li>Discussion with Stakeholders</li>
                    <li>Data collection</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-card timeline-card--day2">
                <div className="timeline-card__header">Day2</div>
                <div className="timeline-card__content">
                  <ul>
                    <li>Data Analysis</li>
                    <li>Report Creation</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-card timeline-card--day3">
                <div className="timeline-card__header">Day3</div>
                <div className="timeline-card__content">
                  <ul>
                    <li>Insights Presentation</li>
                    <li>Migration Plan/Paths</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BiztalkModernizationAssessment;
