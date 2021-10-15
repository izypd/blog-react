import { message } from 'antd';
import Result from '@/components/Result';

export default function showFeedback(
  text: string,
  buttonText: string,
  buttonHref: string,
) {
  const result = {
    text,
    buttonText,
    buttonHref,
  };
  const resultComponent = <Result result={result} />;
  message.success(resultComponent, 5);
}
