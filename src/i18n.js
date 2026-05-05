import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      lan_english: "EN",
      lan_arabic: "AR",
      top_menu_home: "Home",
      top_menu_services: "Services",
      top_menu_location: "Location",
      top_menu_contact: "Contact",
      home_title: "Aish Refrigeration and Air Conditioning Repairing & Services",
      home_desc: "We are a reliable provider of cooling solutions, dedicated to keeping homes and businesses comfortable all year round. We specialize in the installation, repair, and maintenance of air conditioners, refrigerators, and other cooling systems, ensuring optimal performance and energy efficiency. \n\nWith a team of skilled technicians, we handle everything from routine servicing to complex repairs, using quality tools and trusted methods. Our focus is on fast response, honest pricing, and long-lasting results, so you can count on your systems when you need them most. \n\nWhether it is a small fix or a complete system setup, we are committed to delivering dependable service and customer satisfaction every time.",
      services_title: "Our Services",
      services_concealed: "Concealed AC Services",
      concealed_description: "Concealed AC services focus on the installation, maintenance, and repair of air conditioning systems that are designed to be hidden within ceilings, walls, or false ceilings, providing a clean and modern interior look without visible indoor units. These systems are ideal for homes, offices, hotels, and commercial spaces where aesthetics and space optimization are a priority.\n\nOur concealed AC solutions include expert planning, precise ductwork installation, and seamless integration to ensure even cooling throughout your space while maintaining architectural elegance. We also provide professional servicing, gas refilling, leakage checks, and troubleshooting to keep your system running efficiently year-round.\n\nWhether you are upgrading to a more stylish cooling solution or need reliable maintenance for an existing concealed system, our team ensures energy-efficient performance, quiet operation, and long-lasting comfort without compromising your interior design.",
      services_split: "Split AC Services",
      split_description: "Split AC services include professional installation, maintenance, repair, and troubleshooting of split air conditioning systems used in homes, offices, and commercial spaces. A split AC consists of an indoor unit and an outdoor compressor unit, designed to provide efficient and quiet cooling.\n\nOur services ensure proper installation for maximum cooling performance and energy efficiency, along with expert handling of piping, wiring, and mounting. We also offer routine maintenance such as filter cleaning, gas refilling, coil servicing, and performance checks to keep your AC running smoothly and extend its lifespan.\n\nIf your unit is facing issues like weak cooling, unusual noise, water leakage, or compressor faults, our skilled technicians provide fast and reliable repair solutions. We focus on restoring optimal performance while ensuring safety and durability. With professional split AC services, you can enjoy consistent cooling, lower electricity consumption, and long-term comfort in all seasons.",
      services_window: "Window AC Services",
      window_description: "Window AC services include complete installation, maintenance, repair, and servicing of window air conditioning units, which are compact cooling systems designed for single-room comfort. These units combine all components in one body and are commonly used in homes, shops, and small offices for efficient and affordable cooling.\n\nOur professional services ensure proper installation for stable performance, secure fitting, and optimal airflow. We also provide routine maintenance such as deep cleaning of filters and coils, gas refilling, electrical checks, and overall performance tuning to keep your unit running efficiently.\n\nIf your window AC is experiencing issues like poor cooling, noise, vibration, water leakage, or compressor problems, our skilled technicians offer quick and reliable repair solutions. We focus on restoring full functionality while improving energy efficiency and extending the life of your unit. With expert window AC services, you can enjoy consistent cooling, reduced electricity usage, and dependable comfort throughout the hot season.",
      location_title: "Our Location",
      location_description: "We are location in Riyadh. Our location is easily accessible and conveniently situated to serve customers efficiently. We are positioned in a well-connected area with good road access, making it simple for clients to reach us from nearby neighborhoods and surrounding regions. Whether you are visiting for services, consultations, or support, our site is designed to provide a smooth and hassle-free experience.\n\nWe aim to make your visit as convenient as possible with clear directions, nearby landmarks, and easy navigation options available through map services. Our team is always ready to welcome you and assist you upon arrival, ensuring a professional and comfortable experience from the moment you reach our location.",
      location_open_map: "Open in Google Maps",
      location_directions: "Get Directions",
      contact_title: "Contact Us",
      contact_subtitle: "Contact us to book an appointment as per your convenience",
      contact_phone: "+966569126960"
    }
  },
  ar: {
    translation: {
      lan_english: "إنجليزي",
      lan_arabic: "عربي",
      top_menu_home: "الرئيسية",
      top_menu_services: "الخدمات",
      top_menu_location: "الموقع",
      top_menu_contact: "اتصل بنا",
      home_title: "عيـش للتبريد وإصلاح وصيانة أجهزة التكييف",
      home_desc: "نحن مزود موثوق لحلول التبريد، نكرّس جهودنا للحفاظ على راحة المنازل والشركات على مدار العام. نتخصص في تركيب وصيانة وإصلاح أجهزة التكييف والثلاجات وأنظمة التبريد الأخرى، مع ضمان الأداء الأمثل وكفاءة استهلاك الطاقة.\n\nبفريق من الفنيين المهرة، نتولى كل شيء من الصيانة الدورية إلى الإصلاحات المعقدة، مستخدمين أدوات عالية الجودة وأساليب موثوقة. نركز على سرعة الاستجابة، والأسعار الشفافة، والنتائج طويلة الأمد، لتتمكن من الاعتماد على أنظمتك عندما تحتاجها أكثر.\n\nسواء كان الأمر إصلاحًا بسيطًا أو تركيب نظام كامل، فإننا ملتزمون بتقديم خدمة موثوقة وضمان رضا العملاء في كل مرة.",
      services_title: "خدماتنا",
      services_concealed: "خدمات المكيفات المخفية",
      concealed_description: "تركز خدمات التكييف المخفي على تركيب وصيانة وإصلاح أنظمة التكييف التي يتم تصميمها لتكون مخفية داخل الأسقف أو الجدران أو الأسقف المعلقة، مما يوفر مظهراً داخلياً نظيفاً وعصرياً دون وحدات داخلية ظاهرة. تُعد هذه الأنظمة مثالية للمنازل والمكاتب والفنادق والمساحات التجارية التي تُعتبر فيها الجمالية واستغلال المساحة من الأولويات.\n\nتشمل حلول التكييف المخفي لدينا تخطيطاً احترافياً، وتركيب مجاري الهواء (الدكت) بدقة عالية، ودمجاً سلساً لضمان توزيع متساوٍ للتبريد في جميع أنحاء المساحة مع الحفاظ على أناقة التصميم المعماري. كما نقدم خدمات صيانة احترافية، وإعادة تعبئة الغاز، وفحص التسريبات، واستكشاف الأعطال وإصلاحها لضمان تشغيل النظام بكفاءة على مدار العام.\n\nسواء كنت ترغب في الترقية إلى حل تبريد أكثر أناقة أو تحتاج إلى صيانة موثوقة لنظام التكييف المخفي لديك، فإن فريقنا يضمن أداءً موفراً للطاقة، وتشغيلاً هادئاً، وراحة تدوم طويلاً دون التأثير على تصميم الديكور الداخلي الخاص بك.",
      services_split: "خدمات المكيفات السبليت",
      split_description: "تشمل خدمات مكيفات السبليت التركيب الاحترافي، والصيانة، والإصلاح، واستكشاف الأعطال لأنظمة التكييف المنفصلة المستخدمة في المنازل والمكاتب والمساحات التجارية. يتكون مكيف السبليت من وحدة داخلية ووحدة خارجية (الضاغط)، وهو مصمم لتوفير تبريد فعّال وهادئ.\n\nتضمن خدماتنا التركيب الصحيح لتحقيق أقصى أداء تبريد وكفاءة في استهلاك الطاقة، مع التعامل الاحترافي مع أعمال التمديدات (الأنابيب)، والتوصيلات الكهربائية، والتركيب والتثبيت. كما نقدم خدمات الصيانة الدورية مثل تنظيف الفلاتر، وإعادة تعبئة الغاز، وصيانة الملفات (الكويلات)، وفحوصات الأداء لضمان عمل المكيف بسلاسة وإطالة عمره الافتراضي.\n\nإذا كان جهازك يعاني من مشاكل مثل ضعف التبريد، أو أصوات غير طبيعية، أو تسرب المياه، أو أعطال في الضاغط، فإن فنيينا المهرة يقدمون حلول إصلاح سريعة وموثوقة. نحن نركز على استعادة الأداء الأمثل مع ضمان السلامة والمتانة. مع خدمات مكيفات السبليت الاحترافية، يمكنك الاستمتاع بتبريد مستمر، واستهلاك أقل للكهرباء، وراحة طويلة الأمد في جميع المواسم.",
      services_window: "خدمات المكيفات الشباك",
      window_description: "تشمل خدمات مكيفات الشباك التركيب الكامل، والصيانة، والإصلاح، وخدمات التشغيل لمكيفات الهواء الشباك، وهي أنظمة تبريد مدمجة مصممة لتوفير الراحة في غرفة واحدة. تجمع هذه الوحدات جميع المكونات في جسم واحد، وتُستخدم بشكل شائع في المنازل والمحلات التجارية والمكاتب الصغيرة لتوفير تبريد فعال وبسعر مناسب.\n\nتضمن خدماتنا الاحترافية التركيب الصحيح لتحقيق أداء مستقر، وتثبيت آمن، وتدفق هواء مثالي. كما نقدم صيانة دورية تشمل التنظيف العميق للفلاتر والملفات (الكويلات)، وإعادة تعبئة الغاز، والفحص الكهربائي، وضبط الأداء العام لضمان عمل الجهاز بكفاءة عالية.\n\nإذا كان مكيف الشباك لديك يعاني من مشاكل مثل ضعف التبريد، أو الضوضاء، أو الاهتزاز، أو تسرب المياه، أو أعطال في الضاغط، فإن فنيينا المهرة يقدمون حلول إصلاح سريعة وموثوقة. نحن نركز على استعادة الأداء الكامل مع تحسين كفاءة استهلاك الطاقة وإطالة عمر الجهاز. مع خدمات مكيفات الشباك الاحترافية، يمكنك الاستمتاع بتبريد مستمر، وتقليل استهلاك الكهرباء، وراحة موثوقة طوال موسم الحر.",
      location_title: "موقعنا",
      location_description: "نحن موجودون في الرياض. موقعنا سهل الوصول ومتمركز في مكان مناسب لخدمة العملاء بكفاءة. نحن في منطقة مترابطة جيدًا مع طرق سهلة وممهدة، مما يجعل وصول العملاء إلينا من الأحياء القريبة والمناطق المحيطة أمرًا بسيطًا وسلسًا. سواء كنت تزورنا للحصول على خدمات أو استشارات أو دعم، فإن موقعنا مصمم لتوفير تجربة مريحة وخالية من المتاعب.\n\nنهدف إلى جعل زيارتك مريحة قدر الإمكان من خلال توفير اتجاهات واضحة، ومعالم قريبة معروفة، وخيارات تنقل سهلة عبر خدمات الخرائط. فريقنا دائمًا جاهز لاستقبالك ومساعدتك عند وصولك، لضمان تجربة احترافية ومريحة منذ لحظة وصولك إلى موقعنا.",
      location_open_map: "افتح في خرائط جوجل",
      location_directions: "الحصول على الاتجاهات",
      contact_title: "اتصل بنا",
      contact_subtitle: "اتصل بنا لحجز موعد حسب الوقت الذي يناسبك",
      contact_phone: "+٩٦٦٥٦٩١٢٦٩٦٠"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;