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
            <br />
            <p>
              <strong>Skills Improved:</strong> OOP with Java and C#, Asp.NET
              MVC, Unix Shell, RDBMS with SQL Server and NoSQL with MongoDB,
              Unit Testing, Python, HTML5, CSS3, JS, Android SDK, RESTful Web
              Services, Responsive UI/UX web and mobile design.
            </p>
            <p>
              <strong>Software Developer in Project Demeter: </strong>
              As a winner of Monash Industry Experience Expo 2019, Demeter is a
              comprehensive visual guide that helps refugee women to decide on a
              suitable suburb to start the business based on her unique needs.
              We provide information to help them with two aspects: business
              competition and family needs. In technology stack, Microsoft Stack
              is used including ASP.NET MVC for backend; HTML, CSS, JS and
              jQuery for frontend development and Azure for deployment. The
              project is also benefited from open data and for handling with
              data R and leaflet is used.
              <br />
              <br />
              <img
                className="img-fluid mx-auto mb-2"
                src="img/sa.png"
                alt="techstack"
                style={{ marginTop: 30 }}
              />
              <h4>
                <br />
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=qY7jmfkxM60"
                >
                  Demeter Product Video
                </a>
              </h4>
              <br />
            </p>
            <h3>Courses TAKEN</h3>
            <ul>
              <li>Programming foundations in Java</li>
              <li>Introduction to databases</li>
              <li>
                Computer architecture and operating systems - Unix Commands
              </li>
              <li>Data communications</li>
              <li>Project management - Agile Software Development</li>
              <li>
                Mobile and distributed computing systems - Android App
                Development
              </li>
              <li>
                System validation and verification, quality and standards -
                Testing with Java
              </li>
              <li>Distributed databases and big data - Python and MongoDB</li>
              <li>Software engineering</li>
              <li>
                Internet Applications Development - ASP.NET MVC Web Application
              </li>
              <li>User interface design and usability</li>
              <li>Managing Multicultural Teams</li>
              <li>
                Business intelligence and data warehousing - BI Dashboard Design
              </li>
              <li>Industry experience studio project</li>
              <li>Professional practice</li>
            </ul>
          </div>
          {/*
          <div className="resume-date text-md-right">
            <span className="text-primary">July 2017 - July 2019</span>
          </div>
          */}
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">Performance Education</h3>
            <div className="subheading mb-3">
              Professional Year, Information Technology
            </div>
          </div>
        </div>

        <br />

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">Bilge Adam Academy</h3>
            <div className="subheading mb-3">
              ASP.NET MVC Programming Certificate: Computer Programming
            </div>
            <p>
              Comprehensive education of Object-Oriented Programming with C# and
              ASP.NET MVC.
            </p>
          </div>
          {/*
          <div className="resume-date text-md-right">
            <span className="text-primary">January 2015 - June 2015</span>
          </div>
          */}
        </div>

        <br />

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">Middle East Technical University</h3>
            <div className="subheading mb-3">
              Bachelor of Science, Economics and Statistics
            </div>
          </div>

          {/*
          <div className="resume-date text-md-right">
            <span className="text-primary">September 2007 - June 2011</span>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Education;
