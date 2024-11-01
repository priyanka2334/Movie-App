import React, { useState } from 'react';
import './Home.css';
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
        
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required className='input'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required className='input'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required className='input'
                    ></textarea>
                </div>
                <button type="submit" className='contact'>Send Message</button>
            </form>
            {submitted && <p className="success-message">Thank you for your message!</p>}
            <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Email: abcd@123.com</p>
                <p>Phone: +1234567810</p>
                <p>Address: Pune</p>
            </div>
        </div>
    );
};

export default Contact;
