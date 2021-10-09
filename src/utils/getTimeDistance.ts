import { isAfter, formatDistance, parseISO } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export default function getTimeDistance(
  createTime: string,
  updateTime: string,
) {
  const createTimeDate = parseISO(createTime);
  const updateTimeDate = parseISO(updateTime);
  let suffix = ' 创建';
  if (isAfter(updateTimeDate, createTimeDate)) {
    suffix = ' 编辑';
  }
  const timeDistance = formatDistance(updateTimeDate, new Date(), {
    addSuffix: true,
    locale: zhCN,
  });
  return timeDistance + suffix;
}
