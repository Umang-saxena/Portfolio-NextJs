import React from 'react'
import { portfolioData } from '@/lib/portfolioData'

const Experience = ({ experienceData = portfolioData.experience }) => {

    // Function to format date
    const formatDate = (dateString) => {
        if (dateString === "Present") return "Present";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long' 
        });
    };

    return (
        <>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Experience
                </h2>
                {experienceData.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No experience data available</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {experienceData.map((exp) => (
                            <div key={exp.id} className="border-l-4 border-blue-500 pl-4">
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