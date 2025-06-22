import axios from 'axios';

// Create axios instance with default configuration
const api = axios.create({
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // You can add auth tokens here if needed
        console.log('Making request to:', config.url, 'with data:', config.data);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => {
        console.log('Response received:', response.status, response.data);
        return response;
    },
    (error) => {
        console.error('Axios error:', error.response?.status, error.response?.data);
        // Handle common errors here
        if (error.response?.status === 401) {
            // Handle unauthorized
            console.log('Unauthorized access');
        }
        return Promise.reject(error);
    }
);

export default api; 