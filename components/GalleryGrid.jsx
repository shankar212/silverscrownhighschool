"use client";

import { motion } from "framer-motion";

export default function GalleryGrid() {
  const images = [
    {
      id: 1,
      src: "/image3.avif",
      alt: "School Building",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      src: "/image.png",
      alt: "Students Learning",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
      alt: "Library",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
      alt: "Science Lab",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=2070&auto=format&fit=crop",
      alt: "Sports Facilities",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 6,
      src: "/image2.avif",
      alt: "Campus Grounds",
      className: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            School <span className="text-primary">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Take a visual tour of Silver Crown High School. Experience the vibrancy and life unfolding inside our campus.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4 md:max-h-[800px] md:h-[800px] auto-rows-[200px] md:auto-rows-auto">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.className}`}
            >
              { }
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-semibold text-xl tracking-wide">
                  {img.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
