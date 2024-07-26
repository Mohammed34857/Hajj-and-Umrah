import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImSpinner } from 'react-icons/im';
import "./HajjPrograms.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardHotel } from '../../components';
import "bootstrap/dist/css/bootstrap.min.css";
import vidio from "../../images/How_to_Perform_Hajj___Islamweb___دليل_الحج___شرح_خطوات_أداء_مناسك_الحج___إسلام_و.mp4";
import axios from 'axios';

const HajjPrograms = () => {

  const { id } = useParams();
  const [programHajj, setProgramHajj] = useState({});
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  console.log(hotel);
  console.log(backgroundImage);

  useEffect(() => {
    if (!loading && hotel.length > 0) {
      setBackgroundImage(hotel[currentSlide]?.urlImagehotel);
    }
  }, [loading, hotel, currentSlide]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const program_Hajj = await axios.get(`https://officealhajandalumrah.adaptable.app/program-al-haj/${id}`).then(response => response.data);
        setProgramHajj(program_Hajj);
        const AllProgramHajjHotel = await axios.get('https://officealhajandalumrah.adaptable.app/prog-al-haj-hotel').then(response => response.data);
        const ProgramHajj = AllProgramHajjHotel.filter((program) => program.id_ProgramAlHaj === id);
        const hotelRoom = await Promise.all(ProgramHajj.map((HotelRoomId) => {
          return axios.get(`https://officealhajandalumrah.adaptable.app/hotel-room/${HotelRoomId.id_HotelRoom}`).then(response => response.data);
        }));
        const hotels = await Promise.all(hotelRoom.map(async (hotelRoom) => {
          if (hotelRoom.id_hotel) {
            return await axios.get(`https://officealhajandalumrah.adaptable.app/Hotel/${hotelRoom.id_hotel}`).then(response => response.data);
          }
          return null;
        }));
        setHotel(hotels.filter(h => h !== null));

        setLoading(false);
      } catch (error) {
        console.error('Error fetching Hajj Programs data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div className='loading'>Loading... <ImSpinner /></div>;
  }

  return (
    <div className="Hajj-programs">
      <div className="par">
        <div className="par1">
          <h1>{programHajj[0]?.name_program}</h1>
          <p className="my-4">
            تتشرف إدارة مكتب أجنحة الضيافة بإشراف مديرها الحاج هشام محمد نادر
            عنبي وكادرها الديني والإداري بتقديم افضل برامج للحج عام 1445
          </p>
          <div className="detiles">
            <div className="imeg"></div>
            <div className="parent-chiled continer">
              <div className="chiled">
                <span>
                  تأشيرة  الحج
                  <br /> تذكرة طيران من مطار دمشق إلى مطار جدة
                </span>
              </div>
              <div className="chiled">
                <span>وجبتي فطور وعشاء يوميا لكل حاج   </span>
              </div>
              <div className="chiled">
                <span>الإقامة بمكة المكرمة مدة 12 ليلة <span> . </span> الإقامة بالمدينة المنورة مدة 10 ليال</span> 
              </div>
              <div className="chiled">
                <span>هدايا ورحلات متنوعة</span>
              </div>
              <div className="chiled">
                <span>مزارات في مكة والمدينة يتخللها دروس دينية </span>
              </div>
              <div className="chiled">
                <span>رحلة يوم تسوق في جدة بعد أداء مناسك الحج  </span>
              </div>
              <div className="chiled">
                <span>رحلة يوم إلى الطائف خلال فترة الإقامة في مكة المكرمة</span>
              </div>
              <div className="chiled">
                <span> المرشد الديني الشيخ محمد شمسي</span>
              </div>
              <div className="chiled">
                <span>أداء حج تجريبي قبل السفر وإعطاء دروس تشرح كيفية أداء المناسك</span>
              </div>
            </div>
          </div>
        </div>

        <div className='price-hajj'>
          <div className='pric   room-three-hajj'>سعر البرنامج مع غرفة ثلاثية <br /> 5200$ </div>
          <div className=' pric   room-four-hajj'> سعر البرنامج مع غرفة رباعية <br /> 5100$ </div>
          <div className='  pric romm-five-hajj'>سعر البرنامج مع غرفة خماسية<br /> 5000$ </div>
        </div>
        <div className='part2'>
          <h2>:الفنادق الخاصة ب البرنامج</h2>
          <div className="Hotel hotel-in-prog-haj" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {!loading && (
              <div className='hotel-slider'>
                <Slider {...settings}>
                  {hotel.map((card) => (
                    <div key={card._id}>
                      <CardHotel
                        id={card._id}
                        image={card.urlImagehotel}
                        Number_stars={card.Number_stars}
                        HotelName={card.name}
                        location={card.location}
                        nameLocation={"Hajj Program"}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>

        <div className="gift-parent">
          <h2>
            مجموعة الهدايا المقدمة لحجاج بيت الله الحرام من قبل اجنحة الضيافة
          </h2>
          <div className="gift">
            <div className="gift1">
              <p>ملابس احرام للرجال نوعية ممتازة</p>
            </div>
            <div className="gift2">
              <p>حقيبة حجم وسط</p>
            </div>
            <div className="gift3">
              <p>سجادة صلاة</p>
            </div>
            <div className="gift4">
              <p>حزام للرجال</p>
            </div>
            <div className="gift5">
              <p>مجموعة حقائب</p>
            </div>
          </div>
        </div>

        <div className="parent-vidios">
          <h2>فيديو تعريفي عن مناسك الحج مع اوقات أدائها</h2>
          <div className="videos">
            <video controls src={vidio}></video>
          </div>
        </div>

        <div className="book-trip">
          <button><Link to={`/RegisterProgramHajj`}>احجز رحلتك الآن</Link></button>
        </div>
      </div>
    </div>
  )
}

export default HajjPrograms;
