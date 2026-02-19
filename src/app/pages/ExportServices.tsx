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
          <div className="w-20 h-1 bg-[#c1a23c]"></div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Description */}
          <div>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-8 text-justify">
            <b>Payment Policy :</b> <br/>The payment policy is established to ensure financial 
              security , transaction, transparency operational efficiency and long term trade 
              sustainability across all trade operation of Infinity Solutions. Letter of 
              Credit [LC policy] and [PayPal] .
              Trading in Perishable and Non-perishable we 
              carefully selected goods to cater to niche markets and unique requirements. <br/><br/>
              <b>Quality and Product Sourcing:</b>  <br/>Our team of experts carefully monitors global market 
              trends, ensuring timely procurement of in-demand products, we handle every aspect of 
              the supply chain, guaranteeing quality and punctual delivery. Consistent availability
              of goods from leading suppliers.<br/><br/>
              <b>Ethic Policy :</b>  <br/>with clear actionable practice and core
              values anchored in honesty, trust, loyalty, and respect ensuring all actions reflect 
              the organization's reputation.<br/><br></br>
              <b>Our Risk Policy:</b>  <br/>our organization is structured with 
              clear purpose  which defines structured, document and regularly reviewed framework to 
              ensure smooth strategy to ensure proactive goals. 
              </p>
            {/* <p className="text-[16px] text-gray-600 leading-relaxed">
              Our team ensures compliance with international regulations, handles complex documentation, and coordinates logistics to make your export journey smooth and profitable.
            </p>*/}
          </div>

          {/* Right Column - Services List */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm h-85">
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
                      Complete support and guidance for successful exports
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
        <div className="bg-gradient-to-r from-[#0b2d4d] to-[#1e293b] rounded-xl p-10 text-white text-center">
          <h2 className="text-[32px] font-semibold mb-4">
            Ready to Export Globally?
          </h2>
          <p className="text-[18px] text-gray-300 mb-6 max-w-2xl mx-auto">
            Partner with us to expand your business into international markets
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
