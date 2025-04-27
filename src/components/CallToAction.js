import React from 'react'
import Image from 'next/image'

const CallToAction = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF] flex items-center">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 max-w-8xl px-6">
                <div className="flex flex-col text-center md:text-left items-center md:items-start space-y-8">
                    <h2 className="md:text-7xl text-4xl font-bold text-gray-800 leading-tight">
                        Boost your<br />productivity.<br />
                        <span className="text-indigo-600">Start using our app today.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mt-6">
                        Elevate your workflow and achieve more with our innovative solutions.
                    </p>

                    <div className="flex items-center gap-6 mt-12">
                        <button type="button" aria-label="getStarted" className="bg-indigo-500 hover:bg-indigo-600 px-10 py-4 text-white rounded-full text-xl font-medium active:scale-95 transition-all shadow-lg hover:shadow-xl">
                            Get started
                        </button>
                        <button type="button" className="group flex items-center gap-3 px-10 py-4 text-xl font-medium active:scale-95 transition hover:text-indigo-600">
                            Learn more
                            <svg className="w-6 h-6 mt-1 group-hover:translate-x-2 transition-all" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center items-center relative">
                    <div className="relative w-full aspect-square max-w-[800px]">
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