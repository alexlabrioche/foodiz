import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          location: 'paris',
          term: searchTerm,
        },
      });
      setResults(res.data.businesses);
    } catch (err) {
      setErrorMsg('Oups... (une erreur est survenue)');
    }
  };
  return [searchApi, results, errorMsg];
};
