import type { Data } from '../../models/types';

import Card from '../ui/Card';
import classes from './PubItem.module.css';

function PubItem(props: { pub: Data }) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.pub.title}</h3>
          <h4>{props.pub.author}</h4>
          <p>{props.pub.created_at}</p>
        </div>
      </Card>
    </li>
  );
}

export default PubItem;
