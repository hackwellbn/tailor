import React, { useState } from 'react';
import './Contact.css';
import { contactFeatures, quoteWebPimage } from '../../assets/assets';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "654a6bd1-d795-4e00-ab76-1b75c6c5223f"); // Assuming the key name is "access_key"

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Submit error: ", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <div className="contacts-whole">
                <div className="line contact-w"></div>
                <h1 className="contact-w">Contact Us Today</h1>
            </div>

            <div className="contact-section">
                <div className="contacts">
                    <section id="contacts" className="contactUs">
                        <h2 className="section-title">Contact Us</h2>
                        <div className="contact-info">
                            <div className="address cont">
                                <h2>Our Address</h2>
                                <p>00618 Ruaraka Street</p>
                                <p>Nairobi City County 00100</p>
                                <p>Country, Kenya</p>
                            </div>
                            <div className="phone cont">
                                <h2>Phone Number</h2>
                                <p>+254 (0) 741 887526</p>
                            </div>
                            <div className="email cont">
                                <h2>Email Address</h2>
                                <p>info@blessedfabricators.com</p>
                            </div>
                        </div>
                    </section>

                    <section id="contact-us" className="contactUs">
                        <form className="contact-form" onSubmit={onSubmit}>
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <input type="tel" name="phone" placeholder="Your Phone Number" required />
                            <br />
                            <textarea name="message" placeholder="Your Message" required></textarea>
                            <br />
                            <button type="submit" id="btn">Submit</button>
                        </form>
                        <span>{result}</span>
                    </section>
                </div>

                <div className="info">
                    <div className="info-flex">
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
                            <a href="mailto:info@blessedfabricators.com">Contact Me!</a>
                        </p>
                        <p>
                            Hours: Monday - Friday 9am - 6:30pm, Saturday 9am - 5pm, closed Sunday
                        </p>
                        <p>
                            Note: We are based in Nairobi, Kenya, specifically in the vibrant
                            Lucky summer area.
                        </p>
<img src={quoteWebPimage[0].quote_image} alt="" srcset="" />
                    </div>
                    <div className="info-image info-flex">
                        <img src={contactFeatures[0].image} alt="Contact Feature" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
