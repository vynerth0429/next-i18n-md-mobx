import { useContext } from 'react';

import { storeContext } from '../contexts/store-context';

const useStores = () => {
  const _store = useContext(storeContext);

  if (!_store) {
    throw new Error('You have forgotten to use StoreProvider, go fish');
  }
  return _store;
};

export default useStores;
