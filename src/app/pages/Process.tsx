import { Search, Handshake, FileText, Ship, CheckCircle } from 'lucide-react';
import { images } from '../../lib/images';

export function Process() {
  const steps = [
    {
      image: images['Requirement Assesment.png'],
      number: '01',
      title: 'Requirement Assessment',
      description: 'At Infinity Solutions, we start with a structured requirement assessment to understand your exact product, quality, compliance, timeline, and budget needs. This helps us source reliable suppliers and ensure smooth, cost-effective, and timely international trade solutions.',
    },
    {
      image: images['Sourcing & Quotation.png'],
      number: '02',
      title: 'Sourcing & Quotation',
      description: 'At Infinity Solutions, we source from verified and reliable suppliers who meet international quality, compliance, and delivery standards, ensuring consistency and supply stability. We provide transparent, detailed quotations covering specifications, pricing, logistics, and timelines, giving you complete clarity and confidence in every transaction.',
    },
    {
      image: images['Order Confirmation.png'],
      number: '03',
      title: 'Order Confirmation',
      description: 'Once pricing, specifications, and terms are agreed upon, Infinity Solutions issues a detailed proforma invoice to confirm the order and ensure clarity for all parties.This structured process secures production, minimizes risks, and enables smooth, accurate, and timely order fulfillment.',
    },
    {
      image: images['Payments.png'],
      number: '04',
      title: 'Payments',
      description: 'At Infinity Solutions, our payment terms ensure security, transparency, and smooth trade execution, aligned with international practices to protect both buyers and suppliers.We use secure banking channels and flexible options like advance payments or letters of credit, building trust and supporting long-term trade relationships.',
    },
    {
      image: images['Quality-inspection.png'],
      number: '05',
      title: 'Quality Inspection & Documentation',
      description: ' At Infinity Solutions, we ensure strict quality inspections and, when required, third-party verification to confirm product standards, packaging, and compliance before shipment.We also manage complete and accurate documentation to enable smooth customs clearance, minimize risks, and ensure reliable, transparent trade execution.',
    },
      {
      image: images['Shipping & Customs Clearance.png'],
      number: '06',
      title: 'Shipping & Customs Clearance:',
      description: 'Infinity Solutions manages end-to-end shipping and customs clearance, coordinating with trusted logistics partners to ensure cost-effective, compliant, and timely global deliveries.Our proactive approach minimizes delays, handles documentation and regulations, and ensures smooth cargo movement from dispatch to final delivery.',
    },
   {
      image: images['Final Delivery.png'],
      number: '07',
      title: 'Final Delivery',
      description: 'At Infinity Solutions, we ensure safe and timely final delivery by coordinating closely with logistics partners and monitoring last-mile transportation and documentation.Our structured approach ensures accountability, product integrity, and a smooth handover, delivering complete transparency and client satisfaction.',
   },

    ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#0b2d4d] mb-4">
            Our Trade Policy
          </h1>
          <div className="w-20 h-1 bg-[#c1a23c] mx-auto"></div>
          <p className="text-base md:text-lg text-gray-600 mt-6 max-w-3xl mx-auto px-2">
            Our streamlined 5-step process ensures smooth and efficient international trade operations
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
  {steps.map((step) => {
    return (
      <div
        key={step.number}
        className="bg-white border border-gray-200 rounded-xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">

          {/* Step Number */}
          <div className="flex-shrink-0">
            <div className="text-[36px] md:text-[48px] font-bold text-[#c1a23c] opacity-30">
              {step.number}
            </div>
          </div>

          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0b2d4d] rounded-lg flex items-center justify-center">
              <img
                src={step.image}
                alt={step.title}
                className="w-8 h-8 md:w-11 md:h-11 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-[20px] md:text-[26px] font-semibold text-[#0b2d4d] mb-3">
              {step.title}
            </h3>

            <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>

        {/* Timeline Visual Alternative */}
       {/* <div className="bg-gradient-to-r from-[#0b2d4d] to-[#1e293b] rounded-xl p-10 text-white">
          <h2 className="text-[32px] font-semibold mb-6 text-center">
            Average Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-[36px] font-bold text-[#c1a23c] mb-2">2-3 Days</div>
              <p className="text-[16px] text-gray-300">Initial Setup & Documentation</p>
            </div>
            <div>
              <div className="text-[36px] font-bold text-[#c1a23c] mb-2">5-7 Days</div>
              <p className="text-[16px] text-gray-300">Partner Confirmation & Booking</p>
            </div>
            <div>
              <div className="text-[36px] font-bold text-[#c1a23c] mb-2">15-30 Days</div>
              <p className="text-[16px] text-gray-300">Shipping & Delivery</p>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
}
