import { useState, useCallback } from 'react';
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
            <Menu.Item key='create_note'>新增笔记</Menu.Item>
            <Menu.Item key='manage_note'>管理笔记</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <div>内容</div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
