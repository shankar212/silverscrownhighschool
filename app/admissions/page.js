import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdmissionForm from "@/components/AdmissionForm";
import { FileText, CalendarCheck, CheckCircle, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Admissions | Silver Crown High School",
  description: "Apply for admission to Silver Crown High School, Warangal.",
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions Open</h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">
            Take the first step towards a brilliant future. Join the Silver Crown family today.
          </p>
        </div>
      </section>

      <section className="py-20 flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Admission Process Info */}
            <div className="lg:w-5/12 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Apply?</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. Submit Application</h3>
                      <p className="text-gray-600">Fill out the online inquiry form with your details to register your interest.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CalendarCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Campus Visit & Counseling</h3>
                      <p className="text-gray-600">Our team will contact you to schedule a campus tour and a brief counseling session.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Registration & Enrollment</h3>
                      <p className="text-gray-600">Complete the necessary paperwork, submit required documents, and finalize the admission.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900">Why choose us?</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Special focus on IIT/NEET concepts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Highly qualified and experienced staff
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> State-of-the-art infrastructure
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Holistic personality development
                  </li>
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:w-7/12">
              <AdmissionForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
