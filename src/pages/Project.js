import React from 'react'

const Project = () => {
    return (
        <div>
            <div>
                <h1 id='abtme'>My Projects</h1>
                <p id='qoutes'>Previous Project.</p>
                <center><img src="jeff.jpg"/></center>
            </div>

            <div>
                <div className="box">
                    <h3>Car Rental Management System</h3>
                    <p>This system automates the process of renting cars, managing availability, and handling customer bookings. It makes transactions faster, easier, and more accurate.</p>
                </div>
                <div className="box">
                    <h3>Event Management System</h3>
                    <p>Designed to help organize and manage events efficiently, from registration to scheduling. It provides a smoother experience for both event planners and attendees.</p>
                </div>
                <div className="box">
                    <h3>Online Student Grading System</h3>
                    <p>This system allows teachers to record and compute grades digitally. It ensures accuracy and easy access for both students and faculty.</p>
                </div>
                <div className="box">
                    <h3>Inventory Management System</h3>
                    <p>Used to monitor and manage stock levels, deliveries, and item movement. It helps businesses avoid shortages or overstock by updating inventory in real-time.</p>
                </div>
            </div>

        </div>        
    )
}
export default Project