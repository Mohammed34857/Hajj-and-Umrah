import React, { useState, useEffect } from 'react';
import './UmrahPrograms.css';
import {HotelInUmrahProgram} from '../../components'
import { useParams ,Link } from 'react-router-dom';
import { ImSpinner } from 'react-icons/im';
import img11 from '../../images/umrahprog.jpg';
import axios from 'axios';

const UmrahPrograms = () => {
  
  const { id } = useParams();
  const [hotel, setHotel] = useState([]);
  const [bus, setBus] = useState([]);
  const [loading , setLoading] = useState(true);
  const [activeLink, setActiveLink] = useState('Hotels');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const programHotelResponse = await axios.get('https://officealhajandalumrah.adaptable.app/prog-umrah-hotel');
        const fetchedHotelRooms = await Promise.all(programHotelResponse.data.filter((p)=> p.id_ProgramUmrah === (id)).map(async (programHotel) => {
          const hotelRoomResponse = await axios.get(`https://officealhajandalumrah.adaptable.app/hotel-room/${programHotel.id_HotelRoom}`);
          return hotelRoomResponse.data;
        }));
        const hotelData = await Promise.all(fetchedHotelRooms.map(hotel => hotel.id_hotel).map(async (hotelId) => {
          const response = await axios.get(`https://officealhajandalumrah.adaptable.app/Hotel/${hotelId}`);
          return response.data; 
        }));
        setHotel(hotelData);
        const newHotelData=hotelData[0];
        setHotel(prevHotel => [...prevHotel, newHotelData]);

        const programBusResponse = await axios.get('https://officealhajandalumrah.adaptable.app/program-bus/findAll');
        setBus(await Promise.all(programBusResponse.data.filter((p)=> p.id_ProgramUmrah === (id)).map(async (busCompany) => {
          const BusCompanyResponse = await axios.get(`https://officealhajandalumrah.adaptable.app/BusCompany/${busCompany.id_busCompany}`);
          return BusCompanyResponse.data;
        }))) 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Umrah Programs data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

 
   console.log(bus);
   console.log(hotel);

  if (loading) {
    return <div className='loading'> Loading... <ImSpinner /></div>;
 }

  
  const handleLinkClick = (link) => {
    setActiveLink(link);
  }
  
    let content = null;
  if (activeLink === 'Hotels') {
    content = (
      <div className='hotels'>
       <HotelInUmrahProgram hotels={hotel} />
      </div>
    );
  } else if (activeLink === 'Buses') {
    content = (
      <div className='buses'>
        {/* <HotelBusInUmrahProgram hotels={bus} /> */}
      </div>
    );
  }
  return (
    <div className='umrah-programs'>
      <div className='frame-umrah-programs'>
         <h1 className='titel-program'>the distinctive umrah al-barr <span>1445 -2024 </span></h1>

           <div className='details-trip2'>
            <h3>trip programme</h3>
            <div className='parent'>
                 <img className='img-program' src={img11} alt='' />
                <div className='trip-details'>
                <p><b> برنامج العمرة </b>  نحرص على تصميم أفضل برامج العمرة مع خدمة متميزة مع الاهتمام بأدق التفاصيل والجوانب </p>
                    <div className='circle-trip'>
                        <div className='circle'>01</div>
                        <div className='trip-details1'> الإقامة 3 ليالي في مكة ضمن الفنادق المميزة </div>
                    </div>
                    <div className='circle-trip'>
                        <div className='circle'>02</div>
                        <div className='trip-details2'> الإقامة 9 ليالي بالمدينة المنورة بين الفنادق المميزة </div>
                    </div>
                    <div className='circle-trip'>
                        <div className='circle'>03</div>
                        <div className='trip-details3'> - زيارة الأماكن المباركة في الحرمين الشريفين برفقة مرشد </div>
                    </div>
                    <div className='circle-trip'>
                        <div className='circle'>04</div>
                        <div className='trip-details4'> السفر براً بحافلات سعودية حديثة ضمن حافلات VIP </div>
                </div>
            </div>
          </div>
            </div>

           <div className='content-hotel'>
             <div className='buttons'>
               <ul>
                 <li><Link className={activeLink === 'Hotels' ? 'Hotels active' : 'Hotels'} to="#" onClick={() => handleLinkClick('Hotels')}>Hotels</Link></li>
                 <li><Link className={activeLink === 'Buses' ? 'Buses active' : 'Buses'} to="#" onClick={() => handleLinkClick('Buses')}>Buses</Link></li>
               </ul>
             </div>

                {content}

            </div>

           <div className="butt-bus">
                <button>learn more</button>
            </div>

            <div className="book-trip">
                <button>book your trip now</button>
            </div>
       </div>
    </div>      
  )
}

export default UmrahPrograms