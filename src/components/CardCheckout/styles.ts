import styled from 'styled-components';

export const CardCheckoutContainer = styled.div`
  display: flex;
  padding: 2rem 0.25rem;
  width: 100%;
  gap: 1.25rem;
  border-bottom: solid 1px ${(props) => props.theme['base-button']};
`;

export const CardCheckoutImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const CardCheckoutInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardCheckoutDescription = styled.div`
  display: flex;
  justify-content: space-between;

  > span {
    font-size: ${(props) => props.theme['font-size-16']};
    line-height: ${(props) => props.theme['line-height-normal']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  > strong {
    font-size: ${(props) => props.theme['font-size-16']};
    line-height: ${(props) => props.theme['line-height-normal']};
    color: ${(props) => props.theme['base-text']};
    font-weight: 700;
  }
`;

export const CardCheckoutActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;
