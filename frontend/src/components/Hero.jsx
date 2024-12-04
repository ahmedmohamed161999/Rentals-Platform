import React from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto h-full">
        <div className="h-full px-4 py-20 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-8 z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find Your Perfect
              <span className="text-blue-600 block mt-2">Home Away from Home</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              Discover unique stays and experiences in amazing locations. Your next adventure begins with RentRite.
            </p>

            {/* Search Bar */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none shadow-sm transition-all text-gray-700 bg-white"
                />
                <button 
                  onClick={() => navigate('/search')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaSearch className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-blue-600 font-bold text-2xl">1M+</div>
                <div className="text-gray-600 mt-1">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-blue-600 font-bold text-2xl">50K+</div>
                <div className="text-gray-600 mt-1">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-blue-600 font-bold text-2xl">100+</div>
                <div className="text-gray-600 mt-1">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-full hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3"
              alt="Modern home interior"
              className="w-full h-full object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            {/* Floating Cards */}
            <div className="absolute bottom-8 -left-12 bg-white p-4 rounded-xl shadow-lg z-20 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Verified Hosts</div>
                  <div className="text-sm text-gray-500">100% Trusted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    </div>
  )
}

export default Hero
