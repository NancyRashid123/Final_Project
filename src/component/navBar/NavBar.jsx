import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Login from "../login/Login";
import MenuIcon from "../menuIcon/MenuIcon";


export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navBar  px ${isSticky ? 'sticky' : ''}`}>
      
         <Logo />
         <Menu />
         <Login />
         <MenuIcon />
    </nav>
  );
}
