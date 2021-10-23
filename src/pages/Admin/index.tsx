import { useState, useCallback, lazy } from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Icon } from '@iconify/react';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function Admin() {
  const CreateNote = lazy(() => import('./Note/CreateNote'));
  const ManageNote = lazy(() => import('./Note/ManageNote'));
  const EditNote = lazy(() => import('./Note/EditNote'));

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = useCallback((collapse) => {
    setCollapsed(collapse);
  }, []);

  return (
    <Layout className='min-h-screen'>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        theme='light'>
        <Menu theme='light' defaultSelectedKeys={['note']} mode='inline'>
          <SubMenu
            key='note'
            icon={<Icon icon='icon-park-outline:notes' />}
            title='笔记'>
            <Menu.Item key='create_note'>
              <Link to='/admin/note/create'>新增笔记</Link>
            </Menu.Item>
            <Menu.Item key='manage_note'>
              <Link to='/admin/note/manage'>管理笔记</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className='px-16 pt-16'>
        <Content>
          <Route
            exact
            path='/admin/note/create'
            render={() => {
              document.title = '新增笔记';
              return <CreateNote />;
            }}
          />
          <Route
            exact
            path='/admin/note/manage'
            render={() => {
              document.title = '管理笔记';
              return <ManageNote />;
            }}
          />
          <Route
            exact
            path='/admin/note/edit/:noteId'
            render={() => {
              document.title = '编辑笔记';
              return <EditNote />;
            }}
          />
        </Content>
      </Layout>
    </Layout>
  );
}
