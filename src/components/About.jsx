import React from 'react';
import rimage from '../Images/flag.jpg'
function About() {
  return (
    <div className="About">
        <h1 id="headingh1">About Us</h1>
        <div className="changes">
            <div className="Text">
                <span>IIIT Una is one of the 20 IIITs being setup, funded and managed by the Ministry of </span><br></br>
                <span>Human Resource Development, Govt. of India under the ublic Private Partnership </span><br></br>
                <span> PPP) model The partners setting up IIIT Una are the Ministry of Human  Resource </span><br></br>
                <span>Development, Govt. of India, he Govt. of Himachal Pradesh, HP Power corporation </span><br></br>
                <span>Limited and HP Transmission Corporation Limited. Admissions to the undergraduate  </span><br></br>
                <span>programmes in the Institute are made through the Joint Entrance Examination (JEE).</span><br></br>

            </div>
      <div className = "Aimage">
        <img id="ImageA" src ={rimage} alt="error" />
      </div>
      </div>
    </div>
  );
}

export default About;