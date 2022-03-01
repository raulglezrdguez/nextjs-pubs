import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  async function loadData() {
    const response = await fetch('/api/data', {
      method: 'GET',
    });
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return <h1>Start</h1>;
};

export default Home;
