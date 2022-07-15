import styled from 'styled-components';

export const RemoveButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  width: 5.6875rem;
  height: 2rem;
  font-size: ${(props) => props.theme['font-size-12']};
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  gap: 0.25rem;
  border-radius: 6px;
  svg {
    color: ${(props) => props.theme.secondary};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`;
