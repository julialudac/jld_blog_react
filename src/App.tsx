import { useEffect, useState } from 'react';
import Header from'./Header';
import Footer from './Footer';
import Markdown from 'react-markdown';
import contentFile from './textContents/index.md';
import './App.css';


function App() {
  const [indexContent, setIndexContent] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // TODO should be in the page or in a store??

  useEffect(() => {
    fetch(contentFile).then((response) => response.text()).then((text) => {
      setIndexContent(text)
    })
  }, []);

  return (
    <div className='root-style'>
    <Header isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}/>
    <section>
    <Markdown>{indexContent}</Markdown>
    </section>
    <Footer isDarkMode={isDarkMode}/>
  </div>
  );
}

export default App;
