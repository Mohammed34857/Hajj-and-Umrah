import './Header.css'
import logo from '../../images/logo.png'
import React, {useState , useEffect} from 'react'
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {


const [office,setOffice]=useState([]);
console.log(office)
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://officealhajandalumrah.adaptable.app/office');
      setOffice(response.data);
   
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);


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
               {office.length > 0
               ?  <>
                 <p  id='arb'>{office[0].name}</p>
                 <p id='eng'>{office[0].nameEnglish}</p>
                 </>
                : <p>Loading...</p>}
              </div> 
              {office.length > 0 ? <img src={office[0].logoImage} alt=""/> : <p></p>}
            </div>
            <ul  style={{ top: isMenuOpen ? '90px' : '-350px' }}>
                <li><Link to="/"> الرئيسية </Link></li>
                <li><a href="#HajjPrograms"> برامج الحج </a></li>
                <li><a href="#UmrahPrograms"> برامج العمرة </a></li>
                <li><a href="#hotel"> الفنادق </a></li>
                <li><Link to="/Transport"> النقل </Link></li>
            </ul>
            <div id='menu' onClick={toggleMenu}>
              <CiMenuFries id='bars'/>
            </div>
        </nav>
    </header>
  )
}

export default Header