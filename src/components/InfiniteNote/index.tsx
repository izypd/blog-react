import { useState, useEffect } from 'react';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import axios from 'axios';
import getTimeDistance from '@/utils/getTimeDistance';
import toLabels from '@/utils/toLabels';
import type INoteCard from '@/utils/types/INoteCard';
import type INoteListItem from '@/utils/types/INoteListItem';
import NoteCard from './NoteCard';

export default function InfiniteNote({ tagId }: any) {
  const [items, setItems] = useState<INoteCard[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    let params = {};
    if (tagId === 0) {
      params = {
        page,
      };
    } else {
      params = {
        page,
        tagId,
      };
    }
    axios
      .get('/note', {
        params,
      })
      .then((res: any) => {
        if (pages === 0) {
          setPages(res.data.data.pagination.pages);
        }
        const noteList = res.data.data.list;
        const noteCardList = noteList.map((note: INoteListItem) => ({
          groupKey: page,
          id: note.id,
          timeDistance: getTimeDistance(note.createTime, note.updateTime),
          title: note.title,
          imgUrl: note.imgUrl,
          label: toLabels(note.tags),
        }));
        setItems([...items, ...noteCardList]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <MasonryInfiniteGrid
      className='flex'
      gap={0}
      onRequestAppend={(e) => {
        if (page < pages) {
          setPage((+e.groupKey! || 0) + 1);
        }
      }}>
      {items.map((item) => (
        <NoteCard
          data-grid-groupkey={item.groupKey}
          key={item.id}
          info={item}
        />
      ))}
    </MasonryInfiniteGrid>
  );
}
