import "./intro.css";
import Me from "../../img/Me.png";

const Intro = () => {
  return (
    <>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">My name is</h2>
            <h1 className="i-name">Lee Nock</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">Data Analyst</div>
              </div>
            </div>
            <div className="i-description">
              Welcome! I'm Lee, a <span>software developer</span> and{" "}
              <span>data analyst</span> with a passion for building,
              problem-solving, and uncovering insights from data. I originally
              completed a coding bootcamp with the University of Birmingham,
              where I developed a strong foundation in web development and loved
              every second of it. Recently, I completed a course with LEAD
              Training to sharpen my skills and get back into software
              development. Along the way, I've expanded my expertise to include
              data analysis, working with Python, Jupyter Notebooks, and tools
              like Tableau and SQL. My portfolio now features both software and
              data analysis projects, including credit card fraud detection and
              student performance analysis. Some of the many skills I've picked
              up include HTML5, CSS3, JavaScript, jQuery, Bootstrap, MySQL,
              React.js, Python, and data visualization. Please scroll down to
              check out some of my work and learn more about me!
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="Lee Nock" className="i-img" />
        </div>
      </div>
      <div className="i-tech-stack">
        {/* Tech stack icons from tech-stack-icons folder with title attributes */}
        <img
          src={require("../../img/tech-stack-icons/HTML5.png")}
          alt="HTML5"
          className="i-tech-icon"
          title="HTML5"
        />
        <img
          src={require("../../img/tech-stack-icons/CSS3.png")}
          alt="CSS3"
          className="i-tech-icon"
          title="CSS3"
        />
        <img
          src={require("../../img/tech-stack-icons/JavaScript.png")}
          alt="JavaScript"
          className="i-tech-icon"
          title="JavaScript"
        />
        <img
          src={require("../../img/tech-stack-icons/jQuery.png")}
          alt="jQuery"
          className="i-tech-icon"
          title="jQuery"
        />
        <img
          src={require("../../img/tech-stack-icons/Bootstrap.png")}
          alt="Bootstrap"
          className="i-tech-icon"
          title="Bootstrap"
        />
        <img
          src={require("../../img/tech-stack-icons/MySQL.png")}
          alt="MySQL"
          className="i-tech-icon"
          title="MySQL"
        />
        <img
          src={require("../../img/tech-stack-icons/React.png")}
          alt="React"
          className="i-tech-icon"
          title="React"
        />
        <img
          src={require("../../img/tech-stack-icons/Python.png")}
          alt="Python"
          className="i-tech-icon"
          title="Python"
        />
        <img
          src={require("../../img/tech-stack-icons/Jupyter.png")}
          alt="Jupyter"
          className="i-tech-icon"
          title="Jupyter"
        />
        <img
          src={require("../../img/tech-stack-icons/Tableau.png")}
          alt="Tableau"
          className="i-tech-icon"
          title="Tableau"
        />
        <img
          src={require("../../img/tech-stack-icons/SQL-Developer.png")}
          alt="SQL"
          className="i-tech-icon"
          title="SQL"
        />
        <img
          src={require("../../img/tech-stack-icons/GitHub.png")}
          alt="GitHub"
          className="i-tech-icon"
          title="GitHub"
        />
        <img
          src={require("../../img/tech-stack-icons/Azure.png")}
          alt="Azure"
          className="i-tech-icon"
          title="Azure"
        />
        <img
          src={require("../../img/tech-stack-icons/PowerBI.png")}
          alt="PowerBI"
          className="i-tech-icon"
          title="PowerBI"
        />
        <img
          src={require("../../img/tech-stack-icons/Excel.png")}
          alt="Excel"
          className="i-tech-icon"
          title="Excel"
        />
      </div>
    </>
  );
};

export default Intro;
