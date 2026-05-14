import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plane, Wrench, Award, Users, TrendingUp, Calendar, BookOpen, Globe, Sparkles, Star, Target, Shield } from 'lucide-react';
import { useRef, useState } from 'react';

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  
  const stats = [
    { icon: Calendar, key: 'exp1', color: 'from-blue-500 to-blue-600', value: '20+', label: 'Years Experience', detail: 'Since 2004' },
    { icon: Wrench, key: 'exp2', color: 'from-cyan-500 to-cyan-600', value: '5', label: 'Type Ratings', detail: 'Wide-body aircraft' },
    { icon: Award, key: 'exp3', color: 'from-purple-500 to-purple-600', value: '11', label: 'New Projects', detail: 'For EgyptAir' },
    { icon: Globe, color: 'from-emerald-500 to-emerald-600', value: '25+', label: 'Destinations', detail: 'Worldwide' },
    { icon: BookOpen, color: 'from-orange-500 to-orange-600', value: 'B1', label: 'License', detail: 'ECAA Certified' },
    { icon: Users, color: 'from-rose-500 to-rose-600', value: 'Part 145', label: 'Authority', detail: 'Approved Organization' },
  ];
  
  const typeRatings = [
    'Boeing 737 Series (3/4/5/6/7/8/900)',
    'Boeing 777-200/300ER',
    'Boeing 787-8/9/10',
    'Airbus A330 PDC',
    'Airbus A300-600'
  ];
  
  const projects = [
    'B737-800 (2007, 2012, 2015)', 'B777-300ER (2010)', 'A330-300 (2012)',
    'ERJ170 (2010)', 'B787-8/9/10 (2019)', 'A220-300 (2019)',
    'A320 neo (2019)', 'A321neo (2022)', 'A350-900 (2023/2024)',
    'B737MAX (2023/2024)'
  ];
  
  const licenses = t('about.licenses', { returnObjects: true });
  
  return (
    <section ref={ref} id="about" className="py-20 px-4 relative overflow-hidden">
      {/* خلفية متحركة متقدمة */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section مع تأثيرات متقدمة */}
        <motion.div
          style={{ opacity, y }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/10"
          >
            <Star size={16} className="text-yellow-400 fill-yellow-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Who Am I</span>
            <Sparkles size={14} className="text-purple-400 animate-spin-slow" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-gradient-x bg-300%">
            {t('about.title')}
          </h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
            {t('about.bio')}
          </p>
        </motion.div>
        
        {/* الإحصائيات المتقدمة */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.05 }}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              className="glass-morphism p-5 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* خلفية متحركة عند المرور */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* أيقونة متحركة */}
              <div className={`relative w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} p-3 group-hover:scale-110 transition-all duration-300 animate-float`}>
                <stat.icon className="w-full h-full text-white" />
              </div>
              
              {/* القيمة */}
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              
              {/* التسمية */}
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              
              {/* التفاصيل الإضافية */}
              <motion.div 
                className="mt-2 text-xs text-blue-400/60"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: hoveredStat === index ? 1 : 0, y: hoveredStat === index ? 0 : 5 }}
                transition={{ duration: 0.2 }}
              >
                {stat.detail}
              </motion.div>
              
              {/* شريط تقدم افتراضي */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Type Ratings Card محسّن */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="glass-morphism p-6 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />
            
            <h3 className="text-2xl font-bold text-blue-400 mb-5 flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="p-2 bg-blue-500/20 rounded-xl"
              >
                <Plane size={24} />
              </motion.div>
              {t('about.typeRatingsTitle')}
            </h3>
            
            <div className="space-y-3">
              {typeRatings.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 group/item"
                >
                  <motion.span 
                    className="text-blue-400 text-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                  >
                    ✈️
                  </motion.span>
                  <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                    {type}
                  </span>
                  <motion.div 
                    className="ml-auto w-0 h-px bg-gradient-to-r from-blue-400 to-transparent group-hover/item:w-16 transition-all duration-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: 64 }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* إحصائيات إضافية */}
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs text-gray-500">
              <span>✓ Active since 2004</span>
              <span>✓ 100% Safety Record</span>
            </div>
          </motion.div>
          
          {/* Projects Card محسّن */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="glass-morphism p-6 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors duration-500" />
            
            <h3 className="text-2xl font-bold text-cyan-400 mb-5 flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="p-2 bg-cyan-500/20 rounded-xl"
              >
                <Target size={24} />
              </motion.div>
              {t('about.projectsTitle')}
            </h3>
            
            <div className="grid grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-2 custom-scroll">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.03 }}
                  className="flex items-center gap-2 text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300"
                >
                  <Shield size={10} className="text-cyan-400 flex-shrink-0" />
                  <span>{project}</span>
                </motion.div>
              ))}
            </div>
            
            {/* إحصائيات إضافية */}
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs text-gray-500">
              <span>✓ 11 Aircraft Types</span>
              <span>✓ EgyptAir Fleet</span>
            </div>
          </motion.div>
        </div>
        
        {/* Licenses Section محسّن جداً */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="glass-morphism p-8 text-center relative overflow-hidden group"
        >
          {/* خلفية متحركة */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700" />
          
          <motion.h3 
            className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-5 flex items-center justify-center gap-3"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles size={22} className="text-yellow-400" />
            {t('about.licensesTitle')}
            <Sparkles size={22} className="text-yellow-400" />
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {Array.isArray(licenses) && licenses.map((cert, i) => (
              <motion.span 
                key={i} 
                className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-sm text-gray-300 hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white transition-all duration-300 cursor-default border border-white/5 hover:border-blue-400/30"
                whileHover={{ scale: 1.08, y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  {cert}
                </span>
              </motion.span>
            ))}
          </div>
          
          {/* نص إضافي */}
          <motion.div 
            className="mt-6 text-xs text-gray-500 flex justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span>✓ Valid until 2025</span>
            <span>✓ ECAA Approved</span>
            <span>✓ EASA Compliant</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;