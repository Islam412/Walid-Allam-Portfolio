import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// استبدل هذه بالصور الحقيقية الخاصة بوليد
const workImages = [
  { id: 1, title: "Aircraft Maintenance", img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600" },
  { id: 2, title: "Flight Engineering", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02e120?w=600" },
  { id: 3, title: "Aerospace Technology", img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600" },
  { id: 4, title: "Quality Control", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600" }
];

const WorkGallery = () => {
  const { t } = useTranslation();
  
  return (
    <section id="work" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">{t('work.title')}</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {workImages.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, rotateY: 30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03, rotateY: 5 }}
            className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 cursor-pointer"
          >
            <img src={item.img} alt={item.title} className="w-full h-80 object-cover group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-6">
              <p className="text-white text-xl font-bold">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkGallery;