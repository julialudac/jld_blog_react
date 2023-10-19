import React, { useEffect } from 'react';
import darkModeIcon from './dark_mode_icon.png';
import lightModeIcon from './light_mode_icon.png';

type HeaderProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
const Header: React.FC<HeaderProps> = ({isDarkMode, toggleDarkMode}) => {
  const headerStyle = {
    display : "flex",
    justifyContent : "space-between"
  }

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  })

  return (
    <div style={headerStyle}>
    <h1>Dev Lu Dac</h1>
    <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
      <a>About</a>
      <a>Side projects</a>
      <a>Posts</a>
      <img src={isDarkMode ? lightModeIcon : darkModeIcon} alt="darkMode" height="64px" width={"64px"} onClick={toggleDarkMode}/>
    </div>
    </div>
  );
}

export default Header;