import { useState } from 'react';
import { motion } from 'framer-motion';

const CertificateInfo = ({ certificate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Certificate Thumbnail */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl border-2 border-orange overflow-hidden bg-white p-2 flex items-center justify-center">
          <img 
            src={certificate.icon} 
            alt={certificate.title} 
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-center mt-2 text-lightGrey text-sm">{certificate.title}</p>
      </motion.div>

      {/* Modal for detailed view */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={() => setIsOpen(false)}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-darkBg border-2 border-orange rounded-2xl max-w-3xl w-full p-6"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={certificate.icon} 
                  alt={certificate.title} 
                  className="w-32 h-32 rounded-xl object-contain mx-auto"
                />
              </div>
              <div>
                <h3 className="font-bold text-cyan text-xl">{certificate.title}</h3>
                <p className="text-orange">{certificate.issuer}</p>
                <p className="text-lightGrey mb-4">{certificate.date}</p>
                <p className="text-white">{certificate.description}</p>
                {certificate.link && (
                  <a 
                    href={certificate.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan hover:underline mt-4 inline-block"
                  >
                    View Credential
                  </a>
                )}
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-6 text-orange hover:text-cyan bg-lightbrown"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CertificateInfo;