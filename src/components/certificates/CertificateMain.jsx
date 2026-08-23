
import { motion } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants";
import { certificatesData } from './Certificates';
import TiltCard from "../TiltCard";

const CertificateMain = () => {
  return (
    <div id="certifications" className="max-w-[1200px] mx-auto px-4 py-16">
      {/* Section Title */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Certifications & <span className="text-cyan">CP Achievements</span>
        </h2>
        <p className="text-grey mt-4 text-base md:text-lg max-w-[650px] mx-auto leading-relaxed">
          Professional cloud, AI, and data analytics credentials along with competitive programming accomplishments across global platforms.
        </p>
      </motion.div>

      {/* Grid container for certificates */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4"
      >
        {certificatesData.map((certificate) => (
          <TiltCard 
            key={certificate.id} 
            className="flex flex-col h-full border border-white/10 bg-brown/20 backdrop-blur-xl p-6 rounded-3xl shadow-xl justify-between group hover:border-cyan/40 transition-colors duration-300"
          >
            <div className="flex flex-col gap-4">
              {/* Header: Issuer Logo & Name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center p-2 border border-white/10 group-hover:border-cyan/30 transition-colors duration-300">
                    <img 
                      src={certificate.icon} 
                      alt={`${certificate.issuer} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-lightGrey uppercase tracking-wider">
                    {certificate.issuer}
                  </span>
                </div>
                {certificate.date && (
                  <span className="text-xs font-mono text-cyan bg-cyan/10 px-2.5 py-0.5 rounded-full border border-cyan/20">{certificate.date}</span>
                )}
              </div>

              {/* Title & Description */}
              <div className="mt-2">
                <h3 className="text-white text-lg font-bold group-hover:text-cyan transition-colors duration-300 tracking-tight leading-snug">
                  {certificate.title}
                </h3>
                <p className="text-grey text-sm mt-3 leading-relaxed">
                  {certificate.description}
                </p>
              </div>
            </div>

            {/* Verification Link */}
            {certificate.link && certificate.link !== "#" ? (
              <a 
                href={certificate.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 text-xs font-bold text-cyan hover:text-white flex items-center gap-1 group/link transition-colors duration-300"
              >
                Verify Credential <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            ) : (
              <span className="mt-6 text-xs text-grey font-mono uppercase tracking-wider self-start px-2 py-0.5 rounded bg-white/5 border border-white/5">
                Credential Verified
              </span>
            )}
          </TiltCard>
        ))}
      </motion.div>

      <div className="w-full h-[1px] mt-24 bg-white/10"></div>
    </div>
  );
};

export default CertificateMain;
