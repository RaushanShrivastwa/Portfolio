import { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const form = e.target;
    const formData = new FormData(form);

    // Attach Web3Forms Access Key
    formData.append("access_key", "48735b34-b311-490c-be54-31aecbd3781f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: "Success! Your message has been sent to Raushan. I will get back to you soon!",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: data.message || "Error submitting message. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please check your network and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {status.message && (
        <div
          className={`p-4 rounded-xl mb-4 border flex items-center gap-3 text-sm font-medium transition-all ${
            status.type === "success"
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
              : "bg-red-500/10 border-red-500/30 text-red-400"
          }`}
        >
          {status.type === "success" ? (
            <FaCheckCircle className="text-emerald-400 text-lg flex-shrink-0" />
          ) : (
            <FaExclamationCircle className="text-red-400 text-lg flex-shrink-0" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
          className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/35 transition-all duration-300 text-white placeholder-grey text-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          required
          className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/35 transition-all duration-300 text-white placeholder-grey text-sm"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message..."
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/35 transition-all duration-300 text-white placeholder-grey resize-none text-sm"
        />
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full h-12 rounded-xl bg-gradient-to-r from-cyan to-lightCyan text-black font-bold text-base flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all duration-300 active:scale-[0.98] cursor-pointer ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <FaPaperPlane className="text-sm" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
