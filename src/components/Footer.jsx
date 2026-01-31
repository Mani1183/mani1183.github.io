export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10 text-center">
      <div className="flex flex-row justify-center items-center gap-4">
        <a href="https://linkedin.com/in/sharmanish11" target="_blank" className="social-bubble">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="https://github.com/mani1183" target="_blank" className="social-bubble">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://www.instagram.com/_.manisharma/" target="_blank" className="social-bubble">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="https://x.com/Manish_118" target="_blank" className="social-bubble">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </div>

      <br />
      <p className="text-gray-500">© 2026 Manish Sharma. All rights reserved.</p>
    </footer>
  );
}
