import { motion } from 'framer-motion'
import CountUp from 'react-countup'

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAward,
} from 'react-icons/fa'

import { FaSchoolFlag } from 'react-icons/fa6'

const stats = [
  {
    icon: <FaUserGraduate />,
    number: 1500,
    suffix: '+',
    title: 'Students',
  },

  {
    icon: <FaChalkboardTeacher />,
    number: 50,
    suffix: '+',
    title: 'Teachers',
  },

  {
    icon: <FaAward />,
    number: 98,
    suffix: '%',
    title: 'Success Rate',
  },

  {
    icon: <FaSchoolFlag />,
    number: 10,
    suffix: '+',
    title: 'Years Excellence',
  },
]

function StatsSection() {
  return (
    <section id="stats" className="bg-blue-950 py-24 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-yellow-400 font-semibold uppercase tracking-widest">
            Our Achievements
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Excellence In Numbers
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            Our academy continues to inspire success through quality education,
            discipline and student development.
          </p>

        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 text-center border border-white/10 hover:-translate-y-2 transition duration-300"
            >

              {/* Icon */}
              <div className="text-5xl text-yellow-400 flex justify-center">

                {item.icon}

              </div>

              {/* Counter */}
              <h3 className="mt-6 text-5xl font-extrabold">

                {item.number}
                {item.suffix}

              </h3>

              {/* Title */}
              <p className="mt-4 text-gray-300 text-lg">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default StatsSection