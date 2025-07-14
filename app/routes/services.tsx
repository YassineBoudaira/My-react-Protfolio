import React from "react";

export default function Services() {
  return (
    <section className="section py-20 min-h-screen flex items-center bg-gray-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-pink-400 after:mx-auto after:mt-2">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-center shadow hover:-translate-y-2 transition">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-pink-400 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Custom websites and web applications built with modern frameworks and best practices.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-center shadow hover:-translate-y-2 transition">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-pink-400 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Mobile Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Cross-platform mobile applications using React Native and other modern technologies.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-center shadow hover:-translate-y-2 transition">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-pink-400 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
              <i className="fas fa-database"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Backend Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Robust server-side applications with secure APIs and database management.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-center shadow hover:-translate-y-2 transition">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-pink-400 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
              <i className="fas fa-cloud"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Cloud Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300">Deployment and management of applications on cloud platforms like AWS and Azure.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-center shadow hover:-translate-y-2 transition">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-pink-400 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">SEO Optimization</h3>
            <p className="text-gray-600 dark:text-gray-300">Search engine optimization to improve your website's visibility and ranking.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-center shadow hover:-translate-y-2 transition">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-pink-400 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4">
              <i className="fas fa-tools"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Maintenance & Support</h3>
            <p className="text-gray-600 dark:text-gray-300">Ongoing maintenance, updates, and technical support for your applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 