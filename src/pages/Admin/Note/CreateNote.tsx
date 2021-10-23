import { useState, useRef, useContext } from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import getTokenHeader from '@/utils/getTokenHeader';
import showFeedback from '@/utils/showFeedback';
import TagContext from '@/utils/context/TagContext';

export default function CreateNote() {
  const [form] = Form.useForm();
  const [markdownText, setMarkdownText] = useState('');

  const tagList = useContext(TagContext);

  const tagOptions = tagList.map((item: any) => ({
    label: item.label,
    value: String(item.id),
  }));

  const tags: any = useRef([]);
  const tokenOption = useRef(getTokenHeader());

  const onCreateNote = () => {
    const body = {
      title: form.getFieldValue('title'),
      imgUrl: form.getFieldValue('imgUrl'),
      content: markdownText,
      tags: tags.current,
    };

    axios
      .post('/api/note', body, tokenOption.current)
      .then((res: any) => {
        const text = res.data.data.info;
        showFeedback(text, '再写一篇', '/admin/note/create');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onAddTag = (value: string[]) => {
    const newValue: string = value[value.length - 1];
    const newValueNumber = Number(newValue);
    if (!Number.isNaN(newValueNumber)) {
      tags.current.push({
        id: newValueNumber,
      });
    } else {
      const labelData = {
        label: newValue,
      };
      axios
        .post('/api/tag', labelData, tokenOption.current)
        .then((res: any) => {
          const { info } = res.data.data;
          const newId = { id: info.id };
          tags.current.push(newId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Form form={form} name='createNote'>
        <Form.Item
          label='标题'
          name='title'
          rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label='标题图片URL'
          name='imgUrl'
          rules={[{ required: true, message: '请输入标题图片URL' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label='标签'
          name='tag'
          rules={[{ required: true, message: '请添加标签' }]}>
          <Select
            mode='tags'
            placeholder='请添加标签'
            onChange={onAddTag}
            optionFilterProp='label'
            options={tagOptions}
          />
        </Form.Item>

        <Form.Item>
          <Button type='primary' shape='round' onClick={onCreateNote}>
            创建
          </Button>
        </Form.Item>
      </Form>
      <MDEditor
        value={markdownText}
        onChange={(text) => {
          setMarkdownText(text!);
        }}
        height={1000}
      />
    </>
  );
}
