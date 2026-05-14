import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plane, Wrench, Award, Users, TrendingUp, Calendar, BookOpen, Globe } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    { icon: Calendar, value: '20+', label: 'Years Experience', color: 'from-blue-500 to-blue-600' },
    { icon: Wrench, value: '5', label: 'Type Ratings', color: 'from-cyan-500 to-cyan-600' },
    { icon: Award, value: '11', label: 'New Aircraft Projects', color: 'from-purple-500 to-purple-600' },
    { icon: Globe, value: 'Multiple', label: 'Destinations Worldwide', color: 'from-emerald-500 to-emerald-600' },
    { icon: BookOpen, value: 'B1', label: 'Licensed Engineer', color: 'from-orange-500 to-orange-600' },
    { icon: Users, value: 'Part 145', label: 'Base Maintenance', color: 'from-rose-500 to-rose-600' },
  ];
  
  const typeRatings = [
    'Boeing 737 Series (3/4/5/6/7/8/900)',
    'Boeing 777-200/300ER',
    'Boeing 787-8/9/10',
    'Airbus A330 PDC',
    'Airbus A300-600'
  ];
  
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('about.title')}
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            {t('about.bio')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-morphism p-4 text-center group cursor-pointer"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-full h-full text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Type Ratings Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-morphism p-6"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
              <Plane size={24} />
              Aircraft Type Ratings
            </h3>
            <ul className="space-y-2">
              {typeRatings.map((type, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <span className="text-blue-400">✈️</span>
                  {type}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* EgyptAir Projects Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-morphism p-6"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <Award size={24} />
              EgyptAir New Projects
            </h3>
            <div className="space-y-1 max-h-64 overflow-y-auto custom-scroll">
              <p className="text-gray-300 text-sm">• B737-800 (2007, 2012, 2015)</p>
              <p className="text-gray-300 text-sm">• B777-300ER (2010)</p>
              <p className="text-gray-300 text-sm">• A330-300 (2012)</p>
              <p className="text-gray-300 text-sm">• ERJ170 (2010)</p>
              <p className="text-gray-300 text-sm">• B787-8/9/10 (2019)</p>
              <p className="text-gray-300 text-sm">• A220-300 (2019)</p>
              <p className="text-gray-300 text-sm">• A320 neo (2019)</p>
              <p className="text-gray-300 text-sm">• A321neo (2022)</p>
              <p className="text-gray-300 text-sm">• A350-900 (2023/2024)</p>
              <p className="text-gray-300 text-sm">• B737MAX (2023/2024)</p>
            </div>
          </motion.div>
        </div>
        
        {/* Qualifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 glass-morphism p-6 text-center"
        >
          <h3 className="text-xl font-bold text-purple-400 mb-3">Licenses & Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['B1 Licensed Engineer', 'Part 145', 'Part M', 'LWTR', 'ETOPS', 'EWIS', 'CDCCL', 'Human Factor'].map((cert, i) => (
              <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;