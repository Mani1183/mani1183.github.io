// =======================
// EmailJS Init
// =======================
(function () {
  emailjs.init("A_s_StaRloickiciaKVwC"); // ✅ Public Key
})();

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Mobile Menu
  ========================= */
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  /* =========================
     Hire Me Button
  ========================= */
  document.getElementById("hireMeBtn")?.addEventListener("click", () => {
    window.open("https://linkedin.com/in/sharmanish11", "_blank");
  });

  /* =========================
     CONTACT FORM (EmailJS)
  ========================= */
  const form = document.getElementById("contact-form");
  const success = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
        await emailjs.sendForm(
          "service_e989zh8",     // ✅ Service ID
          "template_8dbqjhk",    // ✅ Template ID (Admin)
          form,
          "A_s_StaRloickiciaKVwC" // ✅ REQUIRED public key AGAIN
        );

        form.reset();
        success.classList.remove("hidden");

      } catch (error) {
        alert("❌ Failed to send message. Check EmailJS settings.");
        console.error("EmailJS Error:", error);
      }
    });
  }

  /* =========================
     GitHub Projects
  ========================= */
  fetch("https://api.github.com/users/mani1183/repos")
    .then(res => res.json())
    .then(repos => {
      const container = document.getElementById("projects-container");
      if (!container) return;

      container.innerHTML = "";
      repos
        .filter(repo => !repo.fork)
        .slice(0, 4)
        .forEach(repo => {
          container.innerHTML += `
            <div class="bg-gray-800 p-5 rounded-lg hover:shadow-lg transition">
              <h3 class="font-semibold mb-1">${repo.name}</h3>
              <p class="text-gray-400 mb-2">${repo.description || "No description"}</p>
              <a href="${repo.html_url}" target="_blank" class="text-blue-400 hover:underline">
                View on GitHub
              </a>
            </div>
          `;
        });
    });

});
