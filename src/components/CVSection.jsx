import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaDownload, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import cvFile from '../assets/cv.pdf';

const CVSection = () => {
  const { t } = useTranslation();
  
  // روابط التواصل الاجتماعي (استبدلها بالروابط الحقيقية لوليد علام)
  const socialLinks = [
    {
      name: 'whatsapp',
      icon: FaWhatsapp,
      url: 'https://wa.me/201127782279',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:bg-green-500',
      delay: 0.1
    },
    {
      name: 'facebook',
      icon: FaFacebook,
      url: 'https://facebook.com/walid.allam',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:bg-blue-600',
      delay: 0.2
    },
    {
      name: 'instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/walid.allam',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:bg-pink-600',
      delay: 0.3
    },
    {
      name: 'linkedin',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/walid-allam',
      color: 'from-blue-700 to-blue-800',
      hoverColor: 'hover:bg-blue-700',
      delay: 0.4
    },
    {
      name: 'github',
      icon: FaGithub,
      url: 'https://github.com/walidallam',
      color: 'from-gray-700 to-gray-800',
      hoverColor: 'hover:bg-gray-700',
      delay: 0.5
    },
    {
      name: 'email',
      icon: FaEnvelope,
      url: 'mailto:walid.allam@example.com',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:bg-red-500',
      delay: 0.6
    }
  ];

  return (
    <section id="cv" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
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
          <iframe src={cvFile} className="w-full h-[500px] rounded-xl border border-white/20" title="CV Preview" />
        </motion.div>

        {/* قسم التواصل الاجتماعي مع تأثيرات حركية وضوئية */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {t('contact.title') || 'تواصل معي'}
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
              {/* تأثير الضوء المتحرك عند المرور */}
              <motion.div
                className="absolute inset-0 bg-white/30"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              
              {/* الأيقونة */}
              <social.icon className="relative z-10 text-lg" />
              
              {/* اسم المنصة */}
              <span className="relative z-10 hidden sm:inline">
                {social.name === 'whatsapp' && 'WhatsApp'}
                {social.name === 'facebook' && 'Facebook'}
                {social.name === 'instagram' && 'Instagram'}
                {social.name === 'linkedin' && 'LinkedIn'}
                {social.name === 'github' && 'GitHub'}
                {social.name === 'email' && 'Email'}
              </span>
              
              {/* تأثير النيون حول الزر */}
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

        {/* نص إضافي للتواصل */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-gray-400 text-sm"
        >
          <p>📱 Available 24/7 for professional inquiries | متاح للتواصل المهني</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;