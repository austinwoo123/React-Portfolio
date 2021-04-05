# React-Portfolio

## Table of Contents
1. [Description](#description)
2. [Deployed Link](#deployed-link)
3. [How to Start](#how-to-start)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Acknowledgements](#acknowledgements)

-----------------------
## Description
I used React to create a new and updated portfolio.

-----------------------
## Deployed Link
[Link to Deployed Site](https://austin-woo.herokuapp.com/)

-----------------------
## How to Start
1. Copy the repo from GitLab using your ssh key
2. Run Git bash
3. Type in "code ." to open Visual Studios Code
4. Open the index.html, script.js, and style.css file
-----------------------
## Code Snippets
```

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;


```
This code shows how I structured my portfolio in my app.js file. This is the overall blueprint of my entire application. 
 ```
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

        </div>
    )
}
```
This code shows how I created the project component and how my other componenets are structured as well.
 
-----------------------
## Built With
- Bootstrap
- Javascript
- HTML/CSS
- jQuery
- Font Awesome
- React


-----------------------
## Licenses
MIT

-----------------------
## Authors
- Austin Woo


-----------------------
## Acknowledgments
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp