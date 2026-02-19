import { Wheat, Apple, Factory, Cog, ShoppingBag } from 'lucide-react';

export function Products() {
  const products = [
    {
      
      image: 'src/Images/Agricultural.jpg',
      title: 'Agricultural Products',
      description: 'Grains, pulses, spices, and organic farming produce',
      
    },
    {
      image: 'src/Images/FMCG Products.png',
      title: 'Food & FMCG',
      description: 'Packaged foods, beverages, and consumer goods',
    },
    {
      image: 'src/Images/pharma_cosmetic.svg',
      title: 'Industrial Raw Materials',
      description: 'Metals, chemicals, polymers, and construction materials',
    },
    {
      image: 'src/Images/Material Handling Equipment.jpeg',
      title: 'Machinery & Equipment',
      description: 'Industrial machinery, tools, and technical equipment',
    },
    {
      image: 'src/Images/Power & Utility Equipment.jpg',
      title: 'Consumer Goods',
      description: 'Textiles, electronics, home appliances, and lifestyle products',
    },
    {
      image: 'src/Images/Automobile Spare Parts.jpg',
      title: 'Automobile Spare Parts',
      description: 'Precision components that meet OEM standards',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-[48px] font-semibold text-[#0b2d4d] mb-4">
            Products We Trade
          </h1>
          <div className="w-20 h-1 bg-[#c1a23c]"></div>
          <p className="text-[18px] text-gray-600 mt-6 max-w-3xl">
            We facilitate trade across diverse product categories, connecting businesses with quality suppliers and buyers worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.image;
            return (
              <div
                key={product.title}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer overflow-hidden"
              >
                {/* <div className="flex flex-col md:flex-row h-50%"> */}
                <div className="w-full md:h-auto bg-opacity-10 flex items-center justify-center mb-6 mr-15">
                 
                  <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-50 object-cover rounded-2xl"
                 />
</div>
                {/* </div> */}
                <h3 className="text-[22px] font-semibold text-[#0b2d4d] mb-3">
                  {product.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        {/*<div className="bg-gray-50 rounded-xl p-10">
          <h2 className="text-[32px] font-semibold text-[#0b2d4d] mb-6 text-center">
            Custom Product Sourcing
          </h2>
          <p className="text-[18px] text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            Don't see what you're looking for? We offer custom product sourcing services to help you find exactly what your business needs. Our global network and industry expertise enable us to source specialized products from verified suppliers worldwide.
          </p>
        </div>*/}
      </div>
    </div>
  );
}
