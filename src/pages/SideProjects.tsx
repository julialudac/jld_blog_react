import { useEffect, useState } from 'react';
import MarkdownRenderer from '../common/MarkdownRendered';

import mdFile from '../textContents/side_projects.md';


const SideProjects = () => {
  const [content, setIndexContent] = useState('');

  useEffect(() => {
    fetch(mdFile).then((response) => response.text()).then((text) => {
      setIndexContent(text)
    })
  }, []);

  return (
    <div>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </div>
  )
};
export default SideProjects;