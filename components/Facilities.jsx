"use client";

import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Monitor, ShieldCheck, Trophy, Dumbbell } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      id: 1,
      title: "Science Labs",
      description: "State-of-the-art physics, chemistry, and biology laboratories equipped for hands-on learning.",
      icon: <FlaskConical className="w-8 h-8 text-primary" />,
      delay: 0.1,
    },
    {
      id: 2,
      title: "Digital Library",
      description: "Extensive collection of books, journals, and digital resources for comprehensive research.",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      delay: 0.2,
    },
    {
      id: 3,
      title: "Smart Classrooms",
      description: "Interactive smart boards and modern teaching aids to enhance the learning experience.",
      icon: <Monitor className="w-8 h-8 text-primary" />,
      delay: 0.3,
    },
    {
      id: 4,
      title: "Safe Campus",
      description: "24/7 security, CCTV surveillance, and strict entry protocols ensuring a secure environment.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      delay: 0.4,
    },
    {
      id: 5,
      title: "Sports Complex",
      description: "Full-sized playground and indoor facilities promoting physical fitness and teamwork.",
      icon: <Trophy className="w-8 h-8 text-primary" />,
      delay: 0.5,
    },
    {
      id: 6,
      title: "Fitness Center",
      description: "Dedicated spaces for yoga, gymnastics, and physical education.",
      icon: <Dumbbell className="w-8 h-8 text-primary" />,
      delay: 0.6,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            World-Class <span className="text-primary">Facilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Our campus is designed to provide students with the best resources to support their academic journey, extracurricular interests, and holistic development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: fac.delay }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                {fac.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{fac.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {fac.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
