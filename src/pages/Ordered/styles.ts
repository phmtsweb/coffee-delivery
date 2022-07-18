import styled from 'styled-components';

export const OrderedContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5rem 0;
  row-gap: 6.375rem;
  column-gap: 3rem;
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const OrderInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h2 {
    font-size: ${(props) => props.theme['font-size-32']};
    font-weight: bold;
    color: ${(props) => props.theme['primary-dark']};
    line-height: ${(props) => props.theme['line-height-normal']};
  }

  > p {
    font-size: ${(props) => props.theme['font-size-20']};
    color: ${(props) => props.theme['base-subtitle']};
    line-height: ${(props) => props.theme['line-height-normal']};
  }
`;

export const OrderInfoBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 6px 36px;
  position: relative;
  background: ${(props) => props.theme.background};

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.secondary}
    );
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border-radius: 6px 36px;
    z-index: -1;
  }
`;

interface OrderInfoBoardItemProps {
  bgColor: string;
}

export const OrderInfoBoardItem = styled.div<OrderInfoBoardItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > span:first-child {
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;

    > svg {
      color: ${(props) => props.theme.white};
    }
  }

  > span:last-child {
    display: flex;
    flex-direction: column;

    font-size: ${(props) => props.theme['font-size-16']};
    color: ${(props) => props.theme['base-text']};
    line-height: ${(props) => props.theme['line-height-normal']};

    > strong {
      font-weight: 700;
    }
  }
`;

export const OrderImage = styled.img`
  align-self: flex-end;

  width: 30.75rem;
  height: auto;
`;
