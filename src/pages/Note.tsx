import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import NoteInfo from '@/components/NoteInfo';

export default function Note() {
  const { noteId } = useParams<{ noteId: string }>();
  return (
    <div className='bg_mi'>
      <Header />
      <NoteInfo noteId={Number(noteId)} />
    </div>
  );
}
