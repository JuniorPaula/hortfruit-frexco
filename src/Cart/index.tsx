import CartItem from '../CartItem';
import { Wrapper } from './styled';
import { ICartItemType } from '../interfaces/ICartItemType';
import React from 'react';

type Props = {
  cartItem: ICartItemType[];
  addToCart: (clickedItem: ICartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItem, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Seu Carrinho</h2>
      {cartItem.length === 0 ? <p>Sem itens no carrinho</p> : null}
      {cartItem.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  );
};

export default Cart;
