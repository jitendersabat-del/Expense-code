import React from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isViral?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, image, isViral }) => {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary/5">
      {/* Viral Badge */}
      {isViral && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-primary-dark text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.047a1 1 0 01.897.95c.023.212.026.413.028.614.004.407.004.757 0 1.056-.001.27-.006.452-.016.634.074.037.14.077.202.12.387.268.751.587 1.09.953l.053.057c.347.39.635.83.85 1.311.23.511.344 1.077.344 1.663 0 1.312-.516 2.31-1.335 3.033-.808.713-1.855 1.067-2.928 1.067a4.91 4.91 0 01-1.555-.245 2.22 2.22 0 00-1.455-.03 4.93 4.91 0 01-.925.089 4.93 4.91 0 01-3.11-1.076c-.77-.681-1.284-1.564-1.284-2.838 0-1.176.534-2.226 1.37-2.926.808-.68 1.831-1.026 2.871-1.026.311 0 .615.03.904.09.431.09.82.26 1.15.5.33.24.606.54.814.89.208.35.316.75.316 1.185 0 .43-.108.82-.316 1.16a2.03 2.03 0 01-.814.84 2.21 2.21 0 01-1.15.34 2.08 2.08 0 01-1.12-.34c-.31-.22-.57-.5-.77-.82-.2-.32-.3-.68-.3-1.07 0-.39.1-.75.3-1.07.2-.32.46-.6.77-.82a2.08 2.08 0 011.12-.34c.42 0 .81.12 1.15.34.33.22.61.5.81.82.2.32.31.68.31 1.07 0 .17-.02.34-.07.5-.05.16-.12.3-.22.44a.97.97 0 01-.35.31c-.14.07-.3.11-.47.11a.98.98 0 01-.48-.11.97.97 0 01-.34-.31c-.1-.14-.17-.28-.22-.44a1.12 1.12 0 01-.07-.5z" clipRule="evenodd" />
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Viral Trend
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="h-64 overflow-hidden relative bg-secondary-beige">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <span className="text-primary-dark font-black text-lg">
            {price}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        
        <button className="w-full mt-4 bg-secondary-mint text-primary-dark hover:bg-primary hover:text-white font-bold py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn">
          Add to Order
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
