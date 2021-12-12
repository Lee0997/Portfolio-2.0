import "./about.css";
import Team from "../../img/Team.jpg"

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
          On the left you'll see the people that got me to where I am today, this was my cohort.
          An amazing team with many talented individuals who continue to discuss and guide eachother on our journey into the development industry.
        </p>
        <p className="a-desc">
          As a person with a background in hospitality, construction and fabrication, I had an arduous journey with humble beginnings. However, I remained focused and threw myself in alongside my peers. Quickly realising how much I liked coding and working with my team, I began to spend my free time refining my skills and possibly enjoying a coding meme here and there... I'm a gaming enthusiast, I love writing and more than anything, I enjoy a challenge!   
        </p>
      </div>
    </div>
  );
};
