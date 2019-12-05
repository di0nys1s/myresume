import React from "react";

const Resume = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <blockquote>
          <p
            style={{
              marginTop: -50,
              color: "grey",
              fontStyle: "Times New Roman",
              fontSize: "small"
            }}
          >
            <i>
              "Keep Ithaka always in your mind. Arriving there is what you’re
              destined for. But don’t hurry the journey at all. Better if it
              lasts for years, so you’re old by the time you reach the island,
              wealthy with all you’ve gained on the way, not expecting Ithaka to
              make you rich. And if you find her poor, Ithaka won’t have fooled
              you. Wise as you will have become, so full of experience, you’ll
              have understood by then what these Ithakas mean."
            </i>
          </p>
        </blockquote>
        <h1 className="mb-0" style={{ fontSize: 90, marginTop: 50 }}>
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
          <a
            target="_blank"
            href="https://www.linkedin.com/in/burak-seyhan-b7167733/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a target="_blank" href="https://github.com/di0nys1s">
            <i className="fab fa-github"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/di0nys1s/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
