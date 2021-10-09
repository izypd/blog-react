import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Popover, Tag } from 'antd';
import axios from 'axios';
import type ITag from '@/utils/types/ITag';

export default function Nav() {
  const [tagPop, setTagPop] = useState<JSX.Element>();
  useEffect(() => {
    axios
      .get('/tag')
      .then((res: any) => {
        const tagList = res.data.data.list;
        const tagPopList = tagList.map((tag: ITag) => (
          <Tag>
            <Link to={`/tag/${tag.id}`} className='text3'>
              {tag.label}
            </Link>
          </Tag>
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
      <Link to='/note/1'>
        <div className='nav_item'>
          <Icon icon='icon-park:avatar' className='wh3' />
          <div className='text3'>关于</div>
        </div>
      </Link>
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
