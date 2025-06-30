import React from 'react'

const Experience = () => {

    const [experience, setExperience] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setLoading(true);
        setError(null);
        const fetchExperience = async () => {
            try {
                const response = await fetch("/api/experience");
                if (!response.ok) {
                    throw new Error("Failed to fetch experience data");
                }
                const data = await response.json();
                setExperience(data.experiences || []);
            } catch (err) {
                setError("Failed to fetch experience data");
                console.error("Error fetching experience:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchExperience();
    }, []);

    // Function to format date
    const formatDate = (dateString) => {
        if (dateString === "Present") return "Present";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long' 
        });
    };

    if (loading) {
        return (
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience</h2>
                <div className="space-y-6">
                    {[...Array(2)].map((_, index) => (
                        <div key={index} className="border-l-4 border-gray-300 pl-4 animate-pulse">
                            <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6 mt-1"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience</h2>
                <div className="text-center py-8">
                    <p className="text-red-500 mb-4">{error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Experience
                </h2>
                {experience.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No experience data available</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {experience.map((exp) => (
                            <div key={exp._id} className="border-l-4 border-blue-500 pl-4">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {exp.role}
                                </h3>
                                <p className="text-gray-600">
                                    <span className="text-blue-600 font-medium">
                                        {exp.company}
                                    </span>
                                    {" • "}
                                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                                </p>
                                <p className="text-gray-600 mt-2">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Experience