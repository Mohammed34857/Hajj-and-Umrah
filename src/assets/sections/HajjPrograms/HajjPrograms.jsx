import React ,{useState,useEffect} from 'react';
import './HajjPrograms.css'
import { CardHajj } from '../../components'
import axios from 'axios';

const HajjPrograms = () => {


   const [hajjProgramsData, setHajjProgramsData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://officealhajandalumrah.adaptable.app/program-al-haj/AvailablePrograms');
          setHajjProgramsData(response.data);
         
        } catch (error) {
          console.error('Error fetching hajj Programs data:', error);
        }
      };
      fetchData();
    }, []);


  return (
    <>
    <div className="fixed">
  </div>
    <div id='HajjPrograms'>
      <h1>  برامج الحج : اقضي رحلات الحج مع شركة اجنحة الضيافة   للسياحة, استمتع معنا بالصلاة في رحاب المصطفى, اختار ما بين المستوى الاقتصادى وvipبأسعار مناسبة, احصل على افضل الخصومات عند حجزك رحلات حج,  احصل على رحلات الحج  بأقل الاسعار وافضل المميزات, اغتنم الفرصة واستمتع برحلة الحج معنا, احجز معنا الان واستمتع بعروض رحلات السياحة الدينية</h1>
      
    </div>
    <div className='hajj-programs'> 
       {hajjProgramsData.length > 0 && (
          <CardHajj program1={hajjProgramsData[0]} program2={hajjProgramsData[1]} />
        )}  
          </div>
    <div className="fixed">
  </div>
    </>
  )
}

export default HajjPrograms