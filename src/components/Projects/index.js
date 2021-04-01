import React from "react";
import project1 from "./project.png";
import project2 from "./covidTracker.png";
import project3 from "./password.png";
import project4 from "./planner.png";
import project5 from "./project5.png";
import project6 from "./project6.png";
import style from "./style.css"
function Projects() {
    return (

        <div className="project-box">
            <div id="project"></div>
            <h1 className="projectName">Projects</h1>

            <div className="line-break3"></div>


            <img src={project2} className="project1-pic" width="400" height="300"></img>
            <p>Covid-19 Tracker</p>
            <div className="project-icons1">
                <a href="https://austinwoo123.github.io/COVID-19-Tracker/" target="_blank"><i
                    className="fab fa-github-square"></i></a>
                <a href="https://github.com/austinwoo123/Password-Generator/Develop/index.html" target="_blank"><i
                    className="fas fa-code-branch"></i></a>
            </div>
            <div className="project-icons2">
                <img src={project3} className="project2-pic" width="400" height="300"></img>
                <p>Password Generator</p>
                <div className="project-icons2">
                    <a href="https://austinwoo123.github.io/Password-Generator/Develop/index.html" target="_blank"><i
                        className="fab fa-github-square"></i></a>
                    <a href="https://github.com/austinwoo123/Password-Generator" target="_blank"><i
                        className="fas fa-code-branch"></i></a>
                </div>
            </div>
            <div className="project-icons3">
                <img src={project4} className="project3-pic" width="400" height="300"></img>
                <p>Day Planner</p>
                <div className="project-icons3">
                    <a href="https://austinwoo123.github.io/Day-Planner/Develop/index.html" target="_blank"><i
                        className="fab fa-github-square"></i></a>
                    <a href="https://github.com/austinwoo123/Day-Planner" target="_blank"><i
                        className="fas fa-code-branch"></i></a>
                </div>

            </div>
            <div className="project-icons4">
                <img className="anim" className="project3-pic" width="400" height="300" src={project5} alt="project img" ></img>
                <p className="project5">Database Crawler</p>
                <div className="project-icons1">
                    <a href="https://ancient-wave-96254.herokuapp.com/" target="_blank"><i className="fab fa-github-square"></i></a>
                    <a href="https://github.com/austinwoo123/Database-Crawler" target="_blank"><i
                        className="fas fa-code-branch"></i></a>
                </div>


            </div>

            {/* <div className="project-icons5">
                <img className="anim" className="project3-pic" width="400" height="300" src={project6} alt="project img" ></img>
                <p className="project5">Google Books Search App</p>
                <div className="project-icons1">
                    <a href="https://ancient-peak-31427.herokuapp.com" target="_blank"><i className="fab fa-github-square"></i></a>
                    <a href="https://github.com/austinwoo123/deploy-google-search" target="_blank"><i
                        className="fas fa-code-branch"></i></a>
                </div>


            </div> */}

        </div>
    )
}


export default Projects;