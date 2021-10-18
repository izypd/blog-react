import { useState, useEffect, useMemo, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Tag, Button } from 'antd';
import axios from 'axios';
import { parseISO } from 'date-fns';
import type { ColumnsType } from 'antd/es/table';
import type INoteListItem from '@/utils/types/INoteListItem';
import toDayTime from '@/utils/toDayTime';
import showFeedback from '@/utils/showFeedback';
import getTokenHeader from '@/utils/getTokenHeader';

const columns: ColumnsType<INoteListItem> = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
    render: (_, record) => <a href={`/note/${record.id}`}>{record.title}</a>,
  },
  {
    title: '标签',
    dataIndex: 'tags',
    render: (_, record) =>
      record.tags.map((tag: any) => (
        <Tag>
          <a href={`/tag/${tag.id}`}>{tag.label}</a>
        </Tag>
      )),
  },
  {
    title: '编辑于',
    dataIndex: 'updateTime',
    render: (_, record) => toDayTime(record.updateTime),
    sorter: (a, b) => {
      const dateA = parseISO(a.updateTime);
      const dateB = parseISO(b.updateTime);
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: '创建于',
    dataIndex: 'createTime',
    render: (_, record) => toDayTime(record.createTime),
    sorter: (a, b) => {
      const dateA = parseISO(a.createTime);
      const dateB = parseISO(b.createTime);
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: '标题图片',
    dataIndex: 'imgUrl',
    render: (_, record) => {
      const urlParts = record.imgUrl.split('/');
      const imgName = urlParts[urlParts.length - 1];
      return (
        <a
          href={record.imgUrl}
          rel='external nofollow noopener noreferrer'
          target='_blank'>
          {imgName}
        </a>
      );
    },
  },
];

export default function ManageNote() {
  const history = useHistory();

  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [data, setData] = useState<INoteListItem[]>([]);
  const [needRefresh, setNeedRefresh] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const tokenOption = useRef(getTokenHeader());

  const hasSelected = useMemo(
    () => selectedRowKeys.length > 0,
    [selectedRowKeys],
  );

  useEffect(() => {
    axios
      .get('/api/note', {
        params: {
          pageSize: 1000,
        },
      })
      .then((res: any) => {
        const { list } = res.data.data;
        setData(list);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [needRefresh]);

  const onSelectChange = (selectedRowKey: any[]) => {
    setSelectedRowKeys(selectedRowKey);
  };

  const onDelete = () => {
    setDeleteLoading(true);
    axios
      .delete(`/api/note/${selectedRowKeys[0]}`, tokenOption.current)
      .then((res: any) => {
        const text = res.data.data.info;
        showFeedback(text, '新建笔记', '/admin/note/create');
        setDeleteLoading(false);
        setNeedRefresh(!needRefresh);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEdit = () => {
    history.push(`/admin/note/edit/${selectedRowKeys[0]}`);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };

  return (
    <>
      <div className='admin_button'>
        <Button
          type='primary'
          shape='round'
          onClick={onEdit}
          disabled={!hasSelected}>
          编辑
        </Button>
        <Button
          type='primary'
          shape='round'
          onClick={onDelete}
          disabled={!hasSelected}
          loading={deleteLoading}>
          删除
        </Button>
        <span>{hasSelected ? `已选 ${selectedRowKeys.length} 项` : ''}</span>
      </div>
      <Table
        rowKey={(record) => record.id}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 100 }}
      />
    </>
  );
}
