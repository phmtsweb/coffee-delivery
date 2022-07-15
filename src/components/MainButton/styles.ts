import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  padding: 0.75rem 0.5rem;
  font-size: ${(props) => props.theme['font-size-14']};
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme['primary-dark']};
  }
`;
