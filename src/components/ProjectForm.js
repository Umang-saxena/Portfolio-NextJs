'use client';

import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '@/lib/axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Validation schema using Yup
const validationSchema = Yup.object({
    title: Yup.string()
        .min(3, 'Title must be at least 3 characters')
        .max(100, 'Title must be less than 100 characters')
        .required('Title is required'),
    description: Yup.string()
        .min(10, 'Description must be at least 10 characters')
        .max(500, 'Description must be less than 500 characters')
        .required('Description is required'),
    imageUrl: Yup.string()
        .url('Must be a valid URL')
        .required('Image URL is required'),
    link: Yup.string()
        .url('Must be a valid URL')
        .required('Project link is required'),
});

const PortfolioForm = () => {
    const [submitStatus, setSubmitStatus] = useState(null);

    return (
        <Card className="max-w-2xl mx-auto mt-8">
            <CardHeader>
                <CardTitle>Add New Portfolio Project</CardTitle>
            </CardHeader>
            <CardContent>
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        imageUrl: '',
                        link: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        try {
                            const response = await api.post('/api/portfolio', values);

                            if (response.status === 200 || response.status === 201) {
                                setSubmitStatus({ type: 'success', message: 'Project added successfully!' });
                                resetForm();
                            }
                        } catch (error) {
                            setSubmitStatus({ 
                                type: 'error', 
                                message: error.response?.data?.error || 'Failed to add project.' 
                            });
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Project Title</Label>
                                <Field
                                    as={Input}
                                    id="title"
                                    name="title"
                                    placeholder="Enter project title"
                                />
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-sm text-destructive"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Field
                                    as={Textarea}
                                    id="description"
                                    name="description"
                                    placeholder="Enter project description"
                                    rows={4}
                                />
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="text-sm text-destructive"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="imageUrl">Image URL</Label>
                                <Field
                                    as={Input}
                                    id="imageUrl"
                                    name="imageUrl"
                                    placeholder="Enter image URL"
                                    type="url"
                                />
                                <ErrorMessage
                                    name="imageUrl"
                                    component="div"
                                    className="text-sm text-destructive"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="link">Project Link</Label>
                                <Field
                                    as={Input}
                                    id="link"
                                    name="link"
                                    placeholder="Enter project link"
                                    type="url"
                                />
                                <ErrorMessage
                                    name="link"
                                    component="div"
                                    className="text-sm text-destructive"
                                />
                            </div>

                            {submitStatus && (
                                <Alert
                                    variant={submitStatus.type === 'error' ? 'destructive' : 'default'}
                                >
                                    <AlertDescription>{submitStatus.message}</AlertDescription>
                                </Alert>
                            )}

                            <Button type="submit" disabled={isSubmitting} className="w-full">
                                {isSubmitting ? 'Submitting...' : 'Add Project'}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
    );
};

export default PortfolioForm;