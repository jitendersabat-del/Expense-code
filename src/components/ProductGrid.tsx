import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isViral?: boolean;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title, subtitle }) => {
  return (
    <section className="py-16 bg-secondary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 space-y-4">
            {subtitle && (
              <p className="text-primary-dark font-black uppercase tracking-[0.2em] text-xs">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                {title}
              </h2>
            )}
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
