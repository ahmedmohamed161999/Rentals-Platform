import React, { useState } from "react"
import { categories } from "../data"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Categories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Explore Our Top Categories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Find your perfect stay from our carefully curated collection of premium properties across various categories.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories?.slice(1, 7).map((category, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="h-full"
            >
              <Link to={`/listings/category/${category.label}`} className="block h-full">
                <div 
                  className="relative group rounded-2xl overflow-hidden shadow-lg h-[300px]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={category.img}
                      alt={category.label}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 group-hover:to-black/30 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        y: hoveredIndex === index ? -5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl mb-4"
                    >
                      {category.icon}
                    </motion.div>
                    
                    <motion.h3
                      animate={{
                        y: hoveredIndex === index ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-xl font-bold tracking-wide"
                    >
                      {category.label}
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-sm text-white/80"
                    >
                      Click to explore →
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link 
            to=""
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            View All Categories
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Categories
