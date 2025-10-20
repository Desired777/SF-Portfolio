import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
    >
      <div className="backdrop-blur-2xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-10 max-w-md w-full transition-all duration-500 hover:shadow-white/10">
        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
          ✉️ Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Let’s bring your ideas to life. Feel free to message me!
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          id="form"
          className="flex flex-col gap-5"
        >
          {/* Your Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="YOUR_ACCESS_KEY_HERE"
          />

          {/* Email Subject */}
          <input
            type="hidden"
            name="subject"
            value="New Submission from Desired777 Portfolio"
          />

          {/* From Name */}
          <input
            type="hidden"
            name="from_name"
            value="Desired777 Portfolio"
          />

          {/* Redirect after success */}
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />

          {/* Basic Botcheck */}
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          {/* Input Fields */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl bg-white/30 dark:bg-gray-900/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 backdrop-blur-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl bg-white/30 dark:bg-gray-900/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 backdrop-blur-md"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-xl bg-white/30 dark:bg-gray-900/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 backdrop-blur-md"
          ></textarea>

          <button
            type="submit"
            className="mt-3 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold shadow-md hover:scale-105 hover:shadow-white/20 transition-all duration-300"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
}
