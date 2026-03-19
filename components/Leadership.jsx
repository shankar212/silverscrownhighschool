"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const leaders = [
  {
    id: 1,
    role: "Chairman",
    name: "Silver Crown High School Chairman",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
    message: "Welcome to Silver Crown High School. Our vision has always been to create a nurturing environment where students can discover their true potential. We believe that education is not just about academic excellence, but about building character, instilling values, and preparing the next generation of global leaders.",
  },
  {
    id: 2,
    role: "Principal",
    name: "Silver Crown High School Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
    message: "At Silver Crown High School, we are committed to providing holistic education that nurtures both academic excellence and strong values. Our goal is to create a learning environment where every student is encouraged to grow, explore, and achieve their full potential. Through dedicated teaching and structured programs, we prepare students for future success.",
  }
];

export default function Leadership() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? leaders.length - 1 : prev - 1));
  };

  // Optional auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-b-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Leadership
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Messages from our <span className="text-primary">Leaders</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-2/5 relative h-[400px] md:h-auto overflow-hidden">
                  <img
                    src={leaders[currentIndex].image}
                    alt={leaders[currentIndex].name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-3xl font-bold text-white mb-1">{leaders[currentIndex].name}</h3>
                    <p className="text-primary-light font-medium tracking-wide">{leaders[currentIndex].role}</p>
                  </div>
                </div>

                {/* Message Section */}
                <div className="md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                  <Quote className="absolute top-8 left-8 w-24 h-24 text-gray-100 -z-10 transform -rotate-6" />

                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic mb-8 relative z-10">
                    "{leaders[currentIndex].message}"
                  </blockquote>

                  {/* Controls */}
                  <div className="flex items-center gap-4 mt-auto pt-4">
                    <button
                      onClick={prevSlide}
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                      aria-label="Previous message"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                      aria-label="Next message"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="flex gap-2 ml-4">
                      {leaders.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-2 transition-all duration-300 rounded-full ${currentIndex === idx ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
