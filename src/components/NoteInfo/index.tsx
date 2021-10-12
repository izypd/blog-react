import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import getTimeDistance from '@/utils/getTimeDistance';
import type ITag from '@/utils/types/ITag';
import TagItem from '@/components/TagItem';
import NoteContent from './NoteContent';

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
          <TagItem tag={tag} classStr='text-base' />
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
      <div className='note_title'>
        <div className='text-base6 md:text-md6'>{title}</div>
        <div className='logo_fix'>
          <div className='logo_half_fix'>
            <Icon icon='icon-park-outline:time' className='w-4 h-4' />
            <div className='text-base'>{time}</div>
          </div>
          <div className='logo_half_fix'>
            <Icon icon='icon-park-outline:tag' className='w-4 h-4' />
            {tagComponent}
          </div>
        </div>
      </div>
      <NoteContent content={markdown} />
    </div>
  );
}
