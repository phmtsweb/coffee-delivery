import styled from 'styled-components';

export const CheckoutResumeContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  flex: 1;
`;

export const CheckoutTitle = styled.h3`
  font-size: ${(props) => props.theme['font-size-18']};
  line-height: ${(props) => props.theme['line-height-normal']};
  color: ${(props) => props.theme['base-subtitle']};
`;

export const CheckoutResumeInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2.5rem 2.5rem;

  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['base-card']};
`;

export const CheckoutProductsResume = styled.div`
  max-height: 23.5rem;
  overflow-y: auto;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.secondary};
      border-radius: 10px;
      height: 8px;
    }
  }
`;
