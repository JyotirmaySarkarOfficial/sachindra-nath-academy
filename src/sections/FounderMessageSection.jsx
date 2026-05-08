import { motion } from 'framer-motion'

import founderMessage from '../data/founderMessage'

/* =========================================
   AUTO IMPORT FOUNDER IMAGE
========================================= */

const founderImages = import.meta.glob(
  '../assets/founder/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default',
  }
)

/* =========================================
   IMAGE MAP
========================================= */

const imageMap = {}

Object.entries(founderImages).forEach(
  ([path, image]) => {

    const fileName =
      path.split('/').pop().split('.')[0]

    imageMap[fileName] = image
  }
)

function FounderMessageSection() {

  return (
    <section className="bg-white py-24">

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
            Founder’s Message
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-blue-950">
            Message From Our Founder
          </h2>

        </motion.div>

        {/* =========================================
           CONTENT
        ========================================= */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >

            <img
              src={
                imageMap[
                  founderMessage.image
                ]
              }
              alt={founderMessage.name}
              className="w-full rounded-3xl shadow-2xl object-cover"
            />

          </motion.div>

          {/* MESSAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >

            <h3 className="text-4xl font-extrabold text-blue-950">
              {founderMessage.name}
            </h3>

            <p className="mt-3 text-yellow-500 font-semibold text-xl">
              {founderMessage.role}
            </p>

            <p className="mt-8 text-gray-700 leading-relaxed text-lg whitespace-pre-line text-justify">
              {founderMessage.message}
            </p>

          </motion.div>

        </div>

        {/* =========================================
           VIDEO MESSAGE
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
          className="mt-24"
        >

          <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 text-center mb-16">
            Video Message
          </h3>

          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">

            <iframe
              width="100%"
              height="550"
              src={`https://www.youtube.com/embed/${founderMessage.youtubeId}`}
              title="Founder Message"
              allowFullScreen
              className="border-0"
            ></iframe>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default FounderMessageSection