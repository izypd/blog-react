import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import Footer from '@/components/Footer';

export default function Login() {
  const history = useHistory();
  const [form] = Form.useForm();

  const onLogin = useCallback(() => {
    const usernameAndPassword = form.getFieldsValue(true);
    axios
      .post('/api/user/login', usernameAndPassword)
      .then((res) => {
        const { token } = res.data.data.info;
        localStorage.setItem('token', token);
        history.push('/admin');
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='user_layout'>
      <div className='user'>
        <Form form={form} name='login'>
          <Form.Item
            name='username'
            rules={[{ required: true, message: '请输入用户名' }]}>
            <Input placeholder='用户名' />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password placeholder='密码' />
          </Form.Item>

          <Form.Item>
            <Button
              className='w-full'
              type='primary'
              shape='round'
              onClick={onLogin}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
}
