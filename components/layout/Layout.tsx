import { ReactChild, ReactFragment, ReactPortal } from 'react';

import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
