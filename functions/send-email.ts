import { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    try {
        const { name, email, number, message } = JSON.parse(event.body || '{}');

        const data = await resend.emails.send({
            from: "Your Website <onboarding@resend.dev>",
            to: "antoniojloyola@gmail.com", // TODO: replace with club email
            subject: "New Contact Form Submission",
            html: `
                <h1>New Contact Form Request</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${number}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully', data }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' }),
        };
    }
};