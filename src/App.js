import React from "react";
import Navbar from "./components/navbar";
import Resume from "./components/resume";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";
import Interest from "./components/interests";
import Award from "./components/awards";
import "./App.css";

function App() {
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <Resume />
        <hr className="m-0" />
        <Experience />
        <hr />
        <Education />
        <hr />
        <Skills />
        <hr />
        <Interest />
        <hr />
        <Award />
      </React.Fragment>
    </div>
  );
}

export default App;
