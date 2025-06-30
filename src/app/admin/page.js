'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/lib/axios';
import ProjectForm from '@/components/ProjectForm';

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
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
    if (!formData.image || !formData.image.trim()) {
      errors.push('Image URL is required');
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
      const projectData = {
        ...formData,
        technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech)
      };

      console.log('Submitting project data:', projectData);

      const response = await api.post('/api/projects', projectData);
      console.log('API response:', response);

      if (response.status === 201) {
        setSubmitStatus({ type: 'success', message: 'Project added successfully!' });
        setFormData({
          title: '',
          description: '',
          image: '',
          githublink: '',
          demolink: '',
          technologies: ''
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
    <>
    <ProjectForm />
    </>
  );
}
