import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Facilities from "@/components/Facilities";

export const metadata = {
  title: "Our Facilities | Silver Crown High School",
  description: "Explore the world-class facilities and infrastructure at Silver Crown High School.",
};

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white text-center border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Facilities</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the resources and environment we provide to ensure our students excel academically and personally.
          </p>
        </div>
      </section>

      <div className="flex-grow">
        <Facilities />
      </div>

      <Footer />
    </main>
  );
}
