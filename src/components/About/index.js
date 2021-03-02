import React from "react";
import style from "./style.css"
import picture from "./aw.png"

function About() {
    return (
        <div className="container-1">
            <div id="about"></div>
            <div className="about">
                <img src={picture} className="profile-pic"></img>
                <h1 class="about-Name">Austin Woo</h1>
                <div className="line-break"></div>
                <h2>| Web Developer |</h2>
                <p>Hello, I'm Austin. Welcome to my portfolio! I am a recent graduate from the University of California,
                Riverside. I joined the UC Berkeley Bootcamp because I wanted to make a career change from working in
                a
                professional sales and marketing environment to a career in tech. I gravitated toward coding because
                I have
                always had a passion with working with computers and I wanted to pursue web development as my next
                career
            path.</p>
            </div>


        </div>
    )
}

export default About