import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin , FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  const { t } = useTranslation();
  
  const socialLinks = [
    {
      name: 'whatsapp',
      icon: FaWhatsapp,
      url: 'https://wa.me/201014141120',
      color: 'hover:bg-green-500',
      bgGradient: 'from-green-500 to-green-600',
      delay: 0.1
    },
    {
      name: 'facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/share/1CWY87ENze/',
      color: 'hover:bg-blue-600',
      bgGradient: 'from-blue-600 to-blue-700',
      delay: 0.2
    },
    {
      name: 'instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/walid_allam9?igsh=am12aXVzZWM2a3Bo',  
      color: 'hover:bg-pink-600',
      bgGradient: 'from-pink-500 to-purple-600',
      delay: 0.3
    },
    {
      name: 'linkedin',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/walid-allam-84339b23b/',
      color: 'hover:bg-blue-700',
      bgGradient: 'from-blue-700 to-blue-800',
      delay: 0.4
    },
    {
      name: 'email',
      icon: FaEnvelope,
      url: 'mailto:walid.Walidallam9@gmail.com',
      color: 'hover:bg-red-500',
      bgGradient: 'from-red-500 to-red-600',
      delay: 0.6
    }
  ];

  return (
    <div className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-gray-300">Connect with me on social media</p>
      </motion.div>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
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
              bg-gradient-to-r ${social.bgGradient}
              shadow-lg hover:shadow-2xl transition-all duration-300
              flex items-center gap-2 overflow-hidden
            `}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            
            <social.icon className="relative z-10 text-lg" />
            <span className="relative z-10">{t(`contact.${social.name}`)}</span>
            
            {/* تأثير النيون */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: '0 0 20px currentColor',
                filter: 'blur(4px)'
              }}
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;