import React, { useState } from "react";

const ContactForm = () => {
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/mblyjrbe", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      e.target.reset();
      setSuccess("Message submitted successfully ✅");
    } else {
      setSuccess("Failed to send. Please try again ❌");
    }
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
