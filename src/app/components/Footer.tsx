import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { images } from '../../lib/images';

export function Footer() {
  return (
    <footer className="bg-[#0b2d4d] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={images['infinity-logo-png.png']}
                alt="Infinity Solutions"
                className="h-10 w-auto"
              />

              <div>
                <h2 className="text-lg font-semibold">
                  Infinity Solutions
                </h2>

                <p className="text-xs text-[#c1a23c]">
                  Export & Import
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              We specialize in seamless Export and Import services,
              connecting global markets with efficiency and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-[#c1a23c] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-300 hover:text-[#c1a23c] transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-300 hover:text-[#c1a23c] transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-sm text-gray-300 hover:text-[#c1a23c] transition"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-4">
              Our Services
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/export"
                  className="text-sm text-gray-300 hover:text-[#c1a23c] transition"
                >
                  Export Services
                </Link>
              </li>

              <li>
                <Link
                  to="/services/import"
                  className="text-sm text-gray-300 hover:text-[#c1a23c] transition"
                >
                  Import Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-4">

              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c1a23c] mt-1 flex-shrink-0" />

                <p className="text-sm text-gray-300 leading-relaxed">
                  Infinity Solutions,<br />
                  Ambrosia Galaxy, Office No. 508,<br />
                  5th Floor, Baner, Pune - 411045
                </p>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c1a23c] mt-1 flex-shrink-0" />

                <div className="text-sm text-gray-300 space-y-1">
                  <p>+91 8446580352</p>
                  <p>+91 9022065517</p>
                  <p>+91 8600099171</p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3 break-all">
                <Mail className="w-4 h-4 text-[#c1a23c] mt-1 flex-shrink-0" />

                <a
                  href="mailto:sales@theinfinitysolutions.co"
                  className="text-sm text-gray-300 hover:text-[#c1a23c]"
                >
                  sales@theinfinitysolutions.co
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Infinity Solutions Export & Import. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}