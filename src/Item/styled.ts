import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  background: #9ccea3;
  border-radius: 20px;
  height: 100%;

  div {
    padding: 1rem;
    height: 100%;
  }

  h2 {
    text-align: center;
  }

  h2,
  p {
    margin-bottom: 10px;
  }

  button {
    border-radius: 0 0 20px 20px;
    background: #1d7229;
    color: #fff;

    &:hover {
      color: #222;
    }
  }
`;
