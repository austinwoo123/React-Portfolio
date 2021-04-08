import React from "react";
import style from "./style.css"
// function Footer() {
//     return (

//         <nav className="navbar1 navbar-light bg-light">
//             <span className="navbar-brand1 mb-0 h1">Portfolio by Austin Woo</span>
//         </nav>
//     )
// }


// export default Footer;

export default function Footer() {
    return (
        <div>
            <div className="container">
                <div className="card bg-white text-white">
                    <div className="row">
                        {/* <div className="col"> */}
                        {/* <div className="col-6"> */}
                        <h5 className="card-title">Austin Woo</h5>
                        <div class='footer-link-items'>
                            <a href='https://austin-woo.herokuapp.com/'>Portfolio</a> <br />
                            <a href='https://github.com/austinwoo123'>Github</a> <br />
                            <a href='https://www.linkedin.com/in/awoo95/'>LinkedIn</a> <br />
                            <a href='mailto: awoo004@ucr.edu'>Email</a>
                        </div>
                        {/* </div> */}
                        {/* </div> */}

                        <small className='website-rights'> &copy;{new Date().getFullYear()} MIT | All rights reserved</small>
                    </div>
                </div>
            </div>
        </div>
    )
}