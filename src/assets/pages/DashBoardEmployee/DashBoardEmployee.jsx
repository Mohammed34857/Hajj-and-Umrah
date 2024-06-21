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
  
  const [mutamir,setMutamir]=useState([]);
  const [mutamirData,setMutamirData]=useState({
      fullName: "string",
      nameFather: "string",
      nameMother: "string",
      phoneNumber: 0,
      email: "abedalrahaman@gmail.com",
      birth: "2024-05-20T23:27:58.385Z",
      gender: "string",
      nationality: "string",
      passportNumber: "string",
      passportPhoto: "",
      almutamirPhoto: "",
      numberBus: 0,
      typeRoom: "string",
      seatNumber: 0,
      paymentMethod: "string",
      verification: true
  });
  console.log(mutamir);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Almutamir = await axios.get('https://officealhajandalumrah.adaptable.app/al-mutamir').then(response => response.data);
        setMutamir(Almutamir);
      } catch (error) {
        console.error('Error fetching  data:', error);
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
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const imagePath = response.data;
            setMutamirData((prevFormData) => ({
                ...prevFormData,
                [name]: imagePath,
            }));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
  };
     

  const handleChange = (e) => {
      const { name, value, files } = e.target;
      setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: files ? files[0] : value,
      }));
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
          <th>التأشيرة</th>
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
        </tr>
      </thead>
      <tbody>
        {mutamir.map((muta , index)=>(
        <tr key={index}>
          <td></td>
          <td></td>
          <td></td>
          <td>{muta.payment_method}</td>
          <td>{muta.type_room}</td>
          <td>{muta.seatNumber}</td>
          <td></td>
          <td><img src={muta.almutamir_photo} alt="Personal" width="50" height="50"/></td>
          <td><img src={muta.passport_photo} alt="Passport" width="50" height="50"/></td>
          <td>{muta.passport_number}</td>
          <td>{muta.Nationality}</td>
          <td>{muta.gender}</td>
          <td>{muta.birth}</td>
          <td>{muta.email}</td>
          <td>{muta.phone_number}</td>
          <td>{muta.name_father}</td>
          <td>{muta.name_mother}</td>
          <td>{muta.full_name}</td>
        </tr>
        ))}
      </tbody>
    </table>
    <table className="table">
      <thead>
        <tr>
          <th>رقم التأكيد</th>
          <th>التأشيرة</th>
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
          <th>تعديل</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" className="verilication" /></td>
          <td><input type="file" className="visa" /></td>
          <td><input type="text" className="type-pay" /></td>
          <td><input type="text" /></td>
          <td><input type="number" className="seat-number" /></td>
          <td><input type="number" className="number-bus" /></td>
          <td><input type="text" className="name-program" /></td>
          <td><input type="file" className="almutamir-photo" /></td>
          <td><input type="file" className="passport-photo" /></td>
          <td><input type="number" className="passport-number" /></td>
          <td><input type="text" className="nationality" /></td>
          <td><input type="text" className="gender" /></td>
          <td><input type="date" className="birth" /></td>
          <td><input type="email" className="the-email" /></td>
          <td><input type="text" className="phone" /></td>
          <td><input type="text" className="name_mother" /></td>
          <td><input type="text" className="name_father" /></td>
          <td><input type="text" className="full_travel" /></td>
          <td><button className="add">Add</button></td>
        </tr>
        <tr>
          <td><input type="text" className="verilication" /></td>
          <td><input type="file" className="visa" /></td>
          <td><input type="text" className="type-pay" /></td>
          <td><input type="text" /></td>
          <td><input type="number" className="seat-number" /></td>
          <td><input type="number" className="number-bus" /></td>
          <td><input type="text" className="name-program" /></td>
          <td><input type="file" className="almutamir-photo" /></td>
          <td><input type="file" className="passport-photo" /></td>
          <td><input type="number" className="passport-number" /></td>
          <td><input type="text" className="nationality" /></td>
          <td><input type="text" className="gender" /></td>
          <td><input type="date" className="birth" /></td>
          <td><input type="email" className="the-email" /></td>
          <td><input type="text" className="phone" /></td>
          <td><input type="text" className="name_mother" /></td>
          <td><input type="text" className="name_father" /></td>
          <td><input type="text" className="full_travel" /></td>
          <td><button className="edit">Edit</button></td>
        </tr>
        <tr>
          <td><input type="text" className="verilication" /></td>
          <td><input type="file" className="visa" /></td>
          <td><input type="text" className="type-pay" /></td>
          <td><input type="text" /></td>
          <td><input type="number" className="seat-number" /></td>
          <td><input type="number" className="number-bus" /></td>
          <td><input type="text" className="name-program" /></td>
          <td><input type="file" className="almutamir-photo" /></td>
          <td><input type="file" className="passport-photo" /></td>
          <td><input type="number" className="passport-number" /></td>
          <td><input type="text" className="nationality" /></td>
          <td><input type="text" className="gender" /></td>
          <td><input type="date" className="birth" /></td>
          <td><input type="email" className="the-email" /></td>
          <td><input type="text" className="phone" /></td>
          <td><input type="text" className="name_mother" /></td>
          <td><input type="text" className="name_father" /></td>
          <td><input type="text" className="full_travel" /></td>
          <td><button className="delete">Delete</button></td>
        </tr>
      </tbody>
    </table>
           </div>
        </div>

        <div className="contain-hajj">
          <h2>تسجيل الحجاج</h2>
          <div className="table-hajj">
            <table className="table">
              <thead>
                <tr>
                  <th>رقم التأكيد</th>
                  <th> التأشيرة</th>
                  <th>نمط الدفع</th>
                  <th>نمط الغرفة</th>
                  <th> رقم المقعد في الطائرة</th>
                  <th>المرافق</th>
                  <th>اسم البرنامج</th>
                  <th>صورة شخصية</th>
                  <th>صورة جواز السفر </th>
                  <th>رقم الجواز</th>
                  <th>الجنسية</th>
                  <th>الجنس</th>
                  <th>التولد</th>
                  <th>البريد الالكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>اسم الاب</th>
                  <th>اسم الام</th>
                  <th>الاسم</th>
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
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>fffff</td>
                </tr>
              </tbody>
            </table>

            <table>
              <thead>
                <tr>
                  <th>رقم التأكيد</th>
                  <th> التأشيرة</th>
                  <th>نمط الدفع</th>
                  <th>نمط الغرفة</th>
                  <th> رقم المقعد في الطائرة</th>
                  <th>المرافق</th>
                  <th>اسم البرنامج</th>
                  <th>صورة شخصية</th>
                  <th>صورة جواز السفر </th>
                  <th>رقم الجواز</th>
                  <th>الجنسية</th>
                  <th>الجنس</th>
                  <th>التولد</th>
                  <th>البريد الالكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>اسم الاب</th>
                  <th>اسم الام</th>
                  <th>الاسم</th>
                  <th>تعديل</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      
                      className="verilication"
                    />
                  </td>

                  <td>
                    <input type="file"  className="visa" />
                  </td>

                  <td>
                    <input type="text"  className="type-pay" />
                  </td>

                  <td>
                    <input type="text"  />
                  </td>

                  <td>
                    <input
                      type="number"
                      
                      className="seat-number"
                    />
                  </td>

                  <td>
                    <input type="number"  className="number-bus" />
                  </td>

                  <td>
                    <input
                      type="text"
                      
                      className="name-program"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      
                      className="almutamir-photo"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      
                      className="passport-photo"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      
                      className="passport-number"
                    />
                  </td>
                  <td>
                    <input type="text"  className="nationality" />
                  </td>
                  <td>
                    <input type="text"  className="gender" />
                  </td>
                  <td>
                    <input type="data"  className="birth" />
                  </td>
                  <td>
                    <input type="email"  className="the-email" />
                  </td>
                  <td>
                    <input type="text"  className="phone" />
                  </td>
                  <td>
                    <input type="text"  className="name_mother" />
                  </td>
                  <td>
                    <input type="text"  className="name_father" />
                  </td>
                  <td>
                    <input type="text"  className="full_travel" />
                  </td>
                  <td>
                    <button  className="add">
                      <IoPersonAddOutline />
                      add
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      
                      className="verilication"
                    />
                  </td>

                  <td>
                    <input type="file"  className="visa" />
                  </td>

                  <td>
                    <input type="text"  className="type-pay" />
                  </td>

                  <td>
                    <input type="text"  />
                  </td>

                  <td>
                    <input
                      type="number"
                      
                      className="seat-number"
                    />
                  </td>
                  <td>
                    <input type="number"  className="number-bus" />
                  </td>

                  <td>
                    <input
                      type="text"
                
                      className="name-program"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      
                      className="almutamir-photo"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      
                      className="passport-photo"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      
                      className="passport-number"
                    />
                  </td>
                  <td>
                    <input type="text"  className="nationality" />
                  </td>
                  <td>
                    <input type="text"  className="gender" />
                  </td>
                  <td>
                    <input type="data"  className="birth" />
                  </td>
                  <td>
                    <input type="email"  className="the-email" />
                  </td>
                  <td>
                    <input type="text"  className="phone" />
                  </td>
                  <td>
                    <input type="text"  className="name_mother" />
                  </td>
                  <td>
                    <input type="text"  className="name_father" />
                  </td>
                  <td>
                    <input type="text"  className="full_travel" />
                  </td>
                  <td>
                    <button  className="edit">
                      <FaPencilAlt />
                      edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      
                      className="verilication"
                    />
                  </td>

                  <td>
                    <input type="file"  className="visa" />
                  </td>

                  <td>
                    <input type="text"  className="type-pay" />
                  </td>

                  <td>
                    <input type="text"  />
                  </td>

                  <td>
                    <input
                      type="number"
                      
                      className="seat-number"
                    />
                  </td>

                  <td>
                    <input type="number"  className="number-bus" />
                  </td>

                  <td>
                    <input
                      type="text"
                      
                      className="name-program"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      
                      className="almutamir-photo"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      
                      className="passport-photo"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      
                      className="passport-number"
                    />
                  </td>
                  <td>
                    <input type="text"  className="nationality" />
                  </td>
                  <td>
                    <input type="text"  className="gender" />
                  </td>
                  <td>
                    <input type="data"  className="birth" />
                  </td>
                  <td>
                    <input type="email"  className="the-email" />
                  </td>
                  <td>
                    <input type="text"  className="phone" />
                  </td>
                  <td>
                    <input type="text"  className="name_mother" />
                  </td>
                  <td>
                    <input type="text"  className="name_father" />
                  </td>
                  <td>
                    <input type="text"  className="full_travel" />
                  </td>
                  <td>
                    <button id="delete1" className="delete">
                      <FaTrashAlt />
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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

              <button
                className="btn btn-bus"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                اضافة باص
              </button>

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
              {" "}
              <input type="number" />
              <label htmlFor=""> مدة البرنامج</label>
              <input type="text" className="name" />
              <label htmlFor="" className="name">
                اسم البرنامج
              </label>
            </div>

            <div>
              {" "}
              <input type="number" className="numb" />
              <label htmlFor="">مدة الاقامة بمكة المكرمة</label>
              <input type="number" className="numb" />
              <label htmlFor="">مدة الاقامة بالمدينة المنورة</label>
            </div>

            <div>
              {" "}
              <input type="date" />
              <label htmlFor="">تاريخ السفر</label>
              <input type="text" />
              <label htmlFor="">نوع السفر</label>
            </div>

            <div className="hot">
              <h4>الفنادق</h4>
              <table>
                <thead>
                  <td>الموقع</td>
                  <td>اسم الفندق</td>
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
            <div className="room">
              <h4>السعر</h4>
              <table>
                <thead>
                  <td>نوع الغرفة</td>
                  <td>السعر</td>
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
            <div className="buss">
              <h4>الباصات الخاصة بالبرنامج</h4>
              <table>
                <thead>
                  <td>اسم الشركة</td>
                  <td>رقم الباص</td>
                </thead>
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
              {" "}
              <input type="number" />
              <label htmlFor=""> مدة البرنامج</label>
              <input type="text" className="name" />
              <label htmlFor="" className="name">
                اسم البرنامج
              </label>
            </div>

            <div>
              {" "}
              <input type="number" className="numb" />
              <label htmlFor="">مدة الاقامة بمكة المكرمة</label>
              <input type="number" className="numb" />
              <label htmlFor="">مدة الاقامة بالمدينة المنورة</label>
            </div>

            <div>
              {" "}
              <input type="date" />
              <label htmlFor="">تاريخ السفر</label>
              <input type="text" />
              <label htmlFor="">نوع السفر</label>
            </div>

            <div className="hot">
              <h4>الفنادق</h4>
              <table>
                <thead>
                  <td>الموقع</td>
                  <td>اسم الفندق</td>
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
            <div className="room">
              <h4>السعر</h4>
              <table>
                <thead>
                  <td>نوع الغرفة</td>
                  <td>السعر</td>
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
};

export default DashBoardEmployee;
