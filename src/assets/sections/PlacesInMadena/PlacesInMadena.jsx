import React from "react";
import "./PlacesInMadena.css";
import ohod from "../../images/almadina/ohed.jpg";
import kobaa from "../../images/almadina/kobaa.jpg";
import alkmama from "../../images/almadina/alkmama.jpg";
import alkiblaten from "../../images/almadina/alkiblaten.jpg";
import almadina from "../../images/almadina/almadina.jpg";
import bakie from "../../images/almadina/bakie.jpg";
const PlacesInMadena = () => {
  return (
    <div className="PlacesInMadena">
      <div class="fixed"></div>
      <div className="placemadena">
        <h2 class="titel">أماكن الزيارة في المدينة المنورة</h2>
        <div class="line"></div>

        <div class="parent-type-aumrah">
          <section>
            <div class="front">
              <img src={ohod} />
              <div class="tex">
                <h2>جبل أحد</h2>
              </div>
            </div>
            <div class="back">
              <h2>جبل أحد</h2>
              <div class="detiles">
                <p>
                  جبل أحد هو أحد أشهر الأماكن في المدينة المنورة بسبب حب النبي
                  له (أحد جبل يحبنا ونحبه
                  )                </p>
              </div>
            </div>
          </section>

          <section>
            <div class="front">
              <img src={kobaa} />
              <div class="tex">
                <h2>مسجد قباء</h2>
              </div>
            </div>
            <div class="back">
              <h2>مسجد قباء</h2>

              <p>
                مسجد قباء هو أقدس مكان على وجه الأرض، وقد بني في القرن السابع
                عشر. ويقال إنه أحد أقدم المساجد التي توسعت على مر السنين
                لاستيعاب الزيادة في عدد المسلمين الذين يزورونها كل عام.
                  باعتباره
                جزءًا من أحد أركان الإسلام الخمسة، يتمتع الموقع بأهمية دينية. هو
                ثاني أكبر مبنى في العالم. وهي من الأماكن السياحية المثالية في
                المدينة المنورة{" "}
              </p>
            </div>
          </section>
          <section>
            <div class="front">
              <img src={alkmama} />
              <div class="tex">
                <h2>مسجد الغمامة</h2>
              </div>
            </div>
            <div class="back">
              <h2>مسجد الغمامة</h2>

              <p>
    مسجد الغمامة (المصلى) هو  الموقع الذي صلى به النبي ﷺ صلاة
                العيد في المدينة المنورة. وكان هذا المكان آخر المواضع التي صلى
                بها الرسول صلى الله عليه وسلم صلاة العيد عام 631م، كما صلى فيه
                الرسول صلاة الغائب على النجاشي. ومازالت تقام فيه الصلاة بالرغم
                من قربه من المسجد النبوي الشريف. ويعدّ من المساجد الأثرية
                والتاريخية بالمدينة المنورة
              </p>
            </div>
          </section>
        </div>

        <div class="parent-type-aumrah">
          <section>
            <div class="front">
              <img src={alkiblaten} />
              <div class="tex">
                <h2>مسجد القبلتين</h2>
              </div>
            </div>
            <div class="back">
              <h2>مسجد القبلتين</h2>

              <p>
                مسجد القبلتين، ويسمى أيضا بمسجد بني سلمة وهو مسجد يقع في الطرف
                الغربي من المدينة المنورة ويشتهر ببياضه الناصع يقع مسجد القبلتين
                على بعد 4 كلم من المسجد النبوي، في منطقة بني سَلِمَهْ على هضاب
                حرة الوبرة في الطريق الشمالي الغربي للمدينة المنورة، وتحديداً
                على طريق خالد بن الوليد وتقاطعه مع شارع سلطانة (المركز التجاري
                في المدينة المنورة)، وهو قريب جداً من الدائري الثاني (طريق الملك
                عبد الله) من جهة الغرب
              </p>
            </div>
          </section>

          <section>
            <div class="front">
              <img src={almadina} />
              <div class="tex">
                <h2>المسجد النبوي</h2>
              </div>
            </div>
            <div class="back">
              <h2>المسجد النبوي</h2>

              <p>
                {" "}
                ٱلْمَسْجِدُ ٱلنَّبَوِيّ أو ٱلْحَرَمُ ٱلنَّبَوِيّ أو مَسْجِدُ
                ٱلنَّبِيّ أحد أكبر المساجد في العالم وثاني أقدس موقع في الإسلام
                (بعد المسجد الحرام في مكة المكرمة)، وهو المسجد الذي بناه النبي
                محمد في المدينة المنورة بعد هجرته سنة 1 هـ الموافق 622 بجانب
                بيته بعد بناء مسجد قباء. مرّ المسجد بعدّة توسعات عبر التاريخ،
                مروراً بعهد الخلفاء الراشدين والدولة الأموية فالعباسية
                والعثمانية، وأخيراً في عهد الدولة السعودية حيث تمت أكبر توسعة له
                عام 1994{" "}
              </p>
            </div>
          </section>
          <section>
            <div class="front">
              <img src={bakie} />
              <div class="tex">
                <h2>مقبرة البقيع</h2>
              </div>
            </div>
            <div class="back">
              <h2>مقبرة البقيع</h2>
              <p>
                بقيع الغرقد هي المقبرة الرئيسة لأهل المدينة المنورة منذ عهد
                الرسول محمد، ومن أقرب الأماكن التاريخية إلى مبنى المسجد النبوي
                حاليًا، ويقع في مواجهة القسم الجنوبي الشرقي من سورهِ، وقد ضمت
                إليه أراض مجاورة وبني حوله سور جديد مرتفع مكسو بالرخام. ولا تزال
                المقبرة قيد الاستخدام حتى الآن
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PlacesInMadena;
