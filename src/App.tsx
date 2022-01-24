import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Item from './Item';
import Cart from './Cart';

import { Drawer } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

import { Container, StyledButton, Title, Wrapper } from './App.styles';
import { ICartItemType } from './interfaces/ICartItemType';
import { BASE_URL } from './config/urlConfig';

const getProducts = async (): Promise<ICartItemType[]> => {
  return await (await fetch(BASE_URL)).json();
};

const App: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ICartItemType[]);

  const { data, isLoading, error } = useQuery<ICartItemType[]>(
    'products',
    getProducts,
  );

  const getTotalItems = (items: ICartItemType[]) => {
    return items.reduce((ack: number, item) => ack + item.amount, 0);
  };
  const handleAddToCart = (clickedItem: ICartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as ICartItemType[]),
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Ops!! Algo deu errado. ;(</div>;

  return (
    <Container>
      <Wrapper>
        <Title>Hortifruti do SkyWalker</Title>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItem={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCart />
          </Badge>
        </StyledButton>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default App;
