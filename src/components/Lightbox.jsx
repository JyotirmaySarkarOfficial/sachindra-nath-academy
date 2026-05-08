import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

function Lightbox({ image, onClose }) {

  if (!image) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-100 flex items-center justify-center px-6"
    >

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-4xl hover:text-yellow-400 transition"
      >

        <FaTimes />

      </button>

      {/* Image */}
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        src={image}
        alt="Preview"
        className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl"
      />

    </motion.div>
  )
}

export default Lightbox