import MainLayout from '../layouts/MainLayout'
import { motion } from 'framer-motion'
import aboutImage from '../assets/home/about.webp'
import FounderMessageSection from '../sections/FounderMessageSection'

function About() {
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
            About Our Academy
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Inspiring excellence through discipline, knowledge and innovation.
          </p>

        </motion.div>

      </section>

      {/* About Content */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <img
              src={aboutImage}
              alt="Academy"
              className="rounded-3xl shadow-2xl"
            />

          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-extrabold text-blue-950">
              Our Journey
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed text-justify">
              Our academy has been dedicated to nurturing young minds
              through quality education, discipline and holistic development.
              We believe in empowering students with knowledge, creativity
              and leadership values.
            </p>

            {/* Mission */}
            <div className="mt-8 bg-gray-100 p-6 rounded-2xl">

              <h3 className="text-2xl font-bold text-blue-950">
                Our Mission
              </h3>

              <p className="mt-3 text-gray-600">
                To create confident, responsible and academically strong students.
              </p>

            </div>

            {/* Vision */}
            <div className="mt-6 bg-gray-100 p-6 rounded-2xl">

              <h3 className="text-2xl font-bold text-blue-950">
                Our Vision
              </h3>

              <p className="mt-3 text-gray-600">
                To become a leading center of excellence in modern education.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      <FounderMessageSection />

    </MainLayout>
  )
}

export default About