import React from 'react'
import Link from 'next/link'

const Hero = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF] flex items-center pt-16 px-4 sm:px-6">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            
            <div className="relative w-full container mx-auto">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                            Hi, I&apos;m <span className="text-blue-500">Umang Saxena</span>
                            <br />
                            Full Stack Developer
                        </h1>
                        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
                            I craft modern web experiences with cutting-edge technologies. 
                            Turning complex problems into elegant solutions.
                        </p>
                        <div className="mt-8 md:mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                            <Link href="/projects" passHref>
                                <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/50">
                                    View Projects
                                </button>
                            </Link>
                            <a href="https://www.linkedin.com/in/umang-saxena-9b5632331/" target='_blank' rel="noopener noreferrer">
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
                                Contact Me
                            </button>
                            </a>
                        </div>
                        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm sm:text-base text-gray-600">Available for work</span>
                            </div>
                            <div className="hidden sm:block h-6 w-px bg-gray-300"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm sm:text-base text-gray-600">Based in India</span>
                                <span className="text-xl sm:text-2xl">🇮🇳</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-lg mx-auto aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
                            <img 
                                className="relative z-10 w-full h-full object-contain rounded-3xl transform hover:scale-105 transition-transform duration-500 hover:rotate-2 "
                                src="/images/profile.jpg"
                                alt="Umang Saxena"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
