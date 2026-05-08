import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

import testimonials from '../data/testimonials'

/* SWIPER */

import { Swiper, SwiperSlide } from 'swiper/react'

import {
  Autoplay,
  Pagination,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

function TestimonialsSection() {

  return (
    <section
      id="testimonials"
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
            Testimonials
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-blue-950">
            What People Say About Us
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Hear from parents and students
            about their experiences with
            our academy.
          </p>

        </motion.div>

        {/* =========================================
           TEXT TESTIMONIALS
        ========================================= */}

        <div className="mt-20">

          <Swiper
            modules={[
              Autoplay,
              Pagination,
            ]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >

            {testimonials.text.map(
              (item, index) => (

                <SwiperSlide key={index}>

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
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-xl h-full mb-14"
                  >

                    {/* STARS */}

                    <div className="flex gap-1 text-yellow-400 text-xl">

                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />

                    </div>

                    {/* REVIEW */}

                    <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                      "{item.review}"
                    </p>

                    {/* USER */}

                    <div className="mt-8">

                      <h3 className="text-2xl font-bold text-blue-950">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-yellow-500 font-semibold">
                        {item.role}
                      </p>

                    </div>

                  </motion.div>

                </SwiperSlide>

              )
            )}

          </Swiper>

        </div>

        {/* =========================================
           VIDEO TESTIMONIALS
        ========================================= */}

        {testimonials.videos.length >
          0 && (

          <div className="mt-24">

            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 text-center mb-16">
              Video Testimonials
            </h3>

            <Swiper
              modules={[
                Autoplay,
                Pagination,
              ]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                },
              }}
            >

              {testimonials.videos.map(
                (video, index) => (

                  <SwiperSlide
                    key={index}
                  >

                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-14">

                      <iframe
                        width="100%"
                        height="350"
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allowFullScreen
                        className="border-0"
                      ></iframe>

                      <div className="p-6">

                        <h4 className="text-2xl font-bold text-blue-950">
                          {video.title}
                        </h4>

                      </div>

                    </div>

                  </SwiperSlide>

                )
              )}

            </Swiper>

          </div>

        )}

      </div>

    </section>
  )
}

export default TestimonialsSection