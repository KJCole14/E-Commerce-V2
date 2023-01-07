import React from 'react';
//import { Link } from 'react-router-dom'
import Gear from '../assets/Gear-Icon.png'


export default function Header() {
  return (
    <div>
     <header>Chrome Conclave</header>
    <li>
      <a href="Index.html"
        ><img id="logo" src={Gear} alt="Gear Icon"
      /></a>
    </li>
    <nav class="navbar">
      <ul>
        <li><a class="link" href="Index.html">Home</a></li>
      </ul>

      <ul>
        <li><a class="link" href="/Products/Shop.html">Shop</a></li>
      </ul>

      <ul>
        <li><a class="link" href="Contact.html">Contact</a></li>
      </ul>
    </nav>
    </div>
  )
}
