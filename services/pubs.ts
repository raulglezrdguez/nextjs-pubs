import data from '../pages/api/search_by_date';

async function searchPubs(query: string) {
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
