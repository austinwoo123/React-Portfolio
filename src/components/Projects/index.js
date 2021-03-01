import React from "react";
import project1 from "./project.png"
import project2 from "./covidTracker.png"
import project3 from "./password.png"
import project4 from "./planner.png"
import style from "./style.css"
function Projects() {
    return (

        <div className="project-box">
            <img src={project1} className="project-pic" width="100" height="80"></img>
            <h1 className="projectName">Projects</h1>

            <img src={project2} className="project1-pic" width="200" height="200"></img>
            <p>Covid-19 Tracker</p>
            <div className="project-icons1">
                <a href="https://austinwoo123.github.io/COVID-19-Tracker/" target="_blank"><i
                    className="fab fa-github-square"></i></a>
                <a href="https://github.com/austinwoo123/Password-Generator/Develop/index.html" target="_blank"><i
                    className="fas fa-code-branch"></i></a>
            </div>
            <div className="project-icons2">
                <img src={project3} className="project2-pic" width="200" height="200"></img>
                <p>Password Generator</p>
                <div className="project-icons2">
                    <a href="https://austinwoo123.github.io/Password-Generator/Develop/index.html" target="_blank"><i
                        className="fab fa-github-square"></i></a>
                    <a href="https://github.com/austinwoo123/Password-Generator" target="_blank"><i
                        className="fas fa-code-branch"></i></a>
                </div>
            </div>
            <div className="project-icons3">
                <img src={project4} className="project1-pic" width="200" height="200"></img>
                <p>Day Planner</p>
                <div className="project-icons3">
                    <a href="https://austinwoo123.github.io/Day-Planner/Develop/index.html" target="_blank"><i
                        className="fab fa-github-square"></i></a>
                    <a href="https://github.com/austinwoo123/Day-Planner" target="_blank"><i
                        className="fas fa-code-branch"></i></a>
                </div>


            </div>
        </div>
    )
}


export default Projects;