import React from "react";

const Resume = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0" style={{ fontSize: 90, marginTop: 50 }}>
          Burak
          <span className="text-primary"> Seyhan</span>
        </h1>
        <div className="subheading mb-5">
          Voorzorgstraat 52, Haarlem 2013 VR · (+31) 6 27 47 6868 ·
          <a href="mailto:seyhanburak9@gmail.com">seyhanburak9@gmail.com</a>
        </div>
        <p className="lead mb-5">
          I am a highly motivated, curious, ACS Certified Software Developer
          with a Master’s degree in Computer Science. Accumulating years of
          different industry knowledge and experience in dynamic and fast-paced
          environments give me the ability to work complex technical and
          professional activities under general direction with pressure and
          strict deadlines. With high level of communication and interpersonal
          skills in oral and written, I can present complex information to both
          technical and non-technical audiences.
        </p>
        <div className="social-icons">
          <a target="_blank" href="https://www.linkedin.com/in/burakjseyhan/">
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
