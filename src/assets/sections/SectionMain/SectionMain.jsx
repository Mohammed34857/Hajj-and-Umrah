import { Link } from 'react-router-dom';
import './SectionMain.css'
import React , { useEffect } from 'react'


const SectionMain = () => {

  useEffect(() => {
    let cont = document.getElementById("content");
    let image = document.getElementById("ImageMain");
    if (cont && image) {
      cont.style.marginLeft = "5px";
      setTimeout(function () {
        image.style.filter = "brightness(0.5)";
        image.style.transform = "scale(1)";
      }, 500);
    }
  }, []);

  return (
    <>
    <div id='ImageMain' className='section-main'>
    </div>
      <div className='overlay'>
       <div id='content'>
          <p>اجنحة الضيافة للحج والعمرة</p>
          <Link to="/RegisterProgramSpecial" className='button'> احجز رحلتك الخاصة</Link>
        </div>
      </div>
   

    </>
  )
}

export default SectionMain