import React from 'react'
import { portfolioData } from '@/lib/portfolioData'

const SkillsInAbout = ({ skillsData = portfolioData.skills }) => {

    return (
        <>
            <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
                {skillsData.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No skills data available</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skillsData.map((skill) => (
                            <div
                                key={skill.id}
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