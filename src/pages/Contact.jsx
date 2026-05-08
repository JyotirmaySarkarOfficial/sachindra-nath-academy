import MainLayout from '../layouts/MainLayout'
import { motion } from 'framer-motion'

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa'

function Contact() {
  return (
    <MainLayout>

      {/* Banner */}
      <section className="bg-blue-950 text-white pt-40 pb-24 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h1 className="text-5xl md:text-6xl font-extrabold">
            Contact Us
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            We are always ready to help you with admissions,
            inquiries and academic information.
          </p>

        </motion.div>

      </section>

      {/* Contact Section */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-extrabold text-blue-950">
              Get In Touch
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Feel free to contact our academy for admissions,
              academic guidance or any inquiries.
            </p>

            {/* Contact Items */}
            <div className="mt-10 space-y-8">

              {/* Address */}
              <div className="flex items-start gap-5">

                <div className="bg-yellow-400 text-black p-4 rounded-full text-xl">
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

                <div className="bg-yellow-400 text-black p-4 rounded-full text-xl">
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

                <div className="bg-yellow-400 text-black p-4 rounded-full text-xl">
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

            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-10 text-2xl">

              <div className="bg-blue-950 text-white p-4 rounded-full hover:scale-110 transition cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="bg-blue-950 text-white p-4 rounded-full hover:scale-110 transition cursor-pointer">
                <FaInstagram />
              </div>

              <div className="bg-blue-950 text-white p-4 rounded-full hover:scale-110 transition cursor-pointer">
                <FaYoutube />
              </div>

              <div className="bg-blue-950 text-white p-4 rounded-full hover:scale-110 transition cursor-pointer">
                <FaWhatsapp />
              </div>

            </div>

          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-10 rounded-3xl shadow-xl"
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

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                rows="6"
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

      </section>

      {/* Google Map */}
      {/* <section className="pb-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-3xl overflow-hidden shadow-2xl">

            <iframe
              title="academy-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019662178236!2d-122.4194156846816!3d37.77492977975964!2m3!1f0!2f0!3f0!3m2!"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>

          </div>

        </div>

      </section> */}

    </MainLayout>
  )
}

export default Contact