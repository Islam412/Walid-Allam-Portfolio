import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plane, Wrench, Award, Users, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    { icon: Plane, value: '8+', label: 'Years Experience', color: 'from-blue-500 to-blue-600' },
    { icon: Wrench, value: '200+', label: 'Aircraft Maintained', color: 'from-cyan-500 to-cyan-600' },
    { icon: Award, value: '12', label: 'Certifications', color: 'from-purple-500 to-purple-600' },
    { icon: Users, value: '50+', label: 'Team Projects', color: 'from-pink-500 to-pink-600' },
    { icon: TrendingUp, value: '100%', label: 'Safety Record', color: 'from-green-500 to-green-600' },
    { icon: Shield, value: '24/7', label: 'Support Available', color: 'from-orange-500 to-orange-600' },
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
          <p className="text-gray-300 max-w-2xl mx-auto">
            Passionate aerospace engineer dedicated to safety, innovation, and excellence in civil aviation.
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
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-morphism p-8 relative overflow-hidden group"
        >
          {/* تأثير ضوء خلفي متحرك */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
          
          <p className="text-gray-300 leading-relaxed text-center relative z-10">
            With over 8 years of experience in civil aviation engineering, I specialize in aircraft maintenance, 
            quality assurance, and safety management systems. Holding international certifications from FAA, EASA, 
            and IATA, I've successfully managed maintenance operations for Boeing 737, Airbus A320, and regional jet fleets.
            <br /><br />
            <span className="text-blue-400 font-semibold">✈️ Committed to excellence in aviation safety and innovation.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;