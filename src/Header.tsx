import React from 'react';
import darkMode from './dark_mode_icon.png';

const Header: React.FC = () => {
  const headerStyle = {
    backgroundColor: "aquamarine",
    display : "flex",
    justifyContent : "space-between"
  }
  return (
    <div style={headerStyle}>
    <h1>Dev Lu Dac</h1>
    <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
      <a>About</a>
      <a>Side projects</a>
      <img src={darkMode} alt="darkMode" height="64px" width={"64px"}/>
    </div>
    </div>
  );
}

export default Header;