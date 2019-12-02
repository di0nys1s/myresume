import React from "react";

const Award = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="awards"
    >
      <div className="w-100">
        <h2 className="mb-5">Awards &amp; Certifications</h2>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Winner of Monash Industry Experience Expo 2019 with Project Demeter
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Web Developer - Microsoft Web Developer Certification
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Ranked top 500 in university entrance exam 2017 in Turkey among 2
            million competitors
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Award;
