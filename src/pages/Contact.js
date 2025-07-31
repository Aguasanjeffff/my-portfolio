import React from 'react'

const Contact = () => {
    return (
        <div>
            <div>
                <h1 id='abtme'>Get In Touch</h1>
                <p id='qoutes'>Want to connect?</p>
                <center><img src="jeff.jpg"/></center>
            </div>

            <div>
                <div className="box">
                    <h3>Contact Number</h3>
                    <p><strong>Smart:</strong> 09310322974</p>
                    <p><strong>Tm:</strong> 09755623220</p>
                </div>
                <div className="box">
                    <h3>Email</h3>
                    <p><strong>Company Email:</strong> efbe.aguasan.au@phinmaed.com</p>
                    <p><strong>Personal Email:</strong> aguasanjeffrey29@gmail.com</p>
                </div>
                <div className="box">
                    <h3>Location</h3>
                    <p><strong>Place:</strong> Purok 4, Mataas Na Kahoy, General M. Natividad, Nueva Ecija, Philippines</p>
                </div>
                <div className="box">
                    <h3>Social Media</h3>
                    <p><strong>Facebook:</strong></p><p><a href="https://www.facebook.com/jeffrey.aguasan.29" target="_blank">Facebook</a></p>
                    <p><strong>GitHub:</strong></p><p><a href="https://github.com/Aguasanjeffff" target="_blank">GitHub</a></p>
                </div>
            </div>

        </div>        
    )
}

export default Contact