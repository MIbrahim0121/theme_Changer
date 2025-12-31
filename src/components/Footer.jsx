import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900  border-t border-gray-300 py-8  bottom-0 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-blue-500">MYAPP</h2>
            <p className="dark:text-gray-400 text-gray-500 text-sm mt-1">
              © 2025 All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium dark:text-gray-100 text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </li>
            
          </ul>

          {/* Social Icons (Placeholders) */}
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-50 cursor-pointer transition">
              <span className="text-gray-600 text-xs">FB</span>
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-50 cursor-pointer transition">
              <span className="text-gray-600 text-xs">TW</span>
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-50 cursor-pointer transition">
              <span className="text-gray-600 text-xs">IG</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer