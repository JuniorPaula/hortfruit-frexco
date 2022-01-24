import { Button } from '@material-ui/core';
import React from 'react';
import { ICartItemType } from '../interfaces/ICartItemType';
import { Wrapper } from './styled';

type Props = {
  item: ICartItemType;
  addToCart: (clickedItem: ICartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.name}</h3>
      <div className="information">
        <h4>Nutrientes</h4>
        <p>Calorias: {item.nutritions.calories}</p>
        <p>Proteínas: {item.nutritions.protein}</p>
        <p>Carboidratos: {item.nutritions.carbohydrates}</p>
        <p>Gurduras: {item.nutritions.fat}</p>
        <p>Açucar: {item.nutritions.sugar}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
  </Wrapper>
);

export default CartItem;
