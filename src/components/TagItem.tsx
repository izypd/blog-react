import { Tag } from 'antd';

export default function TagItem({ tag, classStr }: any) {
  return (
    <Tag>
      <a href={`/tag/${tag.id}`} className={classStr}>
        {tag.label}
      </a>
    </Tag>
  );
}
