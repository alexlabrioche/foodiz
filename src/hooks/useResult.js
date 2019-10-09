import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [result, setResult] = useState(null);
  const searchApi = async (id) => {
    try {
      const res = await yelp.get(`/${id}`);
      setResult(res.data);
    } catch (err) {
      throw new Error(err);
    }
  };
  return [searchApi, result, setResult];
};
