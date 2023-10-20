import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // TODO should be in the page or in a store??

  return (
    <Router>
      <div className='root-style'>
        <Header isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <Footer isDarkMode={isDarkMode} />
      </div>

    </Router>

  );
}

export default App;
