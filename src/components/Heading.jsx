import React from 'react';
import ReactDOM from 'react-dom/client';
import css from "../style.css";
import { Routes, Route, Link } from "react-router-dom";
import logo from '../Images/iiitlogo.jpg'
function Heading() {
    return (
        <div className="HeadingImg">
            <div className="Dflex">
                <div className="classlogo">
                    <img id="classlogo-img" src={logo} alt="logo" />
                </div>
                <ul className="link">
                    <li >
                        <Link to="/">Home</Link>
                    </li>

                    <li >
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/club">Club</Link>
                    </li>
                    <li>
                        <a href="https://priyanshusingh46.github.io/Joining-Class/">
                            Join Classes
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Heading;