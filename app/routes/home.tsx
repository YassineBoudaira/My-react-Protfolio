import React from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Full-Stack Developer Portfolio" },
    { name: "description", content: "Full-Stack Developer Portfolio - Creating innovative web solutions with modern technologies" },
  ];
}

export default function Home() {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-all duration-300 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 gradient-bg opacity-10 -z-10"></div>
      
      {/* Home Section */}
      <section id="home" className="section pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 w-full">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-4">Full-Stack Developer</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Creating innovative web solutions with modern technologies</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>View My Work</button>
              <button className="px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get In Touch</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-48 h-48 bg-gradient-to-br from-indigo-600 to-pink-400 rounded-2xl flex items-center justify-center text-6xl text-white shadow-lg animate-bounce-slow">
              <i className="fas fa-code"></i>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section py-20 min-h-screen flex items-center bg-white dark:bg-slate-900">
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

      {/* Services Section */}
      <section id="services" className="section py-20 min-h-screen flex items-center bg-gray-50 dark:bg-slate-800">
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

      {/* Projects Section */}
      <section id="projects" className="section py-20 min-h-screen flex items-center bg-white dark:bg-slate-900">
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

      {/* Skills Section */}
      <section id="skills" className="section py-20 min-h-screen flex items-center bg-gray-50 dark:bg-slate-800">
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

      {/* Contact Section */}
      <section id="contact" className="section py-20 min-h-screen flex items-center bg-white dark:bg-slate-900">
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

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-slate-800 py-8 text-center border-t border-gray-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-600 dark:text-gray-300">&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
