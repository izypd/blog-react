import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import InfiniteNote from '@/components/InfiniteNote';
import TagContext from '@/utils/context/TagContext';
import type ITag from '@/utils/types/ITag';

export default function Home() {
  const { tagId } = useParams<{ tagId: string }>();

  let tagIdNumber = 0;
  if (tagId) {
    tagIdNumber = Number(tagId);
    const tagList = useContext(TagContext);
    const tagNow: any = tagList.find((tag: ITag) => tag.id === tagIdNumber);
    if (tagNow) {
      document.title = `${tagNow.label} - 标签 - 言语之庭`;
    }
  }

  return (
    <div className='bg_mi'>
      <Header />
      <InfiniteNote tagId={tagIdNumber} />
    </div>
  );
}
