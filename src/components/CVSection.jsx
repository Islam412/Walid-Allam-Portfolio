import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaDownload, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import cvFile from '../assets/cv.pdf';

const CVSection = () => {
  const { t } = useTranslation();
  
  const contactInfo = {
    phone1: '+2 01014141120',
    phone2: '+2 0100 6018846',
    email: 'Walidallam9@gmail.com',
    address: '144 Region 9–Narges district–Al shorouk City–Cairo - Egypt'
  };
  
  const socialLinks = [
    {
      name: 'whatsapp',
      icon: FaWhatsapp,
      url: `https://wa.me/201014141120`,
      color: 'from-green-500 to-green-600',
      delay: 0.1
    },
    {
      name: 'phone',
      icon: FaPhone,
      url: `tel:${contactInfo.phone1.replace(/\s/g, '')}`,
      color: 'from-blue-500 to-blue-600',
      delay: 0.15
    },
    {
      name: 'facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/share/1CWY87ENze/',
      color: 'from-blue-600 to-blue-700',
      delay: 0.2
    },
    {
      name: 'instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/walid_allam9?igsh=am12aXVzZWM2a3Bo',
      color: 'from-pink-500 to-purple-600',
      delay: 0.3
    },
    {
      name: 'linkedin',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/walid-allam-84339b23b/',
      color: 'from-blue-700 to-blue-800',
      delay: 0.4
    },
    {
      name: 'email',
      icon: FaEnvelope,
      url: `mailto:${contactInfo.email}`,
      color: 'from-red-500 to-red-600',
      delay: 0.6
    }
  ];

  return (
    <section id="cv" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-morphism p-6 mb-8 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhone className="text-green-400" />
              <span className="text-gray-300">{contactInfo.phone1}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-red-400" />
              <span className="text-gray-300">{contactInfo.email}</span>
            </div>
          </div>
        </motion.div>

        {/* قسم السيرة الذاتية */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">{t('cv.title')}</h2>
          <div className="flex justify-center mb-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={cvFile}
              download
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-bold shadow-xl flex items-center gap-2 hover:shadow-2xl transition-all"
            >
              <FaDownload /> {t('cv.download')}
            </motion.a>
          </div>
          <iframe src={cvFile} className="w-full h-[600px] rounded-xl border border-white/20" title="CV Preview" />
        </motion.div>

        {/* قسم التواصل الاجتماعي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-300">Connect with me on social media | تابعني على وسائل التواصل</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: social.delay, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.15,
                rotate: 5,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative group px-6 py-3 rounded-full font-semibold text-white
                bg-gradient-to-r ${social.color}
                shadow-lg hover:shadow-2xl transition-all duration-300
                flex items-center gap-2 overflow-hidden
              `}
            >
              <motion.div
                className="absolute inset-0 bg-white/30"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              
              <social.icon className="relative z-10 text-lg" />
              <span className="relative z-10 hidden sm:inline capitalize">
                {social.name}
              </span>
              
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 20px currentColor',
                  filter: 'blur(4px)'
                }}
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-gray-400 text-sm"
        >
          <p>📱 Available 24/7 for professional inquiries | متاح للتواصل المهني 24/7</p>
          <p className="mt-2">📍 {contactInfo.address}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;