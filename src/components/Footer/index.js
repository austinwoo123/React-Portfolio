import React from "react";
import style from "./style.css"

function Footer() {
    return (
        // <div>
        <div className="container">
            <h5 className="card-title">Austin Woo</h5>
            <div class='footer-link-items'>
                <a href='https://austin-woo.herokuapp.com/'>Portfolio</a> <br />
                <a href='https://github.com/austinwoo123'>Github</a> <br />
                <a href='https://www.linkedin.com/in/awoo95/'>LinkedIn</a> <br />
                <a href='mailto: awoo004@ucr.edu'>Email</a>
            </div>
            <small className='website-rights'> &copy;{new Date().getFullYear()} MIT | All rights reserved</small>
        </div>
    )
}
export default Footer;