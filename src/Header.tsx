import React, { useEffect } from 'react';
import darkModeIcon from './icons/dark_mode_icon.png';
import lightModeIcon from './icons/light_mode_icon.png';
import { Link } from 'react-router-dom'



type HeaderProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  })

  return (
    <div style={headerStyle}>
      <h1>Dev Lu Dac</h1>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/side-projects">Side projects</Link>
        <img
          src={isDarkMode ? lightModeIcon : darkModeIcon}
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          alt='darkMode'
          height={'64px'} width={'64px'}
          onClick={toggleDarkMode} 
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

export default Header;