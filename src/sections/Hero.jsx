import { motion } from 'framer-motion'
import heroImage from '../assets/home/hero.webp'

function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-black text-white flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Building Future
            <span className="text-yellow-400"> Leaders</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            Discipline, knowledge, innovation and excellence —
            shaping students for a brighter tomorrow.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="https://wa.me/918370898258?text=Hello%20I%20want%20admission%20information%20for%20Sachindra%20Nath%20Academy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-xl"
            >
              Apply Now
            </a>

            <a
              href="#gallery"
              className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Explore Campus
            </a>

          </div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <img
            src={heroImage}
            alt="Academy"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />

        </motion.div>

      </div>

    </section>
  )
}

export default Hero