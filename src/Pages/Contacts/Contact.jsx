import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <>
            <div className="contacts-whole">
                <div className="line contact-w"></div>
                <h1 className="contact-w">Contact Us Today</h1>
            </div>

            <div className='contact-section'>
                <div className='contacts'>
                    <section id="contacts" className="contactUs">
                        <h2 className="section-title">Contact Us</h2>
                        <div className="contact-info">
                            <div className="address cont">
                                <h2>Our Address</h2>
                                <p>00618 Ruaraka Street</p>
                                <p>Nairobi city county 00100</p>
                                <p>Country, Kenya</p>
                            </div>
                            <div className="phone cont">
                                <h2>Phone Number</h2>
                                <p>(+254) 794422827</p>
                            </div>
                            <div className="email cont">
                                <h2>Email Address</h2>
                                <p>info@blessedfabricators.com</p>
                            </div>
                        </div>


                    </section>

                    <section id="contact-us" className='contactUs'>
                        <form className='contact-form'>
                            <input type="text" placeholder="Your Name" required />
                            <input type="Email" placeholder="Your Email" required />
                            <input type="tel" placeholder="Your Phone Number" required />
                            <br />
                            <textarea placeholder="message"></textarea>
                            <br />
                            <button type="submit" id="btn">submit</button>
                        </form>

                    </section>

                </div>
                <h2>Get in Touch</h2>
                <p>
                    Reach out to us by filling out the form above to book an appointment.
                    While appointments are recommended for specialized welding services,
                    feel free to drop by for everyday welding needs.
                </p>
                <p>
                    If you prefer to speak with one of our team members, here's how you
                    can reach us:
                </p>

                <p>
                    Call us at: <a href="tel:0713070246">0713070246</a>
                </p>

                <p>
                    If you need to reschedule or have any questions, please email us at:{" "}
                    <a href="mailto:info@blessedfabricators.com">contact Me!</a>
                </p>

                <p>
                    Hours: Monday - Friday 9am - 6:30pm, Saturday 9am - 5pm, closed Sunday
                </p>

                <p>
                    Note: We are based in Nairobi, Kenya, specifically in the vibrant
                    Lucky summer area.
                </p>
            </div>
        </>


    )
}

export default Contact