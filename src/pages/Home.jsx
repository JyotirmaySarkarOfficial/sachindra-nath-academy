import MainLayout from '../layouts/MainLayout'

import Hero from '../sections/Hero'
import AboutSection from '../sections/AboutSection'
import StatsSection from '../sections/StatsSection'
import WhyChooseUs from '../sections/WhyChooseUs'
import FacultySection from '../sections/FacultySection'
import GallerySection from '../sections/GallerySection'
import TestimonialsSection from '../sections/TestimonialsSection'
import ContactSection from '../sections/ContactSection'
import ToppersSection from '../sections/ToppersSection'

function Home() {
  return (
    <MainLayout>

      <Hero />

      <AboutSection />

      <StatsSection />

      <WhyChooseUs />

      <FacultySection />

      <ToppersSection />

      <GallerySection />

      <TestimonialsSection />

      <ContactSection />

    </MainLayout>
  )
}

export default Home