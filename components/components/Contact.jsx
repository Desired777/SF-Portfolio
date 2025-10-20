import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setSubmitted(true);
        form.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-screen px-4 py-20"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-lg border border-white/20 transition-transform transform hover:scale-105"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Contact Me
        </h2>

        {submitted && (
          <p className="text-green-400 mb-4 text-center">
            Form submitted successfully!
          </p>
        )}

        <input type="hidden" name="access_key" value="1a6dc7aa-9a8b-44eb-9707-ce40cc8aa422" />
        <input type="hidden" name="subject" value="New Submission from Web3Forms" />
        <input type="hidden" name="from_name" value="Desired777 Portfolio" />
        <input type="hidden" name="redirect" value="https://web3forms.com/success" />
        <input type="checkbox" name="botcheck" style={{ display: "none" }} />

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors resize-none h-32"
          />
          <button
            type="submit"
            className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
