import React from 'react';
import Image from "next/image";
const benefits = [
  {
    icon: "/icons/icon12.png",
    title: 'تسجيلات صوتية ُملهمة',
  },
  {
    icon: "/icons/icon13.png",
    title: 'فيديوهات توضيحية و تطبيقية',
  },
  {
    icon: "/icons/icon14.png",
    title: 'جلسات تشافي وعلاج بتقنيات متعددة',
  },
  {
    icon: "/icons/icon15.png",
    title: 'جلسات ثيتاهيلينغ قوية وعميقة',
  },
  {
    icon: "/icons/icon16.png",
    title: 'تمارين عملية قابلة للتطبيق من اليوم الأول',
  },
  {
    icon: "/icons/icon17.png",
    title: 'كت ّيب مخصص لمساعد على تدوين رحلت ِك وتحويلها لواقع حي',
  },
  {
    icon: "/icons/icon18.png",
    title: 'وصول كامل للدورة بجميع محتوياتها',
  },
  {
    icon: "/icons/icon19.png",
    title: 'تحليل شخصي مكتوب لحالتك يوصلك في ملف PDF'
  },
  {
    icon: "/icons/icon20.png",
    title: 'خطوات عمليةِ مو ّجهة خصيصا لك',
  },
   {
    icon: "/icons/icon21.png",
    title: 'رسالة طاقية مستلهمة من تاريخ ميلادك',
  },
];

export default function SubscriptionBenefits() {
  return (
    <section className="bg-[#4D2B0A] text-[#E7D5AE] px-6 py-12 w-full mx-auto rounded-lg font-kufam" dir="rtl" lang="ar">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-10">
        على ماذا ستحصلين عند الاشتراك؟
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
  {benefits.map((benefit, index) => (
    <article
      key={index}
      className="w-full sm:w-[45%] md:w-[30%] min-h-[160px] h-full flex flex-col justify-between items-center text-center p-4 bg-[#4D2B0A] rounded-lg"
    >
      <Image src={benefit.icon} alt="icon" width={70} height={70} className="block" />
      <p className="text-sm md:text-base font-semibold text-[#E7D5AE]">{benefit.title}</p>
    </article>
  ))}
</div>
    </section>
  );
}

