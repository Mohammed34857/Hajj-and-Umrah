import React from 'react'
import './DashBoardManager.css'
import manger from "../../images/dashbord/img_avatar3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { ImCogs } from "react-icons/im";
import { ImFolderOpen } from "react-icons/im";
import { ImLibrary } from "react-icons/im";
import { ImBubbles4 } from "react-icons/im";
import { ImAirplane } from "react-icons/im";
import { ImUsers } from "react-icons/im";
import { GrServices } from "react-icons/gr";
import imghaj from "../../images/register3.jpg";
import { FaPencil } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";

const  DashBoardManager = ()=> {
  return (
    <div className='Dash-board-manager'>
          <div class="min  ">
          <nav>
            <ul>
              <li>
              <img src={manger} />
                <h5>مدير المكتب</h5>
              </li>
              <a href="" className="navbar-brand">
                <li>   <i>
                    <AiTwotoneCheckCircle />
                  </i>
                  لوحة التحكم
               
                </li>
              </a>
              <a href="">
                <li>
               <i><ImUsers /></i>
                 الموظفين
                </li>
              </a>
              <a href="">
                <li>
                  <i><GrServices /></i>
                  شروط الحج
                </li>
              </a>
              <a href="">
                <li>      <i>
                    <ImFolderOpen />{" "}
                  </i>
                      البرامج
                
                </li>
              </a>
              <a href="">
                <li>
                <i>
                <FaUsers />
                  </i>
                  المسافرين
                </li>
              </a>
              <a href="">
                <li>
                <i>
                    <ImLibrary />
                  </i>
                  الفنادق
                </li>
              </a>
              <a href="">
                <li>
                <i>
                    <ImAirplane />
                  </i>
                  النقل
                </li>
              </a>
              <a href="">
                <li> 
                <i>
                    <ImBubbles4 />
                  </i>
                  الرسائل الواردة
                </li>
              </a>
              <a href="https://web.whatsapp.com/">
                <li>
                <i>
                    
                    <ImCogs />
                  </i>
                  اعدادات
                </li>
              </a>
            </ul>
          </nav>
    
        </div>

        
        <div class="detil">
          <div class="alert " role="alert">
            <h5>
              عدد برامج الحج خلال السنوات <br /> 2022-2024
            </h5>
            <p> 15 برنامج</p>
          </div>
          <div class="alert " role="alert">
            <h5>
              عدد برامج العمرة خلال السنوات <br />
              2022-2024
            </h5>
            <p> 15 برنامج</p>
          </div>
          <div class="alert " role="alert">
            <h5>
              عدد المسافرين من المكتب خلال السنوات
              <br /> 2022-2024
            </h5>
            <p> 15 برنامج</p>
          </div>
        </div>

        <div class="contain-employee">
          <h2>:الموظفين       <i><ImUsers /></i></h2>
          <div class="table-employee">
            <table class="table">
              <thead>
                <tr>
               <th>الكود الخاص</th>
                  <th>العنوان</th>
                  <th>التحصيل العلمي</th>
                  <th>البريد الالكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>الحالة الاجتماعية</th>
                  <th>التولد</th>
                  <th>الكنية</th>
                  <th>الاسم</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
             <td></td>
                  <td>ssssssssssssss</td>
                  <td></td>
                  <th></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
               
                </tr>
              </tbody>
            </table>
            <table class="table">
              <thead>
                <tr>
                  <th><i><FaPencil /></i></th>
               <th>الكود الخاص</th>
                  <th>العنوان</th>
                  <th>التحصيل العلمي</th>
                  <th>البريد الالكتروني</th>
                  <th>رقم الهاتف</th>
                  <th>الحالة الاجتماعية</th>
                  <th>التولد</th>
                  <th>الكنية</th>
                  <th>الاسم</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th><button class="add">اضافة</button></th>
             <td><input type="number" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
           
                  <td><input type="email" /></td>
                  <td><input type="number"  /></td>
                  <td><input type="text" /></td>
                  <td><input type="date" name="" id="" /></td>
                  <td><input type="text" /></td>
               <td><input type="text" /></td>
                </tr>
                <tr>
                  <th><button class="delet">حذف</button></th>
             <td><input type="number" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
           
                  <td><input type="email" /></td>
                  <td><input type="number"  /></td>
                  <td><input type="text" /></td>
                  <td><input type="date" name="" id="" /></td>
                  <td><input type="text" /></td>
               <td><input type="text" /></td>
                </tr>
                <tr>
                  <th><button class="edit">تعديل</button></th>
             <td><input type="number" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
           
                  <td><input type="email" /></td>
                  <td><input type="number"  /></td>
                  <td><input type="text" /></td>
                  <td><input type="date" name="" id="" /></td>
                  <td><input type="text" /></td>
               <td><input type="text" /></td>
                </tr>
              </tbody>
            </table>
        
          </div>
        </div>


        <div class="maneger-hajj">
          <h2>:تحديد شروط الحج  <i><GrServices /></i></h2>
          <div class="maneger-hajj-detil">
          <div >
            <img src={imghaj} alt="" />
          </div>
          <div class="edit-hajj">
            <label htmlFor="">:مواليد الحجاج المقبولين حسب  وزارة الحج السعودية</label>
            <input type="date" />
          </div>
        </div>
        </div>




        
        <div class=" manager-prog-umrah">
          <h2>:برامج العمرة    <i>
                    <ImFolderOpen />{" "}
                  </i></h2>
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

            
           
           <button class="btn">  عرض المسافرين في هذا البرنامج</button>
           
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
             
           <button class="btn">  عرض المسافرين في هذا البرنامج</button> </div>
          </div>

        
        </div>


        <div class="show-travel">
          <h2>:المعتمرين     <i>
          <FaUsers />
                  </i></h2>
        <table class="table">
              <thead>
                <tr>
                  <th>رقم التأكيد</th>
                  <th> التأشيرة</th>
                  <th>نمط الدفع</th>
                  <th>نمط الغرفة</th>
                  <th>رقم المقعد</th>
                  <th>رقم الباص</th>
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
            </div>
        <div class=" manager-prog-hajj">
          <h2>:برامج الحج   <i>
                    <ImFolderOpen />{" "}
                  </i></h2>
          <div className="progr-parent">
          <div className="prog1">
              <h3>برنامج الحج الاكبر</h3>

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

            
           
           <button class="btn">  عرض المسافرين في هذا البرنامج</button>
           
            </div> <div className="prog1">
              <h3> vip برنامج الحج  </h3>

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

            
           
           <button class="btn">  عرض المسافرين في هذا البرنامج</button>
           
            </div>
          </div>

        
        </div>


        <div class="show-travel">
          <h2>:الحجاج     <i>
          <FaUsers />
                  </i></h2>
        <table class="table">
              <thead>
                <tr>
                  <th>رقم التأكيد</th>
                  <th> التأشيرة</th>
                  <th>نمط الدفع</th>
                  <th>نمط الغرفة</th>
                  <th>رقم المقعد في الطائرة</th>
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
                  <td>fffff</td>
                </tr>
              </tbody>
            </table>
            </div>





<div class="show-hotal">
            <h2 > :الفنادق  <i>
                    <ImLibrary />
                  </i></h2>
          <div class="table-hotal">
            <table class="table">
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
            </div>
            </div>
            <div class=" show-transport">
         
          <h2> :النقل <i>
                    <ImAirplane />
                  </i></h2>
          <div class="table-transport">
            <table class="table">
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

          
          </div>
        </div>






        <div class="seting-manager">
          <h2>:الاعدادات  <i>
                    
                    <ImCogs />
                  </i></h2>

                  <div class="parent-seting">
          <div class="seting-detil-maneger">
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
            <div class="edit-logo">
            <h3>: تعيين لوغو المكتب</h3>
            <input type="file" />
            <button><AiFillLike /></button>
          </div>

          <div class="edit-titel">
            <h3> :تعيين اسم المكتب</h3>
            <input type="text" />
            <button><AiFillLike /></button>
          </div>
          
          <div class="edit-phon">
            <h3>: تعيين رقم الهاتف للمكتب</h3>
            <input type="number"  placeholder='ادخل رقم المكتب'/>
            <button><AiFillLike /></button>
          </div>
          <div class="edit-location">
            <h3> :تعيين موقع المكتب</h3>
            <input type="text" />

            <button><AiFillLike /></button>
          </div>
          <div class="edit-about">
            <h3> :حول المكتب</h3>
            <input type="text" />
            <button><AiFillLike /></button>
            v
          </div>
          </div>

         
        </div>






  








    </div>
  )
}

export default DashBoardManager