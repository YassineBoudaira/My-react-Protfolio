import React, { useState } from "react";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "services", label: "Services" },
  { to: "projects", label: "Projects" },
  { to: "skills", label: "Skills" },
  { to: "contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark");
    // Optionally persist theme in localStorage
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  const handleNavClick = (sectionId: string) => {
    setMobileOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-700 z-50 transition-all">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="font-bold text-xl text-indigo-600">
          <button onClick={() => handleNavClick('home')} className="hover:text-indigo-700 transition">Portfolio</button>
        </div>
        <ul className="nav-menu hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <button
                className="nav-link hover:text-indigo-600 transition"
                onClick={() => handleNavClick(link.to)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <div
            className="nav-toggle flex flex-col cursor-pointer mr-4 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-100 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-100 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-100"></span>
          </div>
          <button
            type="button"
            className="ml-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
          >
            <i className="fas fa-moon dark:fa-sun"></i>
          </button>
        </div>
      </div>
      <ul
        className={`nav-menu md:hidden flex-col gap-4 font-medium px-6 pb-4 ${mobileOpen ? "flex" : "hidden"}`}
      >
        {navLinks.map((link) => (
          <li key={link.to}>
            <button
              className="nav-link block py-2 hover:text-indigo-600 transition w-full text-left"
              onClick={() => handleNavClick(link.to)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 