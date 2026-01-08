import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';
import { MyContext } from './context/MyContext';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
    const [name] = useState("MyApp");
  
  return (
    <ThemeProvider>
    <MyContext.Provider value={{name}}>
    <BrowserRouter>


      <Routes>
        {/* parent route  */}
        <Route path='/' element={<MainLayout />} >
        {/* child routes  */}
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />


        </Route>
      </Routes>



    </BrowserRouter>
    </MyContext.Provider>
    </ThemeProvider>

  )
}

export default App