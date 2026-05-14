import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Maximize2, Sparkles, Eye, Calendar, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';

const WorkGallery = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  
  const projectIds = [1, 2, 3, 4, 5, 6];
  
  const projectImages = [
    'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800',
    'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
    'https://images.unsplash.com/photo-1581093588401-fbb62a02e120?w=800',
    'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800',
    'https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?w=800'
  ];
  
  const projectYears = ['2024', '2023', '2022', '2021', '2024', '2023'];
  const projectLocations = ['USA', 'France', 'Egypt', 'UAE', 'Germany', 'UK'];
  
  return (
    <section ref={sectionRef} id="work" className="py-20 px-4 relative overflow-hidden">
      {/* خلفية متحركة متقدمة */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"
        style={{ opacity: backgroundOpacity }}
      />
      
      {/* كرات ضوئية متعددة */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -50, 80, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.3, 0.7, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 4 }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section مع تأثيرات متقدمة */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10"
          >
            <Sparkles size={16} className="text-yellow-400 animate-pulse" />
            <span className="text-sm text-gray-300">Professional Portfolio</span>
            <Sparkles size={16} className="text-yellow-400 animate-pulse delay-150" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text animate-gradient-x bg-300%">
            {t('work.title')}
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t('work.desc')}
          </p>
        </motion.div>
        
        {/* Grid المشاريع */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ scale }}
        >
          {projectIds.map((id, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              onHoverStart={() => setHoveredId(id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative glass-morphism overflow-hidden cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* تأثير Shimmer متقدم */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10" />
              
              {/* Border متحرك عند المرور */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
              
              <div className="relative h-72 overflow-hidden">
                <motion.img 
                  src={projectImages[index]} 
                  alt={t(`work.projects.${id}.title`)}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125"
                  animate={{ scale: hoveredId === id ? 1.15 : 1 }}
                />
                
                {/* طبقة تدرج متحركة */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-dark-400 via-dark-400/60 to-transparent"
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: hoveredId === id ? 0.9 : 0.6 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* معلومات المشروع المنزلقة */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20"
                  animate={{ y: hoveredId === id ? 0 : '100%' }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar size={12} />
                      <span>{projectYears[index]}</span>
                      <MapPin size={12} className="ml-2" />
                      <span>{projectLocations[index]}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {t(`work.projects.${id}.title`)}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">
                      {t(`work.projects.${id}.subtitle`)}
                    </p>
                    <motion.div 
                      className="flex items-center gap-2 text-xs text-gray-400 mt-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredId === id ? 1 : 0 }}
                    >
                      <Eye size={12} />
                      <span>Click to view details</span>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* زر التكبير المتقدم */}
                <motion.div 
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-black/70 backdrop-blur-md rounded-full p-3 shadow-lg border border-white/10">
                    <Maximize2 size={16} className="text-white" />
                  </div>
                </motion.div>
                
                {/* رقم المشروع مع تأثير */}
                <motion.div 
                  className="absolute top-4 left-4 z-20"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: hoveredId === id ? 0 : -20, opacity: hoveredId === id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 backdrop-blur-md rounded-full px-3 py-1 shadow-lg">
                    <span className="text-white text-xs font-bold">#{id.toString().padStart(2, '0')}</span>
                  </div>
                </motion.div>
                
                {/* أيقونة التشغيل المتقدمة */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: hoveredId === id ? 1 : 0, scale: hoveredId === id ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="bg-white/20 backdrop-blur-2xl rounded-full p-4 border border-white/30">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl">
                      <span className="text-white text-xl font-bold">▶</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* القسم السفلي للبطاقة */}
              <div className="p-5 relative z-10 bg-dark-400/50">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs text-blue-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                      {t(`work.projects.${id}.category`)}
                    </span>
                    <h4 className="text-sm font-medium text-gray-300 line-clamp-1">
                      {t(`work.projects.${id}.title`)}
                    </h4>
                  </div>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400"
                    whileHover={{ x: 5, backgroundColor: "rgba(59,130,246,0.2)" }}
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Footer القسم مع زر عرض المزيد */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500" />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/20 rounded-full text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-3 group relative overflow-hidden"
              onClick={() => document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 font-semibold">View All Projects</span>
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                →
              </motion.span>
            </motion.button>
            
            <p className="text-xs text-gray-500 mt-2">
              Showing 6 of 12 completed projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkGallery;