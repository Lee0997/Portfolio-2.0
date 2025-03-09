import "./about.css";
import Team from "../../img/Team.jpg";

export const About = () => {
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
          other as we progress in the tech industry. Alongside them, my current
          peers at LEAD Training have also been instrumental in helping me
          refine my skills and get back into software development.
        </p>
        <p className="a-desc">
          As a person with a background in hospitality, construction and
          fabrication, I had an arduous journey with humble beginnings. However,
          I remained focused and threw myself in alongside my peers. Quickly
          realising how much I liked coding and working with my team, I began to
          spend my free time refining my skills and possibly enjoying a coding
          meme here and there... I'm a gaming enthusiast, I love writing and
          more than anything, I enjoy a challenge!
        </p>
      </div>
    </div>
  );
};
