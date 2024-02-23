import './Header.css'
import logo from '../../images/logo.png'
import React from 'react'

const Header = () => {

  window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let navLinks = document.querySelectorAll('#navbar a');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
      navLinks.forEach(function(link) {
        link.style.color = 'var(--color-gold)';
    });
    } else {
      navbar.classList.remove('scrolled');
      navLinks.forEach(function(link) {
        link.style.color = 'white';
    });
    }
  });

  return (
    <header id='navbar' >
        <img src={logo} alt="" />
        <nav>
            <ul>
                <li><a href="#">الصفحة الرئيسية</a></li>
                <li><a href="#">من نحن</a></li>
                <li><a href="#">خدماتنا</a></li>
                <li><a href="#">اتصل بنا</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header