import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navbar
      "nav": {
        "home": "Home",
        "about": "About",
        "work": "Work",
        "cv": "CV"
      },
      
      // Hero Section
      "hero": {
        "greeting": "Hello, I'm",
        "name": "Walid Allam",
        "title": "Civil Aviation Engineer | B1 Licensed",
        "cta": "Explore My Work",
        "typeRatings": "B737 | B777 | B787 | A330 | A300-600"
      },
      
      // About Section
      "about": {
        "title": "About Me",
        "exp1": {
          "title": "20+ Years Experience",
          "desc": "In civil aircraft maintenance & engineering"
        },
        "exp2": {
          "title": "Multiple Type Ratings",
          "desc": "B737, B777, B787, A330, A300-600"
        },
        "exp3": {
          "title": "Major Projects",
          "desc": "11 New Aircraft Projects for EgyptAir"
        },
        "bio": "An enthusiastic and highly motivated Engineer with +20 years of experience in aviation maintenance and engineering. Highly knowledgeable in aviation regulations, safety standards, compliance, quality management and continuous improvement. Proven capability to define problems, collect & analyze data, and implement solutions using highly analytical skills in Aircraft Maintenance Management.",
        "typeRatingsTitle": "Aircraft Type Ratings",
        "projectsTitle": "EgyptAir New Projects",
        "licensesTitle": "Licenses & Certifications",
        "licenses": ["B1 Licensed Engineer", "Part 145", "Part M", "LWTR", "ETOPS", "EWIS", "CDCCL", "Human Factor"]
      },
      
      // Work Gallery Section
      "work": {
        "title": "My Work Gallery",
        "desc": "Aircraft maintenance & engineering projects - Licensed on B737, B777, B787, A330 & A300-600",
        "projects": {
          "1": {"title": "Boeing 787 Dreamliner", "subtitle": "Type Rating & Maintenance", "category": "Wide-Body Aircraft"},
          "2": {"title": "Boeing 777-300ER", "subtitle": "EgyptAir Fleet Project 2010", "category": "Long Haul Aircraft"},
          "3": {"title": "Airbus A330-300", "subtitle": "EgyptAir Project 2012", "category": "Wide-Body Aircraft"},
          "4": {"title": "Boeing 737-800 NG", "subtitle": "Multiple Fleet Projects", "category": "Narrow-Body Aircraft"},
          "5": {"title": "Airbus A320neo / A321neo", "subtitle": "EgyptAir New Generation Fleet", "category": "Next Generation"},
          "6": {"title": "Airbus A350-900", "subtitle": "Latest EgyptAir Project 2023/2024", "category": "Ultra-Long Haul"}
        }
      },
      
      // CV Section
      "cv": {
        "title": "Curriculum Vitae",
        "download": "Download CV",
        "preview": "CV Preview",
        "contactQuick": "Quick Contact",
        "address": "144 Region 9–Narges district–Al shorouk City–Cairo - Egypt"
      },
      
      // Contact Section
      "contact": {
        "title": "Contact Me",
        "subtitle": "Connect with me on social media",
        "whatsapp": "WhatsApp",
        "phone": "Phone",
        "facebook": "Facebook",
        "instagram": "Instagram",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "email": "Email",
        "availability": "Available 24/7 for professional inquiries"
      },
      
      // Footer
      "footer": {
        "rights": "All Rights Reserved.",
        "rightsAr": "جميع الحقوق محفوظة",
        "developed": "Developed with",
        "by": "by",
        "designer": "Islam Hamdy",
        "separator": "✦"
      }
    }
  },
  
  ar: {
    translation: {
      // Navbar
      "nav": {
        "home": "الرئيسية",
        "about": "من أنا",
        "work": "أعمالي",
        "cv": "السيرة الذاتية"
      },
      
      // Hero Section
      "hero": {
        "greeting": "مرحباً، أنا",
        "name": "وليد علام",
        "title": "مهندس طيران مدني | مرخص B1",
        "cta": "استكشف أعمالي",
        "typeRatings": "بوينغ 737 | بوينغ 777 | بوينغ 787 | إيرباص A330 | إيرباص A300-600"
      },
      
      // About Section
      "about": {
        "title": "من أنا",
        "exp1": {
          "title": "خبرة 20+ سنة",
          "desc": "في صيانة وهندسة الطائرات المدنية"
        },
        "exp2": {
          "title": "اعتمادات متعددة",
          "desc": "بوينغ 737، 777، 787، إيرباص A330، A300-600"
        },
        "exp3": {
          "title": "مشاريع كبرى",
          "desc": "11 مشروع طائرات جديدة لمصر للطيران"
        },
        "bio": "مهندس متحمس وذو خبرة عالية مع أكثر من 20 سنة من الخبرة في صيانة وهندسة الطيران. على دراية عالية بلوائح الطيران ومعايير السلامة والجودة والتحسين المستمر. قدرة مثبتة على تحديد المشكلات وجمع البيانات وتحليلها وتنفيذ الحلول باستخدام مهارات تحليلية عالية في إدارة صيانة الطائرات.",
        "typeRatingsTitle": "اعتمادات أنواع الطائرات",
        "projectsTitle": "مشاريع مصر للطيران الجديدة",
        "licensesTitle": "الرخص والشهادات",
        "licenses": ["مهندس مرخص B1", "الجزء 145", "الجزء M", "LWTR", "ETOPS", "EWIS", "CDCCL", "العامل البشري"]
      },
      
      // Work Gallery Section
      "work": {
        "title": "معرض أعمالي",
        "desc": "مشاريع صيانة وهندسة الطائرات - مرخص على بوينغ 737، 777، 787، إيرباص A330 و A300-600",
        "projects": {
          "1": {"title": "بوينغ 787 دريملاينر", "subtitle": "اعتماد الصيانة", "category": "طائرات عريضة البدن"},
          "2": {"title": "بوينغ 777-300ER", "subtitle": "مشروع أسطول مصر للطيران 2010", "category": "طائرات بعيدة المدى"},
          "3": {"title": "إيرباص A330-300", "subtitle": "مشروع مصر للطيران 2012", "category": "طائرات عريضة البدن"},
          "4": {"title": "بوينغ 737-800 NG", "subtitle": "مشاريع أسطول متعددة", "category": "طائرات ضيقة البدن"},
          "5": {"title": "إيرباص A320neo / A321neo", "subtitle": "أسطول مصر للطيران الجيل الجديد", "category": "الجيل القادم"},
          "6": {"title": "إيرباص A350-900", "subtitle": "أحدث مشاريع مصر للطيران 2023/2024", "category": "فائقة الطول"}
        }
      },
      
      // CV Section
      "cv": {
        "title": "السيرة الذاتية",
        "download": "تحميل السيرة الذاتية",
        "preview": "معاينة السيرة الذاتية",
        "contactQuick": "معلومات سريعة",
        "address": "144 منطقة 9 – حي النرجس – مدينة الشروق – القاهرة - مصر"
      },
      
      // Contact Section
      "contact": {
        "title": "تواصل معي",
        "subtitle": "تابعني على وسائل التواصل الاجتماعي",
        "whatsapp": "واتساب",
        "phone": "هاتف",
        "facebook": "فيسبوك",
        "instagram": "انستغرام",
        "linkedin": "لينكدإن",
        "github": "جيت هاب",
        "email": "البريد الإلكتروني",
        "availability": "متاح للتواصل المهني 24/7"
      },
      
      // Footer
      "footer": {
        "rights": "جميع الحقوق محفوظة.",
        "rightsAr": "جميع الحقوق محفوظة",
        "developed": "تم التطوير بـ",
        "by": "بواسطة",
        "designer": "إسلام حمدي",
        "separator": "✦"
      }
    }
  },
  
  fr: {
    translation: {
      // Navbar
      "nav": {
        "home": "Accueil",
        "about": "À propos",
        "work": "Travaux",
        "cv": "CV"
      },
      
      // Hero Section
      "hero": {
        "greeting": "Bonjour, je suis",
        "name": "Walid Allam",
        "title": "Ingénieur Aviation Civile | Licence B1",
        "cta": "Voir mes travaux",
        "typeRatings": "B737 | B777 | B787 | A330 | A300-600"
      },
      
      // About Section
      "about": {
        "title": "À propos de moi",
        "exp1": {
          "title": "20+ ans d'expérience",
          "desc": "Maintenance et ingénierie aéronautique civile"
        },
        "exp2": {
          "title": "Qualifications multiples",
          "desc": "B737, B777, B787, A330, A300-600"
        },
        "exp3": {
          "title": "Projets majeurs",
          "desc": "11 nouveaux projets d'avions pour EgyptAir"
        },
        "bio": "Ingénieur passionné et hautement motivé avec plus de 20 ans d'expérience dans la maintenance et l'ingénierie aéronautique. Très connaisseur des réglementations aéronautiques, des normes de sécurité, de la conformité, de la gestion de la qualité et de l'amélioration continue. Capacité prouvée à définir des problèmes, collecter et analyser des données, et mettre en œuvre des solutions en utilisant des compétences analytiques avancées dans la gestion de la maintenance aéronautique.",
        "typeRatingsTitle": "Qualifications des types d'avions",
        "projectsTitle": "Nouveaux projets EgyptAir",
        "licensesTitle": "Licences et certifications",
        "licenses": ["Ingénieur licencié B1", "Partie 145", "Partie M", "LWTR", "ETOPS", "EWIS", "CDCCL", "Facteur humain"]
      },
      
      // Work Gallery Section
      "work": {
        "title": "Galerie de travaux",
        "desc": "Projets de maintenance et d'ingénierie aéronautique - Licencié sur B737, B777, B787, A330 & A300-600",
        "projects": {
          "1": {"title": "Boeing 787 Dreamliner", "subtitle": "Qualification & Maintenance", "category": "Avion à fuselage large"},
          "2": {"title": "Boeing 777-300ER", "subtitle": "Projet flotte EgyptAir 2010", "category": "Avion long-courrier"},
          "3": {"title": "Airbus A330-300", "subtitle": "Projet EgyptAir 2012", "category": "Avion à fuselage large"},
          "4": {"title": "Boeing 737-800 NG", "subtitle": "Projets de flotte multiples", "category": "Avion à fuselage étroit"},
          "5": {"title": "Airbus A320neo / A321neo", "subtitle": "Nouvelle génération EgyptAir", "category": "Nouvelle génération"},
          "6": {"title": "Airbus A350-900", "subtitle": "Dernier projet EgyptAir 2023/2024", "category": "Ultra-long-courrier"}
        }
      },
      
      // CV Section
      "cv": {
        "title": "Curriculum Vitae",
        "download": "Télécharger CV",
        "preview": "Aperçu du CV",
        "contactQuick": "Contact rapide",
        "address": "144 Région 9 – District Narges – Ville Al shorouk – Le Caire - Égypte"
      },
      
      // Contact Section
      "contact": {
        "title": "Contactez-moi",
        "subtitle": "Connectez-vous avec moi sur les réseaux sociaux",
        "whatsapp": "WhatsApp",
        "phone": "Téléphone",
        "facebook": "Facebook",
        "instagram": "Instagram",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "email": "Email",
        "availability": "Disponible 24/7 pour les demandes professionnelles"
      },
      
      // Footer
      "footer": {
        "rights": "Tous droits réservés.",
        "rightsAr": "جميع الحقوق محفوظة",
        "developed": "Développé avec",
        "by": "par",
        "designer": "Islam Hamdy",
        "separator": "✦"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;