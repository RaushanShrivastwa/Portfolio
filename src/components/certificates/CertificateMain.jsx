// src/components/CertificateMain.jsx
import { motion } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants";
import { certificatesData } from './Certificates'; // Import the data

const CertificateMain = () => {
  return (
    <div id="certifications" className="max-w-[1200px] mx-auto px-4 py-12">
      {/* Section Title */}
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full text-center mb-12"
      >
        <h2 className="text-6xl text-cyan font-bold">Certifications</h2>
      </motion.div>

      {/* Grid container for certificates */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4"
      >
        {certificatesData.map((certificate) => (
          <div key={certificate.id} className="flex flex-col items-center text-center">
            {/* The certificate icon/image, wrapped in a link to make it clickable */}
            <a 
              href={certificate.link || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View certificate for ${certificate.title}`}
              className="mb-4" // Adds space between the image and the title
            >
              <img 
                src={certificate.icon} 
                alt={`${certificate.title} icon`} 
                className="w-24 h-24 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </a>
            {/* The certificate title */}
            <h3 className="text-white text-lg font-medium">
              {certificate.title}
            </h3>
          </div>
        ))}
      </motion.div>

      <div className="w-full h-1 mt-10 bg-lightBrown"></div>
    </div>
  );
};

export default CertificateMain;
