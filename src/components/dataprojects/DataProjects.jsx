import React from "react";
import "./dataprojects.css";

import fraudImg from "../../img/credit-card-fraud.jpeg";
import studentImg from "../../img/Parent_Student_Education_Comparison.png";

import justitImg from "../../img/Tableau_Visuals.png";

const dataProjects = [
  {
    title: "Credit Card Fraud Detection",
    description:
      "Exploratory data analysis, cleaning, modeling, and visualization of credit card transactions to detect fraudulent activity.",
    img: fraudImg,
    repo: "https://github.com/Lee0997/Portfolio-Data-Projects/tree/main/credit-card-fraud",
  },
  {
    title: "Student Performance Analysis",
    description:
      "Data analysis and visualization of student performance data, taking a look at whether or not parental education levels affected a student's exam scores.",
    img: studentImg,
    repo: "https://github.com/Lee0997/Portfolio-Data-Projects/tree/main/student-performance",
  },
  {
    title: "Just IT Data Technician Bootcamp",
    description:
      "A comprehensive learning journey covering Excel, SQL, Python, Tableau, Power BI, and Azure. This GitHub repository showcases my hands-on exercises, weekly assignments, and project work as I developed my skills as a data analyst.",
    img: justitImg,
    repo: "https://github.com/Lee0997/JustIT---DataWorkBooks",
  },
];

const DataProjects = () => (
  <div className="wl wl-data-projects">
    <div className="wl-texts">
      <h1 className="wl-title">Data Analysis Projects</h1>
      <p className="wl-desc">
        As a data analyst, I have completed several end-to-end projects
        involving data cleaning, exploratory analysis, modeling, and
        visualization. Below are some examples of my work using Python, Jupyter
        Notebooks, and other data tools.
      </p>
    </div>
    <div className="wl-list wl-list-data">
      {dataProjects.map((project, idx) => (
        <div className="w w-data-project" key={idx}>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            id="img-parent"
            style={{ display: "block" }}
          >
            <img src={project.img} alt={project.title} className="w-data-img" />
          </a>
          <div className="w-data-desc-block">
            <hr className="w-desc-separator" />
            <h3 className="w-title">{project.title}</h3>
            <p className="w-desc">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DataProjects;
