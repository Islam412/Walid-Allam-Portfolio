import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plane, Wrench, Award, Users, TrendingUp, Calendar, BookOpen, Globe, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  const stats = [
    { icon: Calendar, key: 'exp1', color: 'from-blue-500 to-blue-600', value: '20+', label: 'Years Experience' },
    { icon: Wrench, key: 'exp2', color: 'from-cyan-500 to-cyan-600', value: '5', label: 'Type Ratings' },
    { icon: Award, key: 'exp3', color: 'from-purple-500 to-purple-600', value: '11', label: 'New Aircraft Projects' },
    { icon: Globe, color: 'from-emerald-500 to-emerald-600', value: 'Multiple', label: 'Destinations Worldwide' },
    { icon: BookOpen, color: 'from-orange-500 to-orange-600', value: 'B1', label: 'Licensed Engineer' },
    { icon: Users, color: 'from-rose-500 to-rose-600', value: 'Part 145', label: 'Base Maintenance' },
  ];
  
  const typeRatings = ['Boeing 737 Series (3/4/5/6/7/8/900)', 'Boeing 777-200/300ER', 'Boeing 787-8/9/10', 'Airbus A330 PDC', 'Airbus A300-600'];
  const projects = ['B737-800 (2007, 2012, 2015)', 'B777-300ER (2010)', 'A330-300 (2012)', 'ERJ170 (2010)', 'B787-8/9/10 (2019)', 'A220-300 (2019)', 'A320 neo (2019)', 'A321neo (2022)', 'A350-900 (2023/2024)', 'B737MAX (2023/2024)'];
  const licenses = t('about.licenses', { returnObjects: true });
  
  return (
    <section ref={ref} id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm">20+ Years of Excellence</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('about.title')}
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.bio')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-morphism p-4 text-center group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} p-2.5 group-hover:scale-110 transition-transform duration-300 animate-float`}>
                <stat.icon className="w-full h-full text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className="glass-morphism p-6 group hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Plane size={24} />
              </motion.div>
              {t('about.typeRatingsTitle')}
            </h3>
            <ul className="space-y-2">
              {typeRatings.map((type, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors duration-300"
                >
                  <motion.span 
                    className="text-blue-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                  >
                    ✈️
                  </motion.span>
                  {type}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className="glass-morphism p-6 group hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Award size={24} />
              </motion.div>
              {t('about.projectsTitle')}
            </h3>
            <div className="space-y-1 max-h-64 overflow-y-auto custom-scroll">
              {projects.map((project, index) => (
                <motion.p 
                  key={index} 
                  className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  • {project}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 glass-morphism p-6 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <motion.h3 
            className="text-xl font-bold text-purple-400 mb-3 flex items-center justify-center gap-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles size={18} />
            {t('about.licensesTitle')}
            <Sparkles size={18} />
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.isArray(licenses) && licenses.map((cert, i) => (
              <motion.span 
                key={i} 
                className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-blue-500/20 hover:text-white transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;