import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #ebeef3;
  cursor: pointer;
  font-size: 20px;
  width: 100px;
  height: 40px;
  :not(:last-child) {
    margin-right: 10px;
  }
  :hover {
    transform: scale(1.1);
    color: #ffffff;
    background-color: ${prop => {
      if (prop.children === 'good') {
        return '#04bb00';
      } else if (prop.children === 'neutral') {
        return '#4d7cfa';
      } else if (prop.children === 'bad') {
        return '#fa4d4d';
      }
    }};
  }
`;
