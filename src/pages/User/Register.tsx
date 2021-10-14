import { useCallback } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import Result from '@/components/Result';
import Footer from '@/components/Footer';

export default function Register() {
  const [form] = Form.useForm();

  const onRegister = useCallback(() => {
    const usernameAndPasswords = form.getFieldsValue(true);
    axios
      .post('/api/user/register', usernameAndPasswords)
      .then((res) => {
        const text = res.data.data.info;
        const result = {
          text,
          buttonText: '去登录',
          buttonHref: '/user/login',
        };
        const resultComponent = <Result result={result} />;
        message.success(resultComponent, 10);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='bg_mi pt-8 px-8'>
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
