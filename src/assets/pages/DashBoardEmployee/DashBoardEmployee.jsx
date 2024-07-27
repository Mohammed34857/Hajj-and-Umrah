
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashBoardEmployee.css";
import min from "../../images/dashbord/img_avatar1.png";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { HiUserPlus } from "react-icons/hi2";
import { ImFolderOpen ,ImLibrary , ImBubbles4 ,ImAirplane , ImCogs} from "react-icons/im";
import { FaRightFromBracket } from "react-icons/fa6";
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

const DashBoardEmployee = () => {

// data form mutamer
  const [isEditingMutamir, setIsEditingMutamir] = useState(false);
  const [editingIdMutamir, setEditingIdMutamir] = useState(null);
  const [mutamir,setMutamir]=useState([]);
  const [availableSeats,setAvailableSeats]=useState([]);
  const [mutamirData,setMutamirData]=useState({
      full_name: "",
      name_father: "",
      name_mother: "",
      phone_number: 0,
      email: "",
      birth: "",
      gender: "",
      Nationality: "",
      passport_number: "",
      passport_photo: "",
      almutamir_photo: "",
      number_bus: 0,
      type_room: "",
      seatNumber: 0,
      payment_method: "",
      Verification: false,
      name_program:"",
      id_ProgramUmrah: ""
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://officealhajandalumrah.adaptable.app/al-mutamir/VerificationNotTrue');
        setMutamir(response.data);
     
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleChangeImageMutamir = async (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const formData = new FormData();
      formData.append('file', files[0]);
      try {
        const response = await axios.post('https://officealhajandalumrah.adaptable.app/CloudinaryController/image', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        const imagePath = response.data;
        setMutamirData((prevFormData) => ({ ...prevFormData, [name]: imagePath }));
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleChangeMutamir = async (e) => {
    const { name, value, files } = e.target;
    if (name === 'name_program') {
      const selectedProgram = umrahProgram.find(program => program.name_program === value);
      if (selectedProgram) {
        const id_ProgramUmrah = selectedProgram._id;
        let number_bus = 0;
        try {
          const response = await axios.get('https://officealhajandalumrah.adaptable.app/program-bus/all-ProgramBus-with-ProgramUmrah');
          const programBusData = response.data;
          const programBus = programBusData.find((ProgramUmrah) => ProgramUmrah.id_ProgramUmrah.name_program === value);
          if (programBus) {
            number_bus = programBus.count_bus;
          }
          const AvailableSeats = await axios.get(`https://officealhajandalumrah.adaptable.app/program-bus/${id_ProgramUmrah}/${number_bus}/available-seats`);
          setAvailableSeats(AvailableSeats.data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        setMutamirData((prevFormData) => ({
          ...prevFormData,
          name_program: value,
          id_ProgramUmrah: id_ProgramUmrah,
          number_bus: number_bus
        }));
      } else {
        setMutamirData((prevFormData) => ({
          ...prevFormData,
          name_program: value,
          id_ProgramUmrah: "",
          number_bus: 0
        }));
      }
    } else if (name === 'seatNumber') {
      const seatNumber = value;
      const { id_ProgramUmrah, number_bus, full_name } = mutamirData;

      try {
        await axios.patch(`https://officealhajandalumrah.adaptable.app/program-bus/${id_ProgramUmrah}/reserve-seat/${number_bus}/${seatNumber}/${full_name}`);
        setMutamirData((prevFormData) => ({
          ...prevFormData,
          seatNumber: seatNumber
        }));
        alert("تم حجز المقعد بنجاح");
      } catch (error) {
        console.error("Error reserving seat:", error);
        alert("حدث خطأ أثناء حجز المقعد");
      }
    } else {
      setMutamirData((prevFormData) => ({
        ...prevFormData,
        [name]: files ? files[0] : value,
      }));
    }
  };  

  const handleSubmitMutamir = async (e) => {
    e.preventDefault();
    if (isEditingMutamir) {
      try {
        await axios.patch(`https://officealhajandalumrah.adaptable.app/al-mutamir/${editingIdMutamir}`, mutamirData , {
          headers: {
              'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.error('Error updating data:', error);
      }
    } else {
      const dataMutamir = {
        full_name: mutamirData.full_name,
        name_father: mutamirData.name_father,
        name_mother: mutamirData.name_mother,
        phone_number: Number(mutamirData.phone_number) ,
        email: mutamirData.email,
        birth: mutamirData.birth,
        gender: mutamirData.gender,
        Nationality: mutamirData.Nationality,
        passport_number: mutamirData.passport_number,
        passport_photo: mutamirData.passport_photo,
        almutamir_photo: mutamirData.almutamir_photo,
        type_room: mutamirData.type_room,
        number_bus: Number(mutamirData.number_bus),
        seatNumber: Number(mutamirData.seatNumber),
        payment_method: mutamirData.payment_method,
        Verification: mutamirData.Verification,
        name_program: mutamirData.name_program
    };
    console.log(dataMutamir);
      try {
        const responseMutamir = await axios.post('https://officealhajandalumrah.adaptable.app/al-mutamir', dataMutamir, {
          headers: {
              'Content-Type': 'application/json',
          },
        });
      
      } catch (error) {
        console.error('Error adding data:', error);
      }
    }
    setMutamirData({
      full_name: "",
      name_father: "",
      name_mother: "",
      phone_number: 1,
      email: "",
      birth: "",
      gender: "",
      Nationality: "",
      passport_number: "",
      passport_photo: "",
      almutamir_photo: "",
      number_bus: 1,
      type_room: "",
      seatNumber: 1,
      payment_method: "",
      Verification: false,
      name_program:""
    });
    setIsEditingMutamir(false);
    setEditingIdMutamir(null);
  };

  const handleEditMutamir = (muta) => {
    setMutamirData(muta);
    setIsEditingMutamir(true);
    setEditingIdMutamir(muta._id);
  };

  const handleDeleteMutamir = async (id) => {
    try {
      await axios.delete(`https://officealhajandalumrah.adaptable.app/al-mutamir/${id}`);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }


// data form Hajj
    const [isEditingHajj, setIsEditingHajj] = useState(false);
    const [editingIdHajj, setEditingIdHajj] = useState(null);
    const [companionOption, setCompanionOption] = useState(null);
    const [companion1Id, setCompanion1Id] = useState("");
    const [companion2Id, setCompanion2Id] = useState("");
    const handleCompanionOption = (CompanionOption) => {
      setCompanionOption(CompanionOption);
       };
    const [hajj,setHajj]=useState([]);
    const [hajjData,setHajjData]=useState({
        full_name: "",
        name_father: "",
        name_mother: "",
        phone_number: "",
        email: "",
        birth: "",
        gender: "",
        companion1: companion1Id,
        companion2: companion2Id,
        iscompanion: false,
        Nationality: "",
        passport_number: "",
        passport_photo: "",
        alhaj_photo: "",
        type_room: "",
        payment_method: "",
        Verification: false,
        name_program:""
    });
     const [companion1, setCompanion1] = useState({
        full_name: "",
        name_father: "",
        name_mother: "",
        email: "",
        phone_number: "",
        birth: "",
        gender: "",
        iscompanion: true,
        silat_alqaraba:"",
        Nationality: "",
        passport_number: "",
        passport_photo: "",
        alhaj_photo: "",
        payment_method: "",
        Verification: false,
        type_room: "",
        name_program: ""
       });
    
      const [companion2, setCompanion2] = useState({
        full_name: "",
        name_father: "",
        name_mother: "",
        email: "",
        phone_number: "",
        birth: "",
        gender: "",
        iscompanion: true,
        silat_alqaraba:"",
        Nationality: "",
        passport_number: "",
        passport_photo: "",
        alhaj_photo: "",
        payment_method: "",
        Verification: false,
        type_room: "",
        name_program: ""
    });
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://officealhajandalumrah.adaptable.app/al-hajj');
          setHajj(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
  
    const handleChangeImageHajj = async (e) => {
      const { name, files } = e.target;
      if (files && files[0]) {
        const formData = new FormData();
        formData.append('file', files[0]);
        try {
          const response = await axios.post('https://officealhajandalumrah.adaptable.app/CloudinaryController/image', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          const imagePath = response.data;
          setHajjData((prevFormData) => ({ ...prevFormData, [name]: imagePath }));
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    };
    const handleChangeImageCompanion1 = async (e) => {
      const { name, files } = e.target;
      if (files && files[0]) {
        const formData = new FormData();
        formData.append('file', files[0]);
        try {
          const response = await axios.post('https://officealhajandalumrah.adaptable.app/CloudinaryController/image', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          const imagePath = response.data.secure_url || response.data.url || response.data; // تأكد من أن response.data يحتوي على المسار الصحيح
    
          setCompanion1((prevFormData) => ({
            ...prevFormData,
            [name]: imagePath,
          }));

          } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    };
    const handleChangeImageCompanion2 = async (e) => {
      const { name, files } = e.target;
      if (files && files[0]) {
        const formDataCompanion2 = new FormData();
        formDataCompanion2.append('file', files[0]);
        try {
          const response = await axios.post('https://officealhajandalumrah.adaptable.app/CloudinaryController/image', formDataCompanion2, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          const imagePath = response.data.secure_url || response.data.url || response.data; // تأكد من أن response.data يحتوي على المسار الصحيح
    
          setCompanion2((prevFormData) => ({
            ...prevFormData,
            [name]: imagePath,
          }));

          } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    };
  
    const handleChangeHajj = (e) => {
      const { name, value, files } = e.target;
      setHajjData((prevFormData) => ({
        ...prevFormData,
        [name]: files ? files[0] : value,
      }));
    };

    const handleCompanionChange = (e, setCompanion) => {
      const { name, value, files } = e.target;
      if (files) {
        setCompanion((prevData) => ({
          ...prevData,
          [name]: files[0]
        }));
      } else {
        setCompanion((prevData) => ({
          ...prevData,
          [name]: value
        }));
      }
    };
  
  
    const handleSubmitHajj = async (e) => {
      e.preventDefault();
      if (isEditingHajj) {
        try {
          await axios.patch(`https://officealhajandalumrah.adaptable.app/al-hajj/${editingIdHajj}`, hajjData , {
            headers: {
                'Content-Type': 'application/json',
            },
          });
        } catch (error) {
          console.error('Error updating data:', error);
        }
      } else {
        let companion1Id = '';
        let companion2Id = '';

        const dataCompanion1 = {
          full_name: companion1.full_name,
          name_father: companion1.name_father,
          name_mother: companion1.name_mother,
          email: companion1.email,
          phone_number: companion1.phone_number,
          birth: companion1.birth,
          gender: companion1.gender,
          Health_status: companion1.Health_status,
          silat_alqaraba: companion1.silat_alqaraba,
          iscompanion: companion1.iscompanion,
          Nationality: companion1.Nationality,
          passport_number: companion1.passport_number,
          passport_photo: companion1.passport_photo,
          alhaj_photo: companion1.alhaj_photo,
          payment_method: companion1.payment_method,
          Verification: companion1.Verification,
          type_room: hajjData.type_room,
          name_program: hajjData.name_program
        }; 
       

        const dataCompanion2 = {
          full_name: companion2.full_name,
          name_father: companion2.name_father,
          name_mother: companion2.name_mother,
          email: companion2.email,
          phone_number: companion2.phone_number,
          birth: companion2.birth,
          gender: companion2.gender,
          Health_status: companion2.Health_status,
          silat_alqaraba: companion2.silat_alqaraba,
          iscompanion: companion2.iscompanion,
          Nationality: companion2.Nationality,
          passport_number: companion2.passport_number,
          passport_photo: companion2.passport_photo,
          alhaj_photo: companion2.alhaj_photo,
          payment_method: companion2.payment_method,
          Verification: companion2.Verification,
          type_room: hajjData.type_room,
          name_program: hajjData.name_program
        };
        if (companionOption === 'single') {
          try {
              const responseCompanion1 = await axios.post('https://officealhajandalumrah.adaptable.app/al-hajj', dataCompanion1, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              companion1Id = responseCompanion1.data._id;
              setCompanion1Id(companion1Id);
              console.log(responseCompanion1.data._id);
          } catch (error) {
            console.error('Error submitting companion1 data:', error);
          }
        }
       else if(companionOption === 'multiple'){ 
        try {
          const responseCompanion1 = await axios.post('https://officealhajandalumrah.adaptable.app/al-hajj', dataCompanion1, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          companion1Id = responseCompanion1.data._id;
          setCompanion1Id(companion1Id);
          const responseCompanion2 = await axios.post('https://officealhajandalumrah.adaptable.app/al-hajj', dataCompanion2, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          companion2Id = responseCompanion2.data._id;
          setCompanion2Id(companion2Id);
      } catch (error) {
        console.error('Error submitting companion1 data:', error);
      }
       }
        const dataHajj = {
          full_name: hajjData.full_name,
          name_father: hajjData.name_father,
          name_mother: hajjData.name_mother,
          phone_number: hajjData.phone_number,
          email: hajjData.email,
          birth: hajjData.birth,
          gender: hajjData.gender,
          companion1: companionOption === 'multiple' || companionOption === 'single' ? companion1Id : undefined,
          companion2: companionOption === 'multiple' ? companion2Id : undefined,  
          Nationality: hajjData.Nationality,
          passport_number: hajjData.passport_number,
          passport_photo: hajjData.passport_photo,
          alhaj_photo: hajjData.alhaj_photo,
          type_room: hajjData.type_room,
          payment_method: hajjData.payment_method,
          Verification: hajjData.Verification,
          name_program: hajjData.name_program
      };
      if (!dataHajj.companion1) delete dataHajj.companion1;
      if (!dataHajj.companion2) delete dataHajj.companion2;
      console.log(dataHajj);
        try {
          const responseHajj = await axios.post('https://officealhajandalumrah.adaptable.app/al-hajj', dataHajj, {
            headers: {
                'Content-Type': 'application/json',
            },
          });
        
        } catch (error) {
          console.error('Error adding data:', error);
        }
      }
      setHajjData({
        full_name: "",
        name_father: "",
        name_mother: "",
        phone_number: "",
        email: "",
        birth: "",
        gender: "",
        Nationality: "",
        passport_number: "",
        passport_photo: "",
        alhaj_photo: "",
        type_room: "",
        payment_method: "",
        Verification: false,
        name_program:""
      });
      setIsEditingHajj(false);
      setEditingIdHajj(null);
    };
  
    const handleEditHajj = (haj) => {
      setHajjData(haj);
      setIsEditingHajj(true);
      setEditingIdHajj(haj._id);
    };
  
    const handleDeleteHajj = async (id) => {
      try {
        await axios.delete(`https://officealhajandalumrah.adaptable.app/al-hajj/${id}`);
      } catch (error) {
        console.error('Error deleting data:', error);
      }
  };

// umrah program

  const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: '0px',
        adaptiveHeight: true
    };

    const [isEditingUmrahProgram, setIsEditingUmrahProgram] = useState(false);
    const [editingIdUmrahProgram, setEditingIdUmrahProgram] = useState(null);
    const [umrahProgram,setUmrahProgram]= useState([]);
    const [umrahProgramData,setUmrahProgramData]=useState({
         name_program: "",
         Date_Travel: "",
         Date_Travel_Hijri: "",
         total_stay: 0,
         stay_in_macca: 0,
         stay_in_madina: 0,
         image: "",
         price1: "",
         price2: "",
         price3: "",
         price4: "",
         id_busCompany:"",
         Available_viewing: true,
    });
    const [allProgramUmrahHotel, setAllProgramUmrahHotel] = useState([]);
    const [hotelsForProgram, setHotelsForProgram] = useState({});
    const [selectedHotelsForProgramUmrah, setSelectedHotelsForProgramUmrah] = useState([]);
console.log(hotelsForProgram)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://officealhajandalumrah.adaptable.app/program-umrah');
        setUmrahProgram(response.data);
        const allProgramUmrahHotelResponse = await axios.get('https://officealhajandalumrah.adaptable.app/prog-umrah-hotel');
        setAllProgramUmrahHotel(allProgramUmrahHotelResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const programHotelRooms = {};

        allProgramUmrahHotel.forEach((hotelRoom) => {
          const { id_ProgramUmrah, id_HotelRoom } = hotelRoom;
          if (!programHotelRooms[id_ProgramUmrah]) {
            programHotelRooms[id_ProgramUmrah] = [];
          }
          programHotelRooms[id_ProgramUmrah].push(id_HotelRoom);
        });

        const hotelData = {};
        for (const programId in programHotelRooms) {
          const hotelRooms = await Promise.all(
            programHotelRooms[programId].map((hotelRoomId) =>
              axios.get(`https://officealhajandalumrah.adaptable.app/hotel-room/${hotelRoomId}`)
                .then(response => response.data)
            )
          );

          const hotels = await Promise.all(
            hotelRooms.map(hotelRoom =>
              axios.get(`https://officealhajandalumrah.adaptable.app/Hotel/${hotelRoom.id_hotel}`)
                .then(response => response.data)
            )
          );

          hotelData[programId] = hotels;
        }

        setHotelsForProgram(hotelData);
      } catch (error) {
        console.error('Error fetching hotels for program:', error);
      }
    };

    fetchHotels();
  }, [allProgramUmrahHotel]);


    const handleDeleteUmrahProgram = async (id) => {
      try {
        await axios.delete(`https://officealhajandalumrah.adaptable.app/program-umrah/${id}`);
      } catch (error) {
        console.error('Error deleting data:', error);
      }
  };
  const handleDeleteUmrahProgramFromMain= async (id) => {
      try {
        await axios.patch(`https://officealhajandalumrah.adaptable.app/program-umrah/${id}`, {Available_viewing: false} , {
          headers: {
              'Content-Type': 'application/json',
          },
        });
        } catch (error) {
        console.error('Error deleting data:', error);
      }
  };

  const handleBusAddUmrahProgram = async (id) => {
    try {
      const response = await axios.get('https://officealhajandalumrah.adaptable.app/program-bus/findAll'); 
      const allProgramBus = response.data;
      const program = allProgramBus.find((program) => program.id_ProgramUmrah === id);
      const currentBusCount = program.count_bus;
      const updatedBusCount = currentBusCount + 1;
      await axios.post(`https://officealhajandalumrah.adaptable.app/program-bus/${id}/${updatedBusCount}`);
    } catch (error) {
      console.error('Error add bud to program:', error);
    }
};

const handleBusDeleteUmrahProgram = async (id) => {
  try {
    const response = await axios.get('https://officealhajandalumrah.adaptable.app/program-bus/findAll'); 
    const allProgramBus = response.data;
    const program = allProgramBus.find((program) => program.id_ProgramUmrah === id);
    const currentBusCount = program.count_bus;
    await axios.delete(`https://officealhajandalumrah.adaptable.app/program-bus/${id}/${currentBusCount}`);
  } catch (error) {
    console.error('Error delete bud to program:', error);
  }
};

   const handleChangeUmrahProgram = (e) => {
    const { name, value } = e.target;
    setUmrahProgramData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }));
  };

    const handleChangeImageUmrahProgram = async (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
        const formData = new FormData();
        formData.append('file', files[0]);

        try {
            const response = await axios.post('https://officealhajandalumrah.adaptable.app/CloudinaryController/image', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            const imagePath = response.data;
            setUmrahProgramData((prevFormData) => ({ ...prevFormData, [name]: imagePath }));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
};
  

   const handleEditUmrahProgram = (program) => {
      setUmrahProgramData({
        ...program,
        image: program.image || "" 
      }); 
      setIsEditingUmrahProgram(true);
      setEditingIdUmrahProgram(program._id);
    };

    const handleSubmitUmrahProgram = async (e) => {
      e.preventDefault();
      const DataUmrahProgram= {
        name_program: umrahProgramData.name_program,
        Date_Travel: umrahProgramData.Date_Travel,
        Date_Travel_Hijri: umrahProgramData.Date_Travel_Hijri,
        total_stay: Number(umrahProgramData.total_stay) ,
        stay_in_macca: Number(umrahProgramData.stay_in_macca),
        stay_in_madina: Number(umrahProgramData.stay_in_madina),
        image: umrahProgramData.image,
        price1: umrahProgramData.price1,
        price2: umrahProgramData.price2,
        price3: umrahProgramData.price3,
        price4:umrahProgramData.price4,
        id_busCompany:umrahProgramData.id_busCompany
      }
      console.log(DataUmrahProgram)
      if (isEditingUmrahProgram) {
        try {
          await axios.patch(`https://officealhajandalumrah.adaptable.app/program-umrah/${editingIdUmrahProgram}`, DataUmrahProgram , {
            headers: {
                'Content-Type': 'application/json',
            },
          });
        } catch (error) {
          console.error('Error updating data:', error);
        }
      } else {
        
        try {
          const responseHajj = await axios.post('https://officealhajandalumrah.adaptable.app/program-umrah', DataUmrahProgram, {
            headers: {
                'Content-Type': 'application/json',
            },
          });
       
      const id_ProgramUmrah = responseHajj.data._id;

      const hotelRoomsResponse = await axios.get('https://officealhajandalumrah.adaptable.app/hotel-room');
      const hotelRoomsData = hotelRoomsResponse.data;

      for (const selectedHotel of selectedHotelsForProgramUmrah) {
        const hotelRoom = hotelRoomsData.find((hotelRoom) => hotelRoom.id_hotel._id === selectedHotel);
        console.log(hotelRoom._id);
        const progUmrahHotelData={
              id_ProgramUmrah: id_ProgramUmrah,
              id_HotelRoom: hotelRoom._id
        }
            await axios.post('https://officealhajandalumrah.adaptable.app/prog-umrah-hotel',progUmrahHotelData, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            await axios.post(`https://officealhajandalumrah.adaptable.app/program-bus/${id_ProgramUmrah}/${0}`);
        }
        
        } catch (error) {
          console.error('Error adding data:', error);
        }
      }
      setUmrahProgramData({
        name_program: "",
        Date_Travel: "",
        Date_Travel_Hijri: "",
        total_stay: 0,
        stay_in_macca: 0,
        stay_in_madina:0,
        image: "",
        price1: "",
        price2: "",
        price3: "",
        price4:"",
        id_busCompany:""
      });
      setIsEditingUmrahProgram(false);
      setEditingIdUmrahProgram(null);
    };

    // Hajj Porgram


const [isEditingHajjProgram, setIsEditingHajjProgram] = useState(false);
const [editingIdHajjProgram, setEditingIdHajjProgram] = useState(null);
const [hajjProgram,setHajjProgram]= useState([]);
const [hajjProgramData,setHajjProgramData]=useState({
     Airline: "",
     name_program: "",
     Date_Travel: "",
     Date_Travel_Hijri: "",
     total_stay: 0,
     stay_in_macca: 0,
     stay_in_madina: 0,
     type_hotel: "",
     Religious_guide: "",
     Number_meals: "",
     image: "",
     price1: "",
     price2: "",
     price3: "",
     price4: "",
     Available_viewing: true,
});
const [allProgramHajjHotel, setAllProgramHajjHotel] = useState([]);
const [hotelsForProgramHajj, setHotelsForProgramHajj] = useState({});
const [selectedHotelsForProgramHajj, setSelectedHotelsForProgramHajj] = useState([]);

useEffect(() => {
const fetchData = async () => {
  try {
    const response = await axios.get('https://officealhajandalumrah.adaptable.app/program-al-haj');
    setHajjProgram(response.data);
    const allProgramHajjHotelResponse = await axios.get('https://officealhajandalumrah.adaptable.app/prog-al-haj-hotel');
    setAllProgramHajjHotel(allProgramHajjHotelResponse.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
fetchData();
}, []);

useEffect(() => {
  const fetchHotels = async () => {
    try {
      const programHotelRooms = {};
      allProgramHajjHotel.forEach((hotelRoom) => {
       
        const { id_ProgramAlHaj, id_HotelRoom } = hotelRoom;
        if (!programHotelRooms[id_ProgramAlHaj]) {
          programHotelRooms[id_ProgramAlHaj] = [];
        }
        programHotelRooms[id_ProgramAlHaj].push(id_HotelRoom);
      });
    
      const hotelData = {};
      for (const programId in programHotelRooms) {
        const hotelRooms = await Promise.all(
          programHotelRooms[programId].map((hotelRoomId) =>
            axios.get(`https://officealhajandalumrah.adaptable.app/hotel-room/${hotelRoomId}`)
              .then(response => response.data)
          )
        );

        const hotels = await Promise.all(
          hotelRooms.map(hotelRoom =>
            axios.get(`https://officealhajandalumrah.adaptable.app/Hotel/${hotelRoom.id_hotel}`)
              .then(response => response.data)
          )
        );

        hotelData[programId] = hotels;
      }

      setHotelsForProgramHajj(hotelData);
    } catch (error) {
      console.error('Error fetching hotels for program:', error);
    }
  };

  fetchHotels();
}, [allProgramHajjHotel]);


const handleDeleteHajjProgram = async (id) => {
  try {
    await axios.delete(`https://officealhajandalumrah.adaptable.app/program-al-haj//${id}`);
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

const handleDeleteHajjProgramFromMain= async (id) => {
  try {
    await axios.patch(`https://officealhajandalumrah.adaptable.app/program-al-haj/${id}`, {Available_viewing: false} , {
      headers: {
          'Content-Type': 'application/json',
      },
    });
    } catch (error) {
    console.error('Error deleting data:', error);
  }
};

const handleChangeHajjProgram = (e) => {
const { name, value } = e.target;
setHajjProgramData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
}));
};

const handleChangeImageHajjProgram = async (e) => {
const { name, files } = e.target;
if (files && files.length > 0) {
    const formData = new FormData();
    formData.append('file', files[0]);

    try {
        const response = await axios.post('https://officealhajandalumrah.adaptable.app/CloudinaryController/image', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        const imagePath = response.data;
        setHajjProgramData((prevFormData) => ({ ...prevFormData, [name]: imagePath }));
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}
};


const handleEditHajjProgram = (program) => {
  setHajjProgramData({
    ...program,
    image: program.image || "" 
  }); 
  setIsEditingHajjProgram(true);
  setEditingIdHajjProgram(program._id);
};

const handleSubmitHajjProgram = async (e) => {
  e.preventDefault();
  const DataHajjProgram= {
    name_program: hajjProgramData.name_program,
    Date_Travel: hajjProgramData.Date_Travel,
    Date_Travel_Hijri: hajjProgramData.Date_Travel_Hijri,
    total_stay: Number(hajjProgramData.total_stay) ,
    stay_in_macca: Number(hajjProgramData.stay_in_macca),
    stay_in_madina: Number(hajjProgramData.stay_in_madina),
    image: hajjProgramData.image,
    price1: hajjProgramData.price1,
    price2: hajjProgramData.price2,
    price3: hajjProgramData.price3,
    price4:hajjProgramData.price4
  }
  if (isEditingHajjProgram) {
    try {
      await axios.patch(`https://officealhajandalumrah.adaptable.app/program-al-haj/${editingIdHajjProgram}`, DataHajjProgram , {
        headers: {
            'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error updating data:', error);
    }
  } else {
    
    try {
      const responseHajj = await axios.post('https://officealhajandalumrah.adaptable.app/program-al-haj/', DataHajjProgram, {
        headers: {
            'Content-Type': 'application/json',
        },
      });

      const id_ProgramHajj = responseHajj.data._id;

      const hotelRoomsResponse = await axios.get('https://officealhajandalumrah.adaptable.app/hotel-room');
      const hotelRoomsData = hotelRoomsResponse.data;

      for (const selectedHotel of selectedHotelsForProgramHajj) {
        const hotelRoom = hotelRoomsData.find((hotelRoom) => hotelRoom.id_hotel._id === selectedHotel);
        console.log(hotelRoom._id);
        const progHajjHotelData={
              id_ProgramAlHaj: id_ProgramHajj,
              id_HotelRoom: hotelRoom._id
        }
            await axios.post('https://officealhajandalumrah.adaptable.app/prog-al-haj-hotel',progHajjHotelData, {
              headers: {
                'Content-Type': 'application/json',
              },
            });

        }
    
    } catch (error) {
      console.error('Error adding data:', error);
    }
  }
  setHajjProgramData({
    name_program: "",
    Date_Travel: "",
    Date_Travel_Hijri: "",
    total_stay: null,
    stay_in_macca: null,
    stay_in_madina:null,
    image: "",
    price1: "",
    price2: "",
    price3: "",
    price4:""
  });
  setIsEditingHajjProgram(false);
  setEditingIdHajjProgram(null);
};

// Hotel

const [hotels,setHotels]=useState([]);
const [uploadedImages, setUploadedImages] = useState([]);
const [hotelData,setHotelData]=useState({
  name:"",
  Number_stars:0,
  location:"",
  details:"",
  urlImagehotel:"",
  urlImage:[],
  Services:"",
  Places_available_visit:"",
  link:""
});
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://officealhajandalumrah.adaptable.app/Hotel');
      setHotels(response.data);
     } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
  }, []);

  
  const handelChangeHotel = (e) => {
    const { name, value } = e.target;
    setHotelData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }));
    };
    
    const handleChangeImageHotel = async (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
        const formData = new FormData();
        formData.append('file', files[0]);
    
        try {
            const response = await axios.post('https://officealhajandalumrah.adaptable.app/CloudinaryController/image', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            const imagePath = response.data;
            setHotelData((prevFormData) => ({ ...prevFormData, [name]: imagePath }));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
    };
    const handleChangeArrayImageHotel = async (e) => {
      const { files } = e.target;
      if (files && files.length > 0) {
        const imagePromises = Array.from(files).map(async (file) => {
          const formData = new FormData();
          formData.append('file', file);
    
          try {
            const response = await axios.post('https://officealhajandalumrah.adaptable.app/CloudinaryController/image', formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data;
          } catch (error) {
            console.error('Error uploading image:', error);
            return null;
          }
        });
    
        const images = await Promise.all(imagePromises);
        setUploadedImages((prevImages) => [...prevImages, ...images.filter(image => image !== null)]);
      }
    };

    
  const handleSubmitHotel = async (e) => {
  e.preventDefault();
  const DataHotel= {
    name:hotelData.name,
    Number_stars: Number(hotelData.Number_stars) ,
    location: hotelData.location,
    details:hotelData.details,
    urlImagehotel:hotelData.urlImagehotel,
    urlImage: uploadedImages,
    Services:hotelData.Services.split(','),
    Places_available_visit:hotelData.Places_available_visit.split(','),
    link:hotelData.link
  }
  
    try {
      const responseHotel = await axios.post('https://officealhajandalumrah.adaptable.app/Hotel/', DataHotel, {
        headers: {
            'Content-Type': 'application/json',
        },
      });
    
    } catch (error) {
      console.error('Error adding data:', error);
    }
  
  setHotelData({
    name:"",
    Number_stars:0,
    location:"",
    details:"",
    urlImagehotel:"",
    urlImage:"",
    Services:"",
    Places_available_visit:"",
    link:""
  });
  setUploadedImages([]);
};


//  transport


const [transports,setTransports]=useState([]);
const [uploadedImagesTransport, setUploadedImagesTransport] = useState([]);
const [transportData,setTransportData]=useState({
  name_company: "" ,
  Services: "",
  goals_company: "" ,
  urlImageCompany: "",
  urlImage:[],
  link: "",
  type_bus:"" ,
  price_tecket:"" 
});
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://officealhajandalumrah.adaptable.app/BusCompany');
      setTransports(response.data);
     } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
  }, []);

  
  const handelChangeTransport = (e) => {
    const { name, value } = e.target;
    setTransportData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }));
    };
    
    const handleChangeImageTransport = async (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
        const formData = new FormData();
        formData.append('file', files[0]);
    
        try {
            const response = await axios.post('https://officealhajandalumrah.adaptable.app/CloudinaryController/image', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            const imagePath = response.data;
            setTransportData((prevFormData) => ({ ...prevFormData, [name]: imagePath }));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
    };
    const handleChangeArrayImageTransport = async (e) => {
      const { files } = e.target;
      if (files && files.length > 0) {
        const imagePromises = Array.from(files).map(async (file) => {
          const formData = new FormData();
          formData.append('file', file);
    
          try {
            const response = await axios.post('https://officealhajandalumrah.adaptable.app/CloudinaryController/image', formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data;
          } catch (error) {
            console.error('Error uploading image:', error);
            return null;
          }
        });
    
        const images = await Promise.all(imagePromises);
        setUploadedImagesTransport((prevImages) => [...prevImages, ...images.filter(image => image !== null)]);
      }
    };


    
  const handleSubmitTransport = async (e) => {
  e.preventDefault();
  const DataTransport= {
      name_company: transportData.name_company ,
      Services:transportData.Services.split(',') ,
      goals_company: transportData.goals_company.split(',') ,
      urlImageCompany:transportData.urlImageCompany ,
      urlImage:uploadedImagesTransport,
      link:transportData.link ,
      type_bus: transportData.type_bus ,
      price_tecket: transportData.price_tecket 
  }
  
    try {
      const responseTransport = await axios.post('https://officealhajandalumrah.adaptable.app/BusCompany', DataTransport, {
        headers: {
            'Content-Type': 'application/json',
        },
      });
    
    } catch (error) {
      console.error('Error adding data:', error);
    }
  
  setTransportData({
    name_company: "" ,
    Services: "",
    goals_company: "" ,
    urlImageCompany: "",
    urlImage:[],
    link: "",
    type_bus:"" ,
    price_tecket:"" 
  });
  setUploadedImagesTransport([]);
};


  return (
    <div className="DashBoardEmployee">

       <div className="min  ">
          <nav>
            <ul>
              <li>
                <img src={min} />
                <h5>اسم المستخدم</h5>
              </li>
              <a href="" className="navbar-brand">
                <li>
                  {" "}
                  <i>
                    <AiTwotoneCheckCircle />{" "}
                  </i>
                  لوحة التحكم{" "}
                </li>
              </a>
              <a href="">
                <li>
                  {" "}
                  <i>
                    <HiUserPlus />{" "}
                  </i>
                  المسافرين
                </li>
              </a>

              <a href="">
                <li>
                  {" "}
                  <i>
                    <ImFolderOpen />{" "}
                  </i>
                  البرامج
                </li>
              </a>
              <a href="">
                <li>
                  {" "}
                  <i>
                    <ImLibrary />
                  </i>{" "}
                  الفنادق
                </li>
              </a>
              <a href="">
                <li>
                  {" "}
                  <i>
                    <ImAirplane />
                  </i>{" "}
                  النقل{" "}
                </li>
              </a>
              <a href="">
                <li>
                  <i>
                    <ImBubbles4 />
                  </i>{" "}
                  الرسائل الواردة
                </li>
              </a>
              <a href="https://web.whatsapp.com/">
                <li>
                  <i>
                    {" "}
                    <ImCogs />{" "}
                  </i>{" "}
                  اعدادات{" "}
                </li>
              </a>
            </ul>
          </nav>

          <button type="button" className="btn btn-outline-warning bg-dark">
            <i>
              <FaRightFromBracket />
            </i>
            تسجيل الخروج
          </button>
        </div>
        
      <div className="dashborde">
       

        <div className="detil">
          <div className="alert " role="alert">
            <h5>
              عدد برامج الحج خلال السنوات <br /> 2022-2024
            </h5>
            <p> 15 برنامج</p>
          </div>
          <div className="alert " role="alert">
            <h5>
              عدد برامج العمرة خلال السنوات <br />
              2022-2024
            </h5>
            <p> 15 برنامج</p>
          </div>
          <div className="alert " role="alert">
            <h5>
              عدد البرامج الخاصة خلال السنوات
              <br /> 2022-2024
            </h5>
            <p> 15 برنامج</p>
          </div>
        </div>

        <div className="contain-umrah">
          <h2>تسجيل المعتمرين</h2>
          <div className="table-umrah">
            <table className="table">
              <thead>
                <tr>
                  <th>رقم التأكيد</th>
                  <th>نمط الدفع</th>
                  <th>نمط الغرفة</th>
                  <th>رقم المقعد</th>
                  <th>رقم الباص</th>
                  <th>اسم البرنامج</th>
                  <th>صورة شخصية</th>
                  <th>صورة جواز السفر</th>
                  <th>رقم الجواز</th>
                  <th>الجنسية</th>
                  <th>الجنس</th>
                  <th>التولد</th>
                  <th>البريد الالكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>اسم الاب</th>
                  <th>اسم الام</th>
                  <th>الاسم</th>
                  <th>إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {mutamir.map((muta, index) => (
                  <tr key={index}>
                    <td>{muta.Verification}</td>
                    <td>{muta.payment_method}</td>
                    <td>{muta.type_room}</td>
                    <td>{muta.seatNumber}</td>
                    <td>{muta.number_bus}</td>
                    <td>{muta.name_program}</td>
                    <td><img src={muta.almutamir_photo} alt="Personal" width="50" height="50" /></td>
                    <td><img src={muta.passport_photo} alt="Passport" width="50" height="50" /></td>
                    <td>{muta.passport_number}</td>
                    <td>{muta.Nationality}</td>
                    <td>{muta.gender}</td>
                    <td>{muta.birth}</td>
                    <td>{muta.email}</td>
                    <td>{muta.phone_number}</td>
                    <td>{muta.name_father}</td>
                    <td>{muta.name_mother}</td>
                    <td>{muta.full_name}</td>
                    <td>
                      <button className="edit" onClick={() => handleEditMutamir(muta)}>تعديل <CiEdit /></button>
                      <button className="delete" onClick={() => handleDeleteMutamir(muta._id)}>حذف<MdDelete /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>{isEditingMutamir ? "تعديل معتمر" : "إضافة معتمر جديد"}</h3>
            <form onSubmit={handleSubmitMutamir}>
            <table className="table">
              <thead>
                <tr>
                  <th>رقم التأكيد</th>
                  <th>نمط الدفع</th>
                  <th>نمط الغرفة</th>
                  <th>رقم المقعد</th>
                  <th>رقم الباص</th>
                  <th>اسم البرنامج</th>
                  <th>صورة شخصية</th>
                  <th>صورة جواز السفر</th>
                  <th>رقم الجواز</th>
                  <th>الجنسية</th>
                  <th>الجنس</th>
                  <th>التولد</th>
                  <th>البريد الالكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>اسم الاب</th>
                  <th>اسم الام</th>
                  <th>الاسم</th>
                  <th>الاجراء</th>
                </tr>
              </thead>
              <tbody>
                  <tr >
                    <td><input type="text" name="Verification" placeholder="رقم التأكيد" value={mutamirData.Verification} onChange={handleChangeMutamir} /></td>
                    <td><input type="text" name="payment_method" placeholder="نمط الدفع" value={mutamirData.payment_method} onChange={handleChangeMutamir} /></td>
                    <td><input type="text" name="type_room" placeholder="نمط الغرفة" value={mutamirData.type_room} onChange={handleChangeMutamir} /></td>
                    <td>
                      <select name="seatNumber" onChange={handleChangeMutamir}>
                         {availableSeats.map((seat, index) => (
                          <option key={index} value={seat}>
                            {seat}
                          </option>
                          ))}
                       </select>
                    </td>
                    <td><input type="number" name="number_bus" placeholder="رقم الباص" value={mutamirData.number_bus} onChange={handleChangeMutamir} /></td>
                    <td><select name="name_program" onChange={handleChangeMutamir}>
                        {umrahProgram.map((name, index) => (
                          <option key={index} value={name.name_program}>
                            {name.name_program}
                         </option>
                        ))}
                      </select>
                    </td>
                    <td><input type="file" name="almutamir_photo" onChange={handleChangeImageMutamir} /></td>
                    <td><input type="file" name="passport_photo" onChange={handleChangeImageMutamir} /></td>
                    <td><input type="text" name="passport_number" placeholder="رقم الجواز" value={mutamirData.passport_number} onChange={handleChangeMutamir} /></td>
                    <td><input type="text" name="Nationality" placeholder="الجنسية" value={mutamirData.Nationality} onChange={handleChangeMutamir} /></td>
                    <td><input type="text" name="gender" placeholder="الجنس" value={mutamirData.gender} onChange={handleChangeMutamir} /></td>
                    <td><input type="date" name="birth" placeholder="تاريخ الميلاد" value={mutamirData.birth} onChange={handleChangeMutamir} /></td>
                    <td><input type="email" name="email" placeholder="البريد الإلكتروني" value={mutamirData.email} onChange={handleChangeMutamir} /></td>
                    <td><input type="number" name="phone_number" placeholder="رقم الهاتف" value={mutamirData.phone_number} onChange={handleChangeMutamir} /></td>
                    <td><input type="text" name="name_mother" placeholder="اسم الأب" value={mutamirData.name_mother} onChange={handleChangeMutamir} /></td>
                    <td><input type="text" name="name_father" placeholder="اسم الام" value={mutamirData.name_father} onChange={handleChangeMutamir} /></td>
                    <td><input type="text" name="full_name" placeholder="الاسم الكامل" value={mutamirData.full_name} onChange={handleChangeMutamir} /></td>
                    <td>
                    <button type="submit">{isEditingMutamir ? "تحديث" : "إضافة"}<FaPlus /></button>
                    </td>
                  </tr>
              </tbody>
            </table>            
            </form>
          </div>
        </div>

        <div className="contain-hajj">
          <h2>تسجيل الحجاج</h2>
          <div className="table-hajj">
          <table className="table">
              <thead>
                <tr>
                  <th>رقم التأكيد</th>
                  <th>نمط الدفع</th>
                  <th>نمط الغرفة</th>
                  <th>اسم البرنامج</th>
                  <th>صورة شخصية</th>
                  <th>صورة جواز السفر</th>
                  <th>رقم الجواز</th>
                  <th>الجنسية</th>
                  <th>الجنس</th>
                  <th>التولد</th>
                  <th>البريد الالكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>اسم الاب</th>
                  <th>اسم الام</th>
                  <th>الاسم</th>
                  <th>إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {hajj.map((haj, index) => (
                  <tr key={index}>
                    <td>{haj.Verification}</td>
                    <td>{haj.payment_method}</td>
                    <td>{haj.type_room}</td>
                    <td>{haj.name_program}</td>
                    <td><img src={haj.alhaj_photo} alt="Personal" width="50" height="50" /></td>
                    <td><img src={haj.passport_photo} alt="Passport" width="50" height="50" /></td>
                    <td>{haj.passport_number}</td>
                    <td>{haj.Nationality}</td>
                    <td>{haj.gender}</td>
                    <td>{haj.birth}</td>
                    <td>{haj.email}</td>
                    <td>{haj.phone_number}</td>
                    <td>{haj.name_father}</td>
                    <td>{haj.name_mother}</td>
                    <td>{haj.full_name}</td>
                    <td>
                      <button className="edit" onClick={() => handleEditHajj(haj)}>تعديل <CiEdit /></button>
                      <button className="delete" onClick={() => handleDeleteHajj(haj._id)}>حذف <MdDelete /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
                <div >
                 <label className="radio-container" onClick={()=>handleCompanionOption("single")}><input type="radio"  />
                    <span className="checkmark"></span>
                     اضافة مرافق 
                    </label>
                     <label className="radio-container" onClick={()=>handleCompanionOption("multiple")}><input type="radio"  />
                    <span className="checkmark"></span>
                      اضافة مرافقين 
                    </label>
                </div>
            <h3>{isEditingHajj ? "تعديل الحاج" : "إضافة الحاج جديد"}</h3>
            <form onSubmit={handleSubmitHajj}>
            <table className="table">
              <thead>
                <tr>
                  <th>رقم التأكيد</th>
                  <th>نمط الدفع</th>
                  <th>نمط الغرفة</th>
                  <th>اسم البرنامج</th>
                  <th>صورة شخصية</th>
                  <th>صورة جواز السفر</th>
                  <th>رقم الجواز</th>
                  <th>الجنسية</th>
                  <th>الجنس</th>
                  <th>التولد</th>
                  <th>البريد الالكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>اسم الاب</th>
                  <th>اسم الام</th>
                  <th>الاسم</th>
                  <th>الاجراء</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td><input type="text" name="Verification" placeholder="رقم التأكيد" value={hajjData.Verification} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="payment_method" placeholder="نمط الدفع" value={hajjData.payment_method} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="type_room" placeholder="نمط الغرفة" value={hajjData.type_room} onChange={handleChangeHajj} /></td>
                    <td><select name="name_program" onChange={handleChangeHajj}>
                        {hajjProgram.map((name, index) => (
                          <option key={index} value={name.name_program}>
                            {name.name_program}
                         </option>
                        ))}
                      </select>
                    </td>
                    <td><input type="file" name="alhaj_photo" onChange={handleChangeImageHajj} /></td>
                    <td><input type="file" name="passport_photo" onChange={handleChangeImageHajj} /></td>
                    <td><input type="text" name="passport_number" placeholder="رقم الجواز" value={hajjData.passport_number} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="Nationality" placeholder="الجنسية" value={hajjData.Nationality} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="gender" placeholder="الجنس" value={hajjData.gender} onChange={handleChangeHajj} /></td>
                    <td><input type="date" name="birth" placeholder="تاريخ الميلاد" value={hajjData.birth} onChange={handleChangeHajj} /></td>
                    <td><input type="email" name="email" placeholder="البريد الإلكتروني" value={hajjData.email} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="phone_number" placeholder="رقم الهاتف" value={hajjData.phone_number} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="name_mother" placeholder="اسم الأب" value={hajjData.name_mother} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="name_father" placeholder="اسم الام" value={hajjData.name_father} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="full_name" placeholder="الاسم الكامل" value={hajjData.full_name} onChange={handleChangeHajj} /></td>
                    <td>
                    <button type="submit">{isEditingHajj ? "تحديث" : "إضافة"}<FaPlus /></button>
                    </td>
                  </tr>
                  {companionOption === 'single' && (
                  <tr>
                  <td><input type="text" name="Verification" placeholder="رقم التأكيد" value={companion1.Verification} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="payment_method" placeholder="نمط الدفع" value={companion1.payment_method} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="silat_alqaraba" placeholder="صلة القرابة" value={companion1.silat_alqaraba} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><select name="name_program" onChange={(e) => handleCompanionChange(e, setCompanion1)} >
                        {hajjProgram.map((name, index) => (
                          <option key={index} value={name.name_program}>
                            {name.name_program}
                         </option>
                        ))}
                      </select>
                    </td>
                    <td><input type="file" name="alhaj_photo" onChange={handleChangeImageCompanion1} /></td>
                    <td><input type="file" name="passport_photo" onChange={handleChangeImageCompanion1} /></td>
                    <td><input type="text" name="passport_number" placeholder="رقم الجواز" value={companion1.passport_number} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="Nationality" placeholder="الجنسية" value={companion1.Nationality} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="gender" placeholder="الجنس" value={companion1.gender} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="date" name="birth" placeholder="تاريخ الميلاد" value={companion1.birth} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="email" name="email" placeholder="البريد الإلكتروني" value={companion1.email} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="phone_number" placeholder="رقم الهاتف" value={companion1.phone_number} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="name_mother" placeholder="اسم الأب" value={companion1.name_mother} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="name_father" placeholder="اسم الام" value={companion1.name_father} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="full_name" placeholder="الاسم الكامل" value={companion1.full_name} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td>بيانات المرافق الاول</td> 
                   </tr>
                   )}
                  {companionOption === 'multiple' && (
                  <>
                  <tr>
                  <td><input type="text" name="Verification" placeholder="رقم التأكيد" value={companion1.Verification} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="payment_method" placeholder="نمط الدفع" value={companion1.payment_method} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="silat_alqaraba" placeholder="صلة القرابة" value={companion1.silat_alqaraba} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><select name="name_program" onChange={(e) => handleCompanionChange(e, setCompanion1)} >
                        {hajjProgram.map((name, index) => (
                          <option key={index} value={name.name_program}>
                            {name.name_program}
                         </option>
                        ))}
                      </select>
                    </td>
                    <td><input type="file" name="alhaj_photo" onChange={handleChangeImageCompanion1} /></td>
                    <td><input type="file" name="passport_photo" onChange={handleChangeImageCompanion1} /></td>
                    <td><input type="text" name="passport_number" placeholder="رقم الجواز" value={companion1.passport_number} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="Nationality" placeholder="الجنسية" value={companion1.Nationality} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="gender" placeholder="الجنس" value={companion1.gender} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="date" name="birth" placeholder="تاريخ الميلاد" value={companion1.birth} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="email" name="email" placeholder="البريد الإلكتروني" value={companion1.email} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="phone_number" placeholder="رقم الهاتف" value={companion1.phone_number} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="name_mother" placeholder="اسم الأب" value={companion1.name_mother} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="name_father" placeholder="اسم الام" value={companion1.name_father} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td><input type="text" name="full_name" placeholder="الاسم الكامل" value={companion1.full_name} onChange={(e) => handleCompanionChange(e, setCompanion1)}  /></td>
                    <td>بيانات المرافق الاول</td> 
                   </tr>
                   <tr>
                   <td><input type="text" name="Verification" placeholder="رقم التأكيد" value={companion2.Verification} onChange={(e) => handleCompanionChange(e, setCompanion2)} /></td>
                     <td><input type="text" name="payment_method" placeholder="نمط الدفع" value={companion2.payment_method} onChange={(e) => handleCompanionChange(e, setCompanion2)} /></td>
                     <td><input type="text" name="silat_alqaraba" placeholder="صلة القرابة" value={companion2.silat_alqaraba} onChange={(e) => handleCompanionChange(e, setCompanion2)} /></td>
                     <td><select name="name_program" onChange={(e) => handleCompanionChange(e, setCompanion2)}>
                         {hajjProgram.map((name, index) => (
                           <option key={index} value={name.name_program}>
                             {name.name_program}
                          </option>
                         ))}
                       </select>
                     </td>
                     <td><input type="file" name="alhaj_photo" onChange={handleChangeImageCompanion2} /></td>
                     <td><input type="file" name="passport_photo" onChange={handleChangeImageCompanion2} /></td>
                     <td><input type="text" name="passport_number" placeholder="رقم الجواز" value={companion2.passport_number} onChange={(e) => handleCompanionChange(e, setCompanion2)} /></td>
                     <td><input type="text" name="Nationality" placeholder="الجنسية" value={companion2.Nationality} onChange={(e) => handleCompanionChange(e, setCompanion2)} /></td>
                     <td><input type="text" name="gender" placeholder="الجنس" value={companion2.gender} onChange={(e) => handleCompanionChange(e, setCompanion2)} /></td>
                     <td><input type="date" name="birth" placeholder="تاريخ الميلاد" value={companion2.birth} onChange={(e) => handleCompanionChange(e, setCompanion2)} /></td>
                     <td><input type="email" name="email" placeholder="البريد الإلكتروني" value={companion2.email} onChange={(e) => handleCompanionChange(e, setCompanion2)} /></td>
                     <td><input type="text" name="phone_number" placeholder="رقم الهاتف" value={companion2.phone_number} onChange={(e) => handleCompanionChange(e, setCompanion2)} /></td>
                     <td><input type="text" name="name_mother" placeholder="اسم الأب" value={companion2.name_mother} onChange={(e) => handleCompanionChange(e, setCompanion2)} /></td>
                     <td><input type="text" name="name_father" placeholder="اسم الام" value={companion2.name_father} onChange={(e) => handleCompanionChange(e, setCompanion2)} /></td>
                     <td><input type="text" name="full_name" placeholder="الاسم الكامل" value={companion2.full_name} onChange={(e) => handleCompanionChange(e, setCompanion2)} /></td>
                     <td>بيانات المرافق الثاني</td> 
                    </tr>
                    </>
                   
                   )}
              </tbody>
            </table>            
            </form>
          </div>
        </div>
        
     </div> 

        <div className="prog-umrah">
          <h2>برامج العمرة</h2>
          <div className="progr-parent">
          <Slider {...settings}>
            {umrahProgram.map((program,index)=>(
              <div key={index} className="prog1" >
              <h3> {program.name_program} </h3>
              <p> مدة البرنامج <span> {program.total_stay} </span>يوم</p>
              <p>
                <span> {program.stay_in_macca} </span> مدة الاقامة بمكة المكرمة
              </p>
              <p>
                <span> {program.stay_in_madina} </span> مدة الاقامة بمكة المكرمة
              </p>

              <p> <span> {program.Date_Travel} </span> تاريخ السفر </p>
              <p><span> {program.Date_Travel_Hijri}  </span> :التاريخ الهجري</p>

              <p> : الفنادق  </p>
              <div className="hotelsForProgram">
              <button className="delet" onClick={()=> handleDeleteUmrahProgramFromMain(program._id)}> حذف البرنامج من الصفحة الرئيسية </button>
              {hotelsForProgram[program._id] ? (
               <p> 
                {hotelsForProgram[program._id].map((hotel, hotelIndex) => (
                <span key={hotelIndex}> {hotel.name}: {hotel.location} : الرتبة  {hotel.Number_stars}  <br/></span>
                 ))}
              </p>
             ) : (
             <p></p>
              )}
              </div>

              <p><span> {program.price1} </span > </p>
              <p><span> {program.price2} </span > </p>
              <p><span> {program.price3} </span > </p>
              <p><span> {program.price4} </span > </p>

              <button className="update" onClick={()=> handleEditUmrahProgram(program)}>تعديل<CiEdit /></button>
              <button className="delet" onClick={()=> handleDeleteUmrahProgram(program._id)}>حذف<MdDelete /></button>
              <button className="update" onClick={()=> handleBusAddUmrahProgram(program._id)}>اضافة باص <FaPlus /></button>
              <button className="delet" onClick={()=> handleBusDeleteUmrahProgram(program._id)}> حذف باص <MdDelete /></button>
            </div>
            ))}
           </Slider>
           
          </div>

          <div className="prog-add">
            <form onSubmit={handleSubmitUmrahProgram}>
              <table className="tableProgeam">
                <tbody>
                <tr>
                  <td><label>نوع السفر</label></td>
                  <td><input type="text"  /></td>
                  <td><label> اسم البرنامج</label></td>
                  <td><input type="text" name="name_program" value={umrahProgramData.name_program} onChange={handleChangeUmrahProgram}  /></td>
                </tr>
                <tr>
                  <td><label>صورة الغلاف</label></td>
                  <td>
                    {umrahProgramData.image && (
                        <div>
                            <img src={umrahProgramData.image} alt="Current" style={{ width: '100px', height: '100px' }} />
                        </div>
                    )}
                    <input type="file" name="image" onChange={handleChangeImageUmrahProgram} />
                  </td>
                  <td><label>شركة النقل</label></td> 
                  <td><select name="id_busCompany" onChange={handleChangeUmrahProgram}>
                        <option value="" hidden> شركات النقل</option>
                        {transports.map((transport, transportIndex) => (
                        <option key={transportIndex}  value={transport._id}  >{transport.name_company}</option>
                         ))}
                     </select>
                     </td>  
                </tr>
                <tr>
                  <td><label  >السنة الهجرية</label></td>
                  <td><input type="text" name="Date_Travel_Hijri" value={umrahProgramData.Date_Travel_Hijri} onChange={handleChangeUmrahProgram} /></td>
                  <td><label > السنة الميلادية</label></td>
                  <td><input type="date" name="Date_Travel" value={umrahProgramData.Date_Travel} onChange={handleChangeUmrahProgram} /></td>
                </tr>
                <tr>
                  <td><label > مدة البرنامج</label></td>
                  <td><input type="number" name="total_stay" value={umrahProgramData.total_stay} onChange={handleChangeUmrahProgram} /></td>
                </tr>
                <tr>
                  <td><label >مدة الاقامة بمكة المكرمة</label></td>
                  <td><input type="number" name="stay_in_macca" value={umrahProgramData.stay_in_macca} onChange={handleChangeUmrahProgram} /></td>
                  <td><label >مدة الاقامة بالمدينة المنورة</label></td>
                  <td><input type="number" name="stay_in_madina" value={umrahProgramData.stay_in_madina} onChange={handleChangeUmrahProgram} /></td>
                </tr>
                <tr>
                <td><label >  السعر الاول للبرنامج حسب نوع الغرفة</label></td>
                  <td><input type="text" name="price1" value={umrahProgramData.price1} onChange={handleChangeUmrahProgram} /></td>
                  <td><label>السعر الثاني للبرنامج حسب نوع الغرفة</label></td>
                  <td><input type="text" name="price2" value={umrahProgramData.price2} onChange={handleChangeUmrahProgram} /></td> 
                </tr>
                <tr>
                  <td><label > السعر الثالث للبرنامج حسب نوع الغرفة</label></td>
                  <td><input type="text" name="price3" value={umrahProgramData.price3} onChange={handleChangeUmrahProgram} /></td>
                  <td><label > السعر الرابع للبرنامج حسب نوع الغرفة</label></td>
                  <td><input type="text" name="price4" value={umrahProgramData.price4} onChange={handleChangeUmrahProgram} /></td>      
                </tr>
                <tr>
                  <td>
                     <select onChange={(e) => {
                       const selectedHotelId = e.target.value;
                       if (selectedHotelId && !selectedHotelsForProgramUmrah.includes(selectedHotelId)) {
                        setSelectedHotelsForProgramUmrah([...selectedHotelsForProgramUmrah,  selectedHotelId]);
                        }
                        }}>
                       <option value="" hidden>اختر فندق</option>
                        {hotels.map((hotel, hotelIndex) => (
                        <option key={hotelIndex} value={hotel._id}>{hotel.name}: {hotel.location}</option>
                         ))}
                     </select>
                  </td>
                  <td>
                     <h5>الفنادق المختارة:</h5>
                      <ul>
                           {selectedHotelsForProgramUmrah.map((hotelId, index) => {
                           const hotel = hotels.find(h => h._id === hotelId);
                           return hotel ? <li key={index}>{hotel.name}</li> : null;
                           })}
                      </ul>
                  </td> 
                </tr>
                </tbody>
              </table>
              <button type="submit" className="add-btn"> {isEditingUmrahProgram ? "تحديث" : "إضافة"}<FaPlus /> </button>
            </form>
          </div>
        </div>

        <div className="prog-hajj">
          <h2>برامج الحج</h2>
          <div className="progr-parent">
          <Slider {...settings}>
            {hajjProgram.map((program,index)=>(
              <div key={index} className="prog1" >
              <h3> {program.name_program} </h3>
              <p> مدة البرنامج <span> {program.total_stay} </span>يوم</p>
              <p>
                <span> {program.stay_in_macca} </span> مدة الاقامة بمكة المكرمة
              </p>
              <p>
                <span> {program.stay_in_madina} </span> مدة الاقامة بمكة المكرمة
              </p>

              <p> <span> {program.Date_Travel} </span> تاريخ السفر </p>
              <p><span> {program.Date_Travel_Hijri} </span> :التاريخ الهجري</p>
              <p> عدد الوجبات :<span> {program.Number_meals} </span> </p>
              <p> المرشد الديني :<span> {program.Religious_guide} </span></p>
              <p> : الفنادق   </p>
              <div className="hotelsForProgram">
              <button className="delet" onClick={()=> handleDeleteHajjProgramFromMain(program._id)}> حذف البرنامج من الصفحة الرئيسية </button>
              {hotelsForProgramHajj[program._id] ? (
               <p> 
                {hotelsForProgramHajj[program._id].map((hotel, hotelIndex) => (
                <span key={hotelIndex}>{hotel.name}: {hotel.location} : الرتبة  {hotel.Number_stars}  <br/></span>
                 ))}
              </p>
             ) : (
             <p></p>
              )}
              </div>
              <p><span> {program.price1} </span > </p>
              <p><span> {program.price2} </span > </p>
              <p><span> {program.price3} </span > </p>
              <p><span> {program.price4} </span > </p>
              <button className="update" onClick={()=> handleEditHajjProgram(program)}>تعديل<CiEdit /></button>
              <button className="delet" onClick={()=> handleDeleteHajjProgram(program._id)}><MdDelete />حذف</button>
            </div>
            ))}
           </Slider>
           
          </div>

          <div className="prog-add">
            <form onSubmit={handleSubmitHajjProgram}>
              <table className="tableProgeam">
                <tbody>
                <tr>
                  <td><label>نوع السفر</label></td>
                  <td><input type="text"  /></td>
                  <td><label> اسم البرنامج</label></td>
                  <td><input type="text" name="name_program" value={hajjProgramData.name_program} onChange={handleChangeHajjProgram}  /></td> 
                </tr>
                <tr>
                  <td><label>صورة الغلاف</label></td>
                  <td>
                    {hajjProgramData.image && (
                        <div>
                            <img src={hajjProgramData.image} alt="Current" style={{ width: '100px', height: '100px' }} />
                        </div>
                    )}
                    <input type="file" name="image" onChange={handleChangeImageHajjProgram} />
                  </td> 
                </tr>
                <tr>
                  <td><label  >السنة الهجرية</label></td>
                  <td><input type="text" name="Date_Travel_Hijri" value={hajjProgramData.Date_Travel_Hijri} onChange={handleChangeHajjProgram} /></td>
                  <td><label > السنة الميلادية</label></td>
                  <td><input type="date" name="Date_Travel" value={hajjProgramData.Date_Travel} onChange={handleChangeHajjProgram} /></td>    
                </tr>
                <tr>
                  <td><label > مدة البرنامج</label></td>
                  <td><input type="number" name="total_stay" value={hajjProgramData.total_stay} onChange={handleChangeHajjProgram} /></td> 
                </tr>
                <tr>
                  <td><label >مدة الاقامة بمكة المكرمة</label></td>
                  <td><input type="number" name="stay_in_macca" value={hajjProgramData.stay_in_macca} onChange={handleChangeHajjProgram} /></td>
                  <td><label >مدة الاقامة بالمدينة المنورة</label></td>
                  <td><input type="number" name="stay_in_madina" value={hajjProgramData.stay_in_madina} onChange={handleChangeHajjProgram} /></td>
                </tr>
                <tr>
                  <td><label >المرشد الديني</label></td>
                  <td><input type="text" name="Religious_guide" value={hajjProgramData.Religious_guide} onChange={handleChangeHajjProgram} /></td>
                  <td><label >عدد الوجبات</label></td>
                  <td><input type="text" name="Number_meals" value={hajjProgramData.Number_meals} onChange={handleChangeHajjProgram} /></td>
                </tr>
                <tr>
                <td><label >السعر الاول للبرنامج حسب نوع الغرفة</label></td>
                  <td><input type="text" name="price1" value={hajjProgramData.price1} onChange={handleChangeHajjProgram} /></td>
                  <td><label> السعر الثاني للبرنامج حسب نوع الغرفة</label></td>
                  <td><input type="text" name="price2" value={hajjProgramData.price2} onChange={handleChangeHajjProgram} /></td> 
                </tr>
                <tr>
                  <td><label >السعر الثالث للبرنامج حسب نوع الغرفة</label></td>
                  <td><input type="text" name="price3" value={hajjProgramData.price3} onChange={handleChangeHajjProgram} /></td>
                  <td><label >  السعر الرابع للبرنامج حسب نوع الغرفة</label></td>
                  <td><input type="text" name="price4" value={hajjProgramData.price4} onChange={handleChangeHajjProgram} /></td>      
                </tr>
                <tr>
                  <td>
                     <select onChange={(e) => {
                       const selectedHotelId = e.target.value;
                       if (selectedHotelId && !selectedHotelsForProgramHajj.includes(selectedHotelId)) {
                       setSelectedHotelsForProgramHajj([...selectedHotelsForProgramHajj,  selectedHotelId]);
                        }
                        }}>
                       <option value="" hidden>اختر فندق</option>
                        {hotels.map((hotel, hotelIndex) => (
                        <option key={hotelIndex} value={hotel._id}>{hotel.name}: {hotel.location}</option>
                         ))}
                     </select>
                  </td>
                  <td>
                     <h5>الفنادق المختارة:</h5>
                      <ul>
                           {selectedHotelsForProgramHajj.map((hotelId, index) => {
                           const hotel = hotels.find(h => h._id === hotelId);
                           return hotel ? <li key={index}>{hotel.name}</li> : null;
                           })}
                      </ul>
                  </td> 
                </tr>
                </tbody>
              </table>
              <button type="submit" className="add-btn"> {isEditingHajjProgram ? "تحديث" : "إضافة"}<FaPlus /> </button>
            </form>
          </div>
         </div>


         <div className="dashborde">
        <div className="hotal-updat">
          <h2>الفنادق</h2>
          <div className="table-hotal">
            <table className="table">
              <thead>
                <tr>
                  <th>الصورة الرئيسية</th>
                  <th>اماكن يمكن زيارتها</th>
                  <th>الخدمات</th>
                  <th>رتبة الفندق</th>
                  <th>التفاصيل</th>
                  <th>الموقع</th>
                  <th>اسم الفندق</th>
                </tr>
              </thead>
              <tbody>
              {hotels.map((hotel, index) => (
                  <tr key={index}>
                    <td><img src={hotel.urlImagehotel} width="50" height="50" /></td>
                    <td>{hotel.Places_available_visit}</td>
                    <td>{hotel.Services}</td>
                    <td>{hotel.Number_stars}</td>
                    <td>{hotel.  details}</td>
                    <td>{hotel.location}</td>
                    <td>{hotel.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <form onSubmit={handleSubmitHotel}>
            <table>
              <thead>
                <tr>
                  <th>رابط الفندق</th>
                  <th> صور الفندق</th>
                  <th>الصورة الرئيسية</th>
                  <th>اماكن يمكن زيارتها</th>
                  <th>الخدمات</th>
                  <th>رتبة الفندق</th>
                  <th>التفاصيل</th>
                  <th>الموقع</th>
                  <th>اسم الفندق</th>
                  <th>{}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="url"    name="link"  value={hotelData.link}  onChange={handelChangeHotel} /></td>
                  <td><input type="file"   name="urlImage"  value={hotelData.urlImage} onChange={handleChangeArrayImageHotel} /></td>
                  <td><input type="file"   name="urlImagehotel"   onChange={handleChangeImageHotel} /></td> 
                  <td><input type="text"   name="Places_available_visit"  value={hotelData.Places_available_visit} onChange={handelChangeHotel} /></td>
                  <td><input type="text"   name="Services"  value={hotelData.Services} onChange={handelChangeHotel} /></td>
                  <td><input type="number"   name="Number_stars"  value={hotelData.Number_stars} onChange={handelChangeHotel} /></td>
                  <td><input type="text" name="details"  value={hotelData.details} onChange={handelChangeHotel} /></td>
                  <td><input type="text"   name="location"  value={hotelData.location} onChange={handelChangeHotel} /></td>
                  <td><input type="text"   name="name"  value={hotelData.name} onChange={handelChangeHotel} /></td>
                  <td>
                    <button className="add" type="submit">اضافة<FaPlus /></button>
                  </td>
                </tr>
              </tbody>
            </table>
            </form>
          </div>
        </div>

        <div className="transport-updat">
          <h2>النقل</h2>
          <div className="table-transport">
            <table className="table">
              <thead>
                <tr>
                  <th> سعر التكيت</th>
                  <th>نوع النقل</th>
                  <th>رابط الشركة</th>
                  <th>الصورة الرئيسية</th>
                  <th>هدف الشركة</th>
                  <th>الخدمات</th>
                  <th>اسم الشركة</th>
                </tr>
              </thead>
              <tbody>
                {transports.map((Transport, index) => (
                  <tr key={index}>
                    <td>{Transport.price_tecket}</td>
                    <td>{Transport.type_bus}</td>
                    <td>{Transport.link}</td>
                    <td><img src={Transport.urlImageCompany} width="50" height="50" /></td>
                    <td>{Transport.goals_company}</td>
                    <td>{Transport.Services}</td>
                    <td>{Transport.name_company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
  
          <form onSubmit={handleSubmitTransport}>
            <table>
              <thead>
                <tr>
                  <th> سعر التكيت</th>
                  <th>نوع النقل</th>
                  <th>رابط الشركة</th>
                  <th>صور وسائل النقل</th>
                  <th>الصورة الرئيسية</th>
                  <th>هدف الشركة</th>
                  <th>الخدمات</th>
                  <th>اسم الشركة</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text"   name="price_tecket"  value={transportData.price_tecket} onChange={handelChangeTransport} /></td>
                  <td><input type="text"   name="type_bus"  value={transportData.type_bus}  onChange={handelChangeTransport} /></td> 
                  <td><input type="url"   name="link"  value={transportData.link} onChange={handelChangeTransport} /></td>
                  <td><input type="file"   name="urlImage"  value={transportData.urlImage} onChange={handleChangeArrayImageTransport} /></td>
                  <td><input type="file"   name="urlImageCompany"   onChange={handleChangeImageTransport} /></td>
                  <td><input type="text" name="goals_company"  value={transportData.goals_company} onChange={handelChangeTransport} /></td>
                  <td><input type="text"   name="Services"  value={transportData.Services} onChange={handelChangeTransport} /></td>
                  <td><input type="text"   name="name_company"  value={transportData.name_company} onChange={handelChangeTransport} /></td>
                  <td>
                    <button className="add" type="submit">اضافة<FaPlus /></button>
                  </td>
                </tr>
              </tbody>
            </table>
            </form>
          </div>
        </div>
        </div>
        <div className="seting">
          <h2>الاعدادات</h2>
          <div className="seting-detil">
            <h3>:اعادة تعيين كلمة المرور</h3>
          <div className="input-box seting-box1">
              <input type="password" className="input-filed" placeholder=" كلمة السر الحالية" />
            </div>
            <div className="input-box">
              <input type="password" className="input-filed" placeholder="كلمة السر الجديدة" />
            </div>
            <div className="input-box">
              <input type="password" className="input-filed" placeholder="تاكيد كلمة المرور" />
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="تغيير كلمة المرور" />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default DashBoardEmployee