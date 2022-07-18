import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 0.75rem;
`;

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CheckoutInfoTitle = styled.h3`
  font-size: ${(props) => props.theme['font-size-18']};
  line-height: ${(props) => props.theme['line-height-normal']};
  color: ${(props) => props.theme['base-subtitle']};
`;
