import React from 'react';

const PricingComponent = () => {
  return (
    <div dir="rtl" className="  mx-auto bg-[#EDD7C7] p-6 font-sans text-right direction-rtl flex-col align-items-center justify-center select-none w-full">
      {/* Header row */}
      <div className="mx-auto flex justify-between bg-[#B9966F] max-w-2xl text-white font-kufam font-semibold rounded-2xl px-4 py-2">
        <span>العنصر</span>
        <span>السعر الأصلي</span>
      </div>

      {/* Price rows */}
      <div className="mx-auto border-[1px] border-[#B9966F] rounded-4xl mt-2 font-kufam max-w-2xl px-4 py-3 flex justify-between items-center text-[#7A5A33] ">
        <span>سعر الدورة</span>
        <span>10000 دج</span>
      </div>
      <div className=" mx-auto border-[1px] border-[#B9966F] rounded-4xl mt-2 max-w-2xl font-kufam px-4 py-3 flex justify-between items-center text-[#7A5A33]">
        <span>سعر التحليل الشخصي</span>
        <span>5000 دج</span>
      </div>

      {/* Package row */}
      <div className="mx-auto flex justify-between bg-[#B9966F] text-white font-semibold max-w-2xl font-kufam rounded-4xl mt-4 px-4 py-2 items-center relative">
        <span>الباقة معا</span>
        <div className="flex items-center space-x-2 justify-end">
          <span className="line-through opacity-60">15000 دج</span>
        </div>
      </div>

      {/* Special offer text */}
      <p className=" font-kufam text-red-700 font-bold mt-3 px-4 mx-auto max-w-2xl text-left">
        عرض خاص 9000 دج
      </p>

      {/* Offer note */}
      <div className=" font-kufam bg-red-700 text-white rounded-full mt-4 px-6 py-2 text-center text-sm font-semibold max-w-md mx-auto">
        هذا العرض الخاص ساري فقط للأوائل <br/> ومدة محدودة - سجلي الآن معنا
      </div>

      {/* Price options below */}
      <div className=" font-kufam flex justify-center mt-6 space-x-25 ">
        <button className="bg-[#B9966F] text-white rounded-full px-6 py-2 font-semibold cursor-default">
          9000 دج
        </button>
        <button
          className="relative bg-[#B9966F] text-white rounded-full px-6 py-2 font-semibold cursor-not-allowed opacity-60"
          disabled
        >
          15000 دج
          <span className="absolute top-1/2 right-1/10 transform -translate-x-1/2 -translate-y-1/2">
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
        </button>
      </div>
    </div>
  );
};

export default PricingComponent;

