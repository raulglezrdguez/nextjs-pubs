import type { Data } from '../../models/types';

import Card from '../ui/Card';
import classes from './PubItem.module.css';

function PubItem(props: { pub: Data }) {
  function getDateStr(date: string) {
    let minute = 60000; // 1000 * 60
    let hour = 3600000; // 1000 * 60 * 60;
    let day = 24 * hour;
    const week = 7 * day;
    const currentDate = new Date().getTime();
    const dataDate = new Date(date).getTime();
    const diff = currentDate - dataDate;
    if (diff < hour) {
      minute = Math.round(diff / minute);
      return `hace ${minute} ` + (minute > 1 ? 'minutos' : 'minuto');
    } else if (diff < day) {
      hour = Math.round(diff / hour);
      return `hace ${hour} ` + (hour > 1 ? 'horas' : 'hora');
    } else if (diff < week) {
      day = Math.round(diff / day);
      return `hace ${day} ` + (day > 1 ? 'días' : 'día');
    } else {
      const theDate = new Date(date);
      day = theDate.getDate();
      const dayStr = day < 10 ? `0${day}` : `${day}`;
      let month = theDate.getMonth() + 1;
      const monthStr = month < 10 ? `0${month}` : `${month}`;
      return dayStr + '/' + monthStr + '/' + theDate.getFullYear();
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.pub.title}</h3>
          <h4>{props.pub.author}</h4>
          <p>{getDateStr(props.pub.created_at)}</p>
        </div>
      </Card>
    </li>
  );
}

export default PubItem;
