import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-8">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col gap-10 py-8 border-b border-white/30">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-4">
                        {/* Brand Section */}
                        <div className="lg:col-span-4">
                            <h1 className="text-2xl font-bold mb-4">Umang Saxena</h1>
                            <p className="text-sm text-white/80 mb-6">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                            </p>
                            <div className="flex items-center gap-4">
                                <a href="#" className="text-white hover:text-white/80 transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.167 2.5a9.1 9.1 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.88 8.88 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.833a9.7 9.7 0 0 1-5.834 1.667C8.333 20 17.5 15.833 17.5 6.25q0-.35-.067-.692A6.43 6.43 0 0 0 19.167 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                                <a href="#" className="text-white hover:text-white/80 transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15.833c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5v-3.225a2.8 2.8 0 0 0-.783-2.175c2.616-.292 5.366-1.283 5.366-5.833a4.53 4.53 0 0 0-1.25-3.125 4.22 4.22 0 0 0-.075-3.142s-.983-.292-3.258 1.233a11.15 11.15 0 0 0-5.833 0C5.225.541 4.242.833 4.242.833a4.22 4.22 0 0 0-.075 3.142 4.53 4.53 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.8 2.8 0 0 0-.783 2.15v3.225" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                                <a href="#" className="text-white hover:text-white/80 transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.667 1.667 0 0 0-3.334 0V17.5H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-3">
                            <h2 className="font-semibold text-lg mb-4">RESOURCES</h2>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="lg:col-span-2">
                            <h2 className="font-semibold text-lg mb-4">COMPANY</h2>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                            </ul>
                        </div>

                        {/* Newsletter Section */}
                        <div className="lg:col-span-3">
                            <h2 className="font-semibold text-lg mb-4">STAY UPDATED</h2>
                            <p className="text-sm text-white/80 mb-4">
                                Subscribe to our newsletter for inspiration and special offers.
                            </p>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="flex-1 min-w-0 px-3 py-2 text-sm text-black rounded-l outline-none border-4 border-white/10"
                                />
                                <button className="bg-white text-blue-600 px-3 py-2 rounded-r hover:bg-blue-50 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-4 text-center text-sm text-white/80">
                    <p>Copyright 2024 © Umang Saxena. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer