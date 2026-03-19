import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Target, Award, Users } from "lucide-react";

export const metadata = {
  title: "About Us | Silver Crown High School",
  description: "Learn more about the history, vision, and mission of Silver Crown High School.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-900 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
            alt="Campus Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Our School</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A legacy of excellence, commitment to education, and a vision for the future.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2089&auto=format&fit=crop" 
                alt="School Building" 
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to provide world-class education in Warangal, Silver Crown High School has grown into a premier institution known for its academic rigor and holistic development programs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every child has unique potential. Our dedicated faculty, state-of-the-art facilities, and specialized foundation programs are designed to nurture this potential and transform students into confident, capable individuals ready to take on the world.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-gray-600 font-medium">Successful Alumni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a center of excellence in education, empowering students to become lifelong learners, compassionate individuals, and responsible global citizens capable of creating a positive impact.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide a stimulating learning environment with a technological orientation, which maximizes individual potential and ensures students of all ability levels are well equipped to meet the challenges of education, work and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Specialized Foundation Programs</h2>
          <p className="text-lg text-gray-600 mb-12">
            Our unique selling proposition is our early focus on competitive exams without compromising on the core curriculum or holistic development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IIT JEE Foundation</h3>
              <ul className="space-y-3">
                {[
                  "Advanced Mathematics & Physics curriculum",
                  "Weekly objective mock tests",
                  "Expert faculty with IIT/NIT background",
                  "Problem-solving workshops"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">NEET Foundation</h3>
              <ul className="space-y-3">
                {[
                  "In-depth Biology & Chemistry focus",
                  "Access to advanced laboratories",
                  "Regular assessment & personalized feedback",
                  "Guest lectures by medical professionals"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
