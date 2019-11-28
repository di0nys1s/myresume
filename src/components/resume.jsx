import React, { Component } from "react";

const Resume = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          Burak John
          <span className="text-primary"> Seyhan</span>
        </h1>
        <div className="subheading mb-5">
          24 Owen Street · Brunswick West, VIC 3055 · (+61) 414007101 ·
          <a href="mailto:seyhanburak9@gmail.com">seyhanburak9@gmail.com</a>
        </div>
        <p className="lead mb-5">
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
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
