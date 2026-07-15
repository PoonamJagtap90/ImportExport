import { Wheat, Apple, Factory, Cog, ShoppingBag } from 'lucide-react';
import { images } from '../../lib/images';

export function Products() {
  const products = [
    {

      image: images['Agriculture.jpg'],
      title: 'Agricultural Products',
      description: 'Grains, pulses, spices, and organic farming produce',

    },
    {
      image: images['FMCG Products.png'],
      title: 'FMCG',
      description: 'Packaged foods, beverages, and consumer goods',
    },
    {
      image: images['Generator.png'],
      title: 'Electrical Equipment Supplies',
      description: 'Metals, chemicals, polymers, and construction materials',
    },
     {
      image: images['hugo-clement-JGtPrdnMgQc-unsplash.jpg'],
      title: 'High-quality A-grade thrift clothing and cream bales',
      description: 'We ensure that each bale contains garments with strong market demand and good visual appeal for thrift stores and wholesale markets.',
    },

  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0b2d4d] mb-4">
            Products We Trade
          </h1>
          <div className="w-20 h-1 bg-[#c1a23c]"></div>
          <p className="text-base md:text-lg text-gray-600 mt-6 max-w-3xl">
            A range of carefully sourced products designed to meet international quality and market requirements.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-5 md:p-8">
          {products.map((product) => {
            const Icon = product.image;
            return (
              <div
                key={product.title}
                className="bg-white border border-gray-200 rounded-xl p-5 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer overflow-hidden"
              >
                {/* <div className="flex flex-col md:flex-row h-50%"> */}
                <div className="w-full flex items-center justify-center mb-6">
                 
                  <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 md:h-64 object-cover rounded-2xl"
                 />
</div>
                {/* </div> */}
                <h3 className="text-xl md:text-2xl font-semibold text-[#0b2d4d] mb-3">
                  {product.title}
                </h3>
                <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed">
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
          <p className="text-base md:text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            Don't see what you're looking for? We offer custom product sourcing services to help you find exactly what your business needs. Our global network and industry expertise enable us to source specialized products from verified suppliers worldwide.
          </p>
        </div>*/}
      </div>
    </div>
  );
}
