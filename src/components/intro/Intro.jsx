import "./intro.css";
import Me from "../../img/Me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">My name is</h2>
          <h1 className="i-name">Lee Nock</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Student</div>
            </div>
          </div>
          <div className="i-description">
            Welcome! I'm Lee, a <span>software developer</span> and{" "}
            <span>data analyst</span> with a passion for building,
            problem-solving, and uncovering insights from data. I originally
            completed a coding bootcamp with the University of Birmingham, where
            I developed a strong foundation in web development and loved every
            second of it. Recently, I completed a course with LEAD Training to
            sharpen my skills and get back into software development. Along the
            way, I've expanded my expertise to include data analysis, working
            with Python, Jupyter Notebooks, and tools like Tableau and SQL. My
            portfolio now features both software and data analysis projects,
            including credit card fraud detection and student performance
            analysis. Some of the many skills I've picked up include HTML5,
            CSS3, JavaScript, jQuery, Bootstrap, MySQL, React.js, Python, and
            data visualization. Please scroll down to check out some of my work
            and learn more about me!
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="Lee Nock" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
