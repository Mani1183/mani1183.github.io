/* =========================
   Mobile Navbar Toggle
========================= */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

/* Close menu on link click */
mobileMenu?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

/* Mobile Hire Me */
document.getElementById("hireMeBtnMobile")?.addEventListener("click", () => {
  window.open("https://linkedin.com/in/sharmanish11", "_blank");
});

/* Mobile Theme Toggle */
document.getElementById("themeToggleMobile")?.addEventListener("click", () => {
  html.classList.toggle("light");
  const isLight = html.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Theme Toggle
const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;

if (localStorage.getItem("theme") === "light") {
  html.classList.add("light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("light");
  const isLight = html.classList.contains("light");
  toggleBtn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Hire Me → LinkedIn
document.getElementById("hireMeBtn").onclick = () => {
  window.open("https://linkedin.com/in/sharmanish11", "_blank");
};

// Contact form UI
const form = document.getElementById("contact-form");
const msgBox = document.getElementById("message-box");
const msgText = document.getElementById("message-text");

form.addEventListener("submit", e => {
  e.preventDefault();
  msgText.textContent = "✅ Message sent successfully!";
  msgBox.classList.add("show");
  form.reset();
  setTimeout(() => msgBox.classList.remove("show"), 4000);
});

// GitHub stats
fetch("https://api.github.com/users/mani1183")
  .then(res => res.json())
  .then(data => {
    document.getElementById("github-stats").textContent =
      `${data.public_repos} Repos • ${data.followers} Followers`;
  });

// GitHub projects
fetch("https://api.github.com/users/mani1183/repos")
  .then(res => res.json())
  .then(repos => {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    repos.filter(r => !r.fork).slice(0, 4).forEach(repo => {
      container.innerHTML += `
        <div class="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-2">${repo.name}</h3>
          <p class="text-gray-400 mb-4">${repo.description || "No description"}</p>
          <a href="${repo.html_url}" target="_blank"
             class="text-blue-400 hover:underline">GitHub</a>
        </div>
      `;
    });
  });
