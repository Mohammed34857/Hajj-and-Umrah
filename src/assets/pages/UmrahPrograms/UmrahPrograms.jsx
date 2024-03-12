import React ,  { useState } from 'react'
import './UmrahPrograms.css'
import { useParams ,Link } from 'react-router-dom';
import UmrahProgramsDetailsData from '../../Data/UmrahProgramsDetailsData';
import { HotelBusInUmrahProgram } from '../../components';
import img11 from '../../images/umrahprog.jpg'

const UmrahPrograms = () => {
  let content = null;
  const { id } = useParams();
  const program = UmrahProgramsDetailsData.find((program) => program.id === parseInt(id));

  if (!program) {
    return <div>برنامج غير موجود</div>
  }

  const [activeLink, setActiveLink] = useState('Hotels');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }

  if (activeLink === 'Hotels') {
    content = (
      <div className='hotel'>
       <HotelBusInUmrahProgram key={program.id} image1={program.image4} image2={program.image5} image3={program.image6} image4={program.image7} HotelName1={program.HotelName1} HotelName2={program.HotelName2} HotelName3={program.HotelName3} HotelName4={program.HotelName4} location1={program.location1} location2={program.location2} location3={program.location3} location4={program.location4}/>
      </div>
    );
  } else if (activeLink === 'Buses') {
    content = (
      <div className='buses'>
        <HotelBusInUmrahProgram key={program.id} image1={program.image1} image2={program.image2} image3={program.image3} image4={program.image7} HotelName1={program.HotelName1} HotelName2={program.HotelName2} HotelName3={program.HotelName3} HotelName4={program.HotelName4} location1={program.location1} location2={program.location2} location3={program.location3} location4={program.location4}/>
      </div>
    );
  }
  return (
    <div className='umrah-programs'>

         <h1 class='titel-program'>the distinctive umrah al-barr <span>1445 -2024 </span></h1>
        <div className='details-trip2'>
            <h3>trip programme</h3>
            <div className='parent'>
                 <img className='img-program' src={img11} alt='' />
                <div className='trip-details'>
                    <p><b>umrah programme</b> we are keen to desigen the best umrah programs with suprior service
                        paying attention to the smallest aetails and aspect</p>

                    <div className='circle-trip'>
                        <div className='circle'>01</div>
                        <div className='trip-details1'>accommodation 3 nights in mecca among distinguished hotel </div>
                    </div>
                    <div className='circle-trip'>
                        <div className='circle'>02</div>
                        <div className='trip-details2'>accommodation 9 nights in madina among distinguished hotel</div>
                    </div>
                    <div className='circle-trip'>
                        <div className='circle'>03</div>
                        <div className='trip-details3'>visting the blessed places in the two holy mosgues accompanied by a
                            guid
                        </div>
                    </div>
                    <div className='circle-trip'>

                        <div className='circle'>04</div>
                        <div className='trip-details4'>traveling by land with modern saudi buses within VIP buses
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