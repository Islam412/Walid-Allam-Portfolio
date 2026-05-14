import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // ==================== NAVBAR ====================
      "nav": {
        "home": "Home",
        "about": "About",
        "work": "Work",
        "cv": "CV"
      },
      
      // ==================== HERO SECTION ====================
      "hero": {
        "greeting": "Hello, I'm",
        "name": "Walid Allam",
        "title": "Civil Aviation Engineer | B1 Licensed",
        "cta": "Explore My Work",
        "typeRatings": "B737 | B777 | B787 | A330 | A300-600",
        "available": "Available for work",
        "openToOpportunities": "Open to opportunities",
        "viewCV": "View CV",
        "scrollDown": "Scroll Down",
        "yearsExperience": "Years Experience",
        "licensed": "B1 Licensed",
        "featuredBadge": "Featured Projects",
        "excellenceBadge": "20+ Years of Excellence",
        "portfolioBadge": "Professional Portfolio",
        "whoAmIBadge": "Who Am I"
      },
      
      // ==================== ABOUT SECTION ====================
      "about": {
        "title": "About Me",
        "badge": "Who Am I",
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
        "licenses": ["B1 Licensed Engineer", "Part 145", "Part M", "LWTR", "ETOPS", "EWIS", "CDCCL", "Human Factor"],
        "stats": {
          "yearsLabel": "Years Experience",
          "ratingsLabel": "Type Ratings",
          "projectsLabel": "Aircraft Projects",
          "destinationsLabel": "Destinations",
          "licenseLabel": "B1 Licensed",
          "authorityLabel": "Authority",
          "yearsDetail": "Since 2004",
          "ratingsDetail": "Wide-body aircraft",
          "projectsDetail": "For EgyptAir",
          "destinationsDetail": "Worldwide",
          "licenseDetail": "ECAA Certified",
          "authorityDetail": "Approved Organization"
        },
        "additionalInfo": {
          "activeSince": "✓ Active since 2004",
          "safetyRecord": "✓ 100% Safety Record",
          "aircraftTypes": "✓ 11 Aircraft Types",
          "fleet": "✓ EgyptAir Fleet",
          "validUntil": "✓ Valid until 2025",
          "ecaaApproved": "✓ ECAA Approved",
          "easaCompliant": "✓ EASA Compliant"
        },
        "teamMembers": "Team Members",
        "yearsExperience": "20+ Years"
      },
      
      // ==================== WORK GALLERY SECTION ====================
      "work": {
        "title": "My Work Gallery",
        "desc": "Aircraft maintenance & engineering projects - Licensed on B737, B777, B787, A330 & A300-600",
        "badge": "Professional Portfolio",
        "viewAll": "View All Projects",
        "showing": "Showing 6 of 12 completed projects",
        "clickToView": "Click to view details",
        "projects": {
          "1": {"title": "Boeing 787 Dreamliner", "subtitle": "Type Rating & Maintenance", "category": "Wide-Body Aircraft"},
          "2": {"title": "Boeing 777-300ER", "subtitle": "EgyptAir Fleet Project 2010", "category": "Long Haul Aircraft"},
          "3": {"title": "Airbus A330-300", "subtitle": "EgyptAir Project 2012", "category": "Wide-Body Aircraft"},
          "4": {"title": "Boeing 737-800 NG", "subtitle": "Multiple Fleet Projects", "category": "Narrow-Body Aircraft"},
          "5": {"title": "Airbus A320neo / A321neo", "subtitle": "EgyptAir New Generation Fleet", "category": "Next Generation"},
          "6": {"title": "Airbus A350-900", "subtitle": "Latest EgyptAir Project 2023/2024", "category": "Ultra-Long Haul"}
        }
      },
      
      // ==================== CV / CONTACT SECTION ====================
      "cv": {
        "title": "Curriculum Vitae",
        "download": "Download CV",
        "preview": "CV Preview",
        "contactQuick": "Quick Contact",
        "address": "144 Region 9–Narges district–Al shorouk City–Cairo - Egypt"
      },
      
      // ==================== CONTACT SECTION ====================
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
      
      // ==================== FOOTER ====================
      "footer": {
        "rights": "All Rights Reserved.",
        "rightsAr": "جميع الحقوق محفوظة",
        "developed": "Developed with",
        "by": "by",
        "designer": "Islam Hamdy",
        "separator": "✦",
        "forEngineer": "for Eng. Walid Allam"
      },
      
      // ==================== COMMON ====================
      "common": {
        "years": "Years",
        "projects": "Projects",
        "experience": "Experience",
        "certifications": "Certifications",
        "readMore": "Read More",
        "learnMore": "Learn More",
        "getInTouch": "Get in Touch",
        "sendMessage": "Send Message",
        "professionalPortfolio": "Professional Portfolio",
        "whoAmI": "Who Am I",
        "teamMembers": "Team Members",
        "aircraftProjects": "Aircraft Projects",
        "typeRatings": "Type Ratings"
      }
    }
  },
  
  ar: {
    translation: {
      // ==================== NAVBAR ====================
      "nav": {
        "home": "الرئيسية",
        "about": "من أنا",
        "work": "أعمالي",
        "cv": "السيرة الذاتية"
      },
      
      // ==================== HERO SECTION ====================
      "hero": {
        "greeting": "مرحباً، أنا",
        "name": "وليد علام",
        "title": "مهندس طيران مدني | مرخص B1",
        "cta": "استكشف أعمالي",
        "typeRatings": "بوينغ 737 | بوينغ 777 | بوينغ 787 | إيرباص A330 | إيرباص A300-600",
        "available": "متاح للعمل",
        "openToOpportunities": "متاح للفرص",
        "viewCV": "عرض السيرة الذاتية",
        "scrollDown": "مرر لأسفل",
        "yearsExperience": "سنوات خبرة",
        "licensed": "مرخص B1",
        "featuredBadge": "المشاريع المميزة",
        "excellenceBadge": "20+ سنة من التميز",
        "portfolioBadge": "المشاريع الاحترافية",
        "whoAmIBadge": "من أنا"
      },
      
      // ==================== ABOUT SECTION ====================
      "about": {
        "title": "من أنا",
        "badge": "من هو",
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
        "licenses": ["مهندس مرخص B1", "الجزء 145", "الجزء M", "LWTR", "ETOPS", "EWIS", "CDCCL", "العامل البشري"],
        "stats": {
          "yearsLabel": "سنوات خبرة",
          "ratingsLabel": "اعتمادات",
          "projectsLabel": "مشاريع طائرات",
          "destinationsLabel": "وجهات",
          "licenseLabel": "مرخص B1",
          "authorityLabel": "جهة اعتماد",
          "yearsDetail": "منذ 2004",
          "ratingsDetail": "طائرات عريضة البدن",
          "projectsDetail": "لمصر للطيران",
          "destinationsDetail": "حول العالم",
          "licenseDetail": "معتمد من ECAA",
          "authorityDetail": "منظمة معتمدة"
        },
        "additionalInfo": {
          "activeSince": "✓ نشط منذ 2004",
          "safetyRecord": "✓ سجل أمان 100%",
          "aircraftTypes": "✓ 11 نوع طائرات",
          "fleet": "✓ أسطول مصر للطيران",
          "validUntil": "✓ ساري حتى 2025",
          "ecaaApproved": "✓ معتمد من ECAA",
          "easaCompliant": "✓ متوافق مع EASA"
        },
        "teamMembers": "أعضاء الفريق",
        "yearsExperience": "20+ سنة"
      },
      
      // ==================== WORK GALLERY SECTION ====================
      "work": {
        "title": "معرض أعمالي",
        "desc": "مشاريع صيانة وهندسة الطائرات - مرخص على بوينغ 737، 777، 787، إيرباص A330 و A300-600",
        "badge": "المشاريع الاحترافية",
        "viewAll": "عرض كل المشاريع",
        "showing": "عرض 6 من 12 مشروع مكتمل",
        "clickToView": "اضغط لعرض التفاصيل",
        "projects": {
          "1": {"title": "بوينغ 787 دريملاينر", "subtitle": "اعتماد الصيانة", "category": "طائرات عريضة البدن"},
          "2": {"title": "بوينغ 777-300ER", "subtitle": "مشروع أسطول مصر للطيران 2010", "category": "طائرات بعيدة المدى"},
          "3": {"title": "إيرباص A330-300", "subtitle": "مشروع مصر للطيران 2012", "category": "طائرات عريضة البدن"},
          "4": {"title": "بوينغ 737-800 NG", "subtitle": "مشاريع أسطول متعددة", "category": "طائرات ضيقة البدن"},
          "5": {"title": "إيرباص A320neo / A321neo", "subtitle": "أسطول مصر للطيران الجيل الجديد", "category": "الجيل القادم"},
          "6": {"title": "إيرباص A350-900", "subtitle": "أحدث مشاريع مصر للطيران 2023/2024", "category": "فائقة الطول"}
        }
      },
      
      // ==================== CV / CONTACT SECTION ====================
      "cv": {
        "title": "السيرة الذاتية",
        "download": "تحميل السيرة الذاتية",
        "preview": "معاينة السيرة الذاتية",
        "contactQuick": "معلومات سريعة",
        "address": "144 منطقة 9 – حي النرجس – مدينة الشروق – القاهرة - مصر"
      },
      
      // ==================== CONTACT SECTION ====================
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
      
      // ==================== FOOTER ====================
      "footer": {
        "rights": "جميع الحقوق محفوظة.",
        "rightsAr": "جميع الحقوق محفوظة",
        "developed": "تم التطوير بـ",
        "by": "بواسطة",
        "designer": "إسلام حمدي",
        "separator": "✦",
        "forEngineer": "للمهندس وليد علام"
      },
      
      // ==================== COMMON ====================
      "common": {
        "years": "سنوات",
        "projects": "مشاريع",
        "experience": "خبرة",
        "certifications": "شهادات",
        "readMore": "اقرأ المزيد",
        "learnMore": "اعرف أكثر",
        "getInTouch": "تواصل معي",
        "sendMessage": "أرسل رسالة",
        "professionalPortfolio": "المشاريع الاحترافية",
        "whoAmI": "من أنا",
        "teamMembers": "أعضاء الفريق",
        "aircraftProjects": "مشاريع طائرات",
        "typeRatings": "اعتمادات"
      }
    }
  },
  
  fr: {
    translation: {
      // ==================== NAVBAR ====================
      "nav": {
        "home": "Accueil",
        "about": "À propos",
        "work": "Travaux",
        "cv": "CV"
      },
      
      // ==================== HERO SECTION ====================
      "hero": {
        "greeting": "Bonjour, je suis",
        "name": "Walid Allam",
        "title": "Ingénieur Aviation Civile | Licence B1",
        "cta": "Voir mes travaux",
        "typeRatings": "B737 | B777 | B787 | A330 | A300-600",
        "available": "Disponible pour travail",
        "openToOpportunities": "Ouvert aux opportunités",
        "viewCV": "Voir CV",
        "scrollDown": "Défiler vers le bas",
        "yearsExperience": "Années d'expérience",
        "licensed": "Licencié B1",
        "featuredBadge": "Projets en vedette",
        "excellenceBadge": "20+ ans d'excellence",
        "portfolioBadge": "Portfolio Professionnel",
        "whoAmIBadge": "Qui suis-je"
      },
      
      // ==================== ABOUT SECTION ====================
      "about": {
        "title": "À propos de moi",
        "badge": "Qui suis-je",
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
        "licenses": ["Ingénieur licencié B1", "Partie 145", "Partie M", "LWTR", "ETOPS", "EWIS", "CDCCL", "Facteur humain"],
        "stats": {
          "yearsLabel": "Années d'expérience",
          "ratingsLabel": "Qualifications",
          "projectsLabel": "Projets d'avions",
          "destinationsLabel": "Destinations",
          "licenseLabel": "Licencié B1",
          "authorityLabel": "Autorité",
          "yearsDetail": "Depuis 2004",
          "ratingsDetail": "Avion à fuselage large",
          "projectsDetail": "Pour EgyptAir",
          "destinationsDetail": "Monde entier",
          "licenseDetail": "Certifié ECAA",
          "authorityDetail": "Organisation approuvée"
        },
        "additionalInfo": {
          "activeSince": "✓ Actif depuis 2004",
          "safetyRecord": "✓ Record de sécurité 100%",
          "aircraftTypes": "✓ 11 types d'avions",
          "fleet": "✓ Flotte EgyptAir",
          "validUntil": "✓ Valable jusqu'en 2025",
          "ecaaApproved": "✓ Approuvé ECAA",
          "easaCompliant": "✓ Conforme EASA"
        },
        "teamMembers": "Membres de l'équipe",
        "yearsExperience": "20+ ans"
      },
      
      // ==================== WORK GALLERY SECTION ====================
      "work": {
        "title": "Galerie de travaux",
        "desc": "Projets de maintenance et d'ingénierie aéronautique - Licencié sur B737, B777, B787, A330 & A300-600",
        "badge": "Portfolio Professionnel",
        "viewAll": "Voir tous les projets",
        "showing": "Affichage de 6 projets sur 12",
        "clickToView": "Cliquez pour voir les détails",
        "projects": {
          "1": {"title": "Boeing 787 Dreamliner", "subtitle": "Qualification & Maintenance", "category": "Avion à fuselage large"},
          "2": {"title": "Boeing 777-300ER", "subtitle": "Projet flotte EgyptAir 2010", "category": "Avion long-courrier"},
          "3": {"title": "Airbus A330-300", "subtitle": "Projet EgyptAir 2012", "category": "Avion à fuselage large"},
          "4": {"title": "Boeing 737-800 NG", "subtitle": "Projets de flotte multiples", "category": "Avion à fuselage étroit"},
          "5": {"title": "Airbus A320neo / A321neo", "subtitle": "Nouvelle génération EgyptAir", "category": "Nouvelle génération"},
          "6": {"title": "Airbus A350-900", "subtitle": "Dernier projet EgyptAir 2023/2024", "category": "Ultra-long-courrier"}
        }
      },
      
      // ==================== CV / CONTACT SECTION ====================
      "cv": {
        "title": "Curriculum Vitae",
        "download": "Télécharger CV",
        "preview": "Aperçu du CV",
        "contactQuick": "Contact rapide",
        "address": "144 Région 9 – District Narges – Ville Al shorouk – Le Caire - Égypte"
      },
      
      // ==================== CONTACT SECTION ====================
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
      
      // ==================== FOOTER ====================
      "footer": {
        "rights": "Tous droits réservés.",
        "rightsAr": "جميع الحقوق محفوظة",
        "developed": "Développé avec",
        "by": "par",
        "designer": "Islam Hamdy",
        "separator": "✦",
        "forEngineer": "pour l'ing. Walid Allam"
      },
      
      // ==================== COMMON ====================
      "common": {
        "years": "Années",
        "projects": "Projets",
        "experience": "Expérience",
        "certifications": "Certifications",
        "readMore": "Lire la suite",
        "learnMore": "En savoir plus",
        "getInTouch": "Me contacter",
        "sendMessage": "Envoyer message",
        "professionalPortfolio": "Portfolio Professionnel",
        "whoAmI": "Qui suis-je",
        "teamMembers": "Membres de l'équipe",
        "aircraftProjects": "Projets d'avions",
        "typeRatings": "Qualifications"
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