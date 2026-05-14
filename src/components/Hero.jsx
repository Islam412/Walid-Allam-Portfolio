import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-custom" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-blue-500 neon-border mb-6"
        >
          <img 
            src="https://ui-avatars.com/api/?name=Walid+Allam&background=3b82f6&color=fff&size=150&bold=true&length=2&fontsize=0.6"
            alt="Walid Allam" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-blue-400 mb-2"
        >
          {t('hero.greeting')}
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">{t('hero.name')}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-3"
        >
          {t('hero.title')}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-sm text-cyan-400 mb-8"
        >
          {t('hero.typeRatings')}
        </motion.p>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#work"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          {t('hero.cta')}
          <ChevronDown className="ml-2" size={18} />
        </motion.a>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-gray-400" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;