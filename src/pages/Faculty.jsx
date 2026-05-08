import MainLayout from '../layouts/MainLayout'
import { motion } from 'framer-motion'
import facultyData from '../data/facultyData'

/* =========================================
   AUTO IMPORT FACULTY IMAGES
========================================= */

const facultyImages = import.meta.glob(
  '../assets/faculty/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default',
  }
)

/* =========================================
   MAP IMAGE PATHS
========================================= */

const imageMap = {}

Object.entries(facultyImages).forEach(
  ([path, image]) => {

    const fileName =
      path.split('/').pop().split('.')[0]

    imageMap[fileName] = image
  }
)

function Faculty() {

  return (
    <MainLayout>

      {/* =========================================
         HERO SECTION
      ========================================= */}

      <section className="bg-blue-950 text-white pt-40 pb-24 text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <h1 className="text-5xl md:text-6xl font-extrabold">
            Our Faculty
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Meet our experienced and dedicated
            faculty members guiding students
            towards excellence.
          </p>

        </motion.div>

      </section>

      {/* =========================================
         FACULTY GRID
      ========================================= */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {facultyData.map(
              (faculty, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
                >

                  {/* IMAGE */}

                  <img
                    src={
                      imageMap[faculty.image]
                    }
                    alt={faculty.name}
                    className="w-full h-96 object-cover"
                  />

                  {/* CONTENT */}

                  <div className="p-8">

                    <h2 className="text-3xl font-bold text-blue-950 text-center">
                      {faculty.name}
                    </h2>

                    <p className="mt-3 text-center text-yellow-500 font-semibold text-lg">
                      {faculty.role}
                    </p>

                    <div className="mt-6 space-y-3 text-gray-700">

                      <p>
                        <span className="font-bold text-blue-950">
                          Subject:
                        </span>{' '}
                        {faculty.subject}
                      </p>

                      <p>
                        <span className="font-bold text-blue-950">
                          Qualification:
                        </span>{' '}
                        {faculty.qualification}
                      </p>

                    </div>

                  </div>

                </motion.div>

              )
            )}

          </div>

        </div>

      </section>

    </MainLayout>
  )
}

export default Faculty