// ==========================================
// Contact Component
// ==========================================

import "./Contact.css";

import { useRef } from "react";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {
    const form = useRef();

        const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm(

            import.meta.env.VITE_EMAILJS_SERVICE_ID,

            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

            form.current,

            import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        )
        .then(() => {

            alert("✅ Message Sent Successfully!");

            form.current.reset();

        })
        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send message.");

        });

        };

        return (

    <section className="contact" id="contact">

      {/* Left Side */}

      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <span className="contact-tag">
          Contact Us
        </span>

        <h2>
          We'd Love To
          <br />
          Hear From You
        </h2>

        <p>
          Have questions or need help?
          Contact me through email, GitHub or LinkedIn.
          I'll get back to you as soon as possible.
        </p>

        <div className="contact-info">

          {/* Email */}

          <motion.div whileHover={{ x: 8 }}>

            <FaEnvelope className="contact-icon" />

            <a
              href="mailto:mansiyadav2807@gmail.com"
              className="contact-link"
            >
              mansiyadav2807@gmail.com
            </a>

          </motion.div>

          {/* GitHub */}

          <motion.div whileHover={{ x: 8 }}>

            <FaGithub className="contact-icon" />

            <a
              href="https://github.com/mansiy07"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/mansiy07
            </a>

          </motion.div>

          {/* LinkedIn */}

          <motion.div whileHover={{ x: 8 }}>

            <FaLinkedin className="contact-icon" />

            <a
              href="https://www.linkedin.com/in/mansiy07"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin.com/in/mansiy07
            </a>

          </motion.div>

          {/* Location */}

          <motion.div whileHover={{ x: 8 }}>

            <FaMapMarkerAlt className="contact-icon" />

            <span>Greater Noida, India</span>

          </motion.div>

        </div>

      </motion.div>

      {/* Right Side */}

      <motion.form

        ref={form}

        onSubmit={sendEmail}

        className="contact-form"

        initial={{ opacity: 0, x: 60 }}

        whileInView={{ opacity: 1, x: 0 }}

        transition={{ duration: .8 }}

        viewport={{ once: true }}

        >

        <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
        />

        <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        required
        />

        <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        />

        <textarea
        rows="5"
        name="message"
        placeholder="Write your message..."
        required
        ></textarea>

        <button type="submit">

          <FaPaperPlane />

          <span>Send Message</span>

        </button>

      </motion.form>

    </section>

  );

}

export default Contact;