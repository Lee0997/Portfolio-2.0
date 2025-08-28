import "./worklist.css";
import Work from "../work/Work";
import { assignment } from "../../data";

function Worklist() {
  return (
    <div className="wl">
      <div className="wl-texts">
        <h1 className="wl-title">Software Development Projects</h1>
        <p className="wl-desc">
          As a <strong>Software Developer & Data Analyst</strong>, I work on a
          variety of projects that showcase my skills in both fields. Below are
          some of my software development projects, including web apps and tools
          built with modern technologies. For my data analysis work, see the
          next section.
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
