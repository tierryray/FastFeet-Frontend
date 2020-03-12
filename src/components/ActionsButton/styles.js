import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.button`
  width: 50px;
  background: none;
  border: 0;
`;

export const Actions = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  width: 150px;
  top: 40px;
  background: #fff;
  box-shadow: 0px 0px 5px #00000026;
  border-radius: 4px;
  padding: 15px 5px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    margin: auto;
    width: 0;
    height: 0;

    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
`;

export const Action = styled.div``;
