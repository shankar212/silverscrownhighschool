"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const scrolledStyle = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Set initial state defensively
    if (typeof window !== "undefined") {
      setIsScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Facilities", href: "/facilities" },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 will-change-auto ${scrolledStyle ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="flex items-center gap-2 group" 
          onClick={() => {
            setMobileMenuOpen(false);
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image 
            src="/logo.jpg" 
            alt="Silver Crown High School Logo" 
            width={40} 
            height={40} 
            className="w-10 h-10 object-contain rounded-full group-hover:scale-110 transition-all duration-300 transform" 
          />
          <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${scrolledStyle ? "text-primary-dark" : "text-white"}`}>
            Silver Crown High School
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium text-sm lg:text-base transition-colors group py-1 ${scrolledStyle ? "text-gray-700 hover:text-primary" : "text-white/90 hover:text-white"}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 rounded-full transition-all duration-300 ease-out group-hover:w-full ${scrolledStyle ? "bg-primary" : "bg-white"}`} />
            </Link>
          ))}
          <Link
            href="/admissions"
            className="bg-primary hover:bg-primary-dark hover:-translate-y-1 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-primary/40 active:scale-95"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${scrolledStyle ? "text-gray-900" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolledStyle ? "text-gray-900" : "text-white"}`} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-semibold text-gray-800 text-xl py-3 border-b border-gray-100 flex items-center justify-between hover:text-primary transition-colors hover:pl-2 w-full"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6">
                <Link
                  href="/admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Apply for Admission
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
