import React from "react";

const Skills = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-vuejs"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-github"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-microsoft"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-android"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-java"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-npm"></i>
          </li>
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            Mobile-First, Responsive Design
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Object Oriented Programming with Java, C#
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Browser Testing &amp; Debugging
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Functional Teams
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Multicultural Teams
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Agile Development &amp; Scrum
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
