import "../styles/contact.css";
import aerialSsb from "../assets/aerial-ssb 1.png";
import logo2025 from "../assets/logo_for_web_2_2025.png";
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

        const { name, email, message } = formData;

        // Basic email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation checks
        if (!name.trim()) {
            setStatus('Please enter your name.');
            return;
        }

        if (!emailRegex.test(email)) {
            setStatus('Please enter a valid email address.');
            return;
        }

        if (!message.trim()) {
            setStatus('Please enter a message.');
            return;
        }

        setStatus('Sending...');

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', number: '', message: '' });
            } else {
                const err = await response.text();
                console.error('Function error:', err);
                setStatus('Failed to send message.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('Something went wrong. Please try again.');
        }
    };

    
    return (
        <section className="contact-hero">
		<img
			src={aerialSsb}
			alt="CPP Engineering Building"
			className="contact-bg"
		/>

		<div className="contact-card">
			<div className="contact-header">
				<img
					src={logo2025}
					alt="CSS Logo"
					className="contact-logo"
				/>
				<h1>Contact Us</h1>
			</div>

			<form
				className="contact-forms"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={formData.name}
					onChange={handleChange}
				/>

				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
				/>

				<input
					type="tel"
					name="number"
					placeholder="Phone Number"
					value={formData.number}
					onChange={handleChange}
				/>

				<textarea
					name="message"
					placeholder="Message"
					value={formData.message}
					onChange={handleChange}
				/>

				<button type="submit">
					Send
				</button>

				{status !== "" && (
					<p className="contact-status">
						{status}
					</p>
				)}
			</form>
		</div>
	</section>
    ) 
}
