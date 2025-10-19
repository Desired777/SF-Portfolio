import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="space-y-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      {submitted ? (
        <div className="frosted text-center font-semibold text-green-600">
          Thank you for submitting! 🌟
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 frosted p-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 rounded-lg border"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 rounded-lg border"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 rounded-lg border"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
