import React from "react";

const Resume = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0" style={{ fontSize: 90 }}>
          Burak John
          <span className="text-primary"> Seyhan</span>
        </h1>
        <div className="subheading mb-5">
          24 Owen Street · Brunswick West, VIC 3055 · (+61) 414007101 ·
          <a href="mailto:seyhanburak9@gmail.com">seyhanburak9@gmail.com</a>
        </div>
        <p className="lead mb-5">
          Highly motivated, bilingual software developer with customer-driven
          nature and focus on working as part of team through offering wealth of
          more than 5 years of IT expertise in different roles. Excellent
          communicator with ability to meet deadlines and quickly resolve
          issues. Valuable team player with personable and dedicated nature.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/burak-seyhan-b7167733/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/di0nys1s">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/di0nys1s/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
