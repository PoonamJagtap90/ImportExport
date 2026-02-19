import { Link } from 'react-router-dom';
import { Truck, CheckCircle2, ArrowRight } from 'lucide-react';

export function LogisticsServices() {
  const services = [
    'Freight Forwarding',
    'Warehousing Solutions',
    'Real-time Tracking',
    'Multi-modal Transport',
    'Last-mile Delivery',
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-[48px] font-semibold text-[#0b2d4d]">
              Logistics & Trade Support
            </h1>
          </div>
          <div className="w-20 h-1 bg-[#c1a23c]"></div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Description */}
          <div>
            <p className="text-[18px] text-gray-700 leading-relaxed mb-8">
              Our comprehensive logistics and trade support services ensure your goods move efficiently from origin to destination. We provide end-to-end supply chain management, leveraging our global network and advanced technology for seamless operations.
            </p>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              With expertise in air, sea, and land freight, we offer flexible solutions tailored to your specific requirements, ensuring timely delivery and cost optimization at every stage.
            </p>
          </div>

          {/* Right Column - Services List */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-6">
              What We Offer
            </h2>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#c1a23c] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[18px] font-medium text-[#0b2d4d] mb-1">
                      {service}
                    </h3>
                    <p className="text-[14px] text-gray-600">
                      Reliable logistics solutions for your business
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-[20px] font-semibold text-[#0b2d4d] mb-2">
              24/7 Tracking
            </h3>
            <p className="text-[15px] text-gray-600">
              Monitor your shipments in real-time
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-[20px] font-semibold text-[#0b2d4d] mb-2">
              Secure Storage
            </h3>
            <p className="text-[15px] text-gray-600">
              Climate-controlled warehousing facilities
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-[20px] font-semibold text-[#0b2d4d] mb-2">
              Flexible Options
            </h3>
            <p className="text-[15px] text-gray-600">
              Air, sea, and land transport solutions
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0b2d4d] to-[#1e293b] rounded-xl p-10 text-white text-center">
          <h2 className="text-[32px] font-semibold mb-4">
            Need Logistics Support?
          </h2>
          <p className="text-[18px] text-gray-300 mb-6 max-w-2xl mx-auto">
            Let us handle your logistics while you focus on growing your business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#c1a23c] text-white px-8 py-4 rounded-lg hover:bg-[#a8912f] transition-colors font-medium text-[16px]"
          >
            Get Logistics Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
