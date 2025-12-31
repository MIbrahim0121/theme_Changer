import React from 'react'

const Contact = () => {
  return (
    <div className="dark:bg-gray-900 bg-white min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 dark:bg-white/9 backdrop-blur-2xl bg-gray-100 p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-6">
          <h1 className="dark:text-white text-4xl font-extrabold text-gray-900">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="dark:text-gray-300 text-gray-600 text-lg">
            Koi sawal hai ya sirf hello kehna chahte hain? Form fill karen aur hum jald hi rabta karenge.
          </p>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-4 text-gray-700">
              <span className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">📍</span>
              <span className='dark:text-gray-300'>Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <span className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">📧</span>
              <span className='dark:text-gray-300'>hello@practiceapp.com</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="space-y-4  bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              rows="4"
              placeholder="How can we help?"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all active:scale-[0.98] shadow-lg shadow-blue-200"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  )
}

export default Contact