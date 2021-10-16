import { format, parseISO } from 'date-fns';

export default function toDayTime(dateStr: string) {
  return format(parseISO(dateStr), 'y年M月d日 H:m');
}
