
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../component/button/Button";
// const Cart = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     const updatedCartItems = storedCartItems.map(item => ({
//       ...item,
//       quantity: item.quantity || 1 
//     }));
//     setCartItems(updatedCartItems);
//   }, []);

//   const saveCartToLocalStorage = (items) => {
//     localStorage.setItem("cart", JSON.stringify(items));
//   };

//   const removeItemFromCart = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//     saveCartToLocalStorage(updatedCart);
//   };

//   const increaseQuantity = (id) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCartItems(updatedCart);
//     saveCartToLocalStorage(updatedCart);
//   };

//   const decreaseQuantity = (id) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     setCartItems(updatedCart);
//     saveCartToLocalStorage(updatedCart);
//   };

//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem("cart");
//   };

//   const goToProducts = () => {
//     navigate("/products");
//   };

//   if (cartItems.length === 0) {
//     return (
    
//       <>
//         <header className="cart-header">
//         <div className="cart-header-bg"></div>
//         <div className="cart-header-title px">
//           <h1>CART</h1>
//         </div>
//         <div className="cart-header-overlay"></div>
//       </header>

//       <div className="empty-cart px py">
//             <h3 className="empty-cart-message">Your cart is empty!</h3>
//             <Button text={"Go to Products"} onClick={goToProducts} />
//           </div>
//       </>
    
//     );
//   }

//   return (
//     <div>
//       <header className="cart-header">
//         <div className="cart-header-bg"></div>
//         <div className="cart-header-title px">
//           <h1>CART</h1>
//         </div>
//         <div className="cart-header-overlay"></div>
//       </header>

//       <table className="cart-table px py">
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item) => (
//             <tr key={item.id}>
//               <td className="product-cell">
//                 <button
//                   className="remove-btn"
//                   onClick={() => removeItemFromCart(item.id)}
//                 >
//                   ×
//                 </button>
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="product-image"
//                 />
//                 <span className="product-name">{item.name}</span>
//               </td>
//               <td className="price-cell">
//                 ${parseFloat(item.price.replace('$', '')).toFixed(2)}
//               </td>
//               <td className="quantity-cell">
//                 <div className="quantity-btn-container ">
//                 <button
//                   className="quantity-btn"
//                   onClick={() => decreaseQuantity(item.id)}
//                 >
//                   -
//                 </button>
               
//                   <span className="quantity-input">
//                     {item.quantity}
//                   </span>
//                 <button
//                   className="quantity-btn"
//                   onClick={() => increaseQuantity(item.id)}
//                 >
//                   +
//                 </button>
//                 </div>
               
//               </td>
//               <td className="total-cell">
//                 ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="cart-actions">
//         <Button onClick={clearCart}  text={"Clear Cart "}/>
//         <Button onClick={goToProducts} text = {"Continue Shopping"}/>
//       </div>
//     </div>
//   );
// };

// export default Cart;







import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../component/button/Button";
import { CounterContext } from "../../hooks/UseContext";

const Cart = () => {
  const navigate = useNavigate();
  const { updateCounter } = useContext(CounterContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCartItems = storedCartItems.map(item => ({
      ...item,
      quantity: item.quantity || 1 
    }));
    setCartItems(updatedCartItems);
  }, []);

  const saveCartToLocalStorage = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
    updateCounter(); // تحديث Query Key
  };

  const removeItemFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    updateCounter(); // تحديث Query Key
  };

  const goToProducts = () => {
    navigate("/products");
  };

  if (cartItems.length === 0) {
    return (
      <>
        <header className="cart-header">
          <div className="cart-header-bg"></div>
          <div className="cart-header-title px">
            <h1>CART</h1>
          </div>
          <div className="cart-header-overlay"></div>
        </header>
        <div className="empty-cart px py">
          <h3 className="empty-cart-message">Your cart is empty!</h3>
          <Button text={"Go to Products"} onClick={goToProducts} />
        </div>
      </>
    );
  }

  return (
    <div>
      <header className="cart-header">
        <div className="cart-header-bg"></div>
        <div className="cart-header-title px">
          <h1>CART</h1>
        </div>
        <div className="cart-header-overlay"></div>
      </header>
      <table className="cart-table px py">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="product-cell">
                <button
                  className="remove-btn"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  ×
                </button>
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
                <span className="product-name">{item.name}</span>
              </td>
              <td className="price-cell">
                ${parseFloat(item.price.replace('$', '')).toFixed(2)}
              </td>
              <td className="quantity-cell">
                <div className="quantity-btn-container ">
                  <button
                    className="quantity-btn"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="quantity-input">
                    {item.quantity}
                  </span>
                  <button
                    className="quantity-btn"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="total-cell">
                ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-actions">
        <Button onClick={clearCart} text={"Clear Cart "} />
        <Button onClick={goToProducts} text={"Continue Shopping"} />
      </div>
    </div>
  );
};

export default Cart;










