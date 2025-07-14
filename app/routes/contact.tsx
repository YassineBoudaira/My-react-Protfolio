import React from "react";

export default function Contact() {
  return (
    <section className="section py-20 min-h-screen flex items-center bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-pink-400 after:mx-auto after:mt-2">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-2">Let's work together!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
            <div className="mb-6 space-y-4">
              <div className="flex items-center gap-3 p-4 bg-indigo-50 dark:bg-slate-800 rounded-lg shadow">
                <i className="fas fa-envelope text-indigo-600"></i>
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-indigo-50 dark:bg-slate-800 rounded-lg shadow">
                <i className="fas fa-phone text-indigo-600"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-indigo-50 dark:bg-slate-800 rounded-lg shadow">
                <i className="fas fa-map-marker-alt text-indigo-600"></i>
                <span>Your City, Country</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-pink-400 text-white text-xl hover:scale-110 transition"><i className="fab fa-github"></i></a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-pink-400 text-white text-xl hover:scale-110 transition"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-pink-400 text-white text-xl hover:scale-110 transition"><i className="fab fa-twitter"></i></a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-pink-400 text-white text-xl hover:scale-110 transition"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <form className="bg-indigo-50 dark:bg-slate-800 rounded-2xl p-8 shadow space-y-6 contact-form">
            <div>
              <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full p-4 rounded-lg border-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-600 transition" />
            </div>
            <div>
              <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full p-4 rounded-lg border-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-600 transition" />
            </div>
            <div>
              <input type="text" id="subject" name="subject" placeholder="Subject" required className="w-full p-4 rounded-lg border-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-600 transition" />
            </div>
            <div>
              <textarea id="message" name="message" placeholder="Your Message" rows={5} required className="w-full p-4 rounded-lg border-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-600 transition"></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
} 