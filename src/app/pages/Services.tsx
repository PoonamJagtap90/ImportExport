import { Link } from 'react-router-dom';
import { Package, Plane, Truck, ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-[48px] font-semibold text-[#0b2d4d] mb-4">Our Services</h1>
          <div className="w-20 h-1 bg-[#c1a23c]"></div>
          <p className="text-[18px] text-gray-600 mt-6 max-w-3xl">
            Comprehensive import and export solutions designed to meet your global trade needs with efficiency and reliability.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Import Services Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Import Services</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
              Complete import management including supplier coordination, customs clearance, freight handling, and compliance support for seamless operations.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-[14px] text-gray-700 flex items-start">
                <span className="text-[#c1a23c] mr-2">•</span>
                Supplier Coordination
              </li>
              <li className="text-[14px] text-gray-700 flex items-start">
                <span className="text-[#c1a23c] mr-2">•</span>
                Import Documentation
              </li>
              <li className="text-[14px] text-gray-700 flex items-start">
                <span className="text-[#c1a23c] mr-2">•</span>
                Customs Clearance
              </li>
            </ul>
            <Link
              to="/services/import"
              className="inline-flex items-center gap-2 text-[#c1a23c] hover:text-[#a8912f] font-medium transition-colors"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Export Services Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Export Services</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
              Comprehensive export solutions with buyer coordination, documentation, quality inspection, and shipment planning for global markets.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-[14px] text-gray-700 flex items-start">
                <span className="text-[#c1a23c] mr-2">•</span>
                Buyer Coordination
              </li>
              <li className="text-[14px] text-gray-700 flex items-start">
                <span className="text-[#c1a23c] mr-2">•</span>
                Export Documentation
              </li>
              <li className="text-[14px] text-gray-700 flex items-start">
                <span className="text-[#c1a23c] mr-2">•</span>
                Quality Inspection
              </li>
            </ul>
            <Link
              to="/services/export"
              className="inline-flex items-center gap-2 text-[#c1a23c] hover:text-[#a8912f] font-medium transition-colors"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Logistics & Trade Support Card */}
          {/* <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">
              Logistics & Trade Support
            </h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
              End-to-end logistics management including freight forwarding, warehousing, tracking, and comprehensive trade support services.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-[14px] text-gray-700 flex items-start">
                <span className="text-[#c1a23c] mr-2">•</span>
                Freight Forwarding
              </li>
              <li className="text-[14px] text-gray-700 flex items-start">
                <span className="text-[#c1a23c] mr-2">•</span>
                Warehousing Solutions
              </li>
              <li className="text-[14px] text-gray-700 flex items-start">
                <span className="text-[#c1a23c] mr-2">•</span>
                Real-time Tracking
              </li>
            </ul>
            <Link
              to="/services/logistics"
              className="inline-flex items-center gap-2 text-[#c1a23c] hover:text-[#a8912f] font-medium transition-colors"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>*/}
        </div>
      </div>
    </div>
  );
}
