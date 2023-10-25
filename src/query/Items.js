import { useQuery} from 'react-query';

import axios from 'axios';

/**
 * 아이템 리스트를 가져옵니다.
 * 
 * @returns 
 * 
 */
const fetchItems = async () => {
  try {
    const response = await axios.get('http://localhost:5001/items');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Network error');
  }
};

/**
 * 아이템 리스트를 가지고와 "fetchItems" 으로 관리 합니다.
 * 
 * @returns 
 */
export const useItems = () => {
  return useQuery('items', fetchItems);
};

