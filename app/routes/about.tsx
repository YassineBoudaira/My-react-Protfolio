import React from "react";

export default function About() {
  return (
    <section className="section py-20 min-h-screen flex items-center bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-pink-400 after:mx-auto after:mt-2">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">I'm a passionate full-stack developer with expertise in modern web technologies. I specialize in creating scalable, user-friendly applications that solve real-world problems.</p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">With years of experience in both frontend and backend development, I bring ideas to life through clean code and innovative solutions.</p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center bg-indigo-50 dark:bg-slate-800 rounded-xl p-6 shadow">
                <h3 className="text-2xl font-bold text-indigo-600 mb-1">50+</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</p>
              </div>
              <div className="text-center bg-indigo-50 dark:bg-slate-800 rounded-xl p-6 shadow">
                <h3 className="text-2xl font-bold text-indigo-600 mb-1">5+</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</p>
              </div>
              <div className="text-center bg-indigo-50 dark:bg-slate-800 rounded-xl p-6 shadow">
                <h3 className="text-2xl font-bold text-indigo-600 mb-1">30+</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-indigo-50 dark:bg-slate-800 rounded-2xl p-8 shadow text-center">
              <div className="w-28 h-28 bg-gradient-to-br from-indigo-600 to-pink-400 rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-4">
                <i className="fas fa-user"></i>
              </div>
              <h3 className="text-xl font-bold mb-1">Your Name</h3>
              <p className="text-gray-600 dark:text-gray-300">Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 