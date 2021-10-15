import { useState, useCallback, lazy } from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Icon } from '@iconify/react';
import Footer from '@/components/Footer';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function Admin() {
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
      <Layout>
        <Content>
          <Route
            exact
            path='/admin/note/create'
            component={lazy(() => import('./Note/CreateNote'))}
          />
          <Route
            exact
            path='/admin/note/manage'
            component={lazy(() => import('./Note/ManageNote'))}
          />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
