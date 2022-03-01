import type { Data } from '../../models/types';
import PubItem from './PubItem';
import classes from './PubList.module.css';

function PubList(props: { pubs: Data[] | undefined }) {
  return (
    <ul className={classes.list}>
      {props.pubs?.map((pub) => (
        <PubItem key={pub.story_id} pub={pub} />
      ))}
    </ul>
  );
}

export default PubList;
