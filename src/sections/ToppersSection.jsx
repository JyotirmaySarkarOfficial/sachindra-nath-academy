import { motion } from 'framer-motion'

import toppersData from '../data/toppersData'

/* =========================================
   AUTO IMPORT TOPPER IMAGES
========================================= */

const topperImages = import.meta.glob(
  '../assets/toppers/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default',
  }
)

/* =========================================
   IMAGE MAP
========================================= */

const imageMap = {}

Object.entries(topperImages).forEach(
  ([path, image]) => {

    const fileName =
      path.split('/').pop().split('.')[0]

    imageMap[fileName] = image
  }
)

function ToppersSection() {

  return (
    <section
      id="toppers"
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
            Academic Excellence
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-blue-950">
            Topper’s Corner
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Celebrating our outstanding students
            who achieved academic excellence.
          </p>

        </motion.div>

        {/* =========================================
           TOPPERS GRID
        ========================================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {toppersData.map(
            (topper, index) => (

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
                    imageMap[topper.image]
                  }
                  alt={topper.name}
                  className="w-full h-96 object-cover"
                />

                {/* CONTENT */}

                <div className="p-8">

                  <h3 className="text-3xl font-bold text-blue-950 text-center">
                    {topper.name}
                  </h3>

                  <p className="mt-3 text-center text-yellow-500 font-semibold text-xl">
                    {topper.percentage}
                  </p>

                  <div className="mt-6 space-y-3 text-gray-700">

                    <p>
                      <span className="font-bold text-blue-950">
                        Class:
                      </span>{' '}
                      {topper.class}
                    </p>

                    <p>
                      <span className="font-bold text-blue-950">
                        Year:
                      </span>{' '}
                      {topper.year}
                    </p>

                    <p>
                      <span className="font-bold text-blue-950">
                        Achievement:
                      </span>{' '}
                      {topper.achievement}
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

export default ToppersSection