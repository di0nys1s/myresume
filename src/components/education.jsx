import React from "react";

const Education = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
    >
      <div className="w-100">
        <h2 className="mb-5">Education</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Monash University</h3>
            <div className="subheading mb-3">
              Faculty of Information Technology
            </div>
            <div>Master of Information Technology - Web Development Track</div>
            <p>lorem ipsum</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">July 2017 - July 2019</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">Middle East Technical University</h3>
            <div className="subheading mb-3">
              Bachelor of Statistics and Economics
            </div>
            <p>lorem ipsum</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">September 2007 - June 2011</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
