import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          className="relative w-36 h-36 mx-auto mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 animate-spin-slow" style={{ padding: '3px' }}>
            <div className="absolute inset-0 rounded-full bg-dark-400" style={{ margin: '3px' }} />
          </div>
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img 
              src="/profile.jpg"
              alt="Walid Allam" 
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div 
            className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={12} className="text-white" />
          </motion.div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-blue-400 mb-2 glow-text"
        >
          {t('hero.greeting')}
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="gradient-text">{t('hero.name')}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-gray-300 mb-3"
        >
          {t('hero.title')}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-sm text-cyan-400 mb-8 flex items-center justify-center gap-2"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          {t('hero.typeRatings')}
        </motion.p>
        
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.5)" }}
          whileTap={{ scale: 0.95 }}
          href="#work"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all shimmer relative overflow-hidden group"
        >
          <span className="relative z-10">{t('hero.cta')}</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ChevronDown className="ml-2" size={18} />
          </motion.div>
        </motion.a>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;