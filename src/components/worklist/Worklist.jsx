import "./worklist.css";
import Work from "../work/Work";
import { assignment } from "../../data";

function Worklist() {
  return (
    <div className="wl">
      <div className="wl-texts">
        <h1 className="wl-title"> Some examples of my work... </h1>
        <p className="wl-desc">
          As a software developer, I am showcasing some of the projects and
          assignments I have completed to reflect the skills I've developed so
          far. After initially training with the University of Birmingham, I
          worked briefly as a Tech Consultant for QA before moving into my
          current role as a Software Solutions Consultant at OneAdvanced, where
          I work with XML and other technologies.
        </p>
      </div>
      <div className="wl-list">
        {assignment.map((item) => (
          <Work key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default Worklist;
