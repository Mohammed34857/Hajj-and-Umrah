import React from 'react'
import './CardHajj.css'
import { ImAirplane , ImHeart } from "react-icons/im";
import { FaHotel ,FaAppleAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const CardHajj = () => {
  return (
    <div className='card-hajj-item   '>
        <div className='card-hajj-program card-news'>
        <div class="left">
            <h2>برنامج الحج الاكبر</h2>
            <span>1445-2024</span>
            <p class="my-4"> تتشرف إدارة مجموعة اجنحة الضيافة بإشراف مديرها الحاج هشام محمد نادر عنبي وكادرها الديني والإداري بتقديم افضل برامج الحج 1445</p>
            <ul>
                <li> ( تاشيرة الحج , تذكرة طيران من مطار دمشق الى مطار جدة وبالعكس )  <i> <ImAirplane /></i></li>
                <li> (الاقامة بمكة المكرمة والمدينة المنورة بفنادق فئة ثلاث نجوم )     
              <i> <FaHotel /></i> 
                </li>
                <li> (وجبتي فطور وعشاء يوميا لكل حاج) <i ><FaAppleAlt /></i></li>
                <li> (هدايا ورحلات متنوعة )  <i>  <ImHeart /></i></li>
            </ul>
            <Link class="btn btn-dark btn-1" to={'/HajjPrograms/'}> تفاصيل البرنامج</Link>
          
            <span>الاسعار تبدأ من $4900</span>
       
        </div>
        <div class="right">
        </div>
              </div>
              <div class="card2-news">
        <div class="right" >
        </div>
        <div class="left">
            <h2>VIP برنامج الحج </h2>
            <span>1445-2024</span>
            <p class="my-4">تتشرف إدارة مجموعة اجنحة الضيافة بإشراف مديرها الحاج هشام محمد نادر عنبي وكادرها الديني والإداري بتقديم افضل برامج الحج 1445</p>
            <ul>
                <li> ( تاشيرة الحج , تذكرة طيران من مطار دمشق الى مطار جدة وبالعكس )<i> <ImAirplane /></i></li>
                <li> (     الاقامة بمكة المكرمة والمدينة المنورة بفنادق فئة خمس نجوم مطلة على الحرم والمدينة المنورة)
                <i> <FaHotel /></i>
                </li>
                <li> (ثلاث وجبات فطور وغداء وعشاء يوميا لكل حاج) <i ><FaAppleAlt /></i></li>
                <li> (هدايا ورحلات متنوعة ) <i>  <ImHeart /></i></li>
            </ul>
            <Link class="btn btn-dark btn-1" to={'/HajjPrograms/'}> تفاصيل البرنامج</Link>
           
            <span>الاسعار تبدأ من $5000</span>
        </div>
    </div>
            </div>
            

  )
}

export default CardHajj
