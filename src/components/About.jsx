import React from 'react'

const About = () => {
  return (
    <div className="dark:bg-gray-900 bg-white">
      {/* 1. Hero Section */}
      <section className="dark:bg-gray-900 
      bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold dark:text-gray-300 text-gray-900 mb-4">
            About Our <span className="text-blue-600">Vision</span>
          </h1>
          <p className="text-lg  text-gray-600 max-w-2xl mx-auto">
            Hum aik aisi community bana rahe hain jahan technology aur creativity mil kar behtareen solutions paida karti hain.
          </p>
        </div>
      </section>

      {/* 2. Mission & Values */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-500 mb-6">Our Mission</h2>
            <p className="dark:text-gray-300 text-gray-600 leading-relaxed mb-4">
              Mera maqsad React aur modern web tools ko master karna hai. Ye project mere 
              learning journey ka aik ahem hissa hai jahan main Context API aur 
              React Router jaise concepts ko real-world design mein apply kar raha hoon.
            </p>
            <ul className=" space-y-3">


              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-blue-500">✔</span> Clean UI with Tailwind CSS
              </li>
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-blue-500">✔</span> Global State Management
              </li>
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300 ">
                <span className="text-blue-500">✔</span> Responsive User Experience
              </li>
            </ul>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-200 h-64 md:h-80 rounded-2xl flex items-center justify-center shadow-inner text-gray-400 font-medium">
            <img className='rounded-2xl' src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D" alt="" sizes=""  />
          </div>
        </div>
      </section>

      {/* 3. Team/Stats Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className='p-8 rounded-2xl dark:border-white border border-gray-200 bg-gray-100 dark:bg-gray-800' >
            <p className="text-3xl font-bold text-blue-600">10+</p>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Projects</p>
          </div>
          <div  className='p-8 rounded-2xl dark:border-white border border-gray-200 bg-gray-100 dark:bg-gray-800'>
            <p className="text-3xl font-bold text-blue-600">100%</p>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Dedication</p>
          </div>
          <div  className='p-8 rounded-2xl dark:border-white border border-gray-200 bg-gray-100 dark:bg-gray-800'>
            <p className="text-3xl font-bold text-blue-600">24/7</p>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Learning</p>
          </div>
          <div  className='p-8 rounded-2xl dark:border-white border border-gray-200 bg-gray-100 dark:bg-gray-800'>
            <p className="text-3xl font-bold text-blue-600">5+</p>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Skills</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About