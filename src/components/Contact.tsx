import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { SiGithub, SiLinkedin, SiDiscord, SiWhatsapp } from 'react-icons/si';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@lnbg.in',
    link: 'mailto:contact@lnbg.in',
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsaApp',
    value: '+91 7204000742',
    link: 'https://lnbg.in/whatsapp',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Davanagere, Karnataka, India',
    link: 'https://maps.app.goo.gl/3SVfE3esaqyaiqt99',
  },
];

const socialLinks = [
  {
    icon: SiGithub,
    label: 'GitHub',
    value: '@bgmanu2426',
    link: 'https://lnbg.in/github',
  },
  {
    icon: SiLinkedin,
    label: 'LinkedIn',
    value: '@lnbg7795',
    link: 'https://lnbg.in/linkedin',
  },
  {
    icon: SiDiscord,
    label: 'Discord',
    value: '@bgmanu',
    link: 'https://lnbg.in/discord',
  },
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-content-light dark:text-content-dark"
        >
          Get in{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-content-light dark:text-content-dark">
                Contact Information
              </h3>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary dark:text-primary-light" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                    <p className="text-content-light dark:text-content-dark">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-content-light dark:text-content-dark">
                Social Media
              </h3>
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 dark:group-hover:bg-primary-dark/20 transition-colors">
                    {typeof item.icon === 'function' ? (
                      <item.icon className="w-6 h-6 text-primary dark:text-primary-light" />
                    ) : (
                      <MessageCircle className="w-6 h-6 text-primary dark:text-primary-light" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                    {item.value && (
                      <p className="text-content-light dark:text-content-dark">{item.value}</p>
                    )}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
