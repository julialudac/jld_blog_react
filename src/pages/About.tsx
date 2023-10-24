import { useEffect, useState } from 'react';
import MarkdownRenderer from '../common/MarkdownRendered';

import presentationImage from '../images/moi_baou.jpg';
import aboutFile from '../textContents/about.md';
import cvFile from '../Julia_Lu-Dac_CV.pdf';


const About = () => {
  const [aboutContent, setIndexContent] = useState('');

  useEffect(() => {
    fetch(aboutFile).then((response) => response.text()).then((text) => {
      setIndexContent(text)
    })
  }, []);

  return (
    <div>
      <img src={presentationImage} width="25%" />
      <MarkdownRenderer>{aboutContent}</MarkdownRenderer>
      <p>You can have a look and download my CV <a href={cvFile} target = "_blank" rel="noreferrer">here</a>.</p>
    </div>
  )
};
export default About;