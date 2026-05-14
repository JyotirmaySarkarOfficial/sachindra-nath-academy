import logo from '../assets/logos/logo.png'
import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Academy Info */}
        <div>

          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>

              <h2 className="text-3xl font-bold text-yellow-400">
                Sachindra Nath Academy
              </h2>

              <p className="text-sm text-gray-300">
                Excellence In Education
              </p>

            </div>

          </div>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Empowering students with discipline, knowledge and excellence
            for a brighter future.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-2xl font-bold">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3 text-gray-300">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/faculty"
                className="hover:text-yellow-400 transition"
              >
                Faculty
              </Link>
            </li>

            <li>
              <Link
                to="/gallery"
                className="hover:text-yellow-400 transition"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* Social Media */}
        <div>

          <h3 className="text-2xl font-bold">
            Follow Us
          </h3>

          <div className="flex gap-5 mt-6 text-2xl">

            <a
              href="https://www.facebook.com/profile.php?id=61589278896946"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-950 p-3 rounded-full hover:scale-110 transition cursor-pointer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/sachindranathacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-950 p-3 rounded-full hover:scale-110 transition cursor-pointer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/@SachindraNathAcademy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-950 p-3 rounded-full hover:scale-110 transition cursor-pointer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://wa.me/918370898258"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-950 p-3 rounded-full hover:scale-110 transition cursor-pointer"
            >

              <FaWhatsapp />

            </a>

          </div>

        </div>

      </div>

      {/* Sudoku Button */}

      <div className="flex justify-center mt-14 px-6">

        <a
          href="/sudoku"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-blue-950 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:bg-white transition duration-300 shadow-2xl"
        >
          🎮 Let’s Play Sudoku
        </a>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">

        © 2026 Sachindra Nath Academy. All Rights Reserved.

      </div>

    </footer>
  )
}

export default Footer