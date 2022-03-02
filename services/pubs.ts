import { DataApi, DataSearch } from '../models/types';

async function searchPubs(searchData: DataSearch): Promise<DataApi> {
  const { query, page } = searchData;
  console.log(query, page);
  try {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`,
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('error fetching data');
  }
}

export default searchPubs;
