import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Sparkles, ArrowRight, Star, Award, Briefcase } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* خلفية متحركة متقدمة */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 right-20 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow" style={{ animationDelay: '3s' }} />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        {/* صورة شخصية مع تأثيرات متعددة */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          className="relative w-36 h-36 mx-auto mb-6 group"
        >
          {/* حلقة خارجية متحركة متعددة */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 animate-spin-slow" style={{ padding: '3px' }}>
            <div className="absolute inset-0 rounded-full bg-dark-400" style={{ margin: '3px' }} />
          </div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-spin-reverse blur-md" />
          
          {/* الصورة */}
          <div className="relative w-full h-full rounded-full overflow-hidden cursor-pointer">
            <img 
              src="/profile.jpg"
              alt="Walid Allam" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
            />
          </div>
          
          {/* علامة توثيق متحركة */}
          <motion.div 
            className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-1.5 shadow-lg"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles size={12} className="text-white" />
          </motion.div>
          
          {/* تأثير النيون حول الصورة عند المرور */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: '0 0 30px rgba(59,130,246,0.8), 0 0 60px rgba(6,182,212,0.5)', filter: 'blur(10px)' }}
          />
          
          {/* بطاقة الإحصائيات الصغيرة */}
          <motion.div 
            className="absolute -top-8 -left-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full px-3 py-1.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
            animate={{ scale: [0, 1] }}
            transition={{ type: "spring" }}
          >
            <div className="flex items-center gap-1">
              <Star size={10} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white text-xs font-bold">20+ Years</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -top-8 -right-8 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full px-3 py-1.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"
            animate={{ scale: [0, 1] }}
            transition={{ type: "spring" }}
          >
            <div className="flex items-center gap-1">
              <Award size={10} className="text-yellow-400" />
              <span className="text-white text-xs font-bold">B1 Licensed</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* شارة ترحيبية متقدمة */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-white/10"
        >
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-gray-300">Available for work</span>
          <span className="w-px h-3 bg-white/20 mx-1" />
          <Briefcase size={10} className="text-cyan-400" />
          <span className="text-xs text-cyan-400">Open to opportunities</span>
        </motion.div>
        
        {/* نص الترحيب مع تأثير التوهج */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-blue-400 mb-2 animate-text-glow"
        >
          {t('hero.greeting')}
        </motion.h2>
        
        {/* الاسم مع تأثير تدرج متحرك و توهج */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-300% animate-gradient-x bg-clip-text text-transparent hover:animate-pulse transition-all duration-500">
            {t('hero.name')}
          </span>
        </motion.h1>
        
        {/* العنوان المهني مع تأثير كتابة */}
        <motion.p 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
          className="text-lg md:text-xl text-gray-300 mb-3 flex items-center justify-center gap-2 flex-wrap"
        >
          <span className="bg-white/10 rounded-full px-3 py-1 text-sm backdrop-blur-sm">
            ✈️ {t('hero.title')}
          </span>
        </motion.p>
        
        {/* نوع الطائرات مع تأثيرات متقدمة */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-sm text-cyan-400 mb-8 flex items-center justify-center gap-2 flex-wrap"
        >
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          {t('hero.typeRatings')}
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.p>
        
        {/* أزرار الإ行动 المتقدمة */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(59,130,246,0.6)" }}
            whileTap={{ scale: 0.95 }}
            href="#work"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
          >
            {/* تأثير shimmer على الزر */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10">{t('hero.cta')}</span>
            <motion.div
              animate={{ x: [0, 8, 0], y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <ArrowRight className="ml-2" size={18} />
            </motion.div>
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            href="#cv"
            className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group"
          >
            <span>View CV</span>
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2"
            >
              📄
            </motion.div>
          </motion.a>
        </div>
        
        {/* إحصائيات سريعة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap justify-center gap-6 mt-12 pt-4 border-t border-white/10"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">20+</div>
            <div className="text-xs text-gray-500">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">5</div>
            <div className="text-xs text-gray-500">Type Ratings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">11</div>
            <div className="text-xs text-gray-500">Aircraft Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">50+</div>
            <div className="text-xs text-gray-500">Team Members</div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* سهم التمرير للأسفل المتقدم */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="relative">
          <div className="w-8 h-12 border-2 border-gray-500 rounded-full flex justify-center hover:border-blue-400 transition-colors duration-300">
            <motion.div 
              animate={{ y: [0, 18, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"
            />
          </div>
          <motion.div 
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: -10 }}
            animate={{ y: [-10, -15, -10] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <span className="text-xs text-gray-500 whitespace-nowrap">Scroll Down</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;