import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' }
  ];
  
  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.code);
    document.body.dir = lang.dir;
    document.documentElement.lang = lang.code;
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 glass-morphism hover:bg-white/10 transition"
      >
        <Globe size={18} />
        <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 glass-morphism py-2 z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang)}
                className={`w-full px-4 py-2 text-left hover:bg-white/10 transition flex items-center gap-2 ${
                  i18n.language === lang.code ? 'text-blue-400 bg-white/5' : 'text-gray-300'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
                {i18n.language === lang.code && (
                  <motion.div
                    layoutId="activeLang"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;