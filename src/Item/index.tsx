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
      <h2>{item.name}</h2>
      <p>
        Gênero: <strong>{item.genus}</strong>
      </p>
      <p>
        Família: <strong>{item.family}</strong>
      </p>
      <p>
        Ordem: <strong>{item.order}</strong>
      </p>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Adicionar ao Carrinho</Button>
  </Wrapper>
);

export default Item;
