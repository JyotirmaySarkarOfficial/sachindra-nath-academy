import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918370898258"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >

      <div className="bg-green-500 text-white p-4 rounded-full shadow-2xl text-4xl animate-bounce hover:scale-110 transition duration-300">

        <FaWhatsapp />

      </div>

    </a>
  )
}

export default WhatsAppButton