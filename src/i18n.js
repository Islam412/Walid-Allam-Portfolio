import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "work": "Work",
        "cv": "CV"
      },
      "hero": {
        "greeting": "Hello, I'm",
        "name": "Walid Allam",
        "title": "Civil Aviation Engineer | B1 Licensed",
        "cta": "Explore My Work"
      },
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
        "bio": "An enthusiastic and highly motivated Engineer with +20 years of experience in aviation maintenance and engineering. Highly knowledgeable in aviation regulations, safety standards, compliance, quality management and continuous improvement. Proven capability to define problems, collect & analyze data, and implement solutions using highly analytical skills in Aircraft Maintenance Management."
      },
      "work": {
        "title": "My Work Gallery",
        "desc": "Aircraft maintenance & engineering projects"
      },
      "cv": {
        "title": "Curriculum Vitae",
        "download": "Download CV"
      },
      "contact": {
        "title": "Contact Me",
        "whatsapp": "WhatsApp",
        "facebook": "Facebook",
        "instagram": "Instagram",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "email": "Email"
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "home": "الرئيسية",
        "about": "عني",
        "work": "أعمالي",
        "cv": "السيرة الذاتية"
      },
      "hero": {
        "greeting": "مرحباً، أنا",
        "name": "وليد علام",
        "title": "مهندس طيران مدني | B1 مرخص",
        "cta": "استكشف أعمالي"
      },
      "about": {
        "title": "من أنا",
        "exp1": {
          "title": "خبرة 20+ سنة",
          "desc": "في صيانة وهندسة الطائرات المدنية"
        },
        "exp2": {
          "title": "اعتمادات متعددة",
          "desc": "B737, B777, B787, A330, A300-600"
        },
        "exp3": {
          "title": "مشاريع كبرى",
          "desc": "11 مشروع طائرات جديدة لمصر للطيران"
        },
        "bio": "مهندس متحمس وذو خبرة عالية مع +20 سنة من الخبرة في صيانة وهندسة الطيران. على دراية عالية بلوائح الطيران ومعايير السلامة والجودة والتحسين المستمر. قدرة مثبتة على تحديد المشكلات وجمع البيانات وتحليلها وتنفيذ الحلول باستخدام مهارات تحليلية عالية في إدارة صيانة الطائرات."
      },
      "work": {
        "title": "معرض أعمالي",
        "desc": "مشاريع صيانة وهندسة الطائرات"
      },
      "cv": {
        "title": "السيرة الذاتية",
        "download": "تحميل CV"
      },
      "contact": {
        "title": "تواصل معي",
        "whatsapp": "واتساب",
        "facebook": "فيسبوك",
        "instagram": "انستغرام",
        "linkedin": "لينكدإن",
        "github": "جيت هاب",
        "email": "البريد الإلكتروني"
      }
    }
  },
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "about": "À propos",
        "work": "Travaux",
        "cv": "CV"
      },
      "hero": {
        "greeting": "Bonjour, je suis",
        "name": "Walid Allam",
        "title": "Ingénieur Aviation Civile | Licence B1",
        "cta": "Voir mes travaux"
      },
      "about": {
        "title": "À propos de moi",
        "exp1": {
          "title": "20+ ans d'expérience",
          "desc": "Maintenance et ingénierie aéronautique"
        },
        "exp2": {
          "title": "Qualifications multiples",
          "desc": "B737, B777, B787, A330, A300-600"
        },
        "exp3": {
          "title": "Projets majeurs",
          "desc": "11 nouveaux avions pour EgyptAir"
        },
        "bio": "Ingénieur passionné et hautement motivé avec plus de 20 ans d'expérience dans la maintenance et l'ingénierie aéronautique. Très connaisseur des réglementations aéronautiques, des normes de sécurité, de la conformité, de la gestion de la qualité et de l'amélioration continue."
      },
      "work": {
        "title": "Galerie de travaux",
        "desc": "Projets de maintenance et d'ingénierie"
      },
      "cv": {
        "title": "Curriculum Vitae",
        "download": "Télécharger CV"
      },
      "contact": {
        "title": "Contactez-moi",
        "whatsapp": "WhatsApp",
        "facebook": "Facebook",
        "instagram": "Instagram",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "email": "Email"
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