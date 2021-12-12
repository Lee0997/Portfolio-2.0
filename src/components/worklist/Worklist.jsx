import "./worklist.css";
import Work from "../work/Work";
import {assignment} from "../../data";

function Worklist() {
  return (
    <div className="wl">
      <div className="wl-texts">
        <h1 className="wl-title"> Title </h1>
        <p className="wl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          consequuntur praesentium reiciendis mollitia aliquam, qui dicta
          placeat dignissimos magni sed, alias ad pariatur aperiam expedita enim
          minus accusantium odio molestiae!
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
