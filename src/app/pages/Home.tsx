import { Link } from 'react-router-dom';
import { ArrowRight, Globe2, Shield, TrendingUp, Package, Plane, Truck } from 'lucide-react';
//import HomeBackgroundImg from '../Images/HomeBackgroundImage.jpg';

const teamMembers = 
[ { name: "Shalaka Bhosale", role: "HR Head", image: "src/Images/Shalaka.png", },
   { name: "Shardul Kulkarni", role: "Sales & Operation", image: "src/Images/Shardul Sir.JPG", }, 
   { name: "Sharayu Kulkarni", role: "Administrator", image: "src/Images/Sharayu Ma'am.png", }, 
   { name: "Yash Paranjape", role: "Business Development Associate", image: "src/Images/Yash (2) 1.png", }, ]; 

export function Home() {
  return (
    <div>
   

      {/* Hero Section */}
     
     


 

<section className="relative h-[85vh] flex items-center">
 
      {/* Background Image */}
<div

        className="absolute inset-0 bg-cover bg-center"

        style={{

          backgroundImage:

            "url('src/Images/Homebackgroundimage.jpg')", // move your image to public/images

        }}
></div>
 
      {/* Dark Overlay */}
<div className="absolute inset-0 bg-[#0f2742]/80"></div>
 
      {/* Content */}
<div className="relative max-w-6xl mx-auto px-6 text-white">
<h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">

                        Import Export Services
</h1>
 
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 text-center">

          Your trusted partner in global trade.
</p>
 
        {/* Buttons */}
        

<div className="flex gap-4 flex justify-center">

<Link
  to="/contact"
  className="inline-flex items-center gap-2 bg-[#c1a23c] text-white px-8 py-4 rounded-lg"
>
  Contact Us
</Link>
 
          
</div>
</div>
</section>

  
      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#c1a23c] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-[#c1a23c] items-centre" />
                <div className="flex justify-center mr-4">
                 <img src="src/Images/End-to-end support.png" 
                alt="About GlobalTrade" 
                style={{ width: "45px", height: "30px" }}
                /> 
                </div>
                
              </div>
              <h3 className="text-[22px] font-semibold text-[#0b2d4d] mb-3">
                End-to-End Trade Support
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Complete support from documentation to delivery, ensuring smooth operations at every step.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#c1a23c] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <Globe2 className="w-7 h-7 text-[#c1a23c]" />
<div className="flex justify-center mr-4">
   <img src="src/Images/Global Trade.png" 
     alt="About GlobalTrade" 
     style={{ width: "45px", height: "30px" }}
     //className="rounded-2xl shadow-lg w-full object-cover" 
   /> 
</div>

             
              </div>
              <h3 className="text-[22px] font-semibold text-[#0b2d4d] mb-3">
                Global Network
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Connected with trusted partners across 50+ countries for seamless international trade.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#c1a23c] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-[#c1a23c]"/>
                <div className="flex justify-center mr-4">
                   <img src="src/Images/Compliance.png" 
     alt="About GlobalTrade" 
     style={{ width: "45px", height: "30px" }}
     //className="rounded-2xl shadow-lg w-full object-cover" 
   /> 
                </div>
               
              </div>
              <h3 className="text-[22px] font-semibold text-[#0b2d4d] mb-3">
                Compliance Assured
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Full regulatory compliance with international trade laws and quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[42px] font-semibold text-[#0b2d4d] mb-4">
              Our Services
            </h2>
            <p className="text-[18px] text-gray-600 max-w-2xl mx-auto">
              Comprehensive trade solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              
              <div>
                <img src="src\Images\Import.png" 
     alt="About GlobalTrade" 
     style={{ width: "200px", height: "200px" }} 
   />
              </div>
              <div>
              <h3 className="text-[24px] font-semibold text-[#0b2d4d] mb-3">
                Import Services
              </h3>
              <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
                Comprehensive import solutions with supplier coordination, customs clearance, 
                and freight handling.
              </p>
              <Link
                to="/services/import"
                className="inline-flex items-center gap-2 text-[#c1a23c] hover:text-[#a8912f] font-medium transition-colors"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>
              </div>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              
              <div>
                <img src="src\Images\Export.png" 
     alt="About GlobalTrade" 
     style={{ width: "200px", height: "200px" }} 
   />
              </div>
              <div>
              <h3 className="text-[24px] font-semibold text-[#0b2d4d] mb-3">
               Export Services
              </h3>
              <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
                End-to-end export support including documentation, quality inspection, and shipment planning.
              </p>
              <Link
                to="/services/import"
                className="inline-flex items-center gap-2 text-[#c1a23c] hover:text-[#a8912f] font-medium transition-colors"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      

     {/*<div className="gap-8 bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
<div className="gap-8 bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
  {/* Heading 
   <h2 className="text-[42px] font-semibold text-[#0b2d4d] text-center"> 
     Meet our team 
   </h2> 
   <p className="text-gray-400 mb-10 text-lg text-center"> 
     Comprehensive trade solutions tailored to your business needs 
   </p> */} 
 
   {/* Team Grid  
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"> 
     {teamMembers.map((member, index) => ( 
       <div key={index} className="text-left"> */}
          
         {/* Image */} 
         {/* <div className="rounded-3xl overflow-hidden mb-6"> 
           <img 
             src={member.image}
             alt={member.name} 
             className="w-full h-[380px] object-cover hover:scale-105 transition duration-500" 
           /> 
         </div> 
 
         {/* Name  
         <h3 className="text-xl font-semibold text-[#17324d] text-center"> 
           {member.name} 
         </h3> 
 
         {/* Role 
         <p className="text-gray-400 mt-2 text-center"> 
           {member.role} 
         </p> 
       </div> 
     ))} 

</div> 
</div>
</div> */}
<div>   
      </div>
    </div>
  );
}
