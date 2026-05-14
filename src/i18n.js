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
        "title": "Civil Aviation Engineer",
        "cta": "Explore My Work"
      },
      "about": {
        "title": "About Me",
        "exp1": {
          "title": "8+ Years Experience",
          "desc": "In civil aircraft maintenance"
        },
        "exp2": {
          "title": "International Certifications",
          "desc": "FAA, EASA, IATA"
        },
        "exp3": {
          "title": "Major Projects",
          "desc": "Boeing & Airbus fleet management"
        }
      },
      "work": {
        "title": "My Work Gallery"
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
        "title": "مهندس طيران مدني",
        "cta": "استكشف أعمالي"
      },
      "about": {
        "title": "من أنا",
        "exp1": {
          "title": "خبرة 8+ سنوات",
          "desc": "في صيانة الطائرات المدنية"
        },
        "exp2": {
          "title": "شهادات دولية",
          "desc": "FAA, EASA, IATA"
        },
        "exp3": {
          "title": "مشاريع كبرى",
          "desc": "إدارة أسطول بوينغ وإيرباص"
        }
      },
      "work": {
        "title": "معرض أعمالي"
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
        "title": "Ingénieur Aviation Civile",
        "cta": "Voir mes travaux"
      },
      "about": {
        "title": "À propos de moi",
        "exp1": {
          "title": "8+ ans d'expérience",
          "desc": "Maintenance aéronautique civile"
        },
        "exp2": {
          "title": "Certifications internationales",
          "desc": "FAA, EASA, IATA"
        },
        "exp3": {
          "title": "Projets majeurs",
          "desc": "Gestion de flotte Boeing & Airbus"
        }
      },
      "work": {
        "title": "Galerie de travaux"
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