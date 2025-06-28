import Image from "next/image";

export default function RshaMchta() {
    return (
        <section dir="rtl" className="w-full mx-auto bg-[#FAF3EC]  shadow-md pt-12 font-kufam text-[#4B3222]">
            <h2 className="text-2xl font-bold mb-6 text-center">من هي رشا مشتة ؟</h2>
            <p className="mb-6 leading-relaxed">
                لايف كوتش جزائرية ومدربة متخصصة في التشافي بالعلاقات والوعي
                والطاقة، صاحبة أسلوب دافئ وملامس للروح
            </p>
            <p className="mb-6 leading-relaxed">
                لأكثر من  10سنوات، رافق ُ̫ مئات النساء في الجزائر وخارجها لتجاوز أوجاع
                الطفولة والعلاقات السامة والتعلق المؤذي، ومساعدتهن على استعادة
                .الأمان الداخلي والتوازن في العلاقات والمال والاهداف
            </p>
            <p className="mb-6 leading-relaxed">

                أنا وزوجي أسسنا م ًعا مركز <span className="font-semibold">«فراشة مولبستيك سنتر»</span> — مركز متخ ّصص
                في تنظيم الدورات والفعاليات الراقية التي تمزج الوعي بالطب الشمولي
                والطاقة. ن ّظم ُ̫ وأشرف ُ̫ على دورات و ورشات حضورية مع مدربين
                دوليين، وقدم ُ̫ دع ًما مباش ًرا للنساء عبر جلسات فردية ودورات صوتية
                مسجلة وحضورية، وكتيّبات علاجية لمساعدة كل امرأة أن تعيش حيا ًة
                .تستحقها

            </p>
            <div className="flex flex-row md:gap-20 items-center text-right">
                <div>
                    <p className="mb-6 leading-relaxed" dir="rtl">
                        ألفت كتابين:
                        <br /> <span>المسار نحو ذاتك الحقيقية</span>
                        و <span> سمفونية المال </span> ، وكلاهما رسائل
                        حب روحية عملية لأرواح تبحث عن
                        التصالح مع الحياة.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        أؤمن أن الحب الحقيقي يبدأ حين تعودين
                        إلى نفس ِك أو ًلا
                    </p>
                    <p className="font-bold">
                       واليوم أنا هنا لأرافق ِ Ҏخطوة
بخطوة في هذا الرجوع المبارك
                    </p>
                </div>
                <Image
                    src="/img/racha.png"
                    alt="Portrait of a smiling woman wearing a mustard yellow sweater with long hair, standing with hands gently clasped"
                    width={350}
                    height={320}
                    className="rounded-lg  object-cover w-100 sm:w-150 md:w-[350px]"
                />
            </div>
        </section>
    );
}

