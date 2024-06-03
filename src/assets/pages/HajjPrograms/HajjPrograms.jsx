import React from "react";
import "./HajjPrograms.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imege1 from "../../images/Hotels/anwar_alasel.jpg";
import imege2 from "../../images/Hotels/loloat_alrayyan.jpg";
import vidio from "../../images/How_to_Perform_Hajj___Islamweb___دليل_الحج___شرح_خطوات_أداء_مناسك_الحج___إسلام_و.mp4";


const HajjPrograms = () => {
  return (
    <div className="Hajj-programs">
      <div className="par">
        <div className="par1 ">
          <h1>برنامج الحج الاكبر</h1>

          <p className="my-4">
            تتشرف إدارة مجموعة اجنحة الضيافة بإشراف مديرها الحاج هشام محمد نادر
            عنبي وكادرها الديني والإداري بتقديم افضل برامج للحج عام 1445
          </p>
          <div className="detiles">
            <div className=" imeg"></div>
            <div className="parent-chiled  continer  ">
              <div className="chiled">
                <span>
                  تاشيرة الحج
                  <br /> تذكرة طيران من مطار دمشق الى مطار جدة
                </span>
              </div>

              <div className="chiled">
                <span>وجبتي فطور وعشاء يوميا لكل حاج</span>
              </div>
              <div className="chiled">
                <span>لاقامة بمكة المكرمة مدة<span> 9 ليالي </span> الاقامةبالمدينةالمنورة مدة<span>5 ليالي</span> </span>
              </div>
              <div className="chiled">
                <span>هدايا ورحلات متنوعة</span>
              </div>
              <div className="chiled">
                <span>مزارات في مكة والمدينة يتخللها دروس دينية </span>
              </div>
              <div className="chiled">
                <span>رحلة يوم تسوق في جدة بعد اداء مناسك الحج</span>
              </div>
              <div className="chiled">
                <span>
                  رحلة يوم الى الطائف خلال فترة الاقامة في مكة المكرمة{" "}
                </span>
              </div>
              <div className="chiled">
                <span> المرشد الديني الشيخ محمد شمسي</span>
              </div>
              <div className="chiled">
                <span>اداء حج تجريبي قبل السفر و دروس تشرح اداء المناسك</span>
              </div>
            </div>
          </div>
        </div>

    
        <div class="hotels">
          <h2>الفنادق الخاصة ب البرنامج</h2>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={imege1} className="d-block " />
              </div>
              <div className="carousel-item">
                <img src={imege2} className="d-block " />
              </div>
              <div className="carousel-item">
                <img src={imege1} className="d-block  " />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-target="#carouselExampleIndicators"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-target="#carouselExampleIndicators"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </button>
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
              <p> حقيبة حجم وسط</p>
            </div>
            <div className="gift3">
              <p>سجادة صلاة</p>
            </div>
            <div className="gift4">
              <p> حزام للرجال</p>
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
          <div className="booking">
            <button>احجز رحلتك الآن</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HajjPrograms;
