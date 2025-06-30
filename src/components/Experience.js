import React from 'react'

const Experience = () => {
    return (
        <>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Experience
                </h2>
                <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                            Full Stack Developer Intern
                        </h3>
                        <p className="text-gray-600">
                            <a
                                href="https://www.taiyari24.com/"
                                className="hover:text-blue-300 text-blue-600"
                                target="_blank"
                            > Taiyari24  {" "}
                            </a>• May 2025 - Present</p>
                        <p className="text-gray-600 mt-2">
                            Developing web application features using NextJs.
                            Collaborating with the DevOps team to deploy applications on
                            Microsoft Azure.
                        </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                            Website Manager (Freelancer)
                        </h3>
                        <p className="text-gray-600">
                            <a
                                href="https://hmei.info/"
                                className="hover:text-blue-300 text-blue-600"
                                target="_blank"
                            >
                                {" "}
                                Hiranmayi Educational Institue{" "}
                            </a>{" "}
                            • May 2025 - Present
                        </p>
                        <p className="text-gray-600 mt-2">
                            Maintaining and updating the website using WordPress.
                            Implementing SEO strategies to improve website visibility.
                            Collaborating with the design team to enhance user experience.
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Experience