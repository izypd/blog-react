import type ITag from '@/utils/types/ITag';

export default function toLabels(tagList: ITag[]) {
  return tagList.map((tag) => tag.label);
}
