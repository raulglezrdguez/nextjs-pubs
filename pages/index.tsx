import { Fragment, ReactNode, useState } from 'react';
import type { NextPage } from 'next';
import SearchForm from '../components/search/SearchForm';

import searchPubs from '../services/pubs';

const Home: NextPage = (props: { children?: ReactNode; pubs?: string }) => {
  const [data, setData] = useState(props.pubs);

  async function loadData(query: string) {
    try {
      const data = await searchPubs(query);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function queryHandler(searchData: { query: string }) {
    await loadData(searchData.query);
  }

  return (
    <Fragment>
      <SearchForm onQuery={queryHandler} />
      <h1>Start</h1>
    </Fragment>
  );
};

export async function getStaticProps() {
  try {
    const data = await searchPubs('reactjs');
    return {
      props: {
        pubs: data,
      },
      revalidate: 60, // 60 seconds
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        pubs: {},
      },
      revalidate: 60, // 60 seconds
    };
  }
}

export default Home;
