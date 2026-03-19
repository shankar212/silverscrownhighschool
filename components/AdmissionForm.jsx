"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, User, Phone, Book } from "lucide-react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    class: "",
    parentPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.class || !formData.parentPhone) {
      alert("Please fill in all the required fields.");
      return;
    }
    
    // Simulate form submission
    alert("Application submitted successfully! Our admissions team will contact you soon.");
    setFormData({ studentName: "", class: "", parentPhone: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Apply for Admission</h3>
        <p className="text-gray-500">Fill out the form below to begin the enrollment process for your child.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
            Student Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter student's full name"
              className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900 bg-gray-50 focus:bg-white"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-2">
            Admission Required For Class <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Book className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 bg-gray-50 focus:bg-white appearance-none"
              required
            >
              <option value="" disabled>Select Class</option>
              <option value="Pre-Primary">Pre-Primary (Nursery, LKG, UKG)</option>
              <option value="Primary">Primary (Class 1 to 5)</option>
              <option value="Middle">Middle School (Class 6 to 8)</option>
              <option value="High-School">High School (Class 9 & 10)</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-2">
            Parent/Guardian Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="parentPhone"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-900 bg-gray-50 focus:bg-white"
              required
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            Submit Application
          </button>
        </div>
        
        <p className="text-xs text-center text-gray-500 mt-4">
          Your information is secure. We will only use this to contact you regarding admissions.
        </p>
      </form>
    </motion.div>
  );
}
