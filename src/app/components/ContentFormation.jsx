import React from "react";
import Image from "next/image";
const MaestroCourseInfo = () => {
    return (
        <section className="bg-[#fff8ec] text-[#4B3220] px-4 py-12 w-full text-center text-brown font-kufam" dir="rtl" lang="ar">
            <h2 className="text-3xl font-extrabold mb-5">
                ما هي »دورة العلاقة التي تستحقينها ؟
            </h2>
            <h3 className="text-xl font-semibold text-[#C4A477] mb-14 uppercase tracking-wider">
                MAESTRO
            </h3>
            <div className="w-full flex justify-center">
                <Image
                    src="/img/text1.png"
                    alt="Hero Background"
                    width={800} // largeur max en pixels
                    height={0} // Next gère automatiquement la hauteur avec object-contain
                    className="w-full max-w-4xl h-auto object-contain"
                />
            </div>
            <div className="w-full flex justify-center mt-15">
                <Image
                    src="/img/text2.png"
                    alt="Hero Background"
                    width={800} // largeur max en pixels
                    height={0} // Next gère automatiquement la hauteur avec object-contain
                    className="w-full max-w-4xl h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default MaestroCourseInfo;

