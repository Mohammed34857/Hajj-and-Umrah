import React from 'react'
import './CardHajj.css'
import hajj from '../../images/makka1.jpg'

const CardHajj = () => {
  return (
    <div className='card-hajj-item'>
        <div className='card-hajj-program'>
           <div className="front">
                <img src={hajj} alt="" />
                <div className="tex">
                    <div className="left">
                        <span>الحج 5 نجوم مستوي اول </span>  
                    </div>
                </div>
            </div>
            <div className="back">
                <h2>الحج 5 نجوم مستوي اول</h2>
                <div className="detiles">
                    <span>5-نجوم</span> 
                </div>
                <p>احجز معنا الان رحلات الحج 5 نجوم للعام الجديد من أجنحة الضيافة للسياحة
                    <br/>
                    <br/> استمتع بقضاء مناسك الحج بفندق أنوار المدينة <br/>
                    

                    اقم بفندق الصفوة بمكة المكرمة واحصل على اعلى الخصومات

                    <br/>
                    <b>يوم 14 / ليلة 13</b>
                </p>
                <button>المزيد من التفاصيل</button>
              </div>
            </div>
         </div>
  )
}

export default CardHajj
