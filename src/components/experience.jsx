import React from "react";

const Experience = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">QA Engineer</h3>
            <div className="subheading mb-3">
              <a target="_blank" href="https://www.aefis.com">
                AEFIS LLC
              </a>
            </div>
            <p>
              In AEFIS agile development team, responsible for operating and
              managing end to end testing process in all servers as a Head of QA
              Operations.
            </p>
            <ul>
              <li>
                Collaborated with developers and product owners to stay current
                on product features and intended functionality
              </li>
              <li>
                Operated under Agile and Scrum frameworks to complete releases
                every fortnight and well-organized sprints
              </li>
              <li>
                Reduced overall testing hours by writing and optimizing
                automation test scripts in Selenium Web Driver
              </li>
              <li>
                Completed in-depth usability testing on Windows, Android and iOS
                mobile devices
              </li>
              <li>
                Authored and maintained well-organized, efficient and successful
                manual test cases for entire team
              </li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">January 2016 - September 2019</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">IT Business Analyst</h3>
            <div className="subheading mb-3">
              <a target="_blank" href="https://www.hepsiburada.com">
                hepsiburada.com
              </a>
            </div>
            <p>
              Operating end to end Business Analysis in Agile project team
              through working closely with software development and testing team
              members to design and develop solutions to meet client
              requirements for functionality, scalability and performance.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2014 - December 2015</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">IT Business Analyst</h3>
            <div className="subheading mb-3">
              <a target="_blank" href="https://www.ciceksepeti.com">
                Ciceksepeti.com
              </a>
            </div>
            <p>
              Responsible for conducting the analysis of the preparation of BI
              systems for supporting the decision making of the top managers.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">July 2013 - July 2014</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">IT Auditor</h3>
            <div className="subheading mb-3">KPMG Turkey</div>
            <p>
              Collecting and evaluating the evidence related to clients’
              information systems, practices, controls and operations to be able
              to understand and detect the critical risks in their IT process.
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">October 2011 - June 2013</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
