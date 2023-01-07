import React from 'react';
import Facebook from '../assets/Facebooklogo.png'
import Instagram from '../assets/Instagramlogo.png'
import TikTok from '../assets/TikToklogo.png'
import Twitter from '../assets/Twitterlogo.png'


export default function Footer() {
  return (
    <footer>
      <a href="https://www.facebook.com/"
        ><img
          src={Facebook}
          class="footerlogo"
          alt="facebook logo"
      /></a>

      <a href="https://twitter.com/"
        ><img
          src={Twitter}
          class="footerlogo"
          alt="Twitter logo"
      /></a>

      <a href="https://www.instagram.com/"
        ><img
          src={Instagram}
          class="footerlogo"
          alt="Instagram icon"
      /></a>

      <a href="https://www.tiktok.com/en/"
        ><img src={TikTok} class="footerlogo" alt="TikTok logo"
      /></a>
    </footer>
  )
}
