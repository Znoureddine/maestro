import React from "react";
import Image from "next/image";
const MaestroCourseInfo = () => {
  return (
    <section className="bg-[#fff8ec] text-[#4B3220] px-4 py-12 w-full text-center text-brown font-kufam" dir="rtl" lang="ar">
      <h2 className="text-3xl font-extrabold mb-2">
        ما هي »دورة العلاقة التي تستحقينها ؟
      </h2>
      <h3 className="text-xl font-semibold text-[#C4A477] mb-6 uppercase tracking-wider">
        MAESTRO
      </h3>
      <p className="max-w-3xl mx-auto text-lg mb-8 leading-relaxed">
        دورة أونلاين متكاملة وعميقة جدا، تجمع بين الوعي الحديث،
        التشافي الطاقي، وتقنيات التحرير العملي خطوة بخطوة
      </p>
      <p className="text-2xl font-extrabold mb-12">
        مصمما خصيصا لكل امرأة
      </p>

      <div className="flex flex-col md:flex-row gap-8 md:gap-6 max-w-5xl mx-auto">

        <div className="bg-[#FFDDA9] shadow-[-4px_4px_0_0_#D2AB76] rounded-lg p-6 flex-1  flex flex-col items-center text-center space-y-15 min-h-[200px]">
          <Image src="/icons/icon4.png" alt="icon" width={55} height={55} className="block" />
          <p className="text-[#4B3220] text-lg leading-relaxed">
            تريد فهم جذور
            أوجاعها العاطفية
          </p>
        </div>

        <div className="bg-[#FFDDA9] shadow-[-4px_4px_0_0_#D2AB76] rounded-lg p-6 flex-1 flex flex-col items-center text-center space-y-12 min-h-[200px]">
          <Image src="/icons/icon5.png" alt="icon" width={110} height={100} className="block" />
          <p className="text-[#4B3220] text-lg leading-relaxed">
            تريد التحرر من الأدوار
            المؤذية التي تكررها
            من دون وعي
          </p>
        </div>

        <div className="bg-[#FFDDA9] shadow-[-4px_4px_0_0_#D2AB76] rounded-lg p-6 flex-1 flex flex-col items-center text-center space-y-12 min-h-[200px]">
          <Image src="/icons/icon6.png" alt="icon" width={75} height={75} className="block" />
          <p className="text-[#4B3220] text-lg leading-relaxed">
            تريد أدوات واضحة لبناء
            علاقة صحية مع نفسها
            وشريكها وأهلها
          </p>
        </div>

      </div>
    </section>
  );
};

export default MaestroCourseInfo;

