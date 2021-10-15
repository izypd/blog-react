import { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import Footer from '@/components/Footer';
import showFeedback from '@/utils/showFeedback';

export default function Register() {
  const [form] = Form.useForm();

  const onRegister = useCallback(() => {
    const usernameAndPasswords = form.getFieldsValue(true);
    axios
      .post('/api/user/register', usernameAndPasswords)
      .then((res) => {
        const text = res.data.data.info;
        showFeedback(text, '去登录', '/login');
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='user_layout'>
      <div className='user'>
        <Form form={form} name='register'>
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

          <Form.Item
            name='passwordRepeat'
            rules={[{ required: true, message: '请再输密码' }]}>
            <Input.Password placeholder='再输密码' />
          </Form.Item>

          <Form.Item>
            <Button
              className='w-full'
              type='primary'
              shape='round'
              onClick={onRegister}>
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
}
