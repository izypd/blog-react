import { Layout, Typography } from 'antd';
import React from 'react';
import { renderRoutes } from 'react-router-config';

import type IRoute from '@/routes/IRoute';

const { Content, Footer } = Layout;
const { Text } = Typography;

const UserLayout: React.FC<{ route: IRoute }> = ({ route }) => (
  <Layout>
    <Content>{renderRoutes(route.routes)}</Content>
    <Footer>
      <Text>
        © izypd <Text type='secondary'>由 React 、 Nest 助力</Text>
      </Text>
    </Footer>
  </Layout>
);

export default UserLayout;
