import React, { useState, useEffect } from "react";
import styles from "./ContactPage.module.scss";
import Header from "@src/components/Header/Header";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name && email && message && isValidEmail(email)) {
            // Add your logic for handling the form data here, for example, sending it to a server or performing some other action
            console.log('Form submitted:', { name, email, message });
      
            // Show confirmation popup
            setShowConfirmation(true);
      
            // Clear the form fields after submission
            setName('');
            setEmail('');
            setMessage('');
      
            // Hide the confirmation popup after 3 seconds
            setTimeout(() => {
              setShowConfirmation(false);
            }, 3000);
          }
    };

    const isValidEmail = (value: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      };

    return (
        <div>
            <Header />
            <section className={styles.contact}>
                <div className={styles.content}>
                    <h2>Contact Us</h2>
                    <p>Feel free to reach out to us!</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.contactInfo}>
                        <div className={styles.box}>
                            <div className={styles.icon}>
                                <PlaceIcon />
                            </div>
                            <div className={styles.text}>
                                <h3>Address</h3>
                                <p>Fasanenstraße 86,<br/>10623 Berlin,<br/>Germany</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.icon}>
                                <PhoneIcon />
                            </div>
                            <div className={styles.text}>
                                <h3>Phone</h3>
                                <p>030 1234567</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.icon}>
                                <EmailIcon />
                            </div>
                            <div className={styles.text}>
                                <h3>Email</h3>
                                <p>contact@guardos.com</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactForm}>
                        <form onSubmit={handleSubmit}>
                            <h2>Send Message</h2>
                            <div className={styles.inputBox}>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <span>Full Name:</span>
                            </div>
                            <div className={styles.inputBox}>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span>Email</span>
                            </div>
                            <div className={styles.inputBox}>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <span>Message:</span>
                            </div>
                            <div className={styles.inputBox}>
                                <input type="submit" name="" value="Send"></input>
                            </div>
                        </form>
                    </div>
                    {showConfirmation && (
                    <div className={styles.confirmationPopup}>
                        <p>Message successfully sent!</p>
                    </div>
                    )}
                </div>
            </section>
        </div>
    )
};

export default ContactPage;