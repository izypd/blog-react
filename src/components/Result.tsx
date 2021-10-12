import { Button } from 'antd';

export default function Result({ result }: any) {
  return (
    <div>
      <div className='py-4 text-base'>{result.text}</div>
      <Button type='primary' shape='round' href={result.buttonHref}>
        {result.buttonText}
      </Button>
    </div>
  );
}
