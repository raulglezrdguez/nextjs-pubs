import { MutableRefObject, useRef } from 'react';

import Card from '../ui/Card';

import classes from './SearchForm.module.css';

function SearchForm(props: any) {
  const queryInputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const pageInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();

    const enteredQuery = queryInputRef.current.value;
    const enteredPage = pageInputRef.current.value;

    const queryData = {
      query: enteredQuery,
      page: enteredPage,
    };

    props.onQuery(queryData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="query">Buscar publicación</label>
          <input type="text" required id="query" ref={queryInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="page">Ir a la página</label>
          <input type="number" min={0} required id="page" ref={pageInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Buscar</button>
        </div>
      </form>
    </Card>
  );
}

export default SearchForm;
