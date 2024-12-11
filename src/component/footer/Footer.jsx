import React from 'react'
import Logo from '../logo/Logo'
import FooterIcon from '../footerIcon/FooterIcon'

export default function Footer() {
  return (
    <footer className="footer py px">
      <div className="footer-logo"> <Logo /></div>
      <div> <FooterIcon /> </div>
      <div className='footer-contact'>
        <div className='footer-contact-address'>
          <h4>Our address</h4>
          <p>523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA</p>
        </div>
        <div className='footer-contact-phone'>
          <h4>Call us today</h4>
          <p>+1 234 719 8948 </p>
        </div>
        <div className='footer-contact-email'>
          <h4>Send email</h4>
          <p>support@agrarium.com</p>
        </div>
      </div>
        <div className='footer-copyright'>
          <p>2021 Agrarium. All Rights Reserved by Artureanec</p>
        </div>
    </footer>
  )
}