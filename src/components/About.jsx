export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white/5">
      <h2 className="section-title text-center">Professional Summary</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-gray-300 text-center text-lg leading-relaxed">
          Full Stack Web Developer with hands-on experience in MERN stack development.
          Skilled in building responsive, user-focused applications with clean code.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <li className="flex items-center gap-2"><span>👨‍💻</span> <strong>Role:</strong> Web developer intern (NEW Delhi, India)</li>
          <li className="flex items-center gap-2"><span>📫</span> <strong>Email:</strong> manish1182003@gmail.com</li>
          <li className="flex items-center gap-2"><span>💼</span> <strong>Project:</strong> E-commerce (React)</li>
          <li className="flex items-center gap-2"><span>🌱</span> <strong>Learning:</strong> Advanced MERN</li>
        </ul>
      </div>
    </section>
  );
}
