import React from "react";

export default function Projects() {
  return (
    <section className="section py-20 min-h-screen flex items-center bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-pink-400 after:mx-auto after:mt-2">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition">
            <div className="h-48 flex items-center justify-center text-4xl bg-gradient-to-br from-indigo-600 to-pink-400 text-white">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">E-Commerce Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">A full-featured online store with payment integration and admin dashboard.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">React</span>
                <span className="bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">Node.js</span>
                <span className="bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">MongoDB</span>
              </div>
              <div className="flex gap-2">
                <a href="#" className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">Live Demo</a>
                <a href="#" className="px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 text-sm font-semibold hover:bg-indigo-600 hover:text-white transition">GitHub</a>
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition">
            <div className="h-48 flex items-center justify-center text-4xl bg-gradient-to-br from-indigo-600 to-pink-400 text-white">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Real-time data visualization dashboard with interactive charts and reports.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">Vue.js</span>
                <span className="bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">Python</span>
                <span className="bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">PostgreSQL</span>
              </div>
              <div className="flex gap-2">
                <a href="#" className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">Live Demo</a>
                <a href="#" className="px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 text-sm font-semibold hover:bg-indigo-600 hover:text-white transition">GitHub</a>
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition">
            <div className="h-48 flex items-center justify-center text-4xl bg-gradient-to-br from-indigo-600 to-pink-400 text-white">
              <i className="fas fa-users"></i>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">Social Media App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">A social networking platform with real-time messaging and content sharing.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">Angular</span>
                <span className="bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">Express</span>
                <span className="bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">Socket.io</span>
              </div>
              <div className="flex gap-2">
                <a href="#" className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">Live Demo</a>
                <a href="#" className="px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 text-sm font-semibold hover:bg-indigo-600 hover:text-white transition">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 