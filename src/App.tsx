import { Spin } from 'antd';
import { Suspense } from 'react';
import Routes from '@/routes/Routes';

export default function App() {
  return (
    <Suspense fallback={<Spin size='large' />}>
      <Routes />
    </Suspense>
  );
}
