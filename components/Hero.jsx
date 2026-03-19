"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState("/video2.mp4");
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    setCurrentVideo(prev => {
      if (prev === "/video2.mp4") return "/video1.mp4";
      if (prev === "/video1.mp4") return "/video3.mp4";
      return "/video2.mp4";
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Autoplay was prevented or the play request was interrupted
          console.log("Video playback interrupted or prevented:", error);
        });
      }
    }
  }, [currentVideo]);

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Placeholder video from a reliable source */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="object-cover w-full h-full scale-105"
        >
          {/* Using local drone/campus videos sequentially */}
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center pt-24 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
            Welcome to Excellence
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Silver Crown <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              High School
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Building Bright Futures Through Quality Education in Warangal. Empowering students to excel in life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/admissions"
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl shadow-primary/30 w-full sm:w-auto"
            >
              Apply for Admission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#campus-tour"
              className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all w-full sm:w-auto"
            >
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Campus Tour
            </a>
          </div>

          {/* Scroll indicator - Moved inside flow, below buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center gap-2 text-white/70 mt-16 pointer-events-none hidden sm:flex"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-[10px]">Scroll Discover</span>
            <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
              <motion.div
                animate={{ top: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute left-0 w-full h-1/2 bg-white"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
