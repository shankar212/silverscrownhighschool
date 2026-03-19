import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Facilities from "@/components/Facilities";
import GalleryGrid from "@/components/GalleryGrid";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* About Preview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-bl-[100px] -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                About Our School
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Empowering the Leaders of <span className="text-primary">Tomorrow</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Silver Crown High School is dedicated to providing comprehensive education that bridges the gap between traditional learning and future ready skills. Our specialized foundation programs give students the perfect head start.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Specialized IIT JEE Foundation Batch",
                  "Dedicated NEET Medical Preparation",
                  "Experienced & Certified Faculty",
                  "Focus on Values and Discipline"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/image1.avif" 
                  alt="Students Studying" 
                  className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block w-64">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600 font-medium tracking-wide">Years of Academic Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <Facilities />

      {/* Academics Section */}
      <section id="academics" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                Academic Excellence
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                A Strong Foundation for <span className="text-primary">Medical & Engineering</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our curriculum is meticulously designed to not just pass exams, but to master concepts. We integrate competitive exam preparation seamlessly into our daily academic schedule.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors">
                  <div className="text-xl font-bold text-gray-900 mb-2">IIT Foundation</div>
                  <p className="text-gray-600 text-sm">Rigorous math and physics training from early middle school.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors">
                  <div className="text-xl font-bold text-gray-900 mb-2">NEET Foundation</div>
                  <p className="text-gray-600 text-sm">In-depth biology and chemistry curriculum for aspiring doctors.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                alt="Academics" 
                className="w-full h-auto rounded-3xl shadow-xl object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="campus-tour" className="py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Explore Our Campus
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg hover:text-gray-300 transition-colors">
              Take a virtual flight over the Silver Crown High School premises and witness our infrastructure firsthand.
            </p>
          </div>
          
          <div className="mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-video relative group">
            <iframe 
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/7O-GzZ-OYvA?si=btunHivjtzozfx27" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GalleryGrid />

      {/* Leadership Section */}
      <Leadership />

      {/* Map Section */}
      <section className="h-[400px] w-full relative bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121430.18194945631!2d79.46613208715597!3d17.99300594843138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a335ada3242e5cf%3A0x33ae66980e49423f!2sSilver%20Crown%20High%20School!5e0!3m2!1sen!2sin!4v1773771526581!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Silver Crown High School Location"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>

      <Footer />
    </main>
  );
}
