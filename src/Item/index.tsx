import React from 'react';
import { Button } from '@material-ui/core';
import { ICartItemType } from '../interfaces/ICartItemType';
import { Wrapper } from './styled';

type Props = {
  item: ICartItemType;
  handleAddToCart: (clickedItem: ICartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <div>
      <h3>{item.genus}</h3>
      <h4>{item.name}</h4>
      <p>{item.family}</p>
      <p>{item.order}</p>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Adicionar ao Carrinho</Button>
  </Wrapper>
);

export default Item;
