import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import NoteInfo from '@/components/NoteInfo';
import Footer from '@/components/Footer';

export default function Note() {
  const { noteId } = useParams<{ noteId: string }>();
  return (
    <div className='bg_mi min-h-screen'>
      <Header />
      <NoteInfo noteId={Number(noteId)} />
      <Footer />
    </div>
  );
}
