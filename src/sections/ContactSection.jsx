import { motion } from 'framer-motion'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'

function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-yellow-500 font-semibold uppercase tracking-widest">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-blue-950">
            Get In Touch
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            We would love to hear from you. Contact us for admissions,
            inquiries or any academic information.
          </p>

        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Address */}
            <div className="flex items-start gap-5">

              <div className="bg-yellow-400 p-4 rounded-full text-black text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-950">
                  Address
                </h3>

                <p className="mt-2 text-gray-600">
                  Dikul, Hasnagar, West Bengal 733121
                </p>
              </div>

            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">

              <div className="bg-yellow-400 p-4 rounded-full text-black text-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-950">
                  Phone
                </h3>

                <p className="mt-2 text-gray-600">
                  +91 8370898258
                </p>
              </div>

            </div>

            {/* Email */}
            <div className="flex items-start gap-5">

              <div className="bg-yellow-400 p-4 rounded-full text-black text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-950">
                  Email
                </h3>

                <p className="mt-2 text-gray-600">
                  info@sachindranathacademy.in
                </p>
              </div>

            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-8 rounded-3xl shadow-xl"
          >

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-950 text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition duration-300"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default ContactSection