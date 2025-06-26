'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/lib/axios';

export default function AdminPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageFile: null,
        githublink: '',
        demolink: '',
        technologies: ''
    });
    const [submitStatus, setSubmitStatus] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Check if admin cookie exists
        const checkAuth = async () => {
            try {
                const response = await api.get('/api/admin-auth');
                if (response.status === 200) {
                    setIsAdmin(true);
                } else {
                    router.push('/admin-login');
                }
            } catch (error) {
                router.push('/admin-login');
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [router]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
        setSubmitStatus({ type: 'error', message: 'Only image files are allowed.' });
        return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10 MB limit
        setSubmitStatus({ type: 'error', message: 'Image must be less than 10MB.' });
        return;
    }

    setFormData(prev => ({ ...prev, imageFile: file }));
    };

    const handleLogout = async () => {
        try {
            const response = await api.post('/api/admin-logout');
            if (response.status === 200) {
                router.push('/admin-login');
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        // Client-side validation
        const errors = [];
        if (!formData.title || formData.title.trim().length < 3) {
            errors.push('Title must be at least 3 characters long');
        }
        if (!formData.description || formData.description.trim().length < 10) {
            errors.push('Description must be at least 10 characters long');
        }

        if (errors.length > 0) {
            setSubmitStatus({
                type: 'error',
                message: errors.join(', ')
            });
            return;
        }

        try {
            // Convert technologies string to array
            const data = new FormData();
            data.append('title', formData.title);
            data.append('description', formData.description);
            data.append('githublink', formData.githublink);
            data.append('demolink', formData.demolink);
            formData.technologies.split(',').forEach(tech => {
                data.append('technologies', tech.trim());
            });
            data.append('image', formData.imageFile); // 👈 actual file upload
    
            const response = await api.post('/api/projects', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            if (response.status === 201) {
                setSubmitStatus({ type: 'success', message: 'Project added successfully!' });
                setFormData({
                    title: '',
                    description: '',
                    imageFile: null,
                    githublink: '',
                    demolink: '',
                    technologies: '',
                });
            }
        } catch (error) {
            console.error('Error details:', error);
            console.error('Error response:', error.response);
            console.error('Error data:', error.response?.data);

            setSubmitStatus({
                type: 'error',
                message: error.response?.data?.error || error.response?.data?.details?.join(', ') || 'An error occurred while adding the project.'
            });
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAdmin) {
        return null; // Will redirect to admin-login
    }

    return (
        <div style={{ maxWidth: 800, margin: 'auto', padding: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                <h1>Admin Dashboard</h1>
                <button
                    onClick={handleLogout}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#dc2626',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Logout
                </button>
            </div>

            <div style={{ marginBottom: 32 }}>
                <h2>Add New Project</h2>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                            Project Title *
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                            placeholder="Enter project title"
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                            Description *
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                            placeholder="Enter project description"
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                            Upload Image (Max:10Mb) *
                        </label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                        />

                        {/* <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                            placeholder="Enter image URL"
                        /> */}
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                            GitHub Link
                        </label>
                        <input
                            type="url"
                            name="githublink"
                            value={formData.githublink}
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                            placeholder="Enter GitHub repository link"
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                            Demo Link
                        </label>
                        <input
                            type="url"
                            name="demolink"
                            value={formData.demolink}
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                            placeholder="Enter demo link"
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                            Technologies (comma-separated)
                        </label>
                        <input
                            type="text"
                            name="technologies"
                            value={formData.technologies}
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                            placeholder="e.g., React, Node.js, MongoDB"
                        />
                    </div>

                    {submitStatus && (
                        <div style={{
                            padding: '12px',
                            borderRadius: '4px',
                            backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                            color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                            border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                        }}>
                            {submitStatus.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        style={{
                            padding: '12px 24px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        Add Project
                    </button>
                </form>
            </div>
        </div>
    );
}
