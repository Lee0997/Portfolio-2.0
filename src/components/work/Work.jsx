import "./work.css";

function getHeadingFromDescription(description, title) {
  if (title) return title;
  if (!description) return "Project";
  const firstSentence = description.split(/[.!?]/)[0];
  if (firstSentence.length < 40) return firstSentence.trim();
  return description;
}

export const Work = ({ img, link, description, title }) => {
  const heading = getHeadingFromDescription(description, title);
  return (
    <div className="w">
      <div className="w-browser">
        <div className="w-circle"></div>
        <div className="w-circle"></div>
        <div className="w-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="Project" className="w-img" />
      </a>
      {description && (
        <div className="w-desc-block">
          <h4 className="w-desc-heading">{heading}</h4>
          <p className="w-desc">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Work;
