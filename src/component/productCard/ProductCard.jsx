
import React, { useContext } from "react";
import { CounterContext } from "../../hooks/UseContext";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const ProductCard = ({ id, image, title, name, price }) => {
  const { counter, setCounter } = useContext(CounterContext);

  const addToCart = () => {
    const product = { id, image, title, name, price, quantity: 1 };
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingProduct = storedCartItems.find((item) => item.id === id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      storedCartItems.push(product);
    }
  
    localStorage.setItem("cart", JSON.stringify(storedCartItems));
    setCounter(counter + 1);
    updateCounter(); 
  };
  
  return (
    <> 
  
    <div className="product-card">
      <Link to={`/products/${id}`} className="product-card-image">
        <img src={image} alt="" />
      </Link>
      <div className="product-card-content">
        <h4>{name}</h4>
        <h5>{title}</h5>
        <span>{price}</span>
      </div>
      <div className="project_btn_valign">
        <Button onClick={addToCart} text="Add To Cart" />
      </div>
    </div>
    </>
      

  );
};

export default ProductCard;
