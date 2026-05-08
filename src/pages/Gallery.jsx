import MainLayout from '../layouts/MainLayout'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Lightbox from '../components/Lightbox'
import galleryVideos from '../data/galleryVideos'

/* =========================================
   NORMAL CATEGORY IMAGES
========================================= */

const galleryData = {
  Campus: Object.values(
    import.meta.glob(
      '../assets/gallery/campus/*.{png,jpg,jpeg,webp}',
      {
        eager: true,
        import: 'default',
      }
    )
  ),

  Library: Object.values(
    import.meta.glob(
      '../assets/gallery/library/*.{png,jpg,jpeg,webp}',
      {
        eager: true,
        import: 'default',
      }
    )
  ),

  Sports: Object.values(
    import.meta.glob(
      '../assets/gallery/sports/*.{png,jpg,jpeg,webp}',
      {
        eager: true,
        import: 'default',
      }
    )
  ),

  Classrooms: Object.values(
    import.meta.glob(
      '../assets/gallery/classrooms/*.{png,jpg,jpeg,webp}',
      {
        eager: true,
        import: 'default',
      }
    )
  ),

  Hostel: Object.values(
    import.meta.glob(
      '../assets/gallery/hostel/*.{png,jpg,jpeg,webp}',
      {
        eager: true,
        import: 'default',
      }
    )
  ),
}

/* =========================================
   AUTO EVENT IMAGE IMPORTS
========================================= */

const eventImages = import.meta.glob(
  '../assets/gallery/events/**/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default',
  }
)

/* =========================================
   GROUP EVENTS AUTOMATICALLY
========================================= */

const groupedEvents = {}

Object.entries(eventImages).forEach(
  ([path, image]) => {

    const folderName =
      path.split('/events/')[1].split('/')[0]

    if (!groupedEvents[folderName]) {

      groupedEvents[folderName] = {
        folder: folderName,

        title: folderName
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) =>
            char.toUpperCase()
          ),

        images: [],

        thumbnail: image,
      }
    }

    groupedEvents[folderName].images.push(
      image
    )
  }
)

const events = Object.values(groupedEvents)

/* =========================================
   CATEGORIES
========================================= */

const categories = [
  'All',
  ...Object.keys(galleryData),
  'Events',
]

function Gallery() {

  const [selectedCategory, setSelectedCategory] =
    useState('All')

  const [selectedImage, setSelectedImage] =
    useState(null)

  const [selectedEvent, setSelectedEvent] =
    useState(null)

  /* =========================================
     FILTER NORMAL IMAGES
  ========================================= */

  const filteredImages =
    selectedCategory === 'All'
      ? Object.entries(galleryData).flatMap(
          ([category, images]) =>
            images.map((image) => ({
              image,
              category,
            }))
        )
      : galleryData[selectedCategory]
      ? galleryData[selectedCategory].map(
          (image) => ({
            image,
            category: selectedCategory,
          })
        )
      : []

  return (
    <MainLayout>

      {/* =========================================
         Banner
      ========================================= */}

      <section className="bg-blue-950 text-white pt-40 pb-24 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h1 className="text-5xl md:text-6xl font-extrabold">
            Gallery
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Explore moments from our academy,
            activities and events.
          </p>

        </motion.div>

      </section>

      {/* =========================================
         MAIN SECTION
      ========================================= */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          {/* CATEGORY BUTTONS */}

          <div className="flex flex-wrap justify-center gap-4 mb-16">

            {categories.map((category, index) => (

              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(category)
                  setSelectedEvent(null)
                }}
                className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-950 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-950 hover:text-white'
                }`}
              >

                {category}

              </button>

            ))}

          </div>

          {/* =========================================
             EVENTS LIST
          ========================================= */}

          {selectedCategory === 'Events' &&
            !selectedEvent && (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {events.map((event, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  onClick={() =>
                    setSelectedEvent(event)
                  }
                  className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
                >

                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/40 md:bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                    <h2 className="text-white text-3xl font-bold text-center px-4">
                      {event.title}
                    </h2>

                  </div>

                </motion.div>

              ))}

            </div>

          )}

          {/* =========================================
             EVENT DETAILS
          ========================================= */}

          {selectedEvent && (

            <div>

              <button
                onClick={() =>
                  setSelectedEvent(null)
                }
                className="mb-10 bg-blue-950 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition"
              >
                ← Back To Events
              </button>

              <h2 className="text-5xl font-extrabold text-blue-950 text-center mb-16">
                {selectedEvent.title}
              </h2>

              {/* EVENT IMAGES */}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {selectedEvent.images.map(
                  (image, index) => (

                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                      }}
                      viewport={{ once: true }}
                      onClick={() =>
                        setSelectedImage(image)
                      }
                      className="overflow-hidden rounded-3xl shadow-xl cursor-pointer group"
                    >

                      <img
                        src={image}
                        alt={selectedEvent.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                      />

                    </motion.div>

                  )
                )}

              </div>

              {/* EVENT VIDEOS */}

              {galleryVideos[selectedEvent.folder] &&
                galleryVideos[selectedEvent.folder].length > 0 && (

                <div className="mt-24">

                  <h3 className="text-4xl font-extrabold text-blue-950 text-center mb-16">
                    Event Videos
                  </h3>

                  <div className="grid lg:grid-cols-2 gap-10">

                    {galleryVideos[selectedEvent.folder].map(
                      (videoId, index) => (

                        <div
                          key={index}
                          className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl"
                        >

                          <iframe
                            width="100%"
                            height="350"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="Event Video"
                            allowFullScreen
                            className="border-0"
                          ></iframe>

                        </div>

                      )
                    )}

                  </div>

                </div>

              )}

            </div>

          )}

          {/* =========================================
             NORMAL IMAGE GRID
          ========================================= */}

          {selectedCategory !== 'Events' && (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredImages.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  onClick={() =>
                    setSelectedImage(item.image)
                  }
                  className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
                >

                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/40 md:bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                    <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4">
                      {item.category}
                    </h2>

                  </div>

                </motion.div>

              ))}

            </div>

          )}

        </div>

      </section>

      {/* =========================================
            CATEGORY VIDEOS
          ========================================= */}

          {selectedCategory !== 'All' &&
          selectedCategory !== 'Events' &&
          galleryVideos[selectedCategory] &&
          galleryVideos[selectedCategory].length > 0 && (

            <section className="pb-24 bg-white">

              <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-extrabold text-blue-950 text-center mb-16">
                  Videos
                </h2>

                <div className="grid lg:grid-cols-2 gap-10">

                  {galleryVideos[selectedCategory].map(
                    (videoId, index) => (

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
                        className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl"
                      >

                        <iframe
                          width="100%"
                          height="350"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title="Category Video"
                          allowFullScreen
                          className="border-0"
                        ></iframe>

                      </motion.div>

                    )
                  )}

                </div>

              </div>

            </section>

          )}

      {/* LIGHTBOX */}

      <Lightbox
        image={selectedImage}
        onClose={() =>
          setSelectedImage(null)
        }
      />

    </MainLayout>
  )
}

export default Gallery