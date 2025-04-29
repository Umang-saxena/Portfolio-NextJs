import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'umangsaxena779@gmail.com', // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD // Your Gmail App Password
    }
});

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Get current date and time
        const timestamp = new Date().toLocaleString();

        const emailContent = `
New Contact Form Submission
---------------------------
Timestamp: ${timestamp}

Contact Details:
---------------
Name: ${name}
Email: ${email}

Message Details:
---------------
Subject: ${subject}
Message:
${message}
        `;

        // Email options
        const mailOptions = {
            from: 'hanusaxena68@gmail.com', // Your Gmail address
            to: 'hanusaxena68@gmail.com', // Where you want to receive emails
            subject: `Portfolio Contact: ${subject}`,
            text: emailContent,
            html: emailContent.replace(/\n/g, '<br>')
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
} 