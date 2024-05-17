import './SectionMain.css'
import { Button } from '../../components';
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
          <Button link={"/RegisterProgramSpecial"} linkName={"احجز رحلتك الخاصة"}  />
        </div>
      </div>
   

    </>
  )
}

export default SectionMain