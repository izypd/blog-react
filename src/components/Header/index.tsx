import { BackTop } from 'antd';
import Logo from './Logo';
import Nav from './Nav';

export default function Header() {
  return (
    <div className='header'>
      <Logo />
      <Nav />
      <BackTop />
    </div>
  );
}
