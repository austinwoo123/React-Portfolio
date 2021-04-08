import React from "react";
import style1 from "./style1.css"
import contact from "../contact.png"
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Welcome to my Portfolio!</h1>
            </div>
            <div className="contact-box">
                <div id="contact"></div>
                <img src={contact} class="contact-pic"></img>
                <h1>Contact</h1>
                <div class="line-break1"></div>
                <div className="social-icons1">
                    <a href="https://github.com/austinwoo123" target="_blank"><i className="fab fa-github-square"></i></a>
                    <a href="https://www.linkedin.com/in/awoo95/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:awoo004@ucr.edu" target="_blank"><i className="fas fa-envelope"></i></a>
                </div>
                <h3>| San Francisco,CA |</h3>
                <h3>(415) 312-8396</h3>
                <h3>Email: awoo004@ucr.edu</h3>
            </div>
        </div>








    )
}
export default Header;