import { Link } from 'react-router-dom';
import { Package, CheckCircle2, ArrowRight } from 'lucide-react';

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
          <div className="w-20 h-1 bg-[#c1a23c]"></div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Description */}
          <div>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-8 text-justify">
               Infinity Solutions is a <b>specialized international trading company focused exclusively
              on import operations,</b> with a strategic emphasis on <b>Agri-commodities, particularly 
              lentils and pulses sourced from Canada — </b>one of the world’s most trusted origins for 
              premium-quality pulses.
            </p>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Canada is globally recognized as the  <b>largest and most reliable producer of 
              premium lentils and pulses.</b> At Infinity Solutions, we maintain <b>direct trade 
              relationships with Canadian exporters, processors, and farmers,</b> allowing us to secure:
<ul style={{ listStyleType: "disc", paddingLeft: "20px", margin: 0}}>
  <li>Premium-grade <b>Red Lentils (Masoor)</b></li>
  <li>Green Lentils</li>
  <li>Yellow Peas</li>
   <li>Chickpeas</li>
    <li>Specialty Pulses</li>
</ul><br/>

<b>Key Advantages of Canadian Origin:</b><br/>
<ul style={{ listStyleType: "disc", paddingLeft: "20px", margin: 0}}>
  <li>Superior grain quality</li>
  <li>High protein content</li>
  <li>Uniform size & color</li>
   <li>Global food safety compliance</li>
    <li>Consistent crop reliability</li>
</ul>
            </p>
          </div>

          {/* Right Column - Services List */}
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
                    {/*<p className="text-[14px] text-gray-600">
                      Professional handling and expert guidance throughout the process
                    </p>*/}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
            Let our experts handle your import requirements with professionalism and efficiency
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
