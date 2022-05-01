import React from 'react';
import ReactDOM from 'react-dom/client';
import css from "../style.css";
function Fotter(){
    return (
        <div className ="Fotter-outer">
            <div className="fotteraddress">
                <h1>Contact</h1>

                <span className="span1">Indian Institute of Information Technology Una</span><br></br>
                <span className="span1">Permanent Campus: Vill. Saloh, Teh. Haroli, Distt. Una</span><br></br>
                <span className="span1">Himachal Pradesh-177209</span><br></br>
                <span className="span1">Phone : 01975-257908</span><br></br>
                <span className="span1">Email: director@iiitu.ac.in</span><br></br>
            </div>

            <div className="fotterlink">
                <h1>Quick Link</h1>
                <li className="span1">Home</li>
                <li className="span1">Campus</li>
                <li className="span1">Admission</li>
                <li className="span1">Departments</li>
                <li className="span1">How to reach </li>
            </div>

            <div className="fotterlink">
                <h1>Quick Link</h1>
                <li className="span1">Tender</li>
                <li className="span1">Contact us</li>
                <li className="span1">Academics</li>
                <li className="span1">Recuriments</li>
                <li className="span1">Awards</li>
            </div>

            <div className="map">
                <h1> Find on Map</h1>
                <p>
                <iframe iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5650478520647!2d76.18857071560443!3d31.481148981382653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb048ae5c5a1%3A0xc34e57ff76bd06ba!2sIIIT%20Una%20Permanent%20Campus!5e0!3m2!1sen!2sin!4v1651387126376!5m2!1sen!2sin "style={{ width:"400", height:"300", style:"border:0"}}></iframe>
                </p>
                   
            </div>

        </div>
    );
}
export default Fotter;