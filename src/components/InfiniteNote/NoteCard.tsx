import { Icon } from '@iconify/react';

export default function NoteCard({ info }: any) {
  return (
    <a
      href={`/note/${info.id}`}
      className='note_card'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${info.imgUrl})`,
      }}>
      <div className='text6'>{info.title}</div>
      <div className='logo'>
        <div className='logo_half'>
          <Icon icon='icon-park-outline:time' className='wh4' />
          <div className='text4'>{info.timeDistance}</div>
        </div>
        <div className='logo_half'>
          <Icon icon='icon-park-outline:tag' className='wh4' />
          <div className='text4'>{info.label.join(' ')}</div>
        </div>
      </div>
    </a>
  );
}
