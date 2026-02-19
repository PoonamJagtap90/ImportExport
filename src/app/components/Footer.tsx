import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0b2d4d] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
             {/*<div className="w-10 h-10 bg-[#c1a23c] rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>*/} 
              <div><img src="src\Images\infinity-logo-png.png" className="h-10 w-auto" 
           /> </div> 
              <div>
                <div className="text-[18px] font-semibold">Infinity Solutions</div>
                <div className="text-[11px] text-[#c1a23c]">Import & Export</div>
              </div>
            </div>
            <p className="text-[14px] text-gray-300 leading-relaxed">
              We specialize in seamless import and export services, connecting global markets with efficiency and reliability. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[14px] text-gray-300 hover:text-[#c1a23c] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[14px] text-gray-300 hover:text-[#c1a23c] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[14px] text-gray-300 hover:text-[#c1a23c] transition-colors">
                  Services
                </Link>
              </li>
             {/* <li>
                <Link to="/why-choose-us" className="text-[14px] text-gray-300 hover:text-[#c1a23c] transition-colors">
                  Why Choose Us
                </Link>
              </li>*/}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/import" className="text-[14px] text-gray-300 hover:text-[#c1a23c] transition-colors">
                  Import Services
                </Link>
              </li>
              <li>
                <Link to="/services/export" className="text-[14px] text-gray-300 hover:text-[#c1a23c] transition-colors">
                  Export Services
                </Link>
              </li>
              <li>
                {/*<Link to="/services/logistics" className="text-[14px] text-gray-300 hover:text-[#c1a23c] transition-colors">
                  Logistics Support
                </Link>*/}
              </li>
              <li>
                <Link to="/products" className="text-[14px] text-gray-300 hover:text-[#c1a23c] transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c1a23c] mt-1 flex-shrink-0" />
                <span className="text-[14px] text-gray-300">
                  <span>Infinity Solutions,</span><br/> 
                  Ambrosia Galaxy, 
                  Office no. 508, 5th Floor.
                  33/1, Pan Card Club Road, Baner High St, Hill Road, Baner, Pune, Maharashtra 411045 
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c1a23c] flex-shrink-0" />
                <span className="text-[14px] text-gray-300"><li>+91 8446580352/</li>9022065517/8600099171</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c1a23c] flex-shrink-0" />
                <span className="text-[14px] text-gray-300">sales@theinfinitysolutions.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-[14px] text-gray-400">
            © 2026 Infinity Solutions Import & Export. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}