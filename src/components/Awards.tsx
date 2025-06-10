import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const awards = [
  {
    title: 'Github Foundations',
    organization: 'GitHub',
    date: 'January 2025',
    badge: 'https://cdn.lnbg.in/awards_certifis/github-foundations.png'
  },
  {
    title: 'Remote Sensing and Digital Image Analysis',
    organization: 'ISRO',
    date: 'October 2024',
    badge: 'https://cdn.lnbg.in/awards_certifis/isro.jpeg'
  },
  {
    title: 'Techtonic - DSATM',
    organization: 'DSATM',
    date: 'July 2024',
    badge: 'https://cdn.lnbg.in/awards_certifis/techtonic-dsatm.png'
  },
  {
    title: "FOSS Hack 2023",
    organization: "FOSS Hack",
    date: "August 2023",
    badge: "https://cdn.lnbg.in/awards_certifis/foss-hack.webp"
  },
  {
    title: 'PW Skills Hackathon',
    organization: 'Physics Wallah',
    date: 'January 2023',
    badge: 'https://cdn.lnbg.in/awards_certifis/pw.jpg'
  },
  {
    title: 'TATA Rural IT Quiz (National Level)',
    organization: 'Tata Consultancy Services',
    date: 'September 2019',
    badge: 'https://cdn.lnbg.in/awards_certifis/tata_consultancy_service.jpeg'
  },
];

const Awards = () => {
  return (
    <motion.section
      id="awards"
      className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-content-light dark:text-content-dark"
        >
          Awards & Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={award.badge}
                    alt={`${award.title} badge`}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-content-light dark:text-content-dark">
                    {award.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Award className="w-4 h-4 mr-2" />
                    <span>{award.organization}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{award.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Awards;
