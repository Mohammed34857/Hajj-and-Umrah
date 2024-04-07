import React, { useEffect , useState} from 'react'
import './RegisterProgramSpecial.css'
import { FaPencilAlt, FaBook, FaHotel  } from "react-icons/fa";
import { MdEmojiTransportation } from "react-icons/md";

const RegisterProgramSpecial = () => {


    useEffect(() => {
        const handleFileChange = (inputId, outputPathId) => {
            return () => {
                document.getElementById(outputPathId).textContent = '';
                const filePath = document.getElementById(inputId).files[0].name;
                document.getElementById(outputPathId).textContent = filePath;
            };
        };
    
        const fileInputs = [
            { inputId: 'file-img', outputPathId: 'file-path' },
            { inputId: 'passport', outputPathId: 'passport-path' }
        ];
    
        fileInputs.forEach(({ inputId, outputPathId }) => {
            const handleChange = handleFileChange(inputId, outputPathId);
            document.getElementById(inputId).addEventListener('change', handleChange);
            return () => {
                document.getElementById(inputId).removeEventListener('change', handleChange);
            };
        });
    }, []);
    

   
    const [selectedTransfer, setSelectedTransfer] = useState(null);
    const handleTransferChange = (transferType) => {
        setSelectedTransfer(transferType);
    };

    const [selectedPosition, setSelectedPosition] = useState(null);
    const handlePositionChange = (positionHotel) => {
        setSelectedPosition(positionHotel);
    };

    
  return (
    <div className='register-program-special'>
        <form action="post">
          <div className="container">
           <h1> انضم إلى قافلة عباد الرحمن عن طريق انشاء برنامجك الخاص </h1>
            <div className="special-register">
               <h3> :التسجيل <FaPencilAlt/></h3>
              <table className='table1'>
                <tbody>
                <tr>
                    <th><input type="text" name='name' required placeholder=" أدخل الأسم "/></th>
                    <th><label> : الاسم</label></th>
                </tr>
                <tr>
                    <th><input type="email" name='email' placeholder=" ادخل البريد الالكتروني "/></th>
                    <th><label> : البريد الالكتروني</label></th>
                </tr>
                <tr>
                    <th><input type="number" name='phone' placeholder=" ادخل رقم الهاتف "/></th>
                    <th><label> : رقم الهاتف</label></th>
                </tr>  
                </tbody>  
              </table>
              <div className='end-float'></div>
          </div>

          <div className="paperwork">
            <h3> :الاوراق المطلوبة <FaBook/></h3>
            <div className="child-paper">
             <table className='table2'>
               <tbody>
                <tr>
                    <th>
                         <div className='path' id='file-path'> لم يتم اختيار ملف </div>
                         <label className='label-file' htmlFor="file-img"><span>اختر ملف</span></label>
                         <input id='file-img' name='image' type="file" />
                    </th>
                    <th><label> : الصورة الشخصية</label></th>
                </tr>
                <tr>
                    <th>
                        <div className='path' id='passport-path'> لم يتم اختيار ملف  </div>
                        <label className='label-file' htmlFor="passport">اختر ملف</label>
                        <input id='passport' name='passport' type="file" />
                    </th>
                    <th><label> : ادخل صورة جواز السفر</label></th>
                </tr> 
               </tbody> 
            </table>
              </div>
              <div className='end-float'></div>
            </div>

            <div className="duration">
               <h3> : اختيار المدة <FaPencilAlt/></h3>
              <table className='table1'>
                <tbody>
                <tr>
                    <th><input type="number" name='dayNumber' required placeholder=" أدخل عدد الايام "/></th>
                    <th><label> : عدد الايام</label></th>
                </tr>
                <tr>
                    <th><input type="number" name='makkaNumber' placeholder="ادخل عدد ايام الأقامة في مكة "/></th>
                    <th><label> :  عدد ايام الأقامة في مكة</label></th>
                </tr>
                <tr>
                    <th><input type="number" name='madenaNumber' placeholder=" ادخل عدد ايام الأقامة في المدينة "/></th>
                    <th><label> :  عدد ايام الأقامة في المدينة </label></th>
                </tr>   
                </tbody> 
              </table>
              <div className='end-float'></div>
          </div>

          <div className="transfer">
            <h3> : اختيار النقل <MdEmojiTransportation/></h3>
            <div className="child-transfer">
                
                {selectedTransfer === 'land' && (
                    <div className='wild-transfer'>
                        <input className='input-date' type="date" name='Transfer' placeholder="ادخل تاريخ السفر "/>
                        <label> :  تاريخ السفر</label>
                    </div>
                )}
                <label  className="radio-container" onClick={() => handleTransferChange('land')}>
                    <input type="radio" name="transfer" value={"land"} readOnly />
                    <span class="checkmark"></span>
                    بري
                </label>
                
                {selectedTransfer === 'air' && (
                    <div className='aerial-transfer'>
                        <input className='input-date' type="date" name='Transfer' placeholder="ادخل تاريخ السفر "/>
                        <label> :  تاريخ السفر</label>
                    </div>
                )}
                <label className="radio-container" onClick={() => handleTransferChange('air')}>
                    <input type="radio" name="transfer" value={"air"} readOnly />
                    <span class="checkmark"></span>
                    جوي
                </label>
            </div>
        </div>
    
        <div className="select-hotel">
            <h3><FaHotel  />   اختر الفندق : </h3>
            <h2> موقع الفندق : </h2> 
            <div className="radio-hotel">
                <label className="radio-container" onClick={()=> handlePositionChange("inMakaa")}>
                <input type="radio" name='positionHotel' value={"inMakaa"}  />
                <span class="checkmark"></span>
                  في مكة 
                </label>
                {selectedPosition === "inMakaa" && (
                    <div className='makaa-hotel'>
                        <select name="makaa-hotel">
                            <option value="anwar alasel">انوار الاصيل</option>
                            <option value=" loloa alrean">لؤلؤة الريان </option>
                            <option value="violet ">فيوليت </option>
                            <option value="emare grand ">ايمار جراند </option>
                        </select>
                    </div>
                )}
                <label className="radio-container" onClick={()=> handlePositionChange("inMadena")}>
                <input type="radio" name='positionHotel' value={"inMadena"} />
                <span class="checkmark"></span>
                 في المدينة 
                </label>
                {selectedPosition === "inMadena" && (
                    <div className='madena-hotel'>
                        <select name="madena-hotel">
                            <option value="nusuk alhegra "> نسك الهجرة</option>
                            <option value="  awrgoan rose"> اورجوان روز  </option>
                            <option value="rose almase ">روز الماسي </option>
                        </select>
                    </div>
                )}
            </div>
            <h2> عدد الغرف :</h2> <br />
            <div className="radio-room">
                    <label className="radio-container"><input type="radio" name="roomNumber" value={1} />
                    <span class="checkmark"></span>
                    غرفة ثنائية
                    </label>
                    <label className="radio-container"><input type="radio" name="roomNumber" value={2} />
                    <span class="checkmark"></span>
                     غرفة ثلاثية 
                    </label>
                    <label className="radio-container"><input type="radio" name="roomNumber" value={3} />
                    <span class="checkmark"></span>
                     غرفة رباعية 
                    </label>
            </div>
        </div>

        <div className='order-send'>
            <button >ارسال الطلب</button>
        </div>
       </div>
     </form>
    </div>
  )
}

export default RegisterProgramSpecial