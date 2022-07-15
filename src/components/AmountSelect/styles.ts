import styled from 'styled-components';

export const AmountSelectContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};
  height: 2.375rem;
  width: 4.5rem;
  display: flex;
  align-items: center;
  border-radius: 6px;
  line-height: ${(props) => props.theme['line-height-high']};
  font-size: ${(props) => props.theme['font-size-16']};
  > * {
    flex: 1;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    color: ${(props) => props.theme.secondary};
    background-color: inherit;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:disabled {
      cursor: not-allowed;
    }

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    &:hover {
      color: ${(props) => props.theme['secondary-dark']};
    }
  }
`;
