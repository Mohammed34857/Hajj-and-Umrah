import React from 'react'
import './About.css'
import about from '../../images/about.jpg' 

const About =() =>{
  return (
    <div className='about'>

        <div className="photo">
            <img src={about} />
            <div className="circel1"></div>
            <div className="circel2"></div>
            <div className="circel3"></div>
            <div className="circel4"></div>
            <div className="circel5"></div>
        </div>
        <div className="about-us">
            <h1>معلومات عنا</h1>
            <div className="lin"></div>
            <p>الأساس الذي تقوم عليه خدماتنا هو رضا العملاء، <br />
            ومن هنا نسعى جاهدين لتقديم أفضل العروض <br />
            مع أفضل الخدمات للأفراد والمجموعات <br />
            ويتم اختيار جميع رحلاتنا مسبقًا بواسطة <br />
            فريقنا المتميز بعناية ودقة - وفي النهاية، <br />
            قبل تقديم أي رحلة، يتأكد الرئيس التنفيذي للشركة بنفسه <br />
            لجميع الخدمات والتأكد من أن كل شيء على مستوى التميز.</p>
        </div>
        
    </div>
  )
}

export default About