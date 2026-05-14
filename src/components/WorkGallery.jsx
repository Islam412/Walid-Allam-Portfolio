import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Maximize2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Boeing 787 Dreamliner',
    subtitle: 'Type Rating & Maintenance',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800',
    category: 'Wide-Body Aircraft'
  },
  {
    id: 2,
    title: 'Boeing 777-300ER',
    subtitle: 'EgyptAir Fleet Project 2010',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800',
    category: 'Long Haul Aircraft'
  },
  {
    id: 3,
    title: 'Airbus A330-300',
    subtitle: 'EgyptAir Project 2012',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
    category: 'Wide-Body Aircraft'
  },
  {
    id: 4,
    title: 'Boeing 737-800 NG',
    subtitle: 'Multiple Fleet Projects',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02e120?w=800',
    category: 'Narrow-Body Aircraft'
  },
  {
    id: 5,
    title: 'Airbus A320neo / A321neo',
    subtitle: 'EgyptAir New Generation Fleet',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800',
    category: 'Next Generation'
  },
  {
    id: 6,
    title: 'Airbus A350-900',
    subtitle: 'Latest EgyptAir Project 2023/2024',
    image: 'https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?w=800',
    category: 'Ultra-Long Haul'
  }
];

const WorkGallery = () => {
  const { t } = useTranslation();
  
  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('work.title')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('work.desc')} - Licensed on B737, B777, B787, A330 & A300-600
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative glass-morphism overflow-hidden cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-cyan-400 text-sm">{project.subtitle}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 rounded-full p-2 backdrop-blur-sm">
                    <Maximize2 size={14} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <span className="text-xs text-blue-400">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;