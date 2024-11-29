import { useContext } from 'react';

import { FavouritesContext } from '@config/contexts/FavouritesContext';

function useFavourites() {
  return useContext(FavouritesContext);
}

export default useFavourites;
