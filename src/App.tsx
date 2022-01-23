import { useState } from 'react';
import { useQuery } from 'react-query';

import { Drawer } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

import { Wrapper } from './App.styles';
import { ICartItemType } from './interfaces/ICartItemType';
import { BASE_URL } from './config/urlConfig';

const getProducts = async (): Promise<ICartItemType[]> => {
  return await (await fetch(BASE_URL)).json();
};

const App = () => {
  const { data, isLoading, error } = useQuery<ICartItemType[]>(
    'products',
    getProducts,
  );
  console.log(data);

  const getTotalItem = () => null;
  const handleAddToCart = () => null;
  const handleRemoveFromCart = () => null;

  // eslint-disable-next-line react/react-in-jsx-scope
  return <div className="App">start</div>;
};

export default App;
