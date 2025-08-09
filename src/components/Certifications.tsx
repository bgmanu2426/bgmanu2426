import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certification = [
  {
    title: 'VTU Yukti - 2025 (Winner)',
    organization: 'VTU Belgaum',
    date: 'February 2025',
    badge: 'https://cdn.lnbg.in/awards_certifis/vtu.jpeg',
    certificateUrl:
      'https://drive.google.com/file/d/1qSZ6rDgKAfJVsUP5Skk2UW-habAdD0Li/view?usp=sharing',
  },
  {
    title: 'Github Foundations',
    organization: 'GitHub',
    date: 'January 2025',
    badge: 'https://cdn.lnbg.in/awards_certifis/github-foundations.png',
    certificateUrl:
      'https://www.credly.com/badges/4e11c6d0-6c29-40f1-a49d-00e23e94a787/linked_in_profile',
  },
  {
    title: 'Remote Sensing and Digital Image Analysis',
    organization: 'ISRO',
    date: 'October 2024',
    badge: 'https://cdn.lnbg.in/awards_certifis/isro.jpeg',
    certificateUrl:
      'https://certificate.iirs.gov.in/checkstatus.php?uid=cb22f6b0d42481785d6aa7c7afb0ffa6&enm=20241472573575',
  },
  {
    title: 'Techtonic - 2024',
    organization: 'DSATM',
    date: 'July 2024',
    badge: 'https://cdn.lnbg.in/awards_certifis/techtonic-dsatm.png',
    certificateUrl:
      'https://drive.google.com/file/d/1JoDsgkRnLA2tFqtiePaEbpmI2BWzO-v1/view?usp=sharing',
  },
  {
    title: 'PW Skills Hackathon (Runner Up)',
    organization: 'Physics Wallah',
    date: 'January 2023',
    badge: 'https://cdn.lnbg.in/awards_certifis/pw.jpg',
    certificateUrl: 'https://pwskills.com/',
  },
  {
    title: 'TATA Rural IT Quiz - 2019 (National Level)',
    organization: 'TCS',
    date: 'September 2019',
    badge: 'https://cdn.lnbg.in/awards_certifis/tata_consultancy_service.jpeg',
    certificateUrl:
      'https://www.linkedin.com/in/lnbg/details/certifications/1722100024118/single-media-viewer/?profileId=ACoAADMEZVgByWf1XfV3Bn8vciQ3CcOSQixwNx4',
  },
  {
    title: 'TATA Rural IT Quiz - 2017 (National Level)',
    organization: 'TCS',
    date: 'September 2017',
    badge: 'https://cdn.lnbg.in/awards_certifis/tata_consultancy_service.jpeg',
    certificateUrl:
      'https://www.linkedin.com/in/lnbg/details/certifications/1722099964343/single-media-viewer/?profileId=ACoAADMEZVgByWf1XfV3Bn8vciQ3CcOSQixwNx4',
  },
];

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
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
          Awards &{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Certifications
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certification.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg group"
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
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{award.date}</span>
                  </div>
                  {award.certificateUrl && (
                    <a
                      href={award.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary dark:text-primary-light hover:underline text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
