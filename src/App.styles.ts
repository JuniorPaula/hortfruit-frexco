import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const Container = styled.div`
  background: rgb(42, 185, 87);
  background: linear-gradient(
    90deg,
    rgba(42, 185, 87, 1) 22%,
    rgba(27, 170, 55, 1) 70%,
    rgba(43, 143, 71, 1) 100%
  );
  font-family: Arial, Helvetica, Sans-serif;
  color: #262626;
`;

export const Wrapper = styled.div`
  padding: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 20px 0;
  font-size: 42px;
  letter-spacing: 0.2rem;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
