import "./work.css"

export const Work = ({img,link}) => {
    return (
        <div className='w'>
            <div className="w-browser">
                <div className="w-circle"></div>
                <div className="w-circle"></div>
                <div className="w-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="w-img"/>
            </a>
        </div>
    )
}

export default Work