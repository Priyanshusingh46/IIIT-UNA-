import React from 'react';
import css from "../style.css";
import { Routes, Route, Link } from "react-router-dom";
import Fotter from './Fotter.jsx'
import Fotte from './Fotter1.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../Images/iiitlogo.jpg'
import force from '../Images/force.jpg'
import Aavesh from '../Images/Aavesh.jpg'
import Datascience from '../Images/datasciencelogo.jpg'
function Club() {
  return (
    AOS.init(),
    <div className="Club">
        <div className="Headingclub">
        <div className="Himgclub">
                <img id="clubimg"src={logo} alt="logo" />
            </div>
            <ul className="link">
            <li id="Home">
            <Link to="/">Home</Link>
          </li>
          <li id="About">
            <Link to="/about">About</Link>
          </li>
          <li id="Club">
            <Link  to="/club">Club</Link>
          </li>
          <li id='Join'>
                        <a href="https://priyanshusingh46.github.io/Joining-Class/">Join Class
                        </a>
                    </li>
            </ul>
        </div>

        <div ClassName="forceclub" style={{display:"flex"}}>
            <div className="forceinfo">
                <h1> Force</h1>
                <span>FORCE -Forum of Computer Engineers is the association of computer science in IIT Una.Our main </span><br></br>
                <span>objective is to encourage open source software,improving coding culture,project building and intro-</span><br></br>
                <span>ducing new platforms to work on. It provides opportunity for students to broaden their knowledge</span><br></br>
                <span> the field of computer science opportunity and interact with other student who have shared interest.</span><br></br>
                <span>Recently Our Club Organished a workshop of 18 days in web-Development and UI/Ux Design , in</span><br></br>
                <span> which fresher participated We also focus on the Development of other fields of thechnology. Our</span><br></br>
                <span>Main objective is to make world life so easier that with a single click we can do anything for any information visit to our force site</span>
            </div>
            <div data-aos="fade-left"  data-aos-offset="300" className="forceimg">
                <img id="forceimg-img"src ={force} alt="forcelogo"></img>
            </div>
        </div>


        <div className="Aaveshclub" style={{display:"flex"}}>
            <h1 style={{marginLeft:"60px",fontSize:"48px"}}>Aavesh</h1>
            <div data-aos="fade-right" data-aos-offset="300" className="Aaveshimg">
                <img id ="Aaveshimg1"src={Aavesh} alt ="Aavesh"></img>
            </div>

            <div className="Aaveshinfo">
                <span>Aavesh is an electronics society that strives to teach and help students acquire new skills in an era of </span><br></br>
                <span>rapidly evolving technology in the field of electronics and communication engineering. The Society </span><br></br>
                <span>aims to  provide potential minds of IIITU a platform to discuss innovative ideas and nurture their ski- </span><br></br>
                <span> lls to tackle real life challenges in the world today and contribute to the technical society through vari- </span><br></br>
                <span>ous projects, patents and research publications. We will be organizing various expert lectures, worksh- </span><br></br>
                <span> ops, mentorship programs as well as competitions throughout the year to keep the students learning and </span><br></br>
                <span>providing them the necessary resources to implement their ideas. Activities of this club are published in </span><br></br>
                <span>the Current event section.</span><br></br>
            </div>
        </div>


        <div className="Datescienceclub">

        <div className="DataScience">
                <h1 id="Datah1"> DataScience </h1>
                <span id="Data1">This is the club of IIIT UNA, where we are working for elevating the culture of Machine </span><br></br>
                <span id="Data1"> Learning and Data Science As we all know that AI is the new electricity'. Unlike ever</span><br></br>
                <span id="Data1"> before, Data Science and Artificial Intelligence are on a boom right now and this field is </span><br></br>
                <span>making more progress than many other fields combined. Seeing the ongoing trend, this </span><br></br>
                <span>club focuses on building awareness and sharing knowledge about the same. Now a day </span><br></br>
                <span>we are seeing Datascience is used in each and every fields so, our main motive is to make </span><br></br>
                <span>societiy aware about these kind of new Technology.</span><br></br>
                
            </div>
            <div data-aos="fade-left" data-aos-offset="300" className="datascienceimg">
                <img id="datascienceimg1"src ={Datascience} alt="error" ></img>
            </div>

        </div>
        <Fotter />
        <Fotte />
    </div>

  );
}
export default Club;