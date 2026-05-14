import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
// تأكد من وجود صورة شخصية في هذا المسار
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent animate-pulse" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        >
          <img src={profileImg} alt="Walid Allam" className="w-full h-full object-cover" />
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-bold mt-6">{t('hero.greeting')}</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold glow-text mt-2">{t('hero.name')}</h1>
        <p className="text-xl text-blue-300 mt-3">{t('hero.title')}</p>
        
        <motion.a 
          whileHover={{ scale: 1.1 }}
          href="#work"
          className="inline-block mt-8 px-8 py-3 bg-blue-600 rounded-full font-semibold shadow-lg shadow-blue-500/50 hover:bg-blue-700 transition"
        >
          {t('hero.cta')}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;