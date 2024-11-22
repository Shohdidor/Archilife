// api 
let api = "http://localhost:3000/data"

import React, { useEffect, useState } from 'react'
import ArNumber from '../../Component/ArNumber/ArNumber'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useRef } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';


function Menu() {

  const swiperRef = useRef(null);

  const [data, setData] = useState(null)

  const navigate = useNavigate()

  async function getData() {
    try {

      let data = await axios.get(api)
      console.log(data.data);

      setData(data.data)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <h1 className='text-[30px] text-center cursor-default font-medium pt-[100px] '>
        ARCHILIFE بالأرقام
      </h1>

      <div className='sm:grid sm:grid-cols-3 sm:px-[150px] sm:pt-[50px]'>
        <ArNumber number={"٢"} info={"إنتاج الورش"} text={"إنتاج خاص في ألماتي وشيمنكت"} />
        <ArNumber number={"٧"} info={"سَنَوات"} text={"نحوّل المساحات العامة"} />
        <ArNumber number={"٥٠+"} info={"مُحْتَرِفُون"} text={"يعملون على تحسين المساحات العامة"} />
        <ArNumber number={"٣٠٠+"} info={"مَشَارِيع مُنفَّذَة"} text={"في المواقع الهامة عبر كازاخستان"} />
        <ArNumber number={"٥٠%"} info={"العملاء"} text={"يأتون عن طريق التوصيات"} />
        <ArNumber number={"٣٥٠٠"} info={"بِلاط"} text={"تم إنتاجه في ٦ أشهر من هذا العام"} />
      </div>

      <h1 className='pt-[150px] font-medium text-[30px] text-center pb-[50px]'>
        المشاريع المنفذة
      </h1>

      <div className='sm:grid sm:grid-cols-4 sm:items-center sm:px-[160px]'>

        {data?.map((e) => {
          console.log(e);

          return (
            <>
              {
                e.product1.map((elem) => {
                  console.log(elem);
                  return <>
                    <div className='px-[20px] text-right pb-[75px] sm:h-[50vh]'>

                      <img onClick={() => navigate(`/Profile/${elem.id}`)} src={elem.img} alt="product Image" className='mb-[15px] sm:w-full sm:cursor-pointer sm:h-[25vh]' />
                      <h1 className='mb-[15px] font-medium cursor-default'>
                        {elem.ProductName.slice(0, 25) + "..."}
                      </h1>
                      <p className='text-gray-400 font-mono cursor-default'>
                        {elem.data}
                      </p>
                    </div>
                  </>
                })
              }
            </>
          )
        })}

      </div>


      <div className='pb-[100px]'>
        <button className='bg-[#496D9D] m-auto flex justify-center rounded-[50px] text-white px-[50px] text-[19px] py-[10px]'>
          عرض جميع المشاريع
        </button>
      </div>


      <div className='bg-[#F0F0F0] sm:pb-[50px]'>

        <h1 className='text-[35px] py-[65px] font-medium text-center'>
          منتجاتنا
        </h1>
        <div className='sm:grid sm:grid-cols-3 sm:gap-[20px] sm:pl-[100px]'>

          {data?.map((e) => {

            return (

              <>
                {
                  e.product2.map((elem) => {

                    return <>

                      <div className='px-[20px] text-right pb-[75px] sm:h-full'>

                        <img onClick={() => navigate(`/Catalog/${elem.Category}`)} src={elem.img} className='sm:w-[80%]' alt="Product Image" />

                        <div className='bg-white px-[25px] sm:w-[80%]'>
                          <h1 className='text-[17px] font-medium py-[10px]'>
                            {elem.ProductName}
                          </h1>
                          <p>
                            {elem.AboutProduct}
                          </p>
                          <div className='py-[10px]' onClick={() => navigate(`/Catalog/${elem.id}`)}>
                            <button className='text-[#C4956A] font-medium'>
                              المزيد →
                            </button>
                            <button onClick={() => navigate(`/Catalog/${elem.id}`)} className='hover:text-[#C4956A] text-white pl-[10px] font-medium'>
                              اطلب الآن →
                            </button>
                          </div>
                        </div>
                      </div>


                    </>
                  })
                }
              </>
            )
          })}

        </div>

      </div>


      <div className='bg-[#F0F0F0] text-center text-[30px] font-sans'>
        <h1 className='text-[20px]'>مجموعات وحدات من سلاح الجو الإسرائيلي</h1>
        <div className='flex gap-10 pt-[100px] flex-col sm:flex-row sm:justify-center'>
          <div className='w-[80%] bg-white sm:w-[24.5%] ml-[30px]'>
            <img src="src/images/one.png" alt="" />
            <div className='text-right flex flex-col gap-5 text-[22px] px-[20px] py-[25px]'>
              <h2 className='font-bold'>مجموعات وحدات من سلاح الجو الإسرائيلي</h2>
              <p className='text-gray-500'>أشكال معمارية صغيرة مصنوعة من حجر رخامي مركب "أرهيتاس"</p>
              <div className='flex gap-5 py-[20px] pl-[110px] sm:pl-[170px]'>
                <p className='text-[#C4956A] font-bold'>أكثر تفصيلا</p>
                <p className='text-[#fff] hover:text-[#C4956A] font-bold transition-[1s]'>لأجل</p>
              </div>
            </div>
          </div>

          <div className='w-[80%] bg-white sm:w-[24.5%] ml-[30px]'>
            <img src="src/images/two.png" alt="" />
            <div className='text-right flex flex-col gap-5 text-[22px] px-[20px] py-[25px]'>
              <h2 className='font-bold'>مجموعات وحدات من سلاح الجو الإسرائيلي</h2>
              <p className='text-gray-500'>أشكال معمارية صغيرة مصنوعة من حجر رخامي مركب "أرهيتاس"</p>
              <div className='flex gap-5 pl-[110px] sm:pl-[170px] py-[20px]'>
                <p className='text-[#C4956A] font-bold'>أكثر تفصيلا</p>
                <p className='text-[#fff] hover:text-[#C4956A] font-bold transition-[1s]'>لأجل</p>
              </div>
            </div>
          </div>

          <div className='w-[80%] bg-white sm:w-[24.5%] ml-[30px]'>
            <img src="src/images/three.png" alt="" />
            <div className='text-right flex flex-col gap-5 text-[22px] px-[20px] py-[25px]'>
              <h2 className='font-bold'>مجموعات وحدات من سلاح الجو الإسرائيلي</h2>
              <p className='text-gray-500'>أشكال معمارية صغيرة مصنوعة من حجر رخامي مركب "أرهيتاس"</p>
              <div className='flex gap-5 pl-[110px] sm:pl-[170px] py-[20px]'>
                <p className='text-[#C4956A] font-bold'>أكثر تفصيلا</p>
                <p className='text-[#fff] hover:text-[#C4956A] font-bold transition-[1s]'>لأجل</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='secti on__one bg-[#F0F0F0] py-[100px] text-center flex-col sm:flex-row gap-20 sm:text-start sm:flex sm:pl-[80px]'>
        <div className='flex flex-col gap-3 sm:justify-center sm:pl-[80px]'>
          <h1 className='text-[25px] sm:text-right sm:text-[35px] font-bold'>بنقرة واحدة:</h1>
          <h3 className='text-[20px] sm:text-right sm:text-[30px]'>قم بتنزيل كتالوج الأشكال المعمارية الصغيرة</h3>
          <p className='text-gray-400 sm:text-right text-[20px]'>تم التحديث: 11 نوفمبر 2023</p>
          <div className='sm:flex sm:justify-end'>
            <button className='bg-[#C4956A] text-[#fff] px-[30px] text-[20px] py-[8px] rounded-[40px]'>احصل على الكتالوج</button>
          </div>
        </div>
        <div className='px-[30px] py-[50px] sm:p-[0px]'>
          <img src="src/images/image.png" alt="" />
        </div>
      </div>


      <div className='bg-[#FCFCFC] flex flex-col sm:gap-[60px]'>
        <h1 className='text-[20px] text-center font-bold pt-[80px]'>المشاكل الشائعة في السوق
          ومزايا شركة أرهيتاس</h1>
        <div className='px-[10px] sm:flex sm:justify-center pb-[80px]'>
          <img src="src/images/Screenshot 2024-11-18 152224.png" alt="" />
          <img src="src/images/Screenshot 2024-11-18 152207.png" alt="" />
        </div>
      </div>


      {/* Swiper */}



      <div>
        <h1 className='font-bold text-[44px] text-center pt-[80px]'>مع من نعمل</h1>
        <div className='sm:flex-row justify-center pt-[80px] sm:flex pb-[100px] gap-5 flex flex-col'>
          <div className='Card__one p-[27px] border-[1px] border-gray-200 rounded-lg shadow-slate-400 shadow-lg w-[260px] sm:w-[20%] flex flex-col gap-3 m-auto'>
            <div className='ml-auto'>
              <img src="src/images/card(1).svg" alt="" />
            </div>
            <h1 className='font-bold text-right text-[25px] mt-[15px]'>الحكومة
              الوكالات</h1>
            <h3 className='text-right text-[20px]'>زيادة جاذبيتك
              الفضاء العام
              بعد تلقي الحديثة و
              حلول أنيقة</h3>
            <p className='text-[#C4956A] text-right text-[20px] mt-[15px]'>احصل على الكتالوج</p>
          </div>
          <div className='Card__one p-[27px] border-[1px] border-gray-200 rounded-lg shadow-slate-400 shadow-lg w-[260px] sm:w-[20%] flex flex-col gap-3 m-auto'>
            <div className='ml-auto'>
              <img src="src/images/card(2).svg" alt="" />
            </div>
            <h1  className='font-bold text-right text-[25px] mt-[15px]'>الحكومة
              الوكالات</h1>
            <h3 className='text-right text-[20px]' >زيادة جاذبيتك
              الفضاء العام
              بعد تلقي الحديثة و
              حلول أنيقة</h3>
            <p className='text-[#C4956A] text-right text-[20px] mt-[15px]'>احصل على الكتالوج</p>
          </div>
          <div className='Card__one p-[27px] border-[1px] border-gray-200 rounded-lg shadow-slate-400 shadow-lg w-[260px] sm:w-[20%] flex flex-col gap-3 m-auto'>
            <div className='ml-auto'>
              <img src="src/images/card(3).svg" alt="" />
            </div>
            <h1  className='font-bold text-right text-[25px] mt-[15px]'>الحكومة
              الوكالات</h1>
            <h3 className='text-right text-[20px]' >زيادة جاذبيتك
              الفضاء العام
              بعد تلقي الحديثة و
              حلول أنيقة</h3>
            <p className='text-[#C4956A] text-right text-[20px] mt-[15px]'>احصل على الكتالوج</p>
          </div>
          <div className='Card__one p-[27px] border-[1px] border-gray-200 rounded-lg shadow-slate-400 shadow-lg w-[260px] sm:w-[20%] flex flex-col gap-3 m-auto'>
            <div className='ml-auto'>
              <img src="src/images/card(4).svg" alt="" />
            </div>
            <h1  className='font-bold text-right text-[25px] mt-[15px]'>الحكومة
              الوكالات</h1>
            <h3 className='text-right text-[20px]' >زيادة جاذبيتك
              الفضاء العام
              بعد تلقي الحديثة و
              حلول أنيقة</h3>
            <p className='text-[#C4956A] text-right text-[20px] mt-[15px]'>احصل على الكتالوج</p>
          </div>
        </div>
      </div>

      <div className='sm:flex'>
        <div className='text-center flex flex-col gap-2 sm:text-start sm:justify-center sm:ml-[200px]'>
          <h1 className='text-[40px] sm:text-right'>قائمة الأسعار :</h1>
          <h3 className='text-[30px] sm:text-right'>قم بتنزيل قائمة الأسعار
            لجميع منتجاتنا</h3>
          <p className='text-[20px] sm:text-[25px] sm:text-right sm:my-[10px] sm:text-gray-400'>الأسعار الحالية</p>
          <div className='sm:flex sm:justify-end'>
            <button className='text-[#fff] bg-[#27456E] px-[38px] py-[15px] rounded-3xl text-[10px] border-[1px] border-[#27456E] sm:text-[14px] hover:bg-[#fff] hover:text-[#27456E] hover:border-[1px] hover:border-[#27456E] transition-[1s] '>احصل على قائمة الأسعار الآن</button>
          </div>

        </div>
        <div className='py-[80px]'>
          <img src="src/images/96_1.png.png" alt="" />
        </div>
      </div>
      <div className="text-center bg-[#d9d9d9] py-[80px]">
  <h1 className="text-[50px]">التعليقات</h1>
  <h3 className="text-[30px] mb-[100px]">شكرا لك رسائل من عملائنا</h3>

  <Swiper
  spaceBetween={30} // Reduced spacing for smaller visuals
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  }}
  className="pt-[50px] w-[50%] bg-[#ffff]"
>
  <SwiperSlide className="flex flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px]" src="src/images/dok(1).png" alt="" />
    <h3 className="text-[20px] sm:text-[15px] text-right sm:w-[200px]">
      غب على بك مدينة مستوصف رقم 2
    </h3>
  </SwiperSlide>
  <SwiperSlide className="flex flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px]" src="src/images/dok(2).png" alt="" />
    <h3 className="text-[20px] sm:text-[15px] text-right sm:w-[220px]">
      جامعة الملك سعود مكتب أكيمات منطقة نوريزباي
    </h3>
  </SwiperSlide>
  <SwiperSlide className="flex flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px]" src="src/images/dok(3).png" alt="" />
    <h3 className="text-[20px] sm:text-[15px] text-right sm:w-[200px]">
      سيتي سبيتسستروي إل إل بي
    </h3>
  </SwiperSlide>
  <SwiperSlide className="flex flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px]" src="src/images/dok(4).png" alt="" />
    <h3 className="text-[20px] sm:text-[15px] sm:w-[160px]">
      اتحاد المهندسين المعماريين في جمهورية كازاخستان
    </h3>
  </SwiperSlide>
  <SwiperSlide className="flex flex-col gap-2 items-center">
    <img className="w-[80px] sm:w-[100px]" src="src/images/dok(5).png" alt="" />
    <h3 className="text-[20px] sm:text-[15px] sm:w-[160px]">
      ألماتي موتورز إل إل بي قسط
    </h3>
  </SwiperSlide>
</Swiper>
</div>



    <div className="text-center py-[70px]">
      <h1 className="text-[40px]">يثقون بنا</h1>
      <h3 className="text-[30px] text-[#D6A578] mb-[50px]">الشركات التي تتعاون معنا</h3>

      <Swiper
        modules={[Navigation]} // Include the Navigation module
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} // Use classes for navigation
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
        className="pt-[50px] px-[80px]"
      >
        <SwiperSlide>
          <img src="src/images/23.png.png" alt="Company 1" className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/24.png.png" alt="Company 2" className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/27.png.png" alt="Company 3" className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/20.png.png" alt="Company 4" className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/25.png.png" alt="Company 5" className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/images/26.png.png" alt="Company 6" className="mx-auto" />
        </SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}
      <div className="hidden justify-center sm:flex gap-[15px]">
        <div className="swiper-button-prev text-[60px] text-[#D6A578] hover:text-[#b0894e] cursor-pointer">
          ◀
        </div>
        <div className="swiper-button-next text-[60px] text-[#D6A578] hover:text-[#b0894e] cursor-pointer">
          ▶
        </div>
      </div>
    </div>
 


      <div className='flex flex-col gap-4'>
        <div className='sm:text-center sm:justify-center sm:flex sm:flex-col sm:pl-[370px]'>
          <h1 className='text-[32px]'>هل أنت مصمم أو مهندس معماري?</h1>
          <p className='text-[22px]'>استخدام مافس لدينا في المشاريع الخاصة بك-تحميل النماذج</p>
        </div>
        <div className='flex gap-4 justify-center sm:pb-[40px]'>
          <button className='bg-[#27456E] px-[60px] py-[13px] text-[20px] text-[#fff] sm:px-[150px]'>تحميل النماذج</button>
          <button className='bg-[#C4956A] px-[60px] py-[13px] text-[20px] text-[#fff] sm:px-[150px]'>طلب كتالوج</button>
        </div>
      </div>


      <div className='bg-[url("src/images/back.png")] h-[60vh] w-[100%] mt-[180px] sm:mt-[1px]'>
        <div className='bg-[#fefefedf] h-[60vh] w-[100%]'>
          <div className='text-center sm:flex sm:justify-center gap-[120px]'>
            <div className='w-[220px] m-auto pt-[50px] sm:pt-[80px] sm:m-0 sm:w-[400px]'>
              <img src="src/images/an.png" alt="" />
            </div>
            <div className='flex flex-col gap-5 sm:text-right sm:w-[500px] sm:pt-[80px]'>
              <h1 className='text-[25px] font-bold'>نبذة عن الشركة</h1>
              <h3 className='text-[20px] text-gray-600'>خبير أرشيفورما هو مصنع كازاخستاني للهندسة المعمارية الحديثة
                حلول تحت العلامة التجارية أرهيتاس.</h3>
              <p className='text-[15px] text-gray-800 font-medium'>نحن نغير النهج المتبع في ترتيب الأماكن الحضرية والعامة. نحن نخلق
                بيئة حضرية ودية وأنيقة ومريحة وآمنة. كما
                تصميم وإنتاج الشركة ، ونحن خفض تكلفة
                تنسيق الحدائق من خلال نهج متكامل من الفكرة إلى التثبيت.</p>
              <p className='text-[15px] text-gray-800 font-medium'>نقوم بتصميم وتصنيع الأثاث الحديث في الهواء الطلق و
                بلاط رخامي مركب:
                * مقاعد مريحة
                * أواني الزهور المعيارية
                * الجرار واقية من المخرب
                * محددات الحركة موثوقة
                * أشكال معمارية صغيرة متينة
                * التيرازو التي تواجه وألواح الرصف</p>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div className='bg bg-[url("src/images/Images(1).png")] sm:h-[80vh]'>
          <div className='sm:flex sm:justify-center sm:gap-[51px]'>
            <div>
              <img className='sm:h-[80vh]' src="src/images/Images.png" alt="" />
            </div>
            <div className='sm:flex sm:flex-col sm:justify-center sm:gap-3 flex flex-col gap-8'>
              <div>
                <h1 className='text-[25px] font-bold text-center sm:text-right'>اترك طلب</h1>
                <p className='text-center text-[20px] sm:text-[15px] sm:text-right'>احصل على استشارة عبر الإنترنت
                  مع خبرائنا الرائدين</p>
              </div>
              <div className='flex flex-col px-[50px] bg-[#d2d2d2] w-[80%] h-[25vh] m-auto rounded-2xl justify-center sm:m-0 sm:w-[400px] sm:h-[30vh] gap-5'>
                <input className='inp sm:py-[5px] bg-[#d2d2d2] border-b-2 border-[#525252] outline-none' type="text" placeholder=' اسمك' />
                <input className='inp sm:py-[5px] bg-[#d2d2d2] border-b-2 border-[#525252] outline-none' type="text" placeholder=' الهاتف' />
                <input className='inp sm:py-[5px] bg-[#d2d2d2] border-b-2 border-[#525252] outline-none' type="text" placeholder=' عنوان بريدك الإلكتروني (اختياري)' />
                <div>
                  <button className='px-[40px] py-[5px] bg-[#C4956A] border-[1px] border-[#C4956A] rounded-3xl text-[#fff] hover:bg-[#fff] hover:text-[#525252] transition-[1s]'>إرسال</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Menu