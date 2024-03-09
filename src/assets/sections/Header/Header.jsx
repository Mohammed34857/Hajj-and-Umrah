import './Header.css'
import logo from '../../images/logo.png'
import React from 'react'

const Header = () => {

  
  // window.addEventListener('scroll', function() {
  //   let navbar = document.getElementById('navbar');
  //   let navLinks = document.querySelectorAll('#navbar a');
  //   if (window.scrollY > 0) {
  //     navbar.classList.add('scrolled');
  //     navLinks.forEach(function(link) {
  //       link.style.color = 'var(--color-gold)';
  //   });
  //   } else {
  //     navbar.classList.remove('scrolled');
  //     navLinks.forEach(function(link) {
  //       link.style.color = 'white';
  //   });
  //   }
  // }
  // );


  return (
    <header  >
        <nav id='navbar'>
            <div id='logo'>
             <p>AJNIHAT ALDIYAFA</p>
             <img src={logo} alt="" />
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Hajj Programs</a></li>
                <li><a href="#">Umrah programs</a></li>
                <li><a href="#">Hotels</a></li>
                <li><a href="#">Transport</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header