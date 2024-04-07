import './Header.css'
import logo from '../../images/logo.png'
import React, {useState} from 'react'
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('#navbar a');
    const menu = document.getElementById('menu');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
      navLinks.forEach(function(link) {
        link.style.color = 'var(--color-gold)';
    });
       menu.style.color = 'var(--color-gold)';
    } else {
      navbar.classList.remove('scrolled');
      navLinks.forEach(function(link) {
        link.style.color = 'white';
    });
       menu.style.color = 'white';
    }
  }
  );
  
  

  return (
    
    <header  >
        <nav id='navbar'>
            <div id='logo'>
             <div className='logo-name'>
              <p id='arb'> أجنحة الضيافة</p>
              <p id='eng'>AJNIHAT ALDIYAFA</p>
              </div> 
             <img src={logo} alt="" />
            </div>
            <ul  style={{ top: isMenuOpen ? '90px' : '-350px' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#">Hajj Programs</Link></li>
                <li><Link to="#UmrahPrograms">Umrah programs</Link></li>
                <li><Link to="#hotel">Hotels</Link></li>
                <li><Link to="/Transport">Transport</Link></li>
            </ul>
            <div id='menu' onClick={toggleMenu}>
              <CiMenuFries id='bars'/>
            </div>
        </nav>
    </header>
  )
}

export default Header