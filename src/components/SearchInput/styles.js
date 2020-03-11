import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 36px;
  padding: 0 15px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;

  svg {
    margin-right: 10px;
  }

  input {
    width: 100%;
    font-size: 16px;
    border: 0;
    background: none;
    color: #444;

    ::placeholder {
      color: #999;
    }
  }
`;
