import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import getTokenHeader from '@/utils/getTokenHeader';
import showFeedback from '@/utils/showFeedback';

export default function EditNote() {
  const { noteId } = useParams<{ noteId: string }>();

  const [form] = Form.useForm();
  const [markdownText, setMarkdownText] = useState('');
  const [tagList, setTagList] = useState([]);

  const tags: any = useRef([]);
  const tokenOption = useRef(getTokenHeader());

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

  const onEditNote = () => {
    const body = {
      title: form.getFieldValue('title'),
      imgUrl: form.getFieldValue('imgUrl'),
      content: markdownText,
      tags: tags.current,
    };

    axios
      .put(`/api/note/${noteId}`, body, tokenOption.current)
      .then((res: any) => {
        const text = res.data.data.info;
        showFeedback(text, '回管理页面', '/admin/note/manage');
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  useEffect(() => {
    axios
      .get(`/api/note/${noteId}`)
      .then((res: any) => {
        const note = res.data.data.info;
        const tagValues = note.tags.map((tag: any) => String(tag.id));
        form.setFieldsValue({
          title: note.title,
          imgUrl: note.imgUrl,
          tag: tagValues,
        });
        for (let i = 0; i < tagValues.length; i += 1) {
          onAddTag([tagValues[i]]);
        }
        setMarkdownText(note.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Form form={form} name='editNote'>
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
          <Button type='primary' shape='round' onClick={onEditNote}>
            编辑
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
