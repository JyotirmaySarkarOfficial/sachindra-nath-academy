import { motion } from 'framer-motion'

/* =========================================
   NORMAL CATEGORY IMAGES
========================================= */

const galleryCategories = {
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
   TAKE FIRST IMAGE OF EACH CATEGORY
========================================= */

const categoryPreviewImages = Object.entries(
  galleryCategories
).map(([category, images]) => ({
  category,
  image: images[0],
}))

/* =========================================
   AUTO EVENT IMAGES
========================================= */

const eventImages = import.meta.glob(
  '../assets/gallery/events/**/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default',
  }
)

/* =========================================
   GROUP EVENTS
========================================= */

const groupedEvents = {}

Object.entries(eventImages).forEach(
  ([path, image]) => {

    const folderName =
      path.split('/events/')[1].split('/')[0]

    if (!groupedEvents[folderName]) {

      groupedEvents[folderName] = {
        title: folderName
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) =>
            char.toUpperCase()
          ),

        image,
      }
    }
  }
)

/* =========================================
   EVENT PREVIEW IMAGES
========================================= */

const eventPreviewImages =
  Object.values(groupedEvents)

/* =========================================
   FINAL HOMEPAGE GALLERY
========================================= */

const galleryItems = [
  ...categoryPreviewImages,
  ...eventPreviewImages,
]

function GallerySection() {

  return (
    <section
      id="gallery"
      className="bg-gray-100 py-24"
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
            Gallery
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-blue-950">
            Moments From Our Academy
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Explore our campus life, classrooms,
            activities and memorable events.
          </p>

        </motion.div>

        {/* =========================================
           IMAGE GRID
        ========================================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {galleryItems.map(
            (item, index) => (

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
                className="relative overflow-hidden rounded-3xl shadow-xl group"
              >

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={item.category || item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-black/40 md:bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                  <h3 className="text-white text-2xl md:text-3xl font-bold text-center px-4">
                    {item.category || item.title}
                  </h3>

                </div>

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>
  )
}

export default GallerySection