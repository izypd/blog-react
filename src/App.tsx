import { Spin } from 'antd';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  const Home = lazy(() => import('@/pages/Home'));

  return (
    <Suspense fallback={<Spin size='large' />}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tag/:tagId' component={Home} />
          <Route
            path='/note/:noteId'
            component={lazy(() => import('@/pages/Note'))}
          />
          <Route
            path='/user'
            component={lazy(() => import('@/layouts/UserLayout'))}
          />
          <Route
            path='/admin'
            component={lazy(() => import('@/pages/Admin'))}
          />
          <Route
            path='*'
            component={lazy(() => import('@/pages/Error/NotFound'))}
          />
        </Switch>
      </Router>
    </Suspense>
  );
}
