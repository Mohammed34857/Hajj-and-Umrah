import React ,{useState,useEffect} from 'react';
import  './UmrahPrograms.css';
import {CardUmrahProgram} from '../../components';
import axios from 'axios';

const UmrahPrograms = () => {

    const [umrahProgramsData, setUmrahProgramsData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://officealhajandalumrah.adaptable.app/program-umrah/AvailablePrograms');
          setUmrahProgramsData(response.data);
        } catch (error) {
          console.error('Error fetching Umrah Programs data:', error);
        }
      };
      fetchData();
    }, []);

    const getMinPrice = (program) => {
      const prices = [program.price1, program.price2, program.price3, program.price4]
        .map(price => price ? parseInt(price.replace(/\D/g, '')) : NaN)
        .filter(price => !isNaN(price));
  
      return prices.length > 0 ? Math.min(...prices) : 0;
    };

  const Cards=umrahProgramsData.map(Card =>{
    const minPrice = getMinPrice(Card);
    return <CardUmrahProgram key={Card._id} id={Card._id} image={Card.image} ProgramName={Card.name_program} Duration={Card.total_stay} DurationInMakaa={Card.stay_in_macca} DurationInMedina={Card.stay_in_madina} price={minPrice} />
 })

  return (
    <div id='UmrahPrograms' className='Umrah-programs'>
      <p className='Umrah-programs-paragraph'> برامج العمرة : <br /> 
        نحرص على تقديم أفضل برامج عمرة 
          ذات خدمات مميزة مع العناية بأدق التفاصيل والجوانب ، لنعبّر عن تقديرنا
           العميق لعملائنا الكرام وتزويدهم بتجربة ثرية لا مثيل لها  ، وتتضمن 
          الخدمات الإقامة في فنادق فاخرة، وتوفير المواصلات الراقية بين المشاعر المقدسة، للاستمتاع برحلة عمرة استثنائية خلال سفركم وإقامتكم في جوار الحرمين الشريفين لأنكم تستحقون الأفضل.</p>

     {Cards}
    
      </div>
  )
}

export default UmrahPrograms