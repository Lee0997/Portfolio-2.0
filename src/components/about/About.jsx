import "./about.css";
import Team from "../../img/Team.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Team} alt="" className="a-img"></img>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          On the left, you'll see the incredible people who helped shape my
          journey—my cohort. This talented and supportive group played a huge
          role in my development, and we continue to learn from and guide each
          other as we progress in the tech industry. Alongside them, my peers at
          LEAD Training and Just IT have also been instrumental in helping me
          refine my skills and expand into new areas.
        </p>
        <p className="a-desc">
          My journey began in hospitality, construction, and fabrication, but my
          passion for technology led me to retrain as a software developer.
          After completing a coding bootcamp with the University of Birmingham
          and working as a Tech Consultant, I continued to grow my skills in
          software and web development.
        </p>
        <p className="a-desc">
          Most recently, I joined the{" "}
          <strong>Just IT Data Technician Skills Bootcamp</strong>, where I
          transitioned into the world of data analysis. This intensive program
          covered Excel, SQL, Python, Tableau, Power BI, and cloud technologies
          like Azure. I completed hands-on projects in data cleaning,
          visualization, and business analysis, and developed a strong
          foundation in extracting insights from data to support business
          decisions. My time at Just IT has been pivotal in shaping me into a
          well-rounded <strong>Software Developer & Data Analyst</strong>.
        </p>
        <p className="a-desc">
          I am a gaming enthusiast, I love writing, and more than anything, I
          enjoy a challenge! Whether building web apps or uncovering insights
          from data, I am always eager to learn and grow.
        </p>
      </div>
    </div>
  );
};

export default About;
