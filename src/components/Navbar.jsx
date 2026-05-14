import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full backdrop-blur-xl bg-black/50 z-50 py-4 px-6 md:px-12 flex justify-between items-center border-b border-white/10"
    >
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Walid Allam
      </h1>
      <div className="hidden md:flex gap-8">
        <a href="#home" className="hover:text-blue-400 transition-colors">{t('nav.home')}</a>
        <a href="#about" className="hover:text-blue-400 transition-colors">{t('nav.about')}</a>
        <a href="#work" className="hover:text-blue-400 transition-colors">{t('nav.work')}</a>
        <a href="#cv" className="hover:text-blue-400 transition-colors">{t('nav.cv')}</a>
      </div>
      <LanguageSwitcher />
    </motion.nav>
  );
};

export default Navbar;