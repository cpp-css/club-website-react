import "../styles/contact.css";
import splatterBg1 from "../assets/Path74.png";
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitting form data:', formData);
        setStatus('Sending...');

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            console.log('Function response status:', response.status);

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', number: '', message: '' });
            } else {
                const err = await response.text();
                console.error('Function error:', err);
                setStatus('Failed to send message.');
            }
        } catch (err) {
            console.error('Network/error:', err);
            setStatus('Failed to send message.');
        }
    };
    
    return (
        <section className="contact-container">
            <img src={splatterBg1} alt="decorative line" className="events-decorative-bg" />
            <div className="contact-title">
                <h1>CONTACT US</h1>
                <h3>ONLINE INQUIRY</h3>
            </div>

            <form className="contact-forms" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="contact-name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    className="contact-email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="tel"
                    className="contact-number"
                    name="number"
                    placeholder="Phone Number"
                    value={formData.number}
                    onChange={handleChange}
                />
                <textarea
                    className="contact-message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type="submit" className="contact-submit">Send</button>
            </form>

            {status && <p className="contact-status">{status}</p>}
        </section>
    ) 
}
