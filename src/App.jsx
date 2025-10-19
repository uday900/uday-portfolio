import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Technologies/>
     <Projects/>
     <Experience/>
     <Contact/>
     <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Copyright and Creator Name */}
        <p className="text-sm">
          &copy; 2025 **Uday Portfolio**. All rights reserved.
        </p>

        {/* Optional: Design/Build credit */}
        <p className="text-xs text-gray-400 mt-1">
          Designed and Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
    </>
  )
}

export default App
