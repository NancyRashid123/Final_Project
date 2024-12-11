
import React from 'react';
import ProductCard from '../../component/productCard/ProductCard';
import { getDataProucts } from '../../api/FetchApi';

export default function Products() {
  const { data } = getDataProucts();

  return (
    <>
      <header className="product-header">
        <div className="product-header-bg"> </div>
        <div className="product-header-title px">
          <h1>PRODUCTS</h1>
        </div>
        <div className="product-header-overlay"></div>
      </header>

      <section className='product_section px py'>
        {data?.data?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            name={product.name}
            price={product.price}
          />
        ))}
      </section>
    </>
  );
}

