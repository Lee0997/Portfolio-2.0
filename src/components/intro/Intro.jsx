import "./intro.css"
import Me from "../../img/Me.png"


const intro = () => {
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet tempore consectetur debitis cupiditate molestiae laboriosam porro labore provident eum facilis, obcaecati soluta eos placeat quia tempora animi nam rem.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg">
                </div>
                <img src={Me} alt="Me" className="i-img" />
            </div>
        </div>
    )
}

export default intro
