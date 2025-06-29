"use client";
import Image from "next/image";
import MaestroCourseInfo from "@/app/components/MaestroCourseInfo";
import SpecialOffer from "@/app/components/SpecialOffer";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import WhatYouGet from "@/app/components/WhatYouGet";
import ContentFormation from "@/app/components/ContentFormation";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import SubscriptionBenefits from "@/app/components/SubscriptionBenefits";
import PricingComponent from "./components/PricingComponent";
import RshaMchta from "./components/RashaMechta";
import TestimonialComponent from "./components/TestimonialComponent";
export default function Home() {
  return (
    <div>
      
      <div className="relative w-full h-screen bg-white overflow-hidden ">
        {/* Image */}
        <Image
          src="/img/bg-mobile.png" // Place ton image ici
          alt="Hero Background"
          fill
          className=" object-fill md:hidden"
          priority
        />
        <Image
          src="/img/pgt.png" // Place ton image ici
          alt="Hero Background"
          fill
          className=" md:object-cover hidden md:block"
          priority
        />

        {/* Overlay légèrement flou */}
        <div className="absolute inset-0 hidden md:block" />

        {/* Contenu texte */}
        
        
          {
            /*
            <div dir="rtl" className="absolute top-1/15 right-1/15 md:top-2/4 md:right-1/4 text-right z-10 max-w-4xl">
          <h1 className=" outline-white text-3xl md:text-5xl font-GESS font-bold text-red-600 leading-snug"  style={{
    textShadow: `
      -3px -3px 0 white,
      3px -3px 0 white,
      -3px 3px 0 white,
      3px 3px 0 white
    `
  }}>
           <span className="text-brown">دورة </span> <br /> العلاقة  التي تستحقينها / LE MAESTRO
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-brown-800 my-2 "style={{
    textShadow: `
      -2px -2px 0 white,
      2px -2px 0 white,
      -2px 2px 0 white,
      2px 2px 0 white
    `
  }}>
            
          </h2>
          <p className="font-kufam text-brown text-lg md:text-2xl ">
            العلاقة التي تستحقينها... تبدأ منك أنت !
          </p>

          <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition">
            ابدئي الآن
          </button>
        </div>
            
            */
          }
          
      </div>
      {
        /*
        <div className="w-full max-w-4xl mx-auto shadow-xl rounded-xl overflow-hidden">
        <iframe
          width="100%"
          height="420"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>
        */
      }
      <section dir="rtl" className="bg-[#fff8ec] text-center py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brown mb-6 font-kufam">احصلي على:</h2>

        {/* Lignes avec icônes */}
        <div className="space-y-4  text-brown font-GESS text-lg md:text-xl font-medium max-w-xl mx-auto">
          <div className="flex c justify-center gap-3">
            <Image src="/icons/icon1.png" alt="تحليل طاقي" width={32} height={32} />
            <span>تحليل طاقي شخصي لحالتك</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Image src="/icons/icon2.png" alt="تاريخ ميلادك" width={32} height={32} />
            <span>قراءة طاقية لتاريخ ميلادك</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Image src="/icons/icon3.png" alt="هدية" width={32} height={32} />
            <span>هدية عند تسجيلك الآن | فقط هذا الأسبوع!</span>
          </div>
        </div>

        {/* Compte à rebours */}
        <div dir="ltr" className="flex justify-center mt-8 w-full overflow-hidden ">
          <FlipClockCountdown to={new Date().getTime() + 24*10 * 3600 * 1000 + 5000}
          className="w-full max-w-full scale-76 sm:scale-100"
          labelStyle={{
            color: '#664430',
            
          }} 
          digitBlockStyle={{
            color: '#EDCFA7',
            backgroundColor : '#664430',
            width: '10vw', // adapte à l'écran
            fontSize: '6vw'
          }}
          />
        </div>
      </section>
      <section dir="rtl" className="bg-[#f7efe7] py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">

        
          

          {/* Texte arabe */}
          <div className="text-brown font-kufam text-[#4b2e2e] text-lg md:text-xl font-medium text-right space-y-4 leading-loose max-w-2xl">
            <p>
              يمكن تكوني هنا لأِنك سئمتي من نفس القصة:
              تتنازلي كل مرة، تسكتي عن حدودك، تكملي وجعك...
              حتى تخفظي على حب، أو زواج، أو علاقة؛
              لكن في النهاية، تبقي انتي الوحيدة
              لي تتألمي وتخسري نفسك أكثر من مرة
            </p>

            <p className="font-bold text-xl">تخيلي لو؟</p>

            <p>
              تصبحي واعية بدورك الخفي النفسية من الطفولة.
              تعرفي كيف ترسمي حدودك بقوة و هدوء.
              تحافظي على حبك لذاتك قبل  حب أي شخص.
              وتعيشي علاقة صحية تستحقينها فعلاً مليانة
              راحة، أمان ورفقة.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/img/chat-heart.png" // place ton image ici
              alt="رمز محادثة"
              width={320}
              height={320}
            />
          </div>
        </div>
      </section>
      <MaestroCourseInfo/>
      <SpecialOffer />
      <WhatYouGet />
      <ContentFormation />
      <SubscriptionBenefits />
      <PricingComponent/>
      <RshaMchta />
      <TestimonialComponent />
    </div>
  );
}
