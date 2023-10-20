
import { useEffect, useState } from 'react';
import MarkdownRenderer from '../common/MarkdownRendered';

import homeFile from '../textContents/index.md';


const Home = () => {
  const [homeContent, setIndexContent] = useState('');

  useEffect(() => {
    fetch(homeFile).then((response) => response.text()).then((text) => {
      setIndexContent(text)
    })
  }, []);

  return (
    <div>
      <MarkdownRenderer>{homeContent}</MarkdownRenderer>
    </div>
  )
};
export default Home;