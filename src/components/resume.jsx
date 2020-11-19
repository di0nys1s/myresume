import React from "react";

const Resume = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about">
      <div className="w-100">
        <blockquote>
          <p
            style={{
              marginTop: -50,
              color: "grey",
              fontStyle: "Times New Roman",
              fontSize: "small"
            }}>
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
          Burak
          <span className="text-primary"> Seyhan</span>
        </h1>
        <div className="subheading mb-5">
          24 Owen Street · Brunswick West, VIC 3055 · (+61) 414007101 ·
          <a href="mailto:seyhanburak9@gmail.com">seyhanburak9@gmail.com</a>
        </div>
        <p className="lead mb-5">
        I am a highly motivated, curious, ACS Certified Full Stack Software Developer with a Computer Science background and professional experience in Software Testing which gives me a unique perspective and integrated approach to the IT projects. Accumulating years of different industry knowledge and experience in dynamic and fast-paced environments give me the ability to work complex technical and professional activities under general direction with pressure and strict deadlines. With having high level of communication and interpersonal skills in oral and written, I can present complex information to both technical and non-technical audiences. 
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
