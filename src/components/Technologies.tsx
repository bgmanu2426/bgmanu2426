import { motion } from 'framer-motion';
import { FaNodeJs, FaPython, FaAws, FaJsSquare, FaRaspberryPi } from 'react-icons/fa';
import { SiTypescript, SiArduino, SiMongodb, SiPostgresql, SiExpress, SiEspressif, SiDocker, SiTensorflow, SiTailwindcss, SiReact } from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";

const technologies = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: FaJsSquare, proficiency: 90 },
      { name: 'TypeScript', icon: SiTypescript, proficiency: 70 },
      {name:'Tailwind CSS', icon:SiTailwindcss, proficiency: 80},
      { name: 'React', icon: SiReact, proficiency: 70 },
      { name: 'Next.js', icon: RiNextjsFill, proficiency: 90 },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, proficiency: 90 },
      { name: 'Express.js', icon: SiExpress, proficiency: 90 },
      { name: 'Docker', icon: SiDocker, proficiency: 60 },
      { name: 'PostgreSQL', icon: SiPostgresql, proficiency: 60 },
      { name: 'MongoDB', icon: SiMongodb, proficiency: 90 },
    ]
  },
  {
    category: 'IoT & Embedded Systems',
    skills: [
      { name: "Arduino", icon: SiArduino, proficiency: 100 },
      { name: "Raspberry Pi", icon: FaRaspberryPi, proficiency: 80 },
      { name: "Espressif", icon: SiEspressif, proficiency: 70 },
      { name: 'AWS', icon: FaAws, proficiency: 70 },
      { name: "Azure", icon: VscAzure, proficiency: 60 },
    ]
  }, {
    category: 'AI & ML',
    skills: [
      { name: 'Python', icon: FaPython, proficiency: 85 },
      { name: 'TensorFlow', icon: SiTensorflow, proficiency: 70 },
    ]
  }
];

const Technologies = () => {
  return (
    <motion.section
      id="technologies"
      className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-content-light dark:text-content-dark"
        >
          Technologies & Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-primary dark:text-primary-light">
                {tech.category}
              </h3>
              <div className="space-y-4">
                {tech.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                  >
                    <div className="flex items-center mb-2">
                      <skill.icon className="w-6 h-6 text-primary dark:text-primary-light mr-2" />
                      <span className="text-content-light dark:text-content-dark">
                        {skill.name}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-primary dark:bg-primary-light rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Technologies;
