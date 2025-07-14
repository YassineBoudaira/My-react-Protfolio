import React from "react";

export default function Skills() {
  return (
    <section className="section py-20 min-h-screen flex items-center bg-gray-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-pink-400 after:mx-auto after:mt-2">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-center mb-6">Frontend</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-html5 text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">HTML5</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-css3-alt text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">CSS3</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-js-square text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">JavaScript</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-react text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">React</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-vuejs text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">Vue.js</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-angular text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">Angular</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-center mb-6">Backend</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-node-js text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">Node.js</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-python text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">Python</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-php text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">PHP</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fas fa-database text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">MongoDB</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fas fa-database text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">PostgreSQL</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fas fa-database text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">MySQL</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-center mb-6">Tools & Others</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-git-alt text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">Git</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-docker text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">Docker</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-aws text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">AWS</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-linux text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">Linux</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fab fa-figma text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">Figma</span>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
                <i className="fas fa-terminal text-3xl text-indigo-600 mb-2"></i>
                <span className="font-medium">CLI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 