import './Transport.css';
import React,  { useState }  from 'react';
import { Link } from 'react-router-dom';
import TransportData from '../../Data/TransportData'
import { IoHome , IoEarth , IoChatbubbles  } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";
import { FaStar , FaBell , FaCar  } from "react-icons/fa";
import { MdOutlineSettingsSuggest , MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ImSpinner } from "react-icons/im";
import { SliderHotel } from '../../components';


const Transport=() => {

  const hotel = TransportData.find((hotel) => hotel.id === parseInt("1"));

  const starsArray = Array.from({ length: hotel.StarNumber }, (_, index) => <FaStar key={index} style={{ color: 'gold' }} />);

  const [activeLink, setActiveLink] = useState('around1');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }
  let content = null;
  if (activeLink === 'around1') {
    content = (
      <div className='around'>
          <ul>
            <li>متحف دار المدينة للتراث الحضاري والعمراني 8كم</li><br />
            <li>حديقة القاضي  8 كم</li><br />
          </ul> 
      </div>
    
    );
  } else if (activeLink === 'around2') {
    content = (
      <div className='around'>
           <ul>
            <li>حديقة جبل احد 4.4 كم</li><br />
            <li>حديقة الملك فهد 5 كم</li><br />
            <li>مدينة المعرفة الاقتصادية 6 كم</li><br />
          </ul>
      </div>
    );
  }
   
    return (
      <div className="transport">
      <div className="frame-transport">
      <div className='img-filter'><h1>Bus</h1><h2>Home <MdKeyboardDoubleArrowRight/> Bus </h2></div>
          <div className='image-transport'>
              <img src={hotel.photos[5]} alt="" />
          </div>
          <br />
         <div className='information'><IoHome/> اسم الفندق: {hotel.HotelName} {starsArray} </div> <br />
         <div className='information'><GiPositionMarker/> الموقع : {hotel.Position} </div> <br />
        
        <SliderHotel hotel={hotel} />

      <section>
         <div className="servise">
             <h1>الخدمات المتوفرة لدينا</h1>
             <div className="lines">
                   <div className="line"></div>
                   <div className="circle"> </div>
                   <div className="line"></div>
             </div> 
             <div className="servises">
                <p>خدمة الواي فاي ( الإنترنت اللاسلكي ) في جميع أنحاء الفندق مجاناً    <IoEarth/> </p>
                <p>تسجيل سريع للوصول والمغادرة    <MdOutlineSettingsSuggest/></p>
                <p> خدمة الإيقاظ / ساعة منبهة خدمة الغرف <FaBell/></p>
                <p>: لغات التحدث <IoChatbubbles/>
                    <ul>
                      <li>العربية</li><br />
                     <li>الإنجليزية</li>
                    </ul>
                </p>
               </div>
               <div className="round">
                 <div className='butt'>
                   <ul>
                    <li><Link className={activeLink === 'around1' ? 'around1 active' : 'around1'} to="#" onClick={() => handleLinkClick('around1')}> <ImSpinner/> المعالم السياحية</Link></li>
                    <li><Link className={activeLink === 'around2' ? 'around2 active' : 'around2'} to="#" onClick={() => handleLinkClick('around2')}> <FaCar/> مايوجد في الجوار </Link></li>
                   </ul>
                 </div>
               
                 {content}
               </div>
         </div>
      </section>

      </div>
  </div>
  )
}
export default Transport