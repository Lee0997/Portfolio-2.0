import "./worklist.css";
import Work from "../work/Work";
import {assignment} from "../../data";

function Worklist() {
  return (
    <div className="wl">
      <div className="wl-texts">
        <h1 className="wl-title"> Some examples of my work... </h1>
        <p className="wl-desc">
          As a software developer without any formal experience, I am presenting some of the assignments I completed in my time with the University of Birmingham that I feel can reflect the skills I have picked up so far. 
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
