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
                        Welcome! I'm Lee, I'm a software developer that recently completed my coding bootcamp course with the University of Birmingham and I loved every second of it. This is my portfolio!
                        Some of the many skills I have picked up are as follows:
                        HTML5, CSS3, JavaScipt, jQuery, Bootstrap, MySQL and of course React.js which this portfolio was actually built with and deployed on Heroku. Please scroll down a little more to see some of my work and some information about myself.
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
