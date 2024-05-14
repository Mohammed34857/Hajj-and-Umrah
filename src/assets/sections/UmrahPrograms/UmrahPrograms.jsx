import React ,{useState,useEffect} from 'react';
import  './UmrahPrograms.css';
import {CardUmrahProgram} from '../../components';
import axios from 'axios';

const UmrahPrograms = () => {

    const [umrahProgramsData, setUmrahProgramsData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://officealhajandalumrah.adaptable.app/program-umrah');
          setUmrahProgramsData(response.data);
        } catch (error) {
          console.error('Error fetching Umrah Programs data:', error);
        }
      };
      fetchData();
    }, []);

  const Cards=umrahProgramsData.map(Card =>{
    return <CardUmrahProgram key={Card._id} id={Card._id} image={Card.image} ProgramName={Card.name_program} Duration={Card.total_stay} DurationInMakaa={Card.stay_in_macca} DurationInMedina={Card.stay_in_madina} />
 })

  return (
    <div id='UmrahPrograms' className='Umrah-programs'>
      <p className='Umrah-programs-paragraph'> برامج العمرة : <br /> 
         نحرص على تصميم أفضل (برامج العمرة) ذات الخدمات الفائقة مع العناية بأدق التفاصيل والجوانب؛ لنعبّر عن تقديرنا العميق لعملائنا الكرام وتزويدهم بتجربة ثرية لا مثيل لها.
         وتتضمن (برامج العمرة) العديد من الخدمات الخاصة مثل الإقامة في فنادق فاخرة، وتوفير وجبات طعام متنوعة وشهية، وتوفير المواصلات الراقية بين المشاعر المقدسة، للاستمتاع برحلة عمرة استثنائية خلال سفركم وإقامتكم في جوار الحرمين الشريفين لأنكم تستحقون الأفضل</p>

     {Cards}
    
      </div>
  )
}

export default UmrahPrograms