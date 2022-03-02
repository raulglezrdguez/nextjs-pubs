import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Nextjs Pubs</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Publicaciones</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
