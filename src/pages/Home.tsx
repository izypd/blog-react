import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import InfiniteNote from '@/components/InfiniteNote';

export default function Home() {
  const { tagId } = useParams<{ tagId: string }>();
  let tagIdNumber = 0;
  if (tagId) {
    tagIdNumber = Number(tagId);
  }
  return (
    <div className='bg_mi'>
      <Header />
      <InfiniteNote tagId={tagIdNumber} />
    </div>
  );
}
