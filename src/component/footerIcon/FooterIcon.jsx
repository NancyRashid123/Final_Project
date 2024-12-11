import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { LiaFacebookF } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function FooterIcon() {
  return (
    <div className='footer-icon'>
        <ul>
            <li> <Link to={'https://x.com/'} target='_blank'> <FaTwitter /> </Link> </li>
            <li> <Link to={'https://www.facebook.com/'} target='_blank'> <LiaFacebookF /> </Link> </li>
            <li> <Link to={'https://www.youtube.com/'} target='_blank'> <FaYoutube /> </Link> </li>
            <li> <Link to={'https://www.instagram.com/'} target='_blank'> <FaInstagram /> </Link> </li>
        </ul>
    </div>
  )
}