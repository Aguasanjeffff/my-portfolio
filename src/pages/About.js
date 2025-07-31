import React from 'react'

const About = () => {
    return (
        <div>
            <div>
                <h1 id='abtme'>About me</h1>
                <p id='qoutes'>Know me well.</p>
                <center><img src="jeff.jpg"/></center>
            </div>

            <div>
                <div className="box">
                    <h3>Personal Info</h3>
                    <p><strong>Name:</strong> Jeffrey B. Aguasan Jr.</p>
                    <p><strong>Age:</strong> 20</p>
                    <p><strong>Address:</strong> Philippines</p>
                </div>
                <div className="box">
                    <h3>Education</h3>
                    <p><strong>School:</strong> PHINMA Araullo University</p>
                    <p><strong>Course:</strong> BS Information Technology major in Web Development  </p>
                    <p><strong>Graduated:</strong> 2026-2027</p>
                </div>
                 <div className="box">
                    <h3>Strengths</h3>
                    <p>Quick learner with a passion for front-end development.</p>
                    <p>Team player, goal-oriented, and creative thinker.</p>
                </div>
                <div className="box">
                    <h3>Experience</h3>
                    <p><strong>Years of Experience:</strong> 1 year (Front-end Dev in Jeff Company)</p>
                    <p><strong>Focus:</strong> Front-end Development, UI Design</p>
                    <p><strong>Tools Used:</strong> React.js, HTML/CSS, Git</p>
                </div>
            </div>

        </div>        
    )
}

export default About