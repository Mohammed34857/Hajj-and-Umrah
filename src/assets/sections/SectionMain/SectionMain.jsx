import './SectionMain.css'
import React from 'react'

window.onload = function() {
  let cont = document.getElementById("content");
  let image = document.getElementById("ImageMain");
  cont.style.marginLeft = "5px";  
  setTimeout(function(){
    image.style.filter = " brightness(0.5)";
    image.style.transform = "scale(1)"
},500);  

}
const SectionMain = () => {
  return (
    <>
    <div id='ImageMain' className='section-main'>
    </div>
      <div className='overlay'>
       <div id='content'>
          <p>اجنحة الضيافة للحج والعمرة</p>
          <a href="#" className='button'> احجز رحلتك الخاصة</a>
        </div>
      </div>
   

    </>
  )
}

export default SectionMain