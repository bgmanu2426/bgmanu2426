import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { SiGithub, SiLinkedin, SiDiscord, SiWhatsapp } from 'react-icons/si';
import { useRef } from 'react';
import AnimatedBackground from './AnimatedBackground';

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
    value: '@lnbg',
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
  const contactRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      boxShadow: '0 0 15px rgba(251, 146, 60, 0.5)',
      transition: {
        duration: 0.5,
      },
    },
  };

  const linkVariants = {
    initial: {
      backgroundColor: 'rgba(251, 146, 60, 0)',
      scale: 1,
      y: 0,
    },
    hover: {
      backgroundColor: 'rgba(251, 146, 60, 0.1)',
      scale: 1.02,
      y: -5,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-black transition-colors duration-300 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      ref={contactRef}
    >
      <AnimatedBackground variant="orange-glow" />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-orange-400/20 text-4xl font-mono animate-bounce delay-300">
          {'<>'}
        </div>
        <div className="absolute top-40 right-20 text-blue-400/20 text-3xl font-mono animate-bounce delay-700">
          {'{}'}
        </div>
        <div className="absolute bottom-40 left-20 text-green-400/20 text-5xl font-mono animate-bounce delay-1000">
          {'[]'}
        </div>
        <div className="absolute bottom-20 right-40 text-purple-400/20 text-2xl font-mono animate-bounce delay-1500">
          {'()'}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white relative"
        >
          Get in{' '}
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Touch
          </span>
          {/* <motion.span
            className="absolute left-1/2 -bottom-3 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ x: '-50%' }}
          /> */}
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h3 className="text-2xl font-bold mb-6 text-white" variants={itemVariants}>
                Contact Information
              </motion.h3>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="initial"
                  whileHover="hover"
                  variants={linkVariants}
                  className="flex items-center group p-3 rounded-lg transition-all backdrop-blur-sm bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mr-4 group-hover:bg-orange-500/20 transition-colors"
                    variants={iconVariants}
                    whileHover="hover"
                    style={{
                      background:
                        'linear-gradient(145deg, rgba(251, 146, 60, 0.1), rgba(239, 68, 68, 0.1))',
                    }}
                  >
                    <motion.div
                      whileHover={{
                        filter: 'drop-shadow(0 0 5px rgba(251, 146, 60, 0.5))',
                      }}
                    >
                      <item.icon className="w-6 h-6 text-orange-400" />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.p
                      className="text-sm text-neutral-400"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.p>
                    <motion.p
                      className="text-white font-medium"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.value}
                    </motion.p>
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h3 className="text-2xl font-bold mb-6 text-white" variants={itemVariants}>
                Social Media
              </motion.h3>
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="initial"
                  whileHover="hover"
                  variants={linkVariants}
                  className="flex items-center group p-3 rounded-lg transition-all backdrop-blur-sm bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mr-4 group-hover:bg-orange-500/20 transition-colors"
                    variants={iconVariants}
                    whileHover="hover"
                    style={{
                      background:
                        'linear-gradient(145deg, rgba(251, 146, 60, 0.1), rgba(239, 68, 68, 0.1))',
                    }}
                  >
                    <motion.div
                      whileHover={{
                        filter: 'drop-shadow(0 0 5px rgba(251, 146, 60, 0.5))',
                      }}
                    >
                      {typeof item.icon === 'function' ? (
                        <item.icon className="w-6 h-6 text-orange-400" />
                      ) : (
                        <MessageCircle className="w-6 h-6 text-orange-400" />
                      )}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.p
                      className="text-sm text-neutral-400"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.p>
                    {item.value && (
                      <motion.p
                        className="text-white font-medium"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.value}
                      </motion.p>
                    )}
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
