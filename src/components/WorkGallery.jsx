import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Maximize2, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const WorkGallery = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
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
  
  return (
    <section ref={sectionRef} id="work" className="py-20 px-4 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5 rounded-3xl"
        style={{ opacity: backgroundOpacity }}
      />
      
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          >
            <Sparkles size={16} className="text-yellow-400 animate-pulse" />
            <span className="text-sm text-gray-300">Featured Projects</span>
            <Sparkles size={16} className="text-yellow-400 animate-pulse" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('work.title')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t('work.desc')}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                y: -12,
                scale: 1.02,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative glass-morphism overflow-hidden cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10" />
              
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={projectImages[index]} 
                  alt={t(`work.projects.${id}.title`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-dark-400 via-dark-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20"
                  whileHover={{ y: 0 }}
                >
                  <h3 className="text-xl font-bold text-white mb-1">{t(`work.projects.${id}.title`)}</h3>
                  <p className="text-cyan-400 text-sm">{t(`work.projects.${id}.subtitle`)}</p>
                </motion.div>
                
                <motion.div 
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-black/60 backdrop-blur-md rounded-full p-2.5 shadow-lg">
                    <Maximize2 size={16} className="text-white" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <div className="bg-blue-600/80 backdrop-blur-md rounded-full px-3 py-1">
                    <span className="text-white text-xs font-bold">#{id.toString().padStart(2, '0')}</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="p-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                    {t(`work.projects.${id}.category`)}
                  </span>
                  <motion.div
                    className="text-gray-500 text-xs"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group"
            onClick={() => document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>View All Projects</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkGallery;