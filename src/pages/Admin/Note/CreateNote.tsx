import { useState, useEffect, useRef } from 'react';
import Vditor from 'vditor';
import { VditorIREditor } from 'react-vditor';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import getTokenHeader from '@/utils/getTokenHeader';
import showFeedback from '@/utils/showFeedback';

export default function CreateNote() {
  const [form] = Form.useForm();
  const [vditor, setVditor] = useState<Vditor>();
  const [tagList, setTagList] = useState([]);

  const tags: any = useRef([]);
  const tokenOption = useRef(getTokenHeader());

  useEffect(() => {
    axios
      .get('/api/tag')
      .then((res: any) => {
        const { list } = res.data.data;
        const labelValueList = list.map((item: any) => ({
          label: item.label,
          value: String(item.id),
        }));
        setTagList(labelValueList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onCreateNote = () => {
    const body = {
      title: form.getFieldValue('title'),
      imgUrl: form.getFieldValue('imgUrl'),
      content: vditor?.getValue(),
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
    if (tagList.find((tag: any) => tag.value === newValue)) {
      tags.current.push({
        id: Number(newValue),
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
            options={tagList}
          />
        </Form.Item>

        <Form.Item>
          <Button type='primary' shape='round' onClick={onCreateNote}>
            创建
          </Button>
        </Form.Item>
      </Form>
      <VditorIREditor
        keyID='vditor-ir'
        bindVditor={setVditor}
        options={{
          height: 1000,
          preview: {
            maxWidth: 1000,
          },
        }}
      />
    </>
  );
}
