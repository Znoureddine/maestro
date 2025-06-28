import React from 'react';
import Image from "next/image";
const TestimonialComponent = () => {
    return (
        <div dir='rtl' className="font-kufam bg-[#FFF7E6] min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 text-[#3F2D20]">
            {/* Badge/Label on top */}
            <div className="relative inline-flex items-center justify-center">
                {/* Bouton / Badge */}
                <span className="bg-[#bf4623] text-white text-sm sm:text-base rounded-full px-6 py-2 font-bold">
                    سجلي الآن
                </span>

                {/* Image en position absolue au-dessus */}
                <div className="absolute -top-4 left-2 w-10 h-10">
                    <Image
                        src="/img/diamond.png"
                        alt="diamond icon"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">اكثر من 100</h2>
            <p className="mb-8 text-center max-w-lg text-sm sm:text-base font-medium">
                امراة شاركت في هذة الدورة و تغيرت حياتهم للافضل
            </p>

            {/* Testimonial boxes container */}
            <div className="flex flex-col sm:flex-row gap-8  justify-center">
                {/* Left box (French) */}
                <div className="  w-full sm:w-1/2  overflow-y-auto text-[#453d31] text-xs sm:text-sm leading-relaxed font-light">
                    <Image
                        src="/img/msg2.png"
                        alt="Portrait of a smiling woman wearing a mustard yellow sweater with long hair, standing with hands gently clasped"
                        width={350}
                        height={320}
                        className="rounded-lg  object-cover"
                    />
                </div>

                {/* Right box (Arabic) */}
                <div className=" overflow-y-auto text-[#453d31] text-xs sm:text-sm leading-relaxed font-light direction-rtl" dir="rtl">
                    <Image
                        src="/img/msg1.png"
                        alt="Portrait of a smiling woman wearing a mustard yellow sweater with long hair, standing with hands gently clasped"
                        width={350}
                        height={320}
                        className="rounded-lg  object-cover"
                    />
                </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center space-x-2 mt-10 mb-6">
                <Image
                    src="/img/stars.png"
                    alt="Portrait of a smiling woman wearing a mustard yellow sweater with long hair, standing with hands gently clasped"
                    width={280}
                    height={320}
                    className="rounded-lg  object-cover"
                />
            </div>

            <p className="mb-6 font-black text-[#bf4623] text-base sm:text-lg max-w-sm text-center px-3">
                هذا العرض محدود في الزمن، سيغلق باب
                الاشتراك بعد أيام قليلة
            </p>
            {/* Pricing */}
            <div className=" font-kufam flex justify-center mt-6 space-x-15 ">
                <button className="bg-[#d3ab76] text-white rounded-full px-6 py-2 font-semibold cursor-default">
                    9000 دج
                </button>
                <button
                    className="relative bg-[#d3ab76] text-white rounded-full px-6 py-2 font-semibold "

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



            {/* CTA button */}
            <button
                className="mt-15 bg-[#bf4623] hover:bg-[#8a2e20] transition-colors duration-300 rounded-full px-8 py-3 text-white font-bold max-w-xs w-full sm:w-auto flex items-center justify-center gap-2"
                aria-label="سجل اليوم واستعدي لعلاقة لزمرية بدلا أو تنمية"
            >
                سجلي اليوم واستعدي لعلاقة

                ُتزهرك بدل أن ُتتعبك
            </button>

            {/* Footer note */}
            <div className="flex items-center gap-2 mt-8">

                <p className="text-[#c97415] font-extrabold text-lg text-right">
                    من قلبي لقلب ِ… رشا مشتة
                </p>
                <Image
                    src="/img/hearth.png"
                    alt="heart icon"
                    width={70}
                    height={70}
                    className="rounded-lg object-cover"
                />
            </div>
        </div>
    );
};

export default TestimonialComponent;

