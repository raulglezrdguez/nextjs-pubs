import { DataApi } from '../models/types';

async function searchPubs(query: string): Promise<DataApi> {
  console.log('service pubs called');
  try {
    const response = await fetch(
      `http://localhost:3000/api/data?query=${query}`,
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
