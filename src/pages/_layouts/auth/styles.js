import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #7d40e7;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 0px 10px #00000033;
  padding: 40px 30px;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #444444;
      margin: 0 0 10px;
      border: 1px solid #dddddd;

      &::placeholder {
        color: #999999;
      }
    }

    span {
      color: #de3b3b;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    .label {
      color: #444444;
      align-self: flex-start;
      margin: 0 0 5px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#7D40E7')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
