import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const certification = [
  {
    title: 'Github Foundations',
    organization: 'GitHub',
    date: 'January 2025',
    badge: 'https://cdn.lnbg.in/awards_certifis/github-foundations.png',
  },
  {
    title: 'Remote Sensing and Digital Image Analysis',
    organization: 'ISRO',
    date: 'October 2024',
    badge: 'https://cdn.lnbg.in/awards_certifis/isro.jpeg',
  },
  {
    title: 'Techtonic - DSATM',
    organization: 'DSATM',
    date: 'July 2024',
    badge: 'https://cdn.lnbg.in/awards_certifis/techtonic-dsatm.png',
  },
  {
    title: 'FOSS Hack 2023',
    organization: 'FOSS Hack',
    date: 'August 2023',
    badge: 'https://cdn.lnbg.in/awards_certifis/foss-hack.webp',
  },
  {
    title: 'PW Skills Hackathon',
    organization: 'Physics Wallah',
    date: 'January 2023',
    badge: 'https://cdn.lnbg.in/awards_certifis/pw.jpg',
  },
  {
    title: 'TATA Rural IT Quiz (National Level)',
    organization: 'Tata Consultancy Services',
    date: 'September 2019',
    badge: 'https://cdn.lnbg.in/awards_certifis/tata_consultancy_service.jpeg',
  },
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 300,
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -30 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      filter: 'drop-shadow(0 0 10px rgba(251, 146, 60, 0.5))',
      transition: {
        duration: 0.4,
      },
    },
  };

  const infoVariants = {
    hover: {
      x: 5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      id="certification"
      className="py-20 bg-black transition-colors duration-300 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <AnimatedBackground variant="orange-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white relative"
        >
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Certifications
          </span>
          {/* <motion.span
            className="absolute left-1/2 -bottom-3 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ x: '-50%' }}
          /> */}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {certification.map((award, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 shadow-lg transform-gpu flex flex-col h-full relative overflow-hidden hover:border-orange-500/50 transition-all duration-300"
            >
              {/* Subtle gradient overlay that appears on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Animated corner accent */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 bg-orange-500/10 rounded-full"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}
              />

              <div className="flex items-start space-x-4 relative z-10">
                <motion.div className="flex-shrink-0" variants={badgeVariants} whileHover="hover">
                  <img
                    src={award.badge}
                    alt={`${award.title} badge`}
                    className="w-16 h-16 object-contain rounded-full shadow-md bg-neutral-800/50 p-1"
                  />
                </motion.div>
                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-bold mb-2 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.02,
                      textShadow: '0 0 5px rgba(251, 146, 60, 0.3)',
                    }}
                  >
                    {award.title}
                  </motion.h3>
                  <motion.div
                    className="flex items-center text-neutral-300 mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={infoVariants}
                  >
                    <Award className="w-4 h-4 mr-2" />
                    <span>{award.organization}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-neutral-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={infoVariants}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{award.date}</span>
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements that animate on hover */}
              <motion.div
                className="absolute bottom-2 right-2 w-10 h-10 opacity-20"
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 0.3, scale: 1, rotate: 45 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="w-full h-full text-orange-500" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certifications;
