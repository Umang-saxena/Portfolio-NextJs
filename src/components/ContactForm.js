"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import { ContactSchema } from '@/utils/validationSchemas';
import { sendContactEmail } from '@/lib/emailService';

const ContactForm = () => {
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const result = await sendContactEmail(values);
            if (result.success) {
                console.log('Form submitted successfully:', values);
                resetForm();
            } else {
                console.error('Error submitting form:', result.error);
            }
        } catch (error) {
            console.error('Error in form submission:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
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
    );
};

export default ContactForm; 