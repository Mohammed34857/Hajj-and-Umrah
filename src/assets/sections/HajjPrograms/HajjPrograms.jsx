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
    <h1>  برامج الحج : اقض رحلات الحج مع شركة أجنحة الضيافة   للسياحة ، استمتع معنا بالصلاة في رحاب المصطفى ، يمكنك إختيار رحلة عادية أو رحلة ممزة بأسعار مناسبة ،
    احصل على افضل الحسومات عند حجزك رحلات حج وذلك  بأقل الأسعار وأفضل الميزات ، اغتنم الفرصة واستمتع برحلة الحج معنا مع أفضل عروض الرحلات السياحية الدينية . </h1>
    </div>
    <div className='hajj-programs'> 
       {hajjProgramsData.length > 0 && (
          <CardHajj program1={hajjProgramsData[0]} program2={hajjProgramsData[1]} />
        )}  
          </div>
   
    </>
  )
}

export default HajjPrograms