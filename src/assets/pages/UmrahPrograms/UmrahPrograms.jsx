import React, { useState, useEffect } from 'react';
import './UmrahPrograms.css';
import {HotelInUmrahProgram , BusInUmrahProgram} from '../../components'
import { useParams ,Link } from 'react-router-dom';
import { ImSpinner } from 'react-icons/im';
import img11 from '../../images/umrahprog.jpg';
import axios from 'axios';

const UmrahPrograms = () => {
  
  const {id} = useParams();
  const [programUmrah, setProgramUmrah] = useState({});
  const [hotel, setHotel] = useState([]);
  const [bus, setBus] = useState([]);
  const [loading , setLoading] = useState(true);
  const [activeLink, setActiveLink] = useState('Hotels');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const program_umrah = await axios.get(`https://officealhajandalumrah.adaptable.app/program-umrah/${id}`).then(response => response.data);
        setProgramUmrah(program_umrah);
        const AllProgramUmrahHotel = await axios.get('https://officealhajandalumrah.adaptable.app/prog-umrah-hotel');
        const ProgramUmrah = AllProgramUmrahHotel.data.filter((program) => program.id_ProgramUmrah === id );
        const hotelRoom = await Promise.all(ProgramUmrah.map((HotelRoomId) => {
          return axios.get(`https://officealhajandalumrah.adaptable.app/hotel-room/${HotelRoomId.id_HotelRoom}`).then(response => response.data);
        })); 
        setHotel(await Promise.all(hotelRoom.map(hotel => hotel.id_hotel).map(async (hotelId) => {
          return await axios.get(`https://officealhajandalumrah.adaptable.app/Hotel/${hotelId}`).then(response => response.data);
        }))) ;

        const busCompanyResponse = await axios.get(`https://officealhajandalumrah.adaptable.app/BusCompany/${program_umrah.id_busCompany}`);
        setBus(busCompanyResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Umrah Programs data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

 

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
    if(!programUmrah.Is_airline){
    content = (
      <div className='buses'>
        <BusInUmrahProgram busCompany={bus} />
      </div>
    );
  }else
  content = (
    <div className='buses'>
      <p>{programUmrah.Airline.name}</p>
    </div>
  );
  }
  return (
    <div className='umrah-programs'>
      <div className='frame-umrah-programs'>
         <h1 className='titel-program'> {programUmrah.name_program} </h1>
           <div className='details-trip2'>
            <h3>برنامج الرحلة</h3>
             <div className='parent'>
                 <img className='img-program' src={img11} alt='' />
                <div className='trip-details'>
                <p><b> برنامج العمرة </b>  نحرص على تصميم أفضل برامج العمرة مع خدمة متميزة مع الاهتمام بأدق التفاصيل والجوانب </p>
                    <div className='circle-trip'>
                        <div className='circle'>01</div>
                        <div className='trip-detail'> الإقامة <span>{programUmrah.stay_in_macca}</span> ليالي في مكة ضمن الفنادق المميزة </div>
                    </div>
                    <div className='circle-trip'>
                        <div className='circle'>02</div>
                        <div className='trip-detail'> الإقامة <span>{programUmrah.stay_in_madina}</span> ليالي بالمدينة المنورة بين الفنادق المميزة </div>
                    </div>
                    <div className='circle-trip'>
                        <div className='circle'>03</div>
                        <div className='trip-detail'>  <span>{programUmrah.price1}</span> </div>
                    </div>
                    <div className='circle-trip'>
                        <div className='circle'>04</div>
                        <div className='trip-detail'>  <span>{programUmrah.price2}</span> </div>
                    </div>
                    <div className='circle-trip'>
                        <div className='circle'>05</div>
                        <div className='trip-detail'>  <span>{programUmrah.price3}</span> </div>
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
            <div className="book-trip">
                <button> <Link to={`/RegisterProgramUmrah/${id}`}>احجز رحلتك الآن</Link> </button>
            </div>
       </div>
    </div>      
  )
}

export default UmrahPrograms