import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaHeart, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-8 border-t border-white/10 text-center text-gray-400 relative overflow-hidden"
    >
      {/* تأثير ضوء خلفي */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {/* أيقونات التواصل */}
        <div className="flex justify-center gap-6 mb-6">
          <motion.a 
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/walid-allam-84339b23b/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition duration-300 inline-block"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:Walidallam9@gmail.com" 
            className="hover:text-red-400 transition duration-300 inline-block"
          >
            <FaEnvelope size={24} />
          </motion.a>
        </div>
        
        {/* حقوق الملكية */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm mb-2"
        >
          © {currentYear} <span className="text-blue-400 font-semibold">Walid Allam</span>. All Rights Reserved.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm mb-4"
        >
          © {currentYear} <span className="text-cyan-400 font-semibold">وليد علام</span>. جميع الحقوق محفوظة
        </motion.p>
        
        {/* فاصل زخرفي */}
        <div className="flex justify-center items-center gap-3 my-4">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-16" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-xs text-blue-400"
          >
            ✦
          </motion.div>
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-16" />
        </div>
        
        {/* اسم المطور */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-gray-500 hover:text-gray-300 transition duration-300 flex items-center justify-center gap-1 flex-wrap"
        >
          <FaCode size={10} className="text-purple-400" />
          <span>Developed with</span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          >
            <FaHeart className="inline text-red-500" size={12} />
          </motion.span>
          <span>by</span>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="https://github.com/islam412" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition duration-300 inline-flex items-center gap-1 group font-medium"
          >
            Islam Hamdy
            <FaExternalLinkAlt size={10} className="opacity-0 group-hover:opacity-100 transition duration-300" />
          </motion.a>
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;