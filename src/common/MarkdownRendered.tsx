import ReactMarkdown from 'react-markdown';

// MarkdownRenderer is a HoC allowing to open links in a new tab. Copied from https://codesandbox.io/s/snowy-field-r8d3c?file=/src/App.js

function LinkRenderer(props: any) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

type MarkdownRendererProps = {
  children: any;
};
const MarkdownRenderer : React.FC<MarkdownRendererProps> = ({ children }) => {
  return (
    <ReactMarkdown components={{ a: LinkRenderer }}>{children}</ReactMarkdown>
  );
};

export default MarkdownRenderer;