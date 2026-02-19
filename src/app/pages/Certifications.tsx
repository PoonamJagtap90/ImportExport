import { Award, BadgeCheck, Shield, FileCheck } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      image: 'src/Images/import-export-code-iec-license-removebg-preview.png',
      title: 'IEC CERTIFICATE',
      description: 'Importer Exporter Code (IEC)',
      pdf: 'src/app/pages/Certificates/IECcertificate.pdf'

    },
    {
      image: 'src/Images/Apeda.png',
      title: 'APEDA CERTIFICATE',
      description: 'Agricultural and Processed Food Products Export',
      pdf: 'src/app/pages/Certificates/Apeda_Certificate[1].pdf'
    },
    {
      image: 'src/Images/FIEO_Logo_Trans-removebg-preview.png',
      title: 'FIEO CERTIFICATE',
      description: 'Federation of Indian Export Organisations (FIEO)',
      pdf: 'src/app/pages/Certificates/Fieo Certificate.pdf'
    },
    {
      image: 'src/Images/Fssai-removebg-preview.png',
      title: 'FSSAI CERTIFICATE',
      description: 'Food Safety and Standards Authority of India',
      pdf: 'src/app/pages/Certificates/Food Safety and Standards Authority of India.pdf'
    },
    {
      image: 'src/Images/MSME_Certificate-removebg-preview.png',
      title: 'MSME CERTIFICATE',
      description: 'Ministry of Micro, Small and Medium Enterprises',
      pdf: 'src/app/pages/Certificates/MSME -Udyam Registration Certificate-trading.pdf'
    },
    {
      image: 'src/Images/MCCI-removebg-preview.png',
      title: 'MCCIA CERTIFICATE',
      description: 'Mahratta Chamber of Commerce, Industries and Agriculture',
      pdf: 'src/app/pages/Certificates/MCCI - Membership certificate.pdf'
    },
    {
      image: 'src/Images/ISO_9001-2015.svg-removebg-preview (1).png',
      title: 'ISO CERTIFICATE',
      description: 'International Organization for Standardization',
      pdf: 'src/app/pages/Certificates/ISO_9001-2015.svg-removebg-preview (2).png'
    },
    {
      image: 'src/Images/DUNS Number.png',
      title: 'D-U-N-S NUMBER',
      description: '',
      pdf: 'src/app/pages/Certificates/D-U-N-S 1.pdf',
      buttonText: 'View Number'
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-[48px] font-semibold text-[#0b2d4d] mb-4">
            Certifications & Compliance
          </h1>
          <div className="w-20 h-1 bg-[#c1a23c]"></div>
          <p className="text-[18px] text-gray-600 mt-6 max-w-3xl">
            Our commitment to excellence is reflected in our certifications and adherence to international standards
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert) => {
           // const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-[#c1a23c] transition-colors"
              >
                
                <div 
                 
                className="w-20 h-20 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {/*<Icon className="w-10 h-10 text-[#c1a23c]" />*/}
                  <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                 />
                </div>
                <h3 className="text-[22px] font-semibold text-[#0b2d4d] mb-3 text-center">
                  {cert.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed text-center">
                  {cert.description}
                </p><br/>
                <button 
                className="inline-flex items-center gap-2 text-[#c1a23c] hover:text-[#a8912f] font-medium transition-colors"
                 onClick={() => window.open(cert.pdf, '_blank')}>
                 {/*view Certificate*/}
                 {cert.buttonText || "View Certificate"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Compliance Information */}
       {/* <div className="bg-gray-50 rounded-xl p-10 mb-12">
          <h2 className="text-[32px] font-semibold text-[#0b2d4d] mb-6">
            Our Compliance Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[20px] font-semibold text-[#0b2d4d] mb-3">
                Regulatory Compliance
              </h3>
              <ul className="space-y-2 text-[15px] text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#c1a23c] mr-2">•</span>
                  Full compliance with DGFT (Directorate General of Foreign Trade) regulations
                </li>
                <li className="flex items-start">
                  <span className="text-[#c1a23c] mr-2">•</span>
                  Adherence to international customs and trade laws
                </li>
                <li className="flex items-start">
                  <span className="text-[#c1a23c] mr-2">•</span>
                  Regular audits and compliance monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-[#c1a23c] mr-2">•</span>
                  Updated with latest trade policy changes
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold text-[#0b2d4d] mb-3">
                Quality Assurance
              </h3>
              <ul className="space-y-2 text-[15px] text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#c1a23c] mr-2">•</span>
                  Stringent supplier verification processes
                </li>
                <li className="flex items-start">
                  <span className="text-[#c1a23c] mr-2">•</span>
                  Pre-shipment quality inspection protocols
                </li>
                <li className="flex items-start">
                  <span className="text-[#c1a23c] mr-2">•</span>
                  Documentation accuracy and completeness checks
                </li>
                <li className="flex items-start">
                  <span className="text-[#c1a23c] mr-2">•</span>
                  Continuous improvement and training programs
                </li>
              </ul>
            </div>
          </div>
        </div>*/}

        {/* Trust Indicators */}
        {/* <div className="bg-gradient-to-r from-[#0b2d4d] to-[#1e293b] rounded-xl p-10 text-white text-center">
          <h2 className="text-[32px] font-semibold mb-4">
            Trusted by Leading Businesses
          </h2>
          <p className="text-[18px] text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our certifications and compliance standards ensure that your international trade operations are conducted with the highest level of professionalism, security, and legal compliance.
          </p>
        </div>*/}
      </div>
    </div>
  );
}
