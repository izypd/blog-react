import { Result, Button } from 'antd';

export default function NotFound() {
  return (
    <div className='flex_center_p0 min-h-screen'>
      <Result
        status='404'
        title='没有该页面'
        subTitle='对不起，你想访问的页面不存在。'
        extra={
          <Button type='primary' shape='round' href='/'>
            回首页
          </Button>
        }
      />
    </div>
  );
}
