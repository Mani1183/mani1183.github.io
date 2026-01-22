// =========================
// EmailJS Init
// =========================
(function () {
  emailjs.init("A_s_StaRloickiciaKVwC");
})();

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Mobile Menu
  ========================= */
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn?.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuBtn.innerHTML = mobileMenu.classList.contains("hidden")
      ? '<ion-icon name="menu-outline"></ion-icon>'
      : '<ion-icon name="close-outline"></ion-icon>';
  });

  mobileMenu?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
    });
  });

  /* =========================
     Theme Toggle
  ========================= */
  const toggleBtn = document.getElementById("themeToggle");
  const html = document.documentElement;

  if (localStorage.getItem("theme") === "light") {
    html.classList.add("light");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn?.addEventListener("click", () => {
    html.classList.toggle("light");
    const isLight = html.classList.contains("light");
    toggleBtn.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  document.getElementById("hireMeBtn")?.addEventListener("click", () => {
    window.open("https://linkedin.com/in/sharmanish11", "_blank");
  });

  /* =========================
     Contact Form (ADMIN + AUTO-REPLY)
  ========================= */

  (function () {
  emailjs.init("A_s_StaRloickiciaKVwC");
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_e989zh8",
        "template_8ukiccr",
      this
    ).then(() => {
      form.reset();
      successMsg.classList.remove("hidden");
    }, (error) => {
      alert("Failed to send message. Try again.");
      console.error(error);
    });
  });
});


  /* =========================
     GitHub Stats
  ========================= */
  fetch("https://api.github.com/users/mani1183")
    .then(res => res.json())
    .then(data => {
      document.getElementById("github-stats").textContent =
        `${data.public_repos} Repos • ${data.followers} Followers`;
    });

  /* =========================
     GitHub Projects
  ========================= */
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
               class="text-blue-400 hover:underline">View on GitHub</a>
          </div>
        `;
      });
    });

});
