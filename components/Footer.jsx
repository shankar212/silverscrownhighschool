import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">

          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-8 h-8 text-primary-light" />
              <span className="text-2xl font-bold text-white tracking-tight">Silver Crown High School</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building Bright Futures Through Quality Education. We are committed to nurturing young minds with our specialized IIT & NEET foundation programs.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCh6s8HIX4bNINZL67oKLCPA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Admissions", href: "/admissions" },
                { name: "Academics", href: "/#academics" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary-light transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Programs</h3>
            <ul className="space-y-3">
              {[
                { name: "Primary Education", href: "#" },
                { name: "High School", href: "#" },
                { name: "IIT Foundation", href: "/about" },
                { name: "NEET Foundation", href: "/about" },
                { name: "Co-curricular Activities", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary-light transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Contact Information</h3>
            <div className="flex items-start gap-4 text-gray-400">
              <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-1" />
              <p className="text-sm leading-relaxed">
                Adarsha Colony, Sri Sai Nagar, Warangal Khammam Road, Rangasaipet,<br />
                Warangal, Telangana, India
              </p>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <Phone className="w-5 h-5 text-primary-light shrink-0" />
              <p className="text-sm">08008800580</p>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <Mail className="w-5 h-5 text-primary-light shrink-0" />
              <p className="text-sm">info@silvercrownschool.com</p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Silver Crown High School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
