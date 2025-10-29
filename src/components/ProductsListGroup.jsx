import React from 'react';
import Title from './Title';
import ProductCard from './ProductCard';

const ProductsListGroup = ({ title, products }) => {
  return (
    products.length > 0 && (
      <div className="mt-12">
        <Title title={title} />

        <div className="mt-6 grid grid-flow-row grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-items-center gap-2 lg:gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    )
  );
};

export default ProductsListGroup;
