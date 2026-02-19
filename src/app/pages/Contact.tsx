import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import axios from 'axios';


export function Contact() {
  const [formData, setFormData] = useState({
    Name: '',
    companyName: '',
    email: '',
    phone: '', 
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send actual form data
      const response = await axios.post(
        'http://localhost:5000/api/contact', // Replace with your backend route
        formData
        
      );

      console.log('Server response:', response.data);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          Name: '',
          companyName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        setSubmitted(false);
      }, 5000);

    } catch (err: any) {
      console.error(err.response?.data || err.message);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-[48px] font-semibold text-[#0b2d4d] mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-[#c1a23c]"></div>
          <p className="text-[18px] text-gray-600 mt-6 max-w-3xl">
            Get in touch with our team for inquiries, quotes, or support. We're here to help you succeed in international trade.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div>
            <h2 className="text-[28px] font-semibold text-[#0b2d4d] mb-6">Get In Touch</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Have questions about our services? Need a quote for your import/export requirements? Our team is ready to assist you.
            </p>

            <div className="space-y-6">
              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c1a23c] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#c1a23c]" />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#0b2d4d] mb-1">Office Address</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                   <span>Infinity Solutions, </span><br/>Ambrosia Galaxy, Office no. 508, 5th Floor. <br />
                    33/1, Pan Card Club Road, Baner High St, <br/>Hill Road, Baner, Pune, Maharashtra 411045
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c1a23c] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#c1a23c]" />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#0b2d4d] mb-1">Phone Number</h3>
                  <p className="text-[15px] text-gray-600">+91 +91 8446580352/9022065517/8600099171</p>
                  <p className="text-[14px] text-gray-500 mt-1"><b>WhatsApp:</b>+91 8446580352/9022065517/8600099171</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c1a23c] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#c1a23c]" />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#0b2d4d] mb-1">Email Address</h3>
                  <p className="text-[15px] text-gray-600">sales@theinfinitysolutions.co</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-[18px] font-semibold text-[#0b2d4d] mb-3">Business Hours</h3>
              <div className="space-y-2 text-[15px] text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:30 AM - 6:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday & Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-[28px] font-semibold text-[#0b2d4d] mb-6">Send us a Message</h2>

            {submitted ? (
              <div className="bg-[#c1a23c] bg-opacity-10 border border-[#c1a23c] rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#c1a23c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[20px] font-semibold text-[#0b2d4d] mb-2">Message Sent Successfully!</h3>
                <p className="text-[15px] text-gray-600">Thank you for contacting us. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && <div className="text-red-600">{error}</div>}
              <label className="block mb-1 text-gray-700">
              Name <span className="text-red-500">*</span>
              </label>
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <label className="block mb-1 text-gray-700">
              Company Name <span className="text-red-500">*</span>
              </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <label className="block mb-1 text-gray-700">
                Email <span className="text-red-500">*</span>
               </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <label className="block mb-1 text-gray-700">
                Phone <span className="text-red-500">*</span>
               </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
                
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Select a service</option>
                  <option value="Food & Beverage">Food & Beverage</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Sports & Entertainment">Sports & Entertainment</option>
                  <option value="Fashion & Apparel & Fabrics">Fashion & Apparel & Fabrics</option>
                  <option value="Timepieces, Jewellery & Eyewear">Timepieces, Jewellery & Eyewear</option>
                  <option value="Construction & Real Estate">Construction & Real Estate</option>
                  <option value="Home & Garden">Home & Garden</option>
                  <option value="Business & Industrial">Business & Industrial</option>
                  <option value="Gifts & Decorations">Gifts & Decorations</option>
                  <option value="Toys & Hobbies">Toys & Hobbies</option>
                  <option value="Collectibles & Art">Collectibles & Art</option>
                  <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                  <option value="Electrical Equipment Supplies">Electrical Equipment Supplies</option>
                  <option value="Office & School Supplies">Office & School Supplies</option>
                  <option value="Health & Medical">Health & Medical</option>
                  <option value="Measurement & Analysis Instruments">Measurement & Analysis Instruments</option>
                  <option value="Mobile Electronics">Mobile Electronics</option>
                  <option value="Minerals & Metallurgy">Minerals & Metallurgy</option>
                  <option value="Packaging & Printing">Packaging & Printing</option>
                  <option value="Rubber & Plastics">Rubber & Plastics</option>
                  <option value="Security & Protection">Security & Protection</option>
                  <option value="Service Equipment">Service Equipment</option>
                  <option value="Shoes & Footwear Accessories">Shoes & Footwear Accessories</option>
                  <option value="Smart Living Electronics">Smart Living Electronics</option>
                  <option value="Sporting Goods">Sporting Goods</option>
                  <option value="Telecommunication">Telecommunication</option>
                  <option value="Tools">Tools</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Books, Movies & Music">Books, Movies & Music</option>
                  <option value="Entertainment Services">Entertainment Services</option>
                  <option value="Construction & Related Engineering Service">Construction & Related Engineering Service</option>
                  <option value="Health-related & Social services">Health-related & Social services</option>
                  <option value="Tourism & Travel-Related Services">Tourism & Travel-Related Services</option>
                  <option value="Educational & Environmental Services">Educational & Environmental Services</option>
                  <option value="Distribution & Wholesale Services">Distribution & Wholesale Services</option>
                  <option value="Automotives & Motors">Automotives & Motors</option>
                  <option value="Business Services">Business Services</option>
                  <option value="Chemicals">Chemicals</option>
                  <option value="Computer Hardware & Software">Computer Hardware & Software</option>
                 
                 
                      {/*Add more options
                  <option value="import">Agriculture</option>
                  <option value="export">Sports & Entertainment</option>
                  <option value="logistics">Fashion & Apparel & Fabrics</option>
                  <option value="general">Food & Beverage</option>*/}
                  
                </select>
                <label className="block mb-1 text-gray-700">
                Message<span className="text-red-500">*</span>
               </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#c1a23c] text-white px-6 py-3 rounded-lg "
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
