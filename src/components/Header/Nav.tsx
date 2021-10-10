import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Popover } from 'antd';
import axios from 'axios';
import type ITag from '@/utils/types/ITag';
import TagItem from '@/components/TagItem';

export default function Nav() {
  const [tagPop, setTagPop] = useState<JSX.Element>();
  useEffect(() => {
    axios
      .get('/api/tag')
      .then((res: any) => {
        const tagList = res.data.data.list;
        const tagPopList = tagList.map((tag: ITag) => (
          <TagItem tag={tag} classStr='text3' />
        ));
        setTagPop(<div>{tagPopList}</div>);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='nav'>
      <Popover content={tagPop}>
        <div className='nav_item'>
          <Icon icon='icon-park:tag' className='wh3' />
          <div className='text3'>标签</div>
        </div>
      </Popover>
      <a href='/note/1'>
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
