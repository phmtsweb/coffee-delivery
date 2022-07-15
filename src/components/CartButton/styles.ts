import styled, { css } from 'styled-components';

interface CartButtonProps {
  type: 'product' | 'cart';
}

export const CartButtonContainer = styled.div<CartButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${(props) =>
    props.type === 'product'
      ? props.theme['secondary-dark']
      : props.theme['primary-light']};
  color: ${(props) =>
    props.type === 'product' ? props.theme.white : props.theme['primary-dark']};
  transition: all 0.3s ease-in-out;
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  ${(props) =>
    props.type === 'product' &&
    css`
      &:hover {
        background-color: ${(props) => props.theme.secondary};
      }
    `}
`;

export const CartButtonBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${(props) => props.theme['primary-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 50%;
`;
