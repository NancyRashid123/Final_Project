


import React from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

export default function ProductCard({ image, title, name, price, id }) {
  return (
    <Link to={`/products/${id}`} className='product-card'>
      <div className='product-card-image'>
        <img src={image} alt="" />
      </div>
      <div className='product-card-content'>
        <h5>{title}</h5>
        <h4>{name}</h4>
        <span>{price}</span>
      </div>
      <div className="project_btn_valign">
        <Button text={"add to cart"} />
      </div>
    </Link>
  );
}



