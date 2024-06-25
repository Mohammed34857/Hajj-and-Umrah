
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashBoardEmployee.css";
import min from "../../images/dashbord/img_avatar1.png";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { HiUserPlus } from "react-icons/hi2";
import { ImFolderOpen ,ImLibrary , ImBubbles4 ,ImAirplane , ImCogs} from "react-icons/im";
import { FaRightFromBracket } from "react-icons/fa6";
import { FaTrashAlt ,FaPencilAlt } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import axios from 'axios';

const DashBoardEmployee = () => {


  const [isEditingMutamir, setIsEditingMutamir] = useState(false);
  const [editingIdMutamir, setEditingIdMutamir] = useState(null);
  const [mutamir,setMutamir]=useState([]);
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
      Verification: true,
      name_program:""
  });
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://officealhajandalumrah.adaptable.app/al-mutamir');
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

  const handleChangeMutamir = (e) => {
    const { name, value, files } = e.target;
    setMutamirData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };   

  const handleSubmitMutamir = async (e) => {
    e.preventDefault();
    if (isEditing) {
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

    const [isEditingHajj, setIsEditingHajj] = useState(false);
    const [editingIdHajj, setEditingIdHajj] = useState(null);
    const [hajj,setHajj]=useState([]);
    const [hajjData,setHajjData]=useState({
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
        alhaj_photo: "",
        number_bus: 0,
        type_room: "",
        seatNumber: 0,
        payment_method: "",
        Verification: true,
        name_program:""
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
  
    const handleChangeHajj = (e) => {
      const { name, value, files } = e.target;
      setHajjData((prevFormData) => ({
        ...prevFormData,
        [name]: files ? files[0] : value,
      }));
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
        const dataHajj = {
          full_name: hajjData.full_name,
          name_father: hajjData.name_father,
          name_mother: hajjData.name_mother,
          phone_number: Number(hajjData.phone_number) ,
          email: hajjData.email,
          birth: hajjData.birth,
          gender: hajjData.gender,
          Nationality: hajjData.Nationality,
          passport_number: hajjData.passport_number,
          passport_photo: hajjData.passport_photo,
          alhaj_photo: hajjData.alhaj_photo,
          type_room: hajjData.type_room,
          number_bus: Number(hajjData.number_bus),
          seatNumber: Number(hajjData.seatNumber),
          payment_method: hajjData.payment_method,
          Verification: hajjData.Verification,
          name_program: hajjData.name_program
      };
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
        phone_number: 1,
        email: "",
        birth: "",
        gender: "",
        Nationality: "",
        passport_number: "",
        passport_photo: "",
        alhaj_photo: "",
        number_bus: 1,
        type_room: "",
        seatNumber: 1,
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
                      <button className="edit" onClick={() => handleEditMutamir(muta)}>Edit</button>
                      <button className="delete" onClick={() => handleDeleteMutamir(muta._id)}>Delete</button>
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
                  <th>رقم المقعد</th>
                  <th>نمط الغرفة</th>
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
                    <td><input type="number" name="seatNumber" placeholder="رقم المقعد" value={mutamirData.seatNumber} onChange={handleChangeMutamir} /></td>
                    <td><input type="text" name="type_room" placeholder="نمط الغرفة" value={mutamirData.type_room} onChange={handleChangeMutamir} /></td>
                    <td><input type="number" name="number_bus" placeholder="رقم الباص" value={mutamirData.number_bus} onChange={handleChangeMutamir} /></td>
                    <td><input type="text" name="name_program" placeholder="اسم البرنامج" value={mutamirData.name_program} onChange={handleChangeMutamir} /></td>
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
                    <button type="submit">{isEditingMutamir ? "تحديث" : "إضافة"}</button>
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
                {hajj.map((haj, index) => (
                  <tr key={index}>
                    <td>{haj.Verification}</td>
                    <td>{haj.payment_method}</td>
                    <td>{haj.type_room}</td>
                    <td>{haj.seatNumber}</td>
                    <td>{haj.number_bus}</td>
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
                      <button className="edit" onClick={() => handleEditHajj(haj)}>Edit</button>
                      <button className="delete" onClick={() => handleDeleteHajj(haj._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>{isEditingHajj ? "تعديل الحاج" : "إضافة الحاج جديد"}</h3>
            <form onSubmit={handleSubmitHajj}>
            <table className="table">
              <thead>
                <tr>
                  <th>رقم التأكيد</th>
                  <th>نمط الدفع</th>
                  <th>رقم المقعد</th>
                  <th>نمط الغرفة</th>
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
                    <td><input type="text" name="Verification" placeholder="رقم التأكيد" value={hajjData.Verification} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="payment_method" placeholder="نمط الدفع" value={hajjData.payment_method} onChange={handleChangeHajj} /></td>
                    <td><input type="number" name="seatNumber" placeholder="رقم المقعد" value={hajjData.seatNumber} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="type_room" placeholder="نمط الغرفة" value={hajjData.type_room} onChange={handleChangeHajj} /></td>
                    <td><input type="number" name="number_bus" placeholder="رقم الباص" value={hajjData.number_bus} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="name_program" placeholder="اسم البرنامج" value={hajjData.name_program} onChange={handleChangeHajj} /></td>
                    <td><input type="file" name="alhaj_photo" onChange={handleChangeImageHajj} /></td>
                    <td><input type="file" name="passport_photo" onChange={handleChangeImageHajj} /></td>
                    <td><input type="text" name="passport_number" placeholder="رقم الجواز" value={hajjData.passport_number} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="Nationality" placeholder="الجنسية" value={hajjData.Nationality} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="gender" placeholder="الجنس" value={hajjData.gender} onChange={handleChangeHajj} /></td>
                    <td><input type="date" name="birth" placeholder="تاريخ الميلاد" value={hajjData.birth} onChange={handleChangeHajj} /></td>
                    <td><input type="email" name="email" placeholder="البريد الإلكتروني" value={hajjData.email} onChange={handleChangeHajj} /></td>
                    <td><input type="number" name="phone_number" placeholder="رقم الهاتف" value={hajjData.phone_number} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="name_mother" placeholder="اسم الأب" value={hajjData.name_mother} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="name_father" placeholder="اسم الام" value={hajjData.name_father} onChange={handleChangeHajj} /></td>
                    <td><input type="text" name="full_name" placeholder="الاسم الكامل" value={hajjData.full_name} onChange={handleChangeHajj} /></td>
                    <td>
                    <button type="submit">{isEditingHajj ? "تحديث" : "إضافة"}</button>
                    </td>
                  </tr>
              </tbody>
            </table>            
            </form>
          </div>
        </div>
     </div> 
        <div className="prog-umrah">
          <h2>برامج العمرة</h2>
          <div className="progr-parent">
            <div className="prog1">
              <h3>عمرة رمضان البرية</h3>

              <p>
                مدة البرنامج <span>25 يوم</span>
              </p>
              <p>
                <span>5</span> مدة الاقامة بمكة المكرمة
              </p>
              <p>
                <span>5</span> مدة الاقامة بمكة المكرمة
              </p>

              <p>
                {" "}
                تاريخ السفر <span>11/5/2024</span> السفر برا
              </p>
              <p>
                فنادق مكة المكرمة : <span>اعمار غراند</span> <span>فيوليت</span>
                <span>انوار الاصيل </span>
              </p>

              <p>
                فنادق المدينة المنورة : <span>روز الماسة</span>{" "}
                <span>نجوم المدينة</span> <br />
                <span>ارجوان روز</span>
              </p>

              <button className="update">تعديل</button>
              <button className="delet">حذف</button>
            </div>
            <div className="prog1">
              <h3>عمرة رمضان البرية</h3>

              <p>
                مدة البرنامج <span>25 يوم</span>
              </p>
              <p>
                <span>5</span> مدة الاقامة بمكة المكرمة
              </p>
              <p>
                <span>5</span> مدة الاقامة بمكة المكرمة
              </p>

              <p>
                {" "}
                تاريخ السفر <span>11/5/2024</span> السفر برا
              </p>
              <p>
                فنادق مكة المكرمة : <span>اعمار غراند</span>{" "}
                <span>انوار الاصيل </span>
              </p>

              <p>
                فنادق المدينة المنورة : <span>روز الماسة</span>{" "}
                <span>نجوم المدينة</span> <br />
                <span>ارجوان روز</span>
              </p>
              <button className="update">تعديل</button>
              <button className="delet">حذف</button>

         

              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <input type="number" placeholder="رقم الباص" />
                  <input type="text" placeholder="اسم الشركة" />
                </div>
              </div>
            </div>
          </div>

          <div className="prog-add">

            <div>
            <input type="text"  />
            <label htmlFor="">نوع السفر</label>
                 <input type="text" className="name" />
                    <label htmlFor="" className="name">
                      اسم البرنامج
                    </label>  
            
              </div>

              <div className="travel-brog">
              <input type="file" className="name" />
              <label htmlFor="" className="name">
                    صورة الغلاف             </label>
            <select name="" id="">
                    <option value="" hidden> شركات النقل
                      </option>
                      <option>السراج</option>
                      <option></option></select>
                      <label htmlFor="">شركة النقل</label>

                      <input type="number" className="name" />
              <label htmlFor="" className="name">
           عدد الباصات           </label>
                      
            </div>

            <div  className="date" >
                  <input type="date"  />
              <label htmlFor="" >
              السنة الهجرية</label>
              <input type="date"/>
              <label htmlFor=""> السنة الميلادية</label>
              
              </div>

        

<div className="total-number">       
    <input type="number" />
<label htmlFor=""> مدة البرنامج</label></div>


              <div>
              {" "}
              <input type="number" className="numb" />
              <label htmlFor="">مدة الاقامة بمكة المكرمة</label>
              <input type="number" className="numb" />
              <label htmlFor="">مدة الاقامة بالمدينة المنورة</label>
              </div>
        


        
            <button className="add-btn">اضافة </button>

            <div className="hot">
              <h4> 
              :  الفنادق الخاصة بالبرنامج</h4>
              <table>
                <thead>
                <td>رتبة الفندق</td>
                <td>نوع الغرف</td>
                  <td>الموقع</td>
                  <td>اسم الفندق</td>
              
                </thead>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
               </div>







            <div className="room">
              <h4>:سعر البرنامج</h4>
              <table>
                <thead>
                  <td>السعر</td>
                  <td>نوع الغرفة</td>

                </thead>

                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
       
            <button className="add-btn">اضافة </button>
          </div>
        </div>

        <div className="prog-hajj">
          <h2>برامج الحج</h2>
          <div className="progr-parent">
            <div className="prog1">
              <h3>عمرة رمضان البرية</h3>

              <p>
                مدة البرنامج <span>25 يوم</span>
              </p>
              <p>
                <span>5</span> مدة الاقامة بمكة المكرمة
              </p>
              <p>
                <span>5</span> مدة الاقامة بمكة المكرمة
              </p>

              <p>
                {" "}
                تاريخ السفر <span>11/5/2024</span> السفر برا
              </p>
              <p>
                فنادق مكة المكرمة : <span>اعمار غراند</span> <span>فيوليت</span>
                <span>انوار الاصيل </span>
              </p>

              <p>
                فنادق المدينة المنورة : <span>روز الماسة</span>{" "}
                <span>نجوم المدينة</span> <br />
                <span>ارجوان روز</span>
              </p>

              <button className="update">تعديل</button>
              <button className="delet">حذف</button>
            </div>
            <div className="prog1">
              <h3>عمرة رمضان البرية</h3>

              <p>
                مدة البرنامج <span>25 يوم</span>
              </p>
              <p>
                <span>5</span> مدة الاقامة بمكة المكرمة
              </p>
              <p>
                <span>5</span> مدة الاقامة بمكة المكرمة
              </p>

              <p>
                {" "}
                تاريخ السفر <span>11/5/2024</span> السفر برا
              </p>
              <p>
                فنادق مكة المكرمة : <span>اعمار غراند</span> <span>فيوليت</span>
                <span>انوار الاصيل </span>
              </p>

              <p>
                فنادق المدينة المنورة : <span>روز الماسة</span>{" "}
                <span>نجوم المدينة</span> <br />
                <span>ارجوان روز</span>
              </p>

              <button className="update">تعديل</button>
              <button className="delet">حذف</button>
            </div>
          </div>

        
          <div className="prog-add">

            <div>
            <input type="text"  />
            <label htmlFor="">نوع السفر</label>
                 <input type="text" className="name" />
                    <label htmlFor="" className="name">
                      اسم البرنامج
                    </label>  
            
              </div>

              <div className="travel-brog">
              <input type="file" className="name" />
              <label htmlFor="" className="name">
                    صورة الغلاف             </label>
            <select name="" id="">
                    <option value="" hidden> شركات النقل
                      </option>
            <option value="">hjjj</option>
        </select>
                      <label htmlFor="">شركة النقل</label>

                      <input type="number" className="name" />
              <label htmlFor="" className="name">
           عدد الباصات           </label>
                      
            </div>

            <div  className="date" >
                  <input type="date"  />
              <label htmlFor="" >
              السنة الهجرية</label>
              <input type="date"/>
              <label htmlFor=""> السنة الميلادية</label>
              
              </div>

        

<div className="total-number">       
    <input type="number" />
<label htmlFor=""> مدة البرنامج</label></div>


              <div>
              {" "}
              <input type="number" className="numb" />
              <label htmlFor="">مدة الاقامة بمكة المكرمة</label>
              <input type="number" className="numb" />
              <label htmlFor="">مدة الاقامة بالمدينة المنورة</label>
              </div>
        
              <div>
            <input type="text"  />
            <label htmlFor="">المرشد الديني</label>
                 <input type="number" className="name" />
                    <label htmlFor="" className="name">
عدد الوجبات                     </label>  
            
              </div>

        
            <button className="add-btn">اضافة </button>

            <div className="hot">
              <h4> 
              :  الفنادق الخاصة بالبرنامج</h4>
              <table>
                <thead>
                <td>رتبة الفندق</td>
                <td>نوع الغرف</td>
                  <td>الموقع</td>
                  <td>اسم الفندق</td>
              
                </thead>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
               </div>







            <div className="room">
              <h4>:سعر البرنامج</h4>
              <table>
                <thead>
                  <td>السعر</td>
                  <td>نوع الغرفة</td>

                </thead>

                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
       
            <button className="add-btn">اضافة </button>
          </div>
        </div>

        <div className="hotal-updat">
          <h2>الفنادق</h2>
          {/* <div className="table-hotal">
            <table className="table">
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="url" className="link-visit" />
                  </td>

                  <td>
                    <input type="file" id="hotal-photo1" className="hotal-photo" />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="min-hotal-photo1"
                      className="min-hotal-photo"
                    />
                  </td>

                  <td>
                    <input type="text" id="visit-place1" className="visit-place" />
                  </td>
                  <td>
                    <input type="text" id="servers1" className="servers" />
                  </td>
                  <td>
                    <input type="number" id="star1" className="star" />
                  </td>
                  <td>
                    <input type="text" id="detil1" className="detil" />
                  </td>
                  <td>
                    <input type="text" id="location1" className="location" />
                  </td>
                  <td>
                    <input type="text" id="name-hota1" className="name_hota" />
                  </td>
                  <td>
                    <button className="add">اضافة</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>

        <div className="transport-updat">
          <h2>النقل</h2>
          {/* <div className="table-transport">
            <table className="table">
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="number" id="pric1" className="pric" />
                  </td>

                  <td>
                    <input type="text" id="typ1" className="typ" />
                  </td>

                  <td>
                    <input type="url" className="link-visit" />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="transport-photo1"
                      className="transport-photo"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="min-transpot-photo1"
                      className="min-transpot-photo"
                    />
                  </td>
                  <td>
                    <input type="text" id="detil-trans1" className="detil-trans" />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="servers-trans1"
                      className="servers-trans"
                    />
                  </td>
                  <td>
                    <input type="text" id="name-trans1" className="name_trans" />
                  </td>
                  <td>
                    <button className="add">اضافة</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
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