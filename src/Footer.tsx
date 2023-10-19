import React from 'react';
import github from './icons/github.svg';
import githubDark from './icons/github-dark.svg';
import linkedin from './icons/linkedin.svg';
import linkedinDark from './icons/linkedin-dark.svg';
import {iconSize} from './constants';
import './App.css';

type Props = {
  isDarkMode: boolean;
}
const Footer: React.FC<Props> = ({isDarkMode}) => {
  return (
    <div className='footer-style'>
      <div>
        <a href='https://github.com/julialudac' target='_blank' rel='noreferrer'><img src={isDarkMode? githubDark : github} alt='github' width={iconSize} height={iconSize} /></a>
        <a href='https://www.linkedin.com/in/julia-lu-dac-a3a527120/' target='_blank' rel='noreferrer'><img src={isDarkMode? linkedinDark : linkedin} alt='linkedin' width={iconSize} height={iconSize} /></a>
      </div>
      <div>Copyright (c) 2022 - Julia LU DAC </div>
    </div>
  );
}

export default Footer;