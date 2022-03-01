import { DataApi } from '../models/types';

async function searchPubs(query: string): Promise<DataApi> {
  try {
    const response = await fetch(`/api/data?query=${query}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('error fetching data');
  }
}

export default searchPubs;
