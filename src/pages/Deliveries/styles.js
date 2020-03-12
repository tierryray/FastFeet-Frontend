import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  margin: 50px 100px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      color: #444;
      margin-bottom: 50px;
    }

    button {
      border: 0;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const ActionsForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;

export const HeaderTable = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  padding-left: 20px;

  div {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 0.3fr;
    width: 100%;

    span {
      font-weight: bold;
      font-size: 16px;
      color: #444;

      :last-child {
        text-align: center;
      }
    }
  }
`;

export const ItemTable = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  background: #fff;
  padding: 15px 0 15px 20px;
  border-radius: 4px;

  .item {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 0.3fr;
    width: 100%;
    color: #666;

    span {
      display: flex;
      align-items: center;
      font-size: 16px;

      :last-child {
        justify-self: center;
      }
    }

    button {
      background: transparent;
      border: none;

      svg {
        color: #999;
      }
    }
  }
`;

export const Status = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  font-weight: 600;
  width: 120px;
  max-height: 15px;
  padding: 5px 10px;
  border-radius: 12px;
  text-align: center;
  box-sizing: content-box;

  ${({ delivered }) =>
    delivered &&
    css`
      color: #2ca42b;
      background: ${lighten(0.35, '#2CA42B')};

      &::before {
        background: #2ca42b;
      }
    `}
  
    ${({ pending }) =>
      pending &&
      css`
        color: #c1bc35;
        background: ${lighten(0.35, '#C1BC35')};

        &::before {
          background: #c1bc35;
        }
      `}

      ${({ removal }) =>
        removal &&
        css`
          color: #4d85ee;
          background: ${lighten(0.35, '#4D85EE')};

          &::before {
            background: #4d85ee;
          }
        `}

        ${({ canceled }) =>
          canceled &&
          css`
            color: #de3b3b;
            background: ${lighten(0.35, '#DE3B3B')};

            &::before {
              background: #de3b3b;
            }
          `}



  &::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const Picture = styled.img`
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;
