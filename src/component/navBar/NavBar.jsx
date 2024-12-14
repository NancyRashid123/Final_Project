
// NavBar.js
import React, { useContext, useEffect, useState } from "react";
import { FiShoppingCart } from 'react-icons/fi';
import { CounterContext } from "../../hooks/UseContext";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Login from "../login/Login";
import MenuIcon from "../menuIcon/MenuIcon";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const { counter } = useContext(CounterContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <nav className={`navBar px ${isSticky ? 'sticky' : ''}`}>
      <Logo />
      <Menu />
      <div className="navBar-right">
        <div className="cart" onClick={goToCart}>
          <span>{counter}</span>
          <FiShoppingCart />
        </div>
        <Login />
        <MenuIcon />
      </div>
    </nav>
  );
}

