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
    githublink: Yup.string()
        .url('Must be a valid URL')
        .required('GitHub link is required'),
    demolink: Yup.string()
        .url('Must be a valid URL')
        .required('Demo link is required'),
    technologies: Yup.string()
        .required('Technologies are required')
        .test('min-technologies', 'Please enter at least one technology', function(value) {
            if (!value) return false;
            const techs = value.split(',').map(tech => tech.trim()).filter(tech => tech.length > 0);
            return techs.length > 0;
        })
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
                        githublink: '',
                        demolink: '',
                        technologies: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        try {
                            // Convert technologies string to array
                            const formattedValues = {
                                ...values,
                                technologies: values.technologies
                                    .split(',')
                                    .map(tech => tech.trim())
                                    .filter(tech => tech.length > 0)
                            };

                            const response = await api.post('/api/projects', formattedValues);

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
                                <Label htmlFor="githublink">GitHub Link</Label>
                                <Field
                                    as={Input}
                                    id="githublink"
                                    name="githublink"
                                    placeholder="Enter GitHub repository URL"
                                    type="url"
                                />
                                <ErrorMessage
                                    name="githublink"
                                    component="div"
                                    className="text-sm text-destructive"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="demolink">Demo Link</Label>
                                <Field
                                    as={Input}
                                    id="demolink"
                                    name="demolink"
                                    placeholder="Enter live demo URL"
                                    type="url"
                                />
                                <ErrorMessage
                                    name="demolink"
                                    component="div"
                                    className="text-sm text-destructive"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="technologies">Technologies</Label>
                                <Field
                                    as={Input}
                                    id="technologies"
                                    name="technologies"
                                    placeholder="Enter technologies (comma-separated, e.g., React, Node.js, MongoDB)"
                                />
                                <ErrorMessage
                                    name="technologies"
                                    component="div"
                                    className="text-sm text-destructive"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Enter technologies separated by commas
                                </p>
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