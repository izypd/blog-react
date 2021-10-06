import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Logo() {
  return (
    <Link to='/'>
      <div className='logo'>
        <Icon icon='emojione-v1:bouquet-of-flowers' className='wh4' />
        <div className='text4'>言语之庭</div>
      </div>
    </Link>
  );
}
