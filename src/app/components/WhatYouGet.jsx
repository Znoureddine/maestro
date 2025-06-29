import React from "react";
import Image from "next/image";
const MaestroCourseInfo = () => {
  return (
    <section className="bg-[#fff8ec] text-[#4B3220] px-4 py-12 w-full   text-center text-brown font-kufam " dir="rtl" lang="ar">
      <h2 className="text-3xl font-extrabold mb-20 mt-10">
        مالذي ستحصلين عليه؟
      </h2>


      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center md:gap-12 max-w-6xl mx-auto">

        <div className="bg-[#EDDEC9] shadow-[-4px_4px_0_0_#D2AB76] rounded-lg p-6 flex flex-col items-center md:w-[30%] w-full text-center justify-between min-h-[200px]">
          <Image src="/icons/icon7.png" alt="icon" width={70} height={70} className="block" />
          <p className="text-[#4B3220] text-lg leading-relaxed">
            اكتشاف دورك
            الخفي بعمق
          </p>
        </div>

        <div className="bg-[#EDDEC9] shadow-[-4px_4px_0_0_#D2AB76] rounded-lg p-6 flex flex-col items-center md:w-[30%] text-center  w-full justify-between min-h-[200px]">
          <Image src="/icons/icon8.png" alt="icon" width={70} height={70} className="block" />
          <p className="text-[#4B3220] text-lg leading-relaxed">
            تمارين صوتية
            وكتابية للتحرير
          </p>
        </div>

        <div className="bg-[#EDDEC9] shadow-[-4px_4px_0_0_#D2AB76] rounded-lg p-4 flex flex-col items-center md:w-[30%] text-center  w-full justify-between min-h-[200px]">
          <Image src="/icons/icon9.png" alt="icon" width={70} height={70} className="block" />
          <p className="text-[#4B3220] text-lg leading-relaxed">
            خطة عملية لرسم
            حدودك العاطفية بدون
            تأنيب ضمير
          </p>
        </div>
        <div className="bg-[#EDDEC9] shadow-[-4px_4px_0_0_#D2AB76] rounded-lg p-7 flex flex-col items-center md:w-[30%] text-center  w-full justify-between min-h-[200px]">
          <Image src="/icons/icon10.png" alt="icon" width={70} height={70} className="block" />
          <p className="text-[#4B3220] text-lg leading-relaxed">
            دعم ووعي جديد
            خطوة بخطوة
          </p>
        </div>
        <div className="bg-[#EDDEC9] shadow-[-4px_4px_0_0_#D2AB76] rounded-lg p-5 flex flex-col items-center md:w-[30%] text-center  w-full justify-between min-h-[200px]">
          <Image src="/icons/icon11.png" alt="icon" width={70} height={70} className="block" />
          <p className="text-[#4B3220] text-lg leading-relaxed">
            أدوات يومية تحافظين
            بها على التوازن
          </p>
        </div>

      </div>

    </section>
  );
};

export default MaestroCourseInfo;

