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
            Welcome! I'm Lee, a software developer with a passion for building
            and problem-solving. I originally completed a coding bootcamp with
            the University of Birmingham, where I developed a strong foundation
            in web development and loved every second of it. Recently, I
            completed a course with LEAD Training to sharpen my skills and get
            back into software development. Some of the many skills I've picked
            up along the way include HTML5, CSS3, JavaScript, jQuery, Bootstrap,
            MySQL, and React.js, which this portfolio is built with. Please
            scroll down to check out some of my work and learn more about me!
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
