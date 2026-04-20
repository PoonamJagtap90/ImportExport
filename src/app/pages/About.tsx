import { Target, Eye } from 'lucide-react';
import { Truck, Star, FileText, Link as LinkIcon } from "lucide-react";

export function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="mb-12" style={{ marginLeft: "50px" }}>
          <h1 className="text-[48px] font-semibold text-[#0b2d4d] mb-4">About Us</h1>
          <div className="w-20 h-1 bg-[#c1a23c]"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center"> 
 
 {/* LEFT CONTENT */} 
 <div className="flex w-full">   
  <div className="flex items-center px-16">
    <p className="text-[16px] text-gray-600 leading-relaxed mb-29 w-[550px] text-justify"> 
    Infinity Solutions is a growing service provider in the Export Import (EXIM) space, offering structured and reliable support to businesses looking to expand their global reach. Established recently, our EXIM division has been built with a clear focus on professionalism, compliance, and practical execution.
We work closely with manufacturers, suppliers, and international partners to facilitate smooth trade operations right from identifying opportunities to supporting documentation, coordination, and process management. Our approach is grounded in attention to detail, responsiveness, and a strong understanding of evolving trade requirements.
   </p>
  </div>
  </div> 
 
 <div> 
   {/* RIGHT IMAGE */} 
   <img src="src/Images/cargo-ship-navigating-ocean.jpg" 
     alt="About GlobalTrade" 
     style={{ width: "500px", height: "350px" }}
     className="rounded-2xl w-full h-full object-cover" 
   /> 
 </div>
 <div className="flex items-center px-16">
  <p className="text-[16px] text-gray-600 leading-relaxed mb-50 text-justify"> 
      
     While we are at an early stage of this journey, our commitment remains consistent: to deliver dependable service, maintain transparency, and build long-term partnerships with our clients and associates across markets.
At Infinity Solutions, we aim to simplify global trade by being a reliable and efficient link between businesses and international opportunities.

</p>
 </div>
 <div className="pb-10"> 
   {/* RIGHT IMAGE */} 
   <img src="src/Images/transport-logistics-products (1).jpg" 
     alt="About GlobalTrade" 
     style={{ width: "500px", height: "250px" }}
     className="rounded-2xl w-full h-full object-cover" 
   /> 
 </div>

 {/* <div> 
   <img src="src\Images\About Us 1.png" 
     alt="About GlobalTrade" 
     style={{ width: "400px", height: "350px" }}
     //className="rounded-2xl shadow-lg w-full object-cover" 
   /> 
 </div> */}
 
</div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm">
            <div className="w-16 h-16 bg-[#c1a23c] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-[#c1a23c]" />
              
              <div className="flex justify-center mr-4">
                   <img src="src/Images/Vision 1.png" 
     alt="About GlobalTrade" 
     style={{ width: "110px", height: "90px" }}
     //className="rounded-2xl shadow-lg w-full object-cover" 
   /> 
                </div>
            </div>
            <h2 className="text-[28px] font-semibold text-[#0b2d4d] mb-4">Our Vision</h2>
            <p className="text-[16px] text-gray-700 leading-relaxed">
               Shaping the future of global trade through Excellence, Trust, and Value. 
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm">
            <div className="w-16 h-16 bg-[#c1a23c] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#c1a23c]" />

                <div className="flex justify-center mr-4">
                   <img src="src/Images/Mission 1.png" 
     alt="About GlobalTrade" 
     style={{ width: "110px", height: "90px" }}
     //className="rounded-2xl shadow-lg w-full object-cover" 
   /> 
                </div>
            </div>
            <h2 className="text-[28px] font-semibold text-[#0b2d4d] mb-4">Our Mission</h2>
            <p className="text-[16px] text-gray-700 leading-relaxed">
              We aim to provide unparalleled sourcing solutions, ensuring that our clients have access to a diverse range and high-quality products around the globe. 
              At Infinity Solutions, our mission is to revolutionize the way businesses approach international trade. 
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gray-50 rounded-xl p-10">
        <h2 className="text-[32px] font-semibold text-[#0b2d4d] flex justify-center mb-4">Why Choose Us ?</h2>
<h3 className="text-[12px] text-black-400 mb-10 flex justify-center">We deliver reliable, end-to-end trade solutions focused on quality, efficiency, and global standards.</h3>
          <div className="grid md:grid-cols-3 gap-12">
          
<div className="flex flex-col items-center gap-4">
  <div className="flex flex-col items-center flex items-start gap-4">
  <img
    src="src/Images/fast.png"
    alt="Shipping"
    className="w-12 h-12 object-cover rounded"/>
  <p className="text-gray-600 text-[16px]">
    <span className="font-bold block mb-1">
       {/* Reliable Supply & On-Time Delivery */}
       Company Culture
    </span>
    {/*We deliver reliable, end-to-end trade solutions. */}
    We operate with honesty and strong ethical values, building long-term partnerships based on trust and reliability.
  </p>  
</div>
<br/>
<br/>

<div className="flex flex-col items-center flex items-start gap-4">
<img
    src="src/Images/global.png"
    alt="Shipping"
    className="w-12 h-12 object-cover rounded"
  />
  <p className="text-gray-600 text-[16px]">
    <span className="font-bold block mb-1">
      {/*Simplified Global Logistics*/}
      Assured Quality Service
    </span>
    {/*End-to-end shipping and customs solutions for hassle-free trade.*/}
    We ensure consistent quality and dependable service in every shipment you receive. 
  </p>
</div>
</div>


                    {/* CENTER IMAGE */}
<div className="flex justify-center">
<img
              src="src\Images\Why choose us.png"
              alt="Shipping"
              style={{ width: "400px", height: "400px" }}
              className="rounded-3xl shadow-xl w-full max-w-md object-cover"
            />
</div>

<div className="flex flex-col items-center gap-4">
  <div className="flex flex-col items-center flex items-start gap-4">
  <img
    src="src/Images/best-seller (1).png"
    alt="Shipping"
    className="w-12 h-12 object-cover rounded"/>
  <p className="text-gray-600 text-[16px]">
    <span className="font-bold block mb-1">
      {/*Assured Quality & Compliance*/}
      Continuous Improvement & Regulatory Awareness 
    </span>
    {/*Products undergo strict quality checks and meet international standards.*/}
    We continuously improve our processes while staying up to date with global regulations to ensure compliance and efficiency. 
  </p>  
</div>
<br/>
<br/>

<div className="flex flex-col items-center flex items-start gap-4">
<img
    src="src/Images/transparency (1).png"
    alt="Shipping"
    className="w-12 h-12 object-cover rounded"
  />
  <p className="text-gray-600 text-[16px]">
    <span className="font-bold block mb-1">
      {/*Transparency & Dedicated Support*/}
      Transparency & Dedicated Support
    </span>
    {/*Clear pricing, complete documentation, and account managers for every shipment.*/}
    We maintain clear communication and provide dedicated support to build strong, long-term partnerships. 
  </p>
</div>
</div>
</div>

  <div>

    
  </div>
        </div>
      </div>
    </div>
  );
}

