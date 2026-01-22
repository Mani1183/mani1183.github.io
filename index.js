// EmailJS Init
(function () {
  emailjs.init("A_s_StaRloickiciaKVwC");
})();

document.addEventListener("DOMContentLoaded", () => {

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Hire Me
  document.getElementById("hireMeBtn")?.addEventListener("click", () => {
    window.open("https://linkedin.com/in/sharmanish11", "_blank");
  });

  // Contact Form
  const form = document.getElementById("contact-form");
  const success = document.getElementById("form-success");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_e989zh8",
        "template_8dbqjhk",
        form
      );
      form.reset();
      success.classList.remove("hidden");
    } catch (err) {
      alert("Failed to send message");
      console.error(err);
    }
  });

  // GitHub Projects
  fetch("https://api.github.com/users/mani1183/repos")
    .then(res => res.json())
    .then(repos => {
      const container = document.getElementById("projects-container");
      container.innerHTML = "";
      repos.filter(r => !r.fork).slice(0, 4).forEach(repo => {
        container.innerHTML += `
          <div class="bg-gray-800 p-5 rounded-lg">
            <h3 class="font-semibold">${repo.name}</h3>
            <p class="text-gray-400">${repo.description || ""}</p>
            <a href="${repo.html_url}" target="_blank" class="text-blue-400">GitHub</a>
          </div>
        `;
      });
    });
});
