import styled from 'styled-components';

export const PaymentSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: 35rem;
`;

export const LabelButton = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  width: 11.16rem;
  height: 3.1875rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  border: solid 1px transparent;
  transition: all 0.3s ease-in-out;
  border-radius: 6px;
  gap: 0.75rem;
  font-size: ${(props) => props.theme['font-size-12']};
  > svg {
    color: ${(props) => props.theme.secondary};
  }
`;

export const CustomRadioButton = styled.input.attrs({
  type: 'radio'
})`
  display: none;

  &:checked ~ ${LabelButton} {
    background: ${(props) => props.theme['secondary-light']};
    border: solid 1px ${(props) => props.theme.secondary};
  }

  &:not(:checked) ~ ${LabelButton}:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`;
