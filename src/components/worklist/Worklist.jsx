import "./worklist.css"
import Work from "../work/Work"

function Worklist() {
    return (
        <div className="wl">
            <div className="wl-texts">
                <h1 className="wl-title"> Title </h1>
                <p className="wl-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequuntur praesentium reiciendis mollitia aliquam, qui dicta placeat dignissimos magni sed, alias ad pariatur aperiam expedita enim minus accusantium odio molestiae!
                </p>
            </div>
            <div className="wl-list">
                <Work />
                <Work />
                <Work />
                <Work />
                <Work />
                <Work />
            </div>
        </div>
    )
}

export default Worklist
