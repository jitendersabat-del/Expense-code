import React from 'react';
import ProductGrid from './ProductGrid';

const ViralFoodLab: React.FC = () => {
  const viralProducts = [
    {
      id: '1',
      name: "London's Viral Strawberry Chocolate",
      description: "Fresh, juicy strawberries drenched in thick, flowing Belgian milk chocolate. The ultimate Instagram sensation.",
      price: "₹349",
      image: "/images/strawberry-chocolate.png",
      isViral: true
    },
    {
      id: '2',
      name: "Japanese Shokupan French Toast",
      description: "Ultra-fluffy, thick-cut brioche caramelized to perfection. Soft as a cloud, sweet as a dream.",
      price: "₹429",
      image: "/images/japanese-french-toast.png",
      isViral: true
    },
    {
      id: '3',
      name: "Dubai-Style Mini Donuts",
      description: "Assorted bite-sized delights with luxury glazes, crushed pistachios, and gold-leaf accents.",
      price: "₹399",
      image: "/images/dubai-mini-donuts.png",
      isViral: true
    },
    {
      id: '4',
      name: "Traditional Pistachio Kunafa",
      description: "Crispy shredded pastry with a warm cheese heart, soaked in rose syrup and emerald pistachios.",
      price: "₹450",
      image: "/images/kunafa.png",
      isViral: true
    },
    {
      id: '5',
      name: "London's Viral Mango Chocolate",
      description: "Golden mango cubes coated in premium white chocolate with dark chocolate swirls.",
      price: "₹369",
      image: "/images/mango-chocolate.png",
      isViral: true
    },
    {
      id: '6',
      name: "Gourmet Loaded Sourdough",
      description: "Thick sourdough with avocado, melted cheese, crisp greens, and slow-roasted tomatoes.",
      price: "₹480",
      image: "/images/loaded-sandwiches.png",
      isViral: false
    }
  ];

  return (
    <div className="bg-secondary-white min-h-screen">
      <ProductGrid 
        products={viralProducts} 
        title="The Viral Food Lab" 
        subtitle="Experimental & Famous Trends" 
      />
      
      {/* Stylized Menu Highlight Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-primary/5 rounded-[3rem] p-8 md:p-16 border border-primary/10">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-display font-black text-gray-900 leading-tight">
                Our Signature <br/> <span className="text-primary italic">Indulgence Rituals</span>
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-xl">✨</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Always Fresh</h4>
                    <p className="text-gray-600 text-sm">Every viral treat is prepared live in our lab for maximum freshness and flavor.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-xl">📱</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Instagram-First</h4>
                    <p className="text-gray-600 text-sm">Designed to look as good as it tastes. Presentation is our art form.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-xl">🌍</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Global Trends</h4>
                    <p className="text-gray-600 text-sm">From London to Dubai to Tokyo—we track the world's best trends for Bangalore.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 relative">
              <div className="aspect-square rounded-full bg-primary/10 absolute -inset-4 animate-pulse"></div>
              <img 
                src="/images/bubble-tea.png" 
                alt="Signature Bubble Tea" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViralFoodLab;
