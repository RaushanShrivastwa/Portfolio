import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-20 px-4 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
        Get In <span className="text-cyan">Touch</span>
      </h2>
      <p className="text-grey text-lg text-center max-w-[500px] mx-auto mb-12 leading-relaxed">
        Feel free to reach out for collaborations, job opportunities, or just to say hi!
      </p>
      <div className="flex justify-between gap-12 md:gap-20 glass-panel border border-white/10 bg-brown/20 backdrop-blur-md p-8 md:p-12 rounded-[2rem] lg:flex-row sm:flex-col shadow-2xl">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
