import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Prism from 'prismjs';

export default function NoteContent({ content }: any) {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <ReactMarkdown
      className='note_width prose prose-green line-numbers match-braces rainbow-braces'
      remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}
