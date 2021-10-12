import { renderRoutes } from 'react-router-config';
import type IRoute from '@/routes/IRoute';
import Footer from '@/components/Footer';

export default function UserLayout({ route }: { route: IRoute }) {
  return (
    <div className='bg_mi pt-8 px-8'>
      <div className='user'>{renderRoutes(route.routes)}</div>
      <Footer />
    </div>
  );
}
