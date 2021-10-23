import { useContext } from 'react';
import { Icon } from '@iconify/react';
import { Popover } from 'antd';
import type ITag from '@/utils/types/ITag';
import TagItem from '@/components/TagItem';
import TagContext from '@/utils/context/TagContext';

export default function Nav() {
  const tagList = useContext(TagContext);

  const tagComponent = (
    <div>
      {tagList.map((tag: ITag) => (
        <TagItem tag={tag} classStr='text3' />
      ))}
    </div>
  );

  return (
    <div className='nav'>
      <Popover placement='bottomRight' content={tagComponent}>
        <div className='nav_item'>
          <Icon icon='icon-park:tag' className='wh3' />
          <div className='text3'>标签</div>
        </div>
      </Popover>
      <a href='/cv'>
        <div className='nav_item'>
          <Icon icon='icon-park:avatar' className='wh3' />
          <div className='text3'>关于</div>
        </div>
      </a>
      <a
        href='https://github.com/izypd'
        rel='external nofollow noopener noreferrer'
        target='_blank'>
        <div className='nav_item'>
          <Icon icon='icon-park:github' className='wh3' />
          <div className='text3'>GitHub</div>
        </div>
      </a>
    </div>
  );
}
