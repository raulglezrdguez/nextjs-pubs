import type { Data } from '../../models/types';

import Card from '../ui/Card';
import classes from './PubItem.module.css';

function PubItem(props: { pub: Data }) {
  function getDateStr(date: string) {
    const minute = 60000; // 1000 * 60
    const hour = 3600000; // 1000 * 60 * 60;
    let day = 24 * hour;
    const week = 7 * day;
    const currentDate = new Date().getTime();
    const dataDate = new Date(date).getTime();
    const diff = currentDate - dataDate;
    if (diff < hour) {
      return Math.round(diff / minute).toString() + ' minutes ago';
    } else if (diff < day) {
      return Math.round(diff / hour).toString() + ' hours ago';
    } else if (diff < week) {
      return Math.round(diff / day).toString() + ' days ago';
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
