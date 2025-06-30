import React from 'react'
import axios from 'axios'

const SkillsInAbout = () => {

    const [skills, setSkills] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setLoading(true);
        setError(null);
        const fetchSkillsData = async () => {
            try {
                const response = await axios.get("/api/skills");
                console.log("Skills Data:", response.data.skills);
                setSkills(response.data.skills || []);
            } catch (err) {
                setError("Failed to fetch skills data");
                console.error("Error fetching skills:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchSkillsData();
    }, []);

    if (loading) {
        return (
            <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-3 rounded-lg animate-pulse"
                        >
                            <div className="h-4 bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
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
            <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
                {skills.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No skills data available</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill._id}
                                className="group relative bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 px-4 py-3 rounded-lg text-center 
                                                 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:from-blue-100 hover:to-blue-200
                                                 border border-blue-100 hover:border-blue-200"
                            >
                                <span className="relative z-10 font-medium">{skill.name}</span>
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 opacity-0 
                                                      group-hover:opacity-20 rounded-lg transition-opacity duration-300"
                                ></div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default SkillsInAbout