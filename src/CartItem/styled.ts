import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
  padding: 20px;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  h3 {
    text-align: center;
    font-size: 28px;
  }
  h4,
  p {
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;
