import {useContext} from 'react'
import { MyContext } from '../context/MyContext';
// import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';


const Home = () => {
   const value = useContext(MyContext)
  //  const { theme, toggleTheme } = useContext(ThemeContext);
  return (

    <div className="dark:bg-gray-900  min-h-[80vh] flex flex-col items-center justify-center px-4">
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight dark:text-white text-gray-900 leading-tight">
          Welcome to the <span className="text-blue-500">Home Page</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl dark:text-gray-300 text-gray-600 leading-relaxed">
          This is a simple home page component styled with Tailwind CSS. 
Thia is the name of the admin {value.name} we fetched by using useContext         </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-2xl shadow-lg dark:shadow-none  shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95">
            Explore Features
          </button>
          <button className="px-8 py-3 bg-white text-gray-700 border border-gray-200 font-bold rounded-2xl hover:bg-gray-50 transition-all active:scale-95">
           <Link to="https://github.com/MIbrahim0121" className="text-gray-700 hover:text-blue-600 transition">View Github</Link>
          </button>
        </div>
      </div>

      {/* Quick Stats or Features Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          { title: 'Fast', icon: '⚡' },
          { title: 'Modern', icon: '🎨' },
          { title: 'Scalable', icon: '🚀' }
        ].map((item, index) => (
          <div key={index} className="dark:border-white dark:bg-gray-800  p-6 bg-gray-200 rounded-2xl border border-gray-500 text-center hover:shadow-md transition">
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="font-bold dark:text-white text-gray-800">{item.title}</h3>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home