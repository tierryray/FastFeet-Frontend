import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: 0;
  background: #7d40e7;
  color: #fff;
  padding: 5px 10px;
  font-size: 16px;
  width: 120px;
  border-radius: 4px;

  &:hover {
    background: ${darken(0.04, '#7D40E7')};
  }

  svg {
    margin-right: 5px;
  }
`;
