import React from "react";

export default function SpecialOffer() {
  return (
    <section dir="rtl" className="bg-[#5C3A21] p-6 text-[#FAE2B3] flex flex-col w-full items-center gap-10 font-kufam ">
      <button 
        className="flex items-center gap-2 bg-[#B24B42] rounded-full py-2 px-6 text-white font-semibold text-md hover:bg-[#a34137] transition"
        aria-label="سجل الآن من هنا بسعر خاص جدا"
      >
        
        سجل الآن من هنا بسعر خاص جدا
        <span className="text-xl">&lt;</span> 
      </button>

      <p className="text-center text-lg leading-relaxed font-semibold font-GESS">
        احصلي على تحليل طاقي شخصي لحالتك مجاناً عند تسجيلك الآن <br /> فقط مُذا الأسبوع !
      </p>

      <div className="flex gap-6">
        <div className="rounded-full bg-[#FAE2B3] text-[#5C3A21] font-bold text-lg px-8 py-2 flex justify-center items-center min-w-[100px] relative ">
          15000 دج
          <span className="absolute inset-0 flex justify-center items-center">
            <svg 
              className="w-10 h-10 text-[#B24B42]" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
              >
              <line x1="3" y1="21" x2="21" y2="3" />
              <line x1="21" y1="21" x2="5" y2="3" />
            </svg>
          </span>
        </div>
        <div className="rounded-full bg-[#FAE2B3] text-[#5C3A21] font-bold text-lg px-8 py-2 flex justify-center items-center min-w-[100px]">
          9000 دج
        </div>
        
      </div>
    </section>
  );
}

