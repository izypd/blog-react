import { Spin } from 'antd';
import { Suspense, lazy, useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import getTokenHeader from '@/utils/getTokenHeader';
import TagContext from '@/utils/context/TagContext';

export default function App() {
  const Home = lazy(() => import('@/pages/Home'));
  const NotFound = lazy(() => import('@/pages/Error/NotFound'));
  const CV = lazy(() => import('@/pages/CV'));
  const PWGAN = lazy(() => import('@/pages/PWGAN'));
  const Note = lazy(() => import('@/pages/Note'));
  const Login = lazy(() => import('@/pages/User/Login'));
  const Register = lazy(() => import('@/pages/User/Register'));
  const Admin = lazy(() => import('@/pages/Admin'));

  const [auth, setAuth] = useState(false);
  const [tags, setTags] = useState([]);

  const needAuth = useMemo(() => {
    if (auth) {
      return (
        <Route
          path='/admin'
          render={() => {
            document.title = '管理';
            return <Admin />;
          }}
        />
      );
    }
    return (
      <Route
        path='/admin'
        render={() => {
          document.title = '没有该页面';
          return <NotFound />;
        }}
      />
    );
  }, [auth]);

  useEffect(() => {
    axios
      .get('/api/tag')
      .then((res: any) => {
        const { list } = res.data.data;
        setTags(list);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <TagContext.Provider value={tags}>
        <Router>
          <Switch>
            <Route
              path='/cv'
              render={() => {
                document.title = '关于';
                return <CV />;
              }}
            />
            <Route
              path='/pwgan'
              render={() => {
                document.title = 'PWGAN';
                return <PWGAN />;
              }}
            />
            <Route path='/' exact component={Home} />
            <Route path='/tag/:tagId' component={Home} />
            <Route path='/note/:noteId' component={Note} />
            <Route
              path='/login'
              render={() => {
                document.title = '登录';
                return <Login />;
              }}
            />
            <Route
              path='/register'
              render={() => {
                document.title = '注册';
                return <Register />;
              }}
            />
            {needAuth}
            <Route
              path='*'
              render={() => {
                document.title = '没有该页面';
                return <NotFound />;
              }}
            />
          </Switch>
        </Router>
      </TagContext.Provider>
    </Suspense>
  );
}
