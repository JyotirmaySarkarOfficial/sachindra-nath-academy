import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import BackToTop from '../components/BackToTop'

function MainLayout({ children }) {
  return (
    <div>

      <Navbar />

      {children}

      <Footer />

      <WhatsAppButton />

      <BackToTop />

    </div>
  )
}

export default MainLayout