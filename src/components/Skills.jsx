import { useState } from "react";

export default function Skills() {
  const [filter, setFilter] = useState("frontend");

  const skills = [
    {
      name: "HTML5",
      type: "frontend",
      icon: <ion-icon name="logo-html5" class="text-orange-500"></ion-icon>,
      bg: "bg-orange-500/10",
    },
    {
      name: "CSS3",
      type: "frontend",
      icon: <ion-icon name="logo-css3" class="text-blue-500"></ion-icon>,
      bg: "bg-blue-500/10",
    },
    {
      name: "JavaScript",
      type: "frontend",
      icon: <ion-icon name="logo-javascript" class="text-yellow-400"></ion-icon>,
      bg: "bg-yellow-400/10",
    },
    {
      name: "NextJS",
      type: "frontend",
      icon: (
        <img
          src="https://cdn.simpleicons.org/nextdotjs/white"
          alt="Next.js"
        />
      ),
      bg: "bg-white/10",
    },
    {
      name: "ReactJS",
      type: "frontend",
      icon: <ion-icon name="logo-react" class="text-cyan-400"></ion-icon>,
      bg: "bg-cyan-400/10",
    },
    {
      name: "Tailwind",
      type: "frontend",
      icon: (
        <img
          src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
          alt="Tailwind"
        />
      ),
      bg: "bg-sky-400/10",
    },
    {
      name: "Bootstrap",
      type: "frontend",
      icon: (
        <img
          src="https://cdn.simpleicons.org/bootstrap/563D7C"
          alt="Bootstrap"
        />
      ),
      bg: "bg-gray-400/10",
    },

    {
      name: "NodeJS",
      type: "backend",
      icon: <ion-icon name="logo-nodejs" class="text-green-500"></ion-icon>,
      bg: "bg-green-500/10",
    },
    {
      name: "ExpressJS",
      type: "backend",
      icon: (
        <img
          src="https://cdn.simpleicons.org/express/white"
          alt="Express"
        />
      ),
      bg: "bg-gray-400/10",
    },
    {
      name: "MongoDB",
      type: "backend",
      icon: (
        <img
          src="https://cdn.simpleicons.org/mongodb/47A248"
          alt="MongoDB"
        />
      ),
      bg: "bg-green-600/10",
    },
    {
      name: "PHP",
      type: "backend",
      icon: <ion-icon name="logo-laravel" class="text-indigo-500"></ion-icon>,
      bg: "bg-indigo-500/10",
    },

    {
      name: "GitHub",
      type: "others",
      icon: <ion-icon name="logo-github" class="text-white"></ion-icon>,
      bg: "bg-blue-500/10",
    },
    {
      name: "Git",
      type: "others",
      icon: (
        <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" />
      ),
      bg: "bg-orange-600/10",
    },
    {
      name: "Googling",
      type: "others",
      icon: (
        <img src="https://cdn.simpleicons.org/google/4285F4" alt="Googling" />
      ),
      bg: "bg-blue-400/10",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <h2 className="section-title text-center">Tech Stack</h2>

      <div className="flex justify-center mb-12">
        <div className="bg-gray-800/50 p-1 rounded-xl inline-flex border border-gray-700">
          <button
            className={`filter-btn ${filter === "frontend" ? "active" : ""}`}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button
            className={`filter-btn ${filter === "backend" ? "active" : ""}`}
            onClick={() => setFilter("backend")}
          >
            Backend
          </button>
          <button
            className={`filter-btn ${filter === "others" ? "active" : ""}`}
            onClick={() => setFilter("others")}
          >
            Others
          </button>
        </div>
      </div>

      <div
        id="skills-grid"
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-4 justify-items-center mt-12"
      >
        {skills
          .filter((s) => s.type === filter)
          .map((s) => (
            <div key={s.name} className={`skill-item ${s.type}`}>
              <div className={`icon-circle ${s.bg}`}>{s.icon}</div>
              <p>{s.name}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
