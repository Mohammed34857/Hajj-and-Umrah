import React from 'react'
import  './UmrahPrograms.css'
import { Card } from '../../components'
import UmrahProgramsData from '../../Data/UmrahProgramsData'


const UmrahPrograms = () => {

  const Cards=UmrahProgramsData.map(card =>{
    return <Card key={card.id} id={card.id} image={card.image} ProgramName={card.ProgramName} Duration={card.Duration} DurationInMakaa={card.DurationInMakaa} DurationInMedina={card.DurationInMedina} />
 })

  return (
    <div className='Umrah-programs'>
      <p className='Umrah-programs-paragraph'>برامج العمرة
نحرص على تصميم أفضل (برامج العمرة) ذات الخدمات الفائقة مع العناية بأدق التفاصيل والجوانب؛ لنعبّر عن تقديرنا العميق لعملائنا الكرام وتزويدهم بتجربة ثرية لا مثيل لها.
وتتضمن (برامج العمرة) العديد من الخدمات الخاصة مثل الإقامة في فنادق فاخرة، وتوفير وجبات طعام متنوعة وشهية، وتوفير المواصلات الراقية بين المشاعر المقدسة، للاستمتاع برحلة عمرة استثنائية خلال سفركم وإقامتكم في جوار الحرمين الشريفين لأنكم تستحقون الأفضل</p>

     {Cards}
    
      </div>
  )
}

export default UmrahPrograms