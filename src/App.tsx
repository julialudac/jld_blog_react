import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import SideProjects from './pages/SideProjects';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // TODO should be in the page or in a store??

  return (
    <Router>
      <div className='root-style'>
        <Header isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/side-projects' element={<SideProjects />} />
        </Routes>

        <Footer isDarkMode={isDarkMode} />
      </div>

    </Router>

  );
}

export default App;
