import { Spin } from 'antd';
import { Suspense, lazy, useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import getTokenHeader from '@/utils/getTokenHeader';

export default function App() {
  const Home = lazy(() => import('@/pages/Home'));

  const [auth, setAuth] = useState(false);

  const needAuth = useMemo(() => {
    if (auth) {
      return (
        <Route path='/admin' component={lazy(() => import('@/pages/Admin'))} />
      );
    }
    return <Route path='/admin' component={Home} />;
  }, [auth]);

  useEffect(() => {
    axios
      .get('/api/user/auth', getTokenHeader())
      .then(() => {
        setAuth(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            path='/login'
            component={lazy(() => import('@/pages/User/Login'))}
          />
          <Route
            path='/register'
            component={lazy(() => import('@/pages/User/Register'))}
          />
          {needAuth}
          <Route
            path='*'
            component={lazy(() => import('@/pages/Error/NotFound'))}
          />
        </Switch>
      </Router>
    </Suspense>
  );
}
