import { Users, Globe2, DollarSign, FileCheck, Clock } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our team of trade experts brings decades of combined experience in international commerce, ensuring professional handling of your business needs.',
    },
    {
      icon: Globe2,
      title: 'Global Network',
      description: 'Established partnerships with verified suppliers and buyers across 50+ countries, providing you access to worldwide markets.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden costs. We believe in building trust through complete transparency in all transactions.',
    },
    {
      icon: FileCheck,
      title: 'Complete Documentation',
      description: 'Comprehensive handling of all paperwork, certifications, and compliance requirements for hassle-free international trade.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Commitment to meeting deadlines with efficient logistics management and real-time tracking of your shipments.',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h1 className="text-[48px] font-semibold text-[#0b2d4d] mb-4">
            Why Choose Us
          </h1>
          <div className="w-20 h-1 bg-[#c1a23c] mx-auto"></div>
          <p className="text-[18px] text-gray-600 mt-6 max-w-3xl mx-auto">
            Discover what makes GlobalTrade your ideal partner for international trade success
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#c1a23c] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-[#c1a23c]" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-semibold text-[#0b2d4d] mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-[16px] text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#0b2d4d] to-[#1e293b] rounded-xl p-12 text-white">
          <h2 className="text-[32px] font-semibold mb-8 text-center">
            Our Track Record
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-[48px] font-bold text-[#c1a23c] mb-2">15+</div>
              <p className="text-[16px] text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-[48px] font-bold text-[#c1a23c] mb-2">500+</div>
              <p className="text-[16px] text-gray-300">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-[48px] font-bold text-[#c1a23c] mb-2">50+</div>
              <p className="text-[16px] text-gray-300">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-[48px] font-bold text-[#c1a23c] mb-2">98%</div>
              <p className="text-[16px] text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <p className="text-[16px] text-gray-700 italic mb-4 leading-relaxed">
              "GlobalTrade has been instrumental in expanding our business internationally. Their expertise and attention to detail made the entire export process seamless."
            </p>
            <div>
              <p className="font-semibold text-[#0b2d4d]">Rajesh Kumar</p>
              <p className="text-[14px] text-gray-600">CEO, TechMart Industries</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <p className="text-[16px] text-gray-700 italic mb-4 leading-relaxed">
              "Professional, reliable, and efficient. GlobalTrade's team handled our import requirements with exceptional care and transparency."
            </p>
            <div>
              <p className="font-semibold text-[#0b2d4d]">Sarah Williams</p>
              <p className="text-[14px] text-gray-600">Director, Global Supplies Ltd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
