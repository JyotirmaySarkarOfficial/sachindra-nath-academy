import { motion } from 'framer-motion'
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaShieldAlt,
  FaFutbol,
  FaBookReader,
  FaSchool
} from 'react-icons/fa'

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: 'Experienced Faculty',
    desc: 'Dedicated and highly qualified teachers guiding students toward success.',
  },

  {
    icon: <FaLaptopCode />,
    title: 'Digital Learning',
    desc: 'Modern technology-enabled classrooms for better education.',
  },

  {
    icon: <FaShieldAlt />,
    title: 'Discipline & Safety',
    desc: 'Safe, disciplined and student-friendly academic environment.',
  },

  {
    icon: <FaFutbol />,
    title: 'Sports & Activities',
    desc: 'Balanced focus on academics, sports and cultural activities.',
  },

  {
    icon: <FaBookReader />,
    title: 'Quality Education',
    desc: 'Strong academic foundation with modern teaching methods.',
  },

  {
    icon: <FaSchool />,
    title: 'Hostel Facility',
    desc: 'Comfortable residential facilities with proper supervision.',
  },
]

function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-gray-100 py-24">

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
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-blue-950">
            Excellence In Education
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            We provide an inspiring educational environment focused on
            academic achievement, discipline, creativity and character development.
          </p>

        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl text-yellow-500">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-blue-950">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {feature.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs