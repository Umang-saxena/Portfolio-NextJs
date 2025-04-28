"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from '../../components/Navbar';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name is too short')
        .max(50, 'Name is too long')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    subject: Yup.string()
        .min(5, 'Subject is too short')
        .max(100, 'Subject is too long')
        .required('Subject is required'),
    message: Yup.string()
        .min(10, 'Message is too short')
        .max(1000, 'Message is too long')
        .required('Message is required'),
});

const ContactPage = () => {
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        // Log the form data to console
        console.log('Form submitted with values:', values);
        Object.entries(values).forEach(([field, value]) => {
            console.log(`${field}: ${value}`);
        });

        // Prepare email content
        const emailSubject = encodeURIComponent(`New Contact Form Submission: ${values.subject}`);
        const emailBody = encodeURIComponent(
            `Name: ${values.name}\n` +
            `Email: ${values.email}\n` +
            `Subject: ${values.subject}\n\n` +
            `Message:\n${values.message}`
        );

        // Create mailto link
        const mailtoLink = `mailto:your.email@example.com?subject=${emailSubject}&body=${emailBody}`;

        // Open email client
        window.location.href = mailtoLink;

        setSubmitting(false);
        resetForm();
    };

    return (
        <main className="min-h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF]">
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>
            
            <div className="container mx-auto px-4 pt-24 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Let&apos;s Start a Conversation
                        </h1>
                        <p className="text-lg text-gray-600">
                            Have a project in mind or just want to chat? Feel free to reach out!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600">
                                            your.email@example.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Me</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                subject: '',
                                message: ''
                            }}
                            validationSchema={ContactSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, touched, errors }) => (
                                <Form className="space-y-6 bg-white/50 backdrop-blur-sm p-6 rounded-xl">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Name
                                        </label>
                                        <Field
                                            type="text"
                                            id="name"
                                            name="name"
                                            className={`w-full px-4 py-2 border text-black ${touched.name && errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            className={`w-full px-4 py-2 border text-black ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject
                                        </label>
                                        <Field
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className={`w-full px-4 py-2 border text-black ${touched.subject && errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                        />
                                        <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <Field
                                            as="textarea"
                                            id="message"
                                            name="message"
                                            rows="4"
                                            className={`w-full px-4 py-2 border text-black ${touched.message && errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                        />
                                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </motion.button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default ContactPage; 