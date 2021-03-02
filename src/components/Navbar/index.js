import React from "react";
import logo from "../Untitled1.png"
import css from "./style.css"
function Nav() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Austin Woo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div class="w-100"> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="#project">Projects </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://docs.google.com/document/d/1LdAOp-bRTcsdBAv9UFHx_WJeeYfgQIe1h7Du_NGFm_o/edit?usp=sharing">Resume</a>
                        </li>

                    </ul>
                    {/* </div> */}
                </div>

            </div>
        </nav>
    );
}

export default Nav;
