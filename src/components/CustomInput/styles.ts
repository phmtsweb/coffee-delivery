import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 50%;
    right: 0.75rem;
    transform: translateY(-50%);
    font-size: ${(props) => props.theme['font-size-12']};
    font-style: italic;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const CustomInputContainer = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 6px;
  padding: 0.75rem;
  border: solid 1px ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  font-size: ${(props) => props.theme['font-size-14']};
  color: ${(props) => props.theme['base-text']};

  &:placeholder-shown {
    color: ${(props) => props.theme['base-label']};
    font-size: ${(props) => props.theme['font-size-14']};
  }
`;
