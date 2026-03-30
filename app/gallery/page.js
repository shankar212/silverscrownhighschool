import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Gallery | Silver Crown High School",
  description: "Explore the vibrant campus life, infrastructure, and events at Silver Crown High School.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-gray-900 mix-blend-multiply" />
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
            alt="Library" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A glimpse into the life, infrastructure, and vibrant culture at Silver Crown High School.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <div className="flex-grow pb-12">
        <GalleryGrid />
      </div>

      <Footer />
    </main>
  );
}
