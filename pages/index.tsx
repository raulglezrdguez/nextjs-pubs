import { Fragment, ReactNode, useState } from 'react';
import type { NextPage } from 'next';
import SearchForm from '../components/search/SearchForm';

import searchPubs from '../services/pubs';
import PubList from '../components/pub/PubList';
import { DataApi, DataSearch } from '../models/types';
import Head from 'next/head';

const Home: NextPage = (props: { children?: ReactNode; pubs?: DataApi }) => {
  const [data, setData] = useState(props.pubs);

  async function loadData(searchData: DataSearch) {
    try {
      const data = await searchPubs(searchData);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function queryHandler(searchData: DataSearch) {
    await loadData(searchData);
  }

  return (
    <Fragment>
      <Head>
        <title>Nextjs pubs</title>
        <meta name="description" content="Search a list of publications!" />
      </Head>
      <SearchForm onQuery={queryHandler} />
      <h1>Publicaciones</h1>
      <PubList pubs={data?.hits} />
    </Fragment>
  );
};

export async function getStaticProps() {
  console.log('static props called');
  try {
    const data = await searchPubs({ query: 'reactjs', page: '0' });
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
