import { MutableRefObject, useRef } from 'react';

import Card from '../ui/Card';

import classes from './SearchForm.module.css';

function SearchForm(props: any) {
  const queryInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();

    const enteredQuery = queryInputRef.current.value;

    const queryData = {
      query: enteredQuery,
    };

    props.onQuery(queryData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="query">Publication query</label>
          <input type="text" required id="query" ref={queryInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Search pubs</button>
        </div>
      </form>
    </Card>
  );
}

export default SearchForm;
