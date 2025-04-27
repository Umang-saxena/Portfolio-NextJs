import React from 'react'
import Image from 'next/image'

const CallToAction = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF] flex items-center py-16 sm:py-20">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 px-4 sm:px-6 lg:px-8">
                <div className="w-full md:w-1/2 flex flex-col text-center md:text-left items-center md:items-start space-y-6 md:space-y-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
                        Boost your<br />productivity.<br />
                        <span className="text-indigo-600">Start using our app today.</span>
                    </h2>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl">
                        Elevate your workflow and achieve more with our innovative solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
                        <button 
                            type="button" 
                            aria-label="getStarted" 
                            className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 px-6 sm:px-10 py-3 sm:py-4 text-white rounded-full text-base sm:text-xl font-medium active:scale-95 transition-all shadow-lg hover:shadow-xl"
                        >
                            Get started
                        </button>
                        <button 
                            type="button" 
                            className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-xl font-medium active:scale-95 transition hover:text-indigo-600"
                        >
                            Learn more
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 group-hover:translate-x-2 transition-all" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[800px] mx-auto aspect-square">
                        <Image 
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/excitedWomenImage.png"
                            alt="Excited Woman"
                            fill
                            className="object-contain hover:scale-105 transition-transform duration-500"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction