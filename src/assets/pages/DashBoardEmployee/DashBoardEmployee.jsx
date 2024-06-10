import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashBoardEmployee.css";
import min from "../../images/dashbord/img_avatar1.png";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { HiUserPlus } from "react-icons/hi2";
import { ImCogs } from "react-icons/im";
import { ImFolderOpen } from "react-icons/im";
import { ImLibrary } from "react-icons/im";
import { ImBubbles4 } from "react-icons/im";
import { ImAirplane } from "react-icons/im";
import { FaRightFromBracket } from "react-icons/fa6";

const DashBoardEmployee = () => {
  return (
    <div className="DashBoardEmployee">
      <div class="dashborde">
        <div class="min  ">
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
              <a href="">
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

        <div class="detil">
          <div class="alert " role="alert">
            <h5>
              عدد برامج الحج خلال السنوات <br /> 2022-2024
            </h5>
            <p> 15 برنامج</p>
          </div>
          <div class="alert " role="alert">
            <h5>
              عدد برامج العمرة خلال السنواتل <br />
              2022-2024
            </h5>
            <p> 15 برنامج</p>
          </div>
          <div class="alert " role="alert">
            <h5>
              عدد البرامج الخاصة خلال السنوات
              <br /> 2022-2024
            </h5>
            <p> 15 برنامج</p>
          </div>
        </div>

        <div class="contain-umrah">
          <h2>تسجيل المعتمرين</h2>
          <div class="table-umrah">
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

            <table>
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
                  <th>تعديل</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      id="verilication1"
                      class="verilication"
                    />
                  </td>

                  <td>
                    <input type="file" id="visa1" class="visa" />
                  </td>

                  <td>
                    <input type="text" id="type-pay1" class="type-pay" />
                  </td>

                  <td>
                    <input type="text" id="room1" />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="seat-number1"
                      class="seat-number"
                    />
                  </td>

                  <td>
                    <input type="number" id="number-bus1" class="number-bus" />
                  </td>

                  <td>
                    <input
                      type="text"
                      id="name-program1"
                      class="name-program"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="almutamir-photo1"
                      class="almutamir-photo"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="passport-photo1"
                      class="passport-photo"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="passport-number1"
                      class="passport-number"
                    />
                  </td>
                  <td>
                    <input type="text" id="nationality1" class="nationality" />
                  </td>
                  <td>
                    <input type="text" id="gender1" class="gender" />
                  </td>
                  <td>
                    <input type="data" id="birth1" class="birth" />
                  </td>
                  <td>
                    <input type="email" id="the-email1" class="the-email" />
                  </td>
                  <td>
                    <input type="text" id="phone1" class="phone" />
                  </td>
                  <td>
                    <input type="text" id="name_mother1" class="name_mother" />
                  </td>
                  <td>
                    <input type="text" id="name_father1" class="name_father" />
                  </td>
                  <td>
                    <input type="text" id="full_travel1" class="full_travel" />
                  </td>
                  <td>
                    <i class="fa fa-pen"></i>
                    <button id="add1" class="add">
                      add
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      id="verilication1"
                      class="verilication"
                    />
                  </td>

                  <td>
                    <input type="file" id="visa1" class="visa" />
                  </td>

                  <td>
                    <input type="text" id="type-pay1" class="type-pay" />
                  </td>

                  <td>
                    <input type="text" id="room1" />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="seat-number1"
                      class="seat-number"
                    />
                  </td>

                  <td>
                    <input type="number" id="number-bus1" class="number-bus" />
                  </td>

                  <td>
                    <input
                      type="text"
                      id="name-program1"
                      class="name-program"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="almutamir-photo1"
                      class="almutamir-photo"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="passport-photo1"
                      class="passport-photo"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="passport-number1"
                      class="passport-number"
                    />
                  </td>
                  <td>
                    <input type="text" id="nationality1" class="nationality" />
                  </td>
                  <td>
                    <input type="text" id="gender1" class="gender" />
                  </td>
                  <td>
                    <input type="data" id="birth1" class="birth" />
                  </td>
                  <td>
                    <input type="email" id="the-email1" class="the-email" />
                  </td>
                  <td>
                    <input type="text" id="phone1" class="phone" />
                  </td>
                  <td>
                    <input type="text" id="name_mother1" class="name_mother" />
                  </td>
                  <td>
                    <input type="text" id="name_father1" class="name_father" />
                  </td>
                  <td>
                    <input type="text" id="full_travel1" class="full_travel" />
                  </td>
                  <td>
                    <i class="fa fa-pen"></i>
                    <button id="edit1" class="edit">
                      edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      id="verilication1"
                      class="verilication"
                    />
                  </td>

                  <td>
                    <input type="file" id="visa1" class="visa" />
                  </td>

                  <td>
                    <input type="text" id="type-pay1" class="type-pay" />
                  </td>

                  <td>
                    <input type="text" id="room1" />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="seat-number1"
                      class="seat-number"
                    />
                  </td>

                  <td>
                    <input type="number" id="number-bus1" class="number-bus" />
                  </td>

                  <td>
                    <input
                      type="text"
                      id="name-program1"
                      class="name-program"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="almutamir-photo1"
                      class="almutamir-photo"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="passport-photo1"
                      class="passport-photo"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="passport-number1"
                      class="passport-number"
                    />
                  </td>
                  <td>
                    <input type="text" id="nationality1" class="nationality" />
                  </td>
                  <td>
                    <input type="text" id="gender1" class="gender" />
                  </td>
                  <td>
                    <input type="data" id="birth1" class="birth" />
                  </td>
                  <td>
                    <input type="email" id="the-email1" class="the-email" />
                  </td>
                  <td>
                    <input type="text" id="phone1" class="phone" />
                  </td>
                  <td>
                    <input type="text" id="name_mother1" class="name_mother" />
                  </td>
                  <td>
                    <input type="text" id="name_father1" class="name_father" />
                  </td>
                  <td>
                    <input type="text" id="full_travel1" class="full_travel" />
                  </td>
                  <td>
                    <i class="fa fa-trash"></i>
                    <button id="delete1" class="delete">
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="contain-hajj">
          <h2>تسجيل الحجاج</h2>
          <div class="table-hajj">
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

            <table>
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
                  <th>تعديل</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      id="verilication1"
                      class="verilication"
                    />
                  </td>

                  <td>
                    <input type="file" id="visa1" class="visa" />
                  </td>

                  <td>
                    <input type="text" id="type-pay1" class="type-pay" />
                  </td>

                  <td>
                    <input type="text" id="room1" />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="seat-number1"
                      class="seat-number"
                    />
                  </td>

                  <td>
                    <input type="number" id="number-bus1" class="number-bus" />
                  </td>

                  <td>
                    <input
                      type="text"
                      id="name-program1"
                      class="name-program"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="almutamir-photo1"
                      class="almutamir-photo"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="passport-photo1"
                      class="passport-photo"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="passport-number1"
                      class="passport-number"
                    />
                  </td>
                  <td>
                    <input type="text" id="nationality1" class="nationality" />
                  </td>
                  <td>
                    <input type="text" id="gender1" class="gender" />
                  </td>
                  <td>
                    <input type="data" id="birth1" class="birth" />
                  </td>
                  <td>
                    <input type="email" id="the-email1" class="the-email" />
                  </td>
                  <td>
                    <input type="text" id="phone1" class="phone" />
                  </td>
                  <td>
                    <input type="text" id="name_mother1" class="name_mother" />
                  </td>
                  <td>
                    <input type="text" id="name_father1" class="name_father" />
                  </td>
                  <td>
                    <input type="text" id="full_travel1" class="full_travel" />
                  </td>
                  <td>
                    <i class="fa fa-pen"></i>
                    <button id="add1" class="add">
                      add
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      id="verilication1"
                      class="verilication"
                    />
                  </td>

                  <td>
                    <input type="file" id="visa1" class="visa" />
                  </td>

                  <td>
                    <input type="text" id="type-pay1" class="type-pay" />
                  </td>

                  <td>
                    <input type="text" id="room1" />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="seat-number1"
                      class="seat-number"
                    />
                  </td>
                  <td>
                    <input type="number" id="number-bus1" class="number-bus" />
                  </td>

                  <td>
                    <input
                      type="text"
                      id="name-program1"
                      class="name-program"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="almutamir-photo1"
                      class="almutamir-photo"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="passport-photo1"
                      class="passport-photo"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="passport-number1"
                      class="passport-number"
                    />
                  </td>
                  <td>
                    <input type="text" id="nationality1" class="nationality" />
                  </td>
                  <td>
                    <input type="text" id="gender1" class="gender" />
                  </td>
                  <td>
                    <input type="data" id="birth1" class="birth" />
                  </td>
                  <td>
                    <input type="email" id="the-email1" class="the-email" />
                  </td>
                  <td>
                    <input type="text" id="phone1" class="phone" />
                  </td>
                  <td>
                    <input type="text" id="name_mother1" class="name_mother" />
                  </td>
                  <td>
                    <input type="text" id="name_father1" class="name_father" />
                  </td>
                  <td>
                    <input type="text" id="full_travel1" class="full_travel" />
                  </td>
                  <td>
                    <i class="fa fa-pen"></i>
                    <button id="edit1" class="edit">
                      edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      id="verilication1"
                      class="verilication"
                    />
                  </td>

                  <td>
                    <input type="file" id="visa1" class="visa" />
                  </td>

                  <td>
                    <input type="text" id="type-pay1" class="type-pay" />
                  </td>

                  <td>
                    <input type="text" id="room1" />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="seat-number1"
                      class="seat-number"
                    />
                  </td>

                  <td>
                    <input type="number" id="number-bus1" class="number-bus" />
                  </td>

                  <td>
                    <input
                      type="text"
                      id="name-program1"
                      class="name-program"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="almutamir-photo1"
                      class="almutamir-photo"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="passport-photo1"
                      class="passport-photo"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      id="passport-number1"
                      class="passport-number"
                    />
                  </td>
                  <td>
                    <input type="text" id="nationality1" class="nationality" />
                  </td>
                  <td>
                    <input type="text" id="gender1" class="gender" />
                  </td>
                  <td>
                    <input type="data" id="birth1" class="birth" />
                  </td>
                  <td>
                    <input type="email" id="the-email1" class="the-email" />
                  </td>
                  <td>
                    <input type="text" id="phone1" class="phone" />
                  </td>
                  <td>
                    <input type="text" id="name_mother1" class="name_mother" />
                  </td>
                  <td>
                    <input type="text" id="name_father1" class="name_father" />
                  </td>
                  <td>
                    <input type="text" id="full_travel1" class="full_travel" />
                  </td>
                  <td>
                    <i class="fa fa-trash"></i>
                    <button id="delete1" class="delete">
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="prog-umrah">
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

              <button class="update">تعديل</button>
              <button class="delet">حذف</button>
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

              <button class="update">تعديل</button>
              <button class="delet">حذف</button>
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

            <div class="hot">
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
            <div class="room">
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

        <div class="prog-hajj">
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

              <button class="update">تعديل</button>
              <button class="delet">حذف</button>
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

              <button class="update">تعديل</button>
              <button class="delet">حذف</button>
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

            <div class="hot">
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
            <div class="room">
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
                    <input type="file" id="hotal-photo1" class="hotal-photo" />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="min-hotal-photo1"
                      class="min-hotal-photo"
                    />
                  </td>

                  <td>
                    <input type="text" id="visit-place1" class="visit-place" />
                  </td>
                  <td>
                    <input type="text" id="servers1" class="servers" />
                  </td>
                  <td>
                    <input type="number" id="star1" class="star" />
                  </td>
                  <td>
                    <input type="text" id="detil1" class="detil" />
                  </td>
                  <td>
                    <input type="text" id="location1" class="location" />
                  </td>
                  <td>
                    <input type="text" id="name-hota1" class="name_hota" />
                  </td>
                  <td>
                    <button class="add">اضافة</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="transport-updat">
          <h2>النقل</h2>
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
                    <input type="number" id="pric1" class="pric" />
                  </td>

                  <td>
                    <input type="text" id="typ1" class="typ" />
                  </td>

                  <td>
                    <input type="url" className="link-visit" />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="transport-photo1"
                      class="transport-photo"
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      id="min-transpot-photo1"
                      class="min-transpot-photo"
                    />
                  </td>
                  <td>
                    <input type="text" id="detil-trans1" class="detil-trans" />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="servers-trans1"
                      class="servers-trans"
                    />
                  </td>
                  <td>
                    <input type="text" id="name-trans1" class="name_trans" />
                  </td>
                  <td>
                    <button class="add">اضافة</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="seting">
          <h2>الاعدادات</h2>
          <div>
            <h3>اعادة نعيين كلمة المرور</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardEmployee;
