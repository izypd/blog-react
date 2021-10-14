import { Route } from 'react-router-dom';
import { lazy } from 'react';
import Footer from '@/components/Footer';

export default function UserLayout() {
  return (
    <div className='bg_mi pt-8 px-8'>
      <div className='user'>
        <Route
          path='/user/login'
          exact
          component={lazy(() => import('@/pages/User/Login'))}
        />
        <Route
          path='/user/register'
          exact
          component={lazy(() => import('@/pages/User/Register'))}
        />
      </div>
      <Footer />
    </div>
  );
}
