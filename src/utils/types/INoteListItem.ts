import type ITag from './ITag';

export default interface INoteListItem {
  id: number;
  createTime: string;
  updateTime: string;
  title: string;
  imgUrl: string;
  tags: ITag[];
}
