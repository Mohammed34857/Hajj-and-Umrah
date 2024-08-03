import React from 'react'
import './CardHajj.css'
import { ImAirplane , ImHeart } from "react-icons/im";
import { FaHotel ,FaAppleAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const CardHajj = ({ program1, program2 }) => {


  const getMinPrice = (program) => {
    const prices = [program.price1, program.price2, program.price3, program.price4]
      .map(price => price ? parseInt(price.replace(/\D/g, '')) : NaN)
      .filter(price => !isNaN(price));

    return prices.length > 0 ? Math.min(...prices) : 0;
  };

  const minPrice1 = getMinPrice(program1);
  const minPrice2 = getMinPrice(program2);

  return (
    <div className='card-hajj-item   '>
        <div className='card-hajj-program card-news'>
        <div className="left">
            <h2> {program1.name_program} </h2>
            <span>{program1.Date_Travel_Hijri}</span>
            <p className="my-4"> تتشرف إدارة مجموعة اجنحة الضيافة بإشراف مديرها الحاج هشام محمد نادر عنبي وكادرها الديني والإداري بتقديم افضل برامج الحج 1445</p>
            <ul>
                <li> ( تاشيرة الحج , تذكرة طيران من مطار دمشق الى مطار جدة وبالعكس )  <i> <ImAirplane /></i></li>
                <li> (الاقامة بمكة المكرمة والمدينة المنورة بفنادق فئة ثلاث نجوم )     
              <i> <FaHotel /></i> 
                </li>
                <li> ({program1.Number_meals}) <i ><FaAppleAlt /></i></li>
                <li> (هدايا ورحلات متنوعة )  <i>  <ImHeart /></i></li>
            </ul>
            <Link className="btn btn-dark btn-1" to={`/HajjPrograms/${program1._id}`}> تفاصيل البرنامج</Link>
          
            <span>الأسعار تبدأ من ${minPrice1}</span>
       
        </div>
        <div className="right">
           <img src={program1.image} alt={program1.name_program} />
        </div>
              </div>
              <div className="card2-news">
        <div className="right" >
           <img src={program2.image} alt={program2.name_program} />
        </div>
        <div className="left">
            <h2> {program2.name_program} </h2>
            <span>{program2.Date_Travel_Hijri}</span>
            <p className="my-4">تتشرف إدارة مجموعة اجنحة الضيافة بإشراف مديرها الحاج هشام محمد نادر عنبي وكادرها الديني والإداري بتقديم افضل برامج الحج 1445</p>
            <ul>
                <li> ( تاشيرة الحج , تذكرة طيران من مطار دمشق الى مطار جدة وبالعكس )<i> <ImAirplane /></i></li>
                <li> (     الاقامة بمكة المكرمة والمدينة المنورة بفنادق فئة خمس نجوم مطلة على الحرم والمدينة المنورة)
                <i> <FaHotel /></i>
                </li>
                <li> ({program2.Number_meals}) <i ><FaAppleAlt /></i></li>
                <li> (هدايا ورحلات متنوعة ) <i>  <ImHeart /></i></li>
            </ul>
            <Link className="btn btn-dark btn-1" to={`/HajjPrograms/${program2._id}`} > تفاصيل البرنامج</Link>
           
            <span>الأسعار تبدأ من ${minPrice2}</span>
        </div>
    </div>
            </div>
            

  )
}

export default CardHajj
