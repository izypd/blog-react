import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import axios from 'axios';
import getTimeDistance from '@/utils/getTimeDistance';
import type ITag from '@/utils/types/ITag';
import TagItem from '@/components/TagItem';

export default function NoteInfo({ noteId }: any) {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [tagComponent, setTagComponent] = useState<JSX.Element>();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    axios
      .get(`/api/note/${noteId}`)
      .then((res: any) => {
        const note = res.data.data.info;
        setTitle(note.title);
        setTime(getTimeDistance(note.createTime, note.updateTime));
        const tagList = note.tags.map((tag: ITag) => (
          <TagItem tag={tag} classStr='text3' />
        ));
        setTagComponent(<div>{tagList}</div>);
        setMarkdown(note.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>{title}</div>
      <div>
        <div>{time}</div>
        {tagComponent}
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
