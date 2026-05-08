import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function BackToTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }

    }

    window.addEventListener('scroll', toggleVisibility)

    return () =>
      window.removeEventListener('scroll', toggleVisibility)

  }, [])

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

  }

  return (
    <>

      {visible && (

        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 bg-blue-950 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300"
        >

          <FaArrowUp />

        </button>

      )}

    </>
  )
}

export default BackToTop