import styled from 'styled-components';

export const PaymentWayContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px;
  position: relative;
`;

export const PaymentWayDescription = styled.div`
  display: flex;
  gap: 0.8rem;

  > svg {
    color: ${(props) => props.theme.secondary};
  }
`;

export const PaymentWayTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  > span:first-child {
    font-size: ${(props) => props.theme['font-size-16']};
    color: ${(props) => props.theme['base-subtitle']};
    line-height: ${(props) => props.theme['line-height-normal']};
  }

  > span:last-child {
    font-size: ${(props) => props.theme['font-size-14']};
    color: ${(props) => props.theme['base-text']};
    line-height: ${(props) => props.theme['line-height-normal']};
  }
`;

export const TooltipError = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme['invalid-color']};
  position: absolute;
  top: -2.5rem;
  right: -1rem;
  opacity: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  width: 12.5rem;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    position: absolute;
    bottom: -3px;
    right: 20px;
    background-color: ${(props) => props.theme['invalid-color']};
  }
`;

export const InfoError = styled.span`
  position: absolute;
  top: 2.5rem;
  right: calc(2.5rem + 18px);

  font-size: ${(props) => props.theme['font-size-12']};
  font-style: italic;

  cursor: help;

  > svg {
    color: ${(props) => props.theme['invalid-color']};
  }

  &:hover ${TooltipError} {
    opacity: 1;
  }
`;
