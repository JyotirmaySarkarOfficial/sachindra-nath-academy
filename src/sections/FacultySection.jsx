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
   IMAGE MAP
========================================= */

const imageMap = {}

Object.entries(facultyImages).forEach(
  ([path, image]) => {

    const fileName =
      path.split('/').pop().split('.')[0]

    imageMap[fileName] = image
  }
)

/* =========================================
   FEATURED FACULTY
========================================= */

const featuredFaculty = facultyData.filter(
  (faculty) =>
    faculty.role === 'Principal' ||
    faculty.role === 'Vice Principal' ||
    faculty.role === 'Hostel Supervisor'
)

function FacultySection() {

  return (
    <section
      id="faculty"
      className="bg-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* =========================================
           HEADING
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-yellow-500 font-semibold uppercase tracking-widest">
            Leadership Team
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-blue-950">
            Meet Our Leadership
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Our experienced leadership team
            guides students with discipline,
            dedication and academic excellence.
          </p>

        </motion.div>

        {/* =========================================
           FACULTY GRID
        ========================================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {featuredFaculty.map(
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

                  {/* NAME */}

                  <h3 className="text-2xl md:text-3xl font-bold text-blue-950 text-center">
                    {faculty.name}
                  </h3>

                  {/* ROLE */}

                  <p className="mt-3 text-center text-yellow-500 font-semibold text-lg">
                    {faculty.role}
                  </p>

                  {/* DETAILS */}

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
  )
}

export default FacultySection