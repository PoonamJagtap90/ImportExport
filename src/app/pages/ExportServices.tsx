import { Link } from 'react-router-dom';
import { Plane, CheckCircle2, ArrowRight } from 'lucide-react';

export function ExportServices() {
  const services = [
    'Buyer Coordination',
    'Export Documentation',
    'Quality Inspection',
    'Shipment Planning',
    'Compliance Management',
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-[48px] font-semibold text-[#0b2d4d]">Export Services</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
           <p className="text-[16px] text-gray-700 leading-relaxed mb-8 text-justify">
               At <b>Infinity Solutions,</b> export services are structured to make sourcing from India smooth, reliable, and efficient for international clients. Every stage of the process is carefully managed to ensure consistency, quality, and timely execution. 
            </p>
        </div>
          <div className="w-20 h-1 bg-[#c1a23c]"></div>
        </div>




<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Import Services Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Strategic Sourcing Across India</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
               With access to a wide network of trusted manufacturers and suppliers across key regions in India, products are sourced based on quality, availability, and market suitability. This approach ensures that clients receive the right products from the right source, reducing dependency on a single supplier and minimizing supply risks.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Quality Control & Product Standardization</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
               Maintaining consistent quality is critical in global trade. Each order is monitored through proper selection, grading, and inspection processes to ensure it meets the expected standards. This helps clients avoid common issues such as variation in quality, rejection of goods, or loss in market reputation.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Competitive & Sustainable Pricing</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
            Pricing is managed with a clear understanding of both supplier costs and international market expectations. Strong supplier relationships and efficient sourcing allow for competitive pricing while maintaining product quality, helping clients stay competitive in their respective markets.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Export Documentation & Regulatory Compliance</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
             All export-related documentation — including invoices, packing lists, certificates, and regulatory requirements — is handled with accuracy and attention to detail. This ensures smooth customs clearance and reduces the risk of delays, penalties, or shipment issues.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">End-to-End Logistics & Shipment Handling</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
               From packaging and container planning to freight coordination and shipment tracking, the entire logistics process is managed efficiently. Proper handling ensures product safety during transit and timely delivery to the destination.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Timely Execution & Delivery Commitment</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
              In international trade, delays can lead to significant losses. Every shipment is planned and executed according to agreed timelines, ensuring reliability and helping clients maintain their supply chain commitments.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Market-Focused Export Approach</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
               Different global markets have different requirements in terms of quality, packaging, and pricing. Products are sourced and prepared based on these specific needs, improving acceptance and performance in the target market.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Transparent Communication & Coordination</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
               Clear and consistent communication is maintained throughout the export process. Regular updates on order status, shipment progress, and documentation ensure that clients remain informed and confident at every stage.
            </p>
            
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


        {/* Features Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-[20px] font-semibold text-[#0b2d4d] mb-2">
              Market Access
            </h3>
            <p className="text-[15px] text-gray-600">
              Connect with buyers in global markets
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-[20px] font-semibold text-[#0b2d4d] mb-2">
              Quality Assurance
            </h3>
            <p className="text-[15px] text-gray-600">
              Thorough inspection before shipment
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-[20px] font-semibold text-[#0b2d4d] mb-2">
              Documentation
            </h3>
            <p className="text-[15px] text-gray-600">
              Complete paperwork and certifications
            </p>
          </div>
        </div>*/}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0b2d4d] to-[#1e293b] rounded-xl p-15 text-white text-center">
          <h2 className="text-[32px] font-semibold mb-4">
            Ready to Export Globally?
          </h2>
          <p className="text-[18px] text-gray-300 mb-6 max-w-2xl mx-auto">
            Infinity Solutions focuses on delivering consistent quality, reliable execution, and seamless export operations — enabling international clients to trade with confidence and build long-term partnerships. 
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#c1a23c] text-white px-8 py-4 rounded-lg hover:bg-[#a8912f] transition-colors font-medium text-[16px]"
          >
            Start Export Process
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
