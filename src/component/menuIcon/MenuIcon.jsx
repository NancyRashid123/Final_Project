import React, { useContext } from "react";
import { MobileHandlerContext } from '../../utils/mobileHandler';

export default function MenuIcon() {
    const { isMobile, openMenu, setOpenMenu } = useContext(MobileHandlerContext);
  return (
    <>
    {isMobile && (
        <div className={`nav--barIcon ${openMenu ? "menu-open" : ""}`} onClick={() => setOpenMenu(!openMenu)}>
          <div></div>
          <div></div>
        </div>
      )
    }
    </>

  )
}
