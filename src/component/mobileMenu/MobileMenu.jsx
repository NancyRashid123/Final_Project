import React, { useContext } from "react";
import { MobileHandlerContext } from "../../utils/mobileHandler";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const MobileMenu = () => {
  const { openMenu, setOpenMenu } = useContext(MobileHandlerContext);
  return (
    <div className={`mobileMenu ${openMenu ? "active" : ""}`}>
      <motion.ul initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.4, ease: "easeInOut" }}>
        <NavLink to={"/"} onClick={() => setOpenMenu(false)}>
          Home
        </NavLink>
        <NavLink to={"/products"} onClick={() => setOpenMenu(false)}>
        products
        </NavLink>
        <NavLink to={"/Ourteam"} onClick={() => setOpenMenu(false)}>
        Our team
        </NavLink>
        <NavLink to={"/problems"} onClick={() => setOpenMenu(false)}>
        Problems with solution
        </NavLink>
        <NavLink to={'/login'} onClick={() => setOpenMenu(false)}>Login</NavLink>
      </motion.ul>
    </div>
  );
};

export default MobileMenu;
