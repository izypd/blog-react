/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Prism from 'prismjs';

export default function NoteContent({ content }: any) {
  const customComponent = {
    img({ node, inline, className, children, ...props }: any) {
      const { src, alt } = props;
      return <img src={src} alt={alt} className='w-full' {...props} />;
    },
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <ReactMarkdown
      className='note_width prose prose-green line-numbers match-braces rainbow-braces'
      remarkPlugins={[remarkGfm]}
      components={customComponent}>
      {content}
    </ReactMarkdown>
  );
}
