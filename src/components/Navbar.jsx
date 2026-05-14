import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = i18n.language === 'ar';

  const navItems = ['home', 'about', 'work', 'cv'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-400/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* الاسم مترجم - يظهر حسب اللغة */}
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            {isRTL ? 'وليد علام' : 'Walid Allam'}
          </motion.h1>
          
          <div className={`hidden md:flex space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </div>
          
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark-400/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className={`px-4 py-4 space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;