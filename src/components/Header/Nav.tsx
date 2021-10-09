import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav'>
      <div className='nav_item'>
        <Icon icon='icon-park:tag' className='wh3' />
        <div className='text3'>标签</div>
      </div>
      <Link to='/note/1'>
        <div className='nav_item'>
          <Icon icon='icon-park:avatar' className='wh3' />
          <div className='text3'>关于</div>
        </div>
      </Link>
      <a
        href='https://github.com/izypd'
        rel='external nofollow noopener noreferrer'
        target='_blank'>
        <div className='nav_item'>
          <Icon icon='icon-park:github' className='wh3' />
          <div className='text3'>GitHub</div>
        </div>
      </a>
    </div>
  );
}
