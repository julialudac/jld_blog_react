import './App.css';
import Header from'./Header';
import Markdown from 'react-markdown';
import contentFile from './textContents/index.md';
import { useEffect, useState } from 'react';


function App() {
  const [indexContent, setIndexContent] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // TODO should be in the page or in a store??

  useEffect(() => {
    fetch(contentFile).then((response) => response.text()).then((text) => {
      setIndexContent(text)
    })
  }, []);

  return (
    <div>
    <Header isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}/>
    <section>
    <Markdown>{indexContent}</Markdown>
    </section>
  </div>
  );
}

export default App;
