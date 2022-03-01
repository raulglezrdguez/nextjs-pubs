import { Fragment, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import SearchForm from '../components/search/SearchForm';

const Home: NextPage = () => {
  const [data, setData] = useState({});

  async function loadData(query: string) {
    try {
      const response = await fetch(`/api/data?query=${query}`, {
        method: 'GET',
      });
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData('reactjs');
  }, []);

  async function queryHandler(searchData: object) {
    console.log(searchData);
  }

  return (
    <Fragment>
      <SearchForm onQuery={queryHandler} />
      <h1>Start</h1>
    </Fragment>
  );
};

export default Home;
