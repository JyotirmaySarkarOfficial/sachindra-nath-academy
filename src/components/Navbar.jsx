import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logos/logo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-950/95 backdrop-blur-md text-white shadow-lg z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="Academy Logo"
            className="w-12 h-12 object-cover rounded-full"
          />

          <div>

            <h1 className="text-2xl font-bold tracking-wide">
              Sachindra Nath Academy
            </h1>

            <p className="text-xs text-gray-300">
              Discipline • Knowledge • Excellence
            </p>

          </div>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">

          <Link
                to="/"
                className={`transition hover:text-yellow-400 ${
                  location.pathname === '/'
                    ? 'text-yellow-400'
                    : 'text-white'
                }`}
              >
            Home
          </Link>

          <Link
                to="/about"
                className={`transition hover:text-yellow-400 ${
                  location.pathname === '/about'
                    ? 'text-yellow-400'
                    : 'text-white'
                }`}
              >
            About
          </Link>

          <Link
                to="/faculty"
                className={`transition hover:text-yellow-400 ${
                  location.pathname === '/faculty'
                    ? 'text-yellow-400'
                    : 'text-white'
                }`}
              >
            Faculty
          </Link>

          <Link
                to="/gallery"
                className={`transition hover:text-yellow-400 ${
                  location.pathname === '/gallery'
                    ? 'text-yellow-400'
                    : 'text-white'
                }`}
              >
            Gallery
          </Link>

          <Link
                to="/contact"
                className={`transition hover:text-yellow-400 ${
                  location.pathname === '/contact'
                    ? 'text-yellow-400'
                    : 'text-white'
                }`}
              >
            Contact
          </Link>

        </div>

        {/* Admission Button */}
        <button className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
          Admission Open
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 text-center h-screen w-72 bg-blue-950 transform transition-transform duration-300 z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* Close Button */}
        <div className="flex justify-end p-6">

          <button
            className="text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-8 px-10 text-xl">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            About
          </Link>

          <Link
            to="/faculty"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            Faculty
          </Link>

          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            Contact
          </Link>

          <button className="bg-yellow-400 text-black py-3 rounded-full font-semibold mt-4">
            Admission Open
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar