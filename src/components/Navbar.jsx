import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { IoEnterOutline } from "react-icons/io5";
import { ThemeContext } from '../context/ThemeContext';


const Navbar = () => {
 
  // const [name] = useState("IBRAHIM");
  // const [theme, setTheme] = useState('light'); 
const value=useContext(MyContext)
const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="">
            <span className="text-2xl font-bold dark:text:white text-blue-500 tracking-tight">{value.name}</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8 items-center">
            <li>
              <Link
                to="/"
                className="text-gray-600 dark:text-white hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Home

              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-600 dark:text-white hover:text-blue-600 font-medium transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 dark:text-white hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </li>

            {/* Action Button (Optional) */}
            <li >
              <button className={`flex items-center justify-center gap-1 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all active:scale-95 shadow-sm`} onClick={toggleTheme}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}  
                <IoEnterOutline className='text-xl' />

              </button>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;