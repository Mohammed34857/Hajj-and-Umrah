import React from 'react'
import  './UmrahPrograms.css'
import {CardUmrahProgram} from '../../components'
import UmrahProgramsData from '../../Data/UmrahProgramsData'


const UmrahPrograms = () => {

  const Cards=UmrahProgramsData.map(Card =>{
    return <CardUmrahProgram key={Card.id} id={Card.id} image={Card.image} ProgramName={Card.ProgramName} Duration={Card.Duration} DurationInMakaa={Card.DurationInMakaa} DurationInMedina={Card.DurationInMedina} />
 })

  return (
    <div id='UmrahPrograms' className='Umrah-programs'>
      <p className='Umrah-programs-paragraph'>برامج العمرة
نحرص على تصميم أفضل (برامج العمرة) ذات الخدمات الفائقة مع العناية بأدق التفاصيل والجوانب؛ لنعبّر عن تقديرنا العميق لعملائنا الكرام وتزويدهم بتجربة ثرية لا مثيل لها.
وتتضمن (برامج العمرة) العديد من الخدمات الخاصة مثل الإقامة في فنادق فاخرة، وتوفير وجبات طعام متنوعة وشهية، وتوفير المواصلات الراقية بين المشاعر المقدسة، للاستمتاع برحلة عمرة استثنائية خلال سفركم وإقامتكم في جوار الحرمين الشريفين لأنكم تستحقون الأفضل</p>

     {Cards}
    
      </div>
  )
}

export default UmrahPrograms