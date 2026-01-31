import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Placeholder for actual EmailJS logic from original HTML
    // emailjs.sendForm(...)

    // Simulating success as per HTML structure
    setSuccess(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/30">
      <h2 className="section-title text-center">Contact Me</h2>
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-xl card-bg">
        <span>
          Get in touch My inbox is always open! Let's chat!
        </span>
        <br /> <br />
        <form id="contact-form" className="space-y-6" onSubmit={sendEmail}>
          <input
            name="name"
            className="input"
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            className="input"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn-primary w-full text-white font-bold py-4"
          >
            Send Message
          </button>
        </form>
        <p
          id="form-success"
          className={`${success ? "block" : "hidden"
            } text-green-400 text-center mt-4 font-semibold`}
        >
          Thank you! Your message has been sent successfully!
        </p>
      </div>
    </section>
  );
}
