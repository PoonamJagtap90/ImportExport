import { Link } from 'react-router-dom';
import { Package, CheckCircle2, ArrowRight, TrendingUp, Globe2,Shield,Plane } from 'lucide-react';


export function ImportServices() {
  const services = [
    'Strategic Global Sourcing',
    'Supplier Due Diligence & Compliance',
    'Quality Assurance & Inspection Control',
    
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-[48px] font-semibold text-[#0b2d4d]">Import Services</h1>
          </div>
           <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
           <p className="text-[16px] text-gray-700 leading-relaxed mb-8 text-justify">
               At <b>Infinity Solutions,</b> import services are designed to simplify global sourcing and ensure a smooth,
                reliable procurement experience for clients. 
            </p>
        </div>
          <div className="w-20 h-1 bg-[#c1a23c]"></div>
          
        </div>

        {/* Content Section */}
        

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Import Services Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Global Supplier Network</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
               Access to a wide network of verified international suppliers allows sourcing of quality products from the right markets based on client requirements.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Supplier Verification & Quality Control</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
               Every supplier is carefully evaluated, and products are checked to ensure they meet expected quality standards before shipment.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Cost-Effective Procurement</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
             Strong market knowledge and supplier connections help secure competitive pricing, enabling better margins in local markets.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">End-to-End Import Management</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
                From supplier coordination and order placement to documentation, customs clearance, and delivery — the entire process is managed efficiently.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Documentation & Compliance Support</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
               All necessary import documentation and regulatory requirements are handled with accuracy to avoid delays and complications.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Logistics & Timely Delivery</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
              Shipments are planned and tracked to ensure timely delivery while maintaining cost efficiency.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Transparent Communication</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
               Regular updates and clear coordination keep clients informed at every stage of the import process.
            </p>
            
          </div>
           <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            {/*<div className="w-16 h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>*/}
            <h2 className="text-[26px] font-semibold text-[#0b2d4d] mb-4">Market-Focused Sourcing</h2>
            <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
               Products are sourced based on demand, pricing trends, and suitability for the target market, ensuring better business outcomes.
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




       












          {/* Left Column - Description 
          <div>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-8 text-justify">
               At <b>Infinity Solutions,</b> import services are designed to simplify global sourcing and ensure a smooth,
                reliable procurement experience for clients. 
            </p>
            <p className="text-[14px] text-gray-600 leading-relaxed">
            <b>Global Supplier Network</b> <br/>Access to a wide network of verified international suppliers allows sourcing of quality products 
            from the right markets based on client requirements.  <br/>
            <b>Supplier Verification & Quality Control</b> <br/>Every supplier is carefully evaluated, and products are checked to ensure they meet expected quality standards before shipment.<br/>
            <b>Cost-Effective Procurement</b> 
            <br/>Strong market knowledge and supplier connections help secure competitive pricing, enabling better margins in local markets. <br/>
            <b>End-to-End Import Management</b> 
            <br/>From supplier coordination and order placement to documentation, customs clearance, and delivery — the entire process is managed efficiently.<br/>
            <b>Documentation & Compliance Support </b> 
            <br/>All necessary import documentation and regulatory requirements are handled with accuracy to avoid delays and complications.<br/>
            <b>Logistics & Timely Delivery </b> 
            <br/>Shipments are planned and tracked to ensure timely delivery while maintaining cost efficiency. <br/>
            <b>Transparent Communication </b> 
            <br/>Regular updates and clear coordination keep clients informed at every stage of the import process.<br/>
            <b>Market-Focused Sourcing </b> 
            <br/>Products are sourced based on demand, pricing trends, and suitability for the target market, ensuring better business outcomes.<br/>
           
            </p>
          </div>*/}

          {/* Right Column - Services List 
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm h-62">
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
                    
                  </div>
                </li>
              ))}
            </ul>
          </div>*/}

        

        {/* Features Grid */}
       {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-[20px] font-semibold text-[#0b2d4d] mb-2">
              Global Sourcing
            </h3>
            <p className="text-[15px] text-gray-600">
              Access to verified suppliers across 50+ countries
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-[20px] font-semibold text-[#0b2d4d] mb-2">
              Fast Clearance
            </h3>
            <p className="text-[15px] text-gray-600">
              Expedited customs processing for quick delivery
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-[20px] font-semibold text-[#0b2d4d] mb-2">
              Cost Optimization
            </h3>
            <p className="text-[15px] text-gray-600">
              Competitive rates and transparent pricing structure
            </p>
          </div>
        </div> */} 

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#0b2d4d] to-[#1e293b] rounded-xl p-10 text-white text-center">
          <h2 className="text-[32px] font-semibold mb-4">
            Ready to Start Importing?
          </h2>
          <p className="text-[18px] text-gray-300 mb-6 max-w-2xl mx-auto">
            Infinity Solutions ensures reliable sourcing, efficient processes, and consistent value — making international procurement simple
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#c1a23c] text-white px-8 py-4 rounded-lg hover:bg-[#a8912f] transition-colors font-medium text-[16px]"
          >
            Request Import Support
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
