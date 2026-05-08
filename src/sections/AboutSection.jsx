import { motion } from 'framer-motion'
import aboutImage from '../assets/home/about.webp'

function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Images */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* Main Image */}
          <img
            src={aboutImage}
            alt="Academy"
            className="rounded-3xl shadow-2xl"
          />

          {/* Small Floating Card */}
          <div className="absolute -bottom-8 -right-8 bg-blue-950 text-white p-6 rounded-2xl shadow-xl w-56">

            <h3 className="text-2xl font-bold text-yellow-400">
              10+
            </h3>

            <p className="mt-2 text-sm">
              Years of academic excellence and discipline.
            </p>

          </div>

        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-yellow-500 font-semibold uppercase tracking-widest">
            About Our Academy
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight">
            Inspiring Students To Achieve Excellence
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Our academy is committed to providing quality education,
            discipline, innovation and character development to every
            student. We focus on academic success along with moral values,
            leadership and creativity.
          </p>

          {/* Mission & Vision */}
          <div className="mt-8 space-y-6">

            <div className="bg-gray-100 p-5 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-950">
                Our Mission
              </h3>

              <p className="mt-2 text-gray-600">
                To nurture young minds with knowledge, discipline and confidence.
              </p>
            </div>

            <div className="bg-gray-100 p-5 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-950">
                Our Vision
              </h3>

              <p className="mt-2 text-gray-600">
                To become a center of excellence in modern and value-based education.
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default AboutSection