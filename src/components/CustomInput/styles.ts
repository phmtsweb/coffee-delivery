import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
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
    box-shadow: 0 2px 5px 2px ${(props) => props.theme['base-button']};
    z-index: -1;
  }
`;

export const InfoLabel = styled.span`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  font-size: ${(props) => props.theme['font-size-12']};
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
  cursor: help;

  > svg {
    color: ${(props) => props.theme['invalid-color']};
  }

  &:hover ${TooltipError} {
    opacity: 1;
  }
`;

interface CustomInputContainerProps {
  isValid: boolean;
}

interface CustomInputFakeContainerProps {
  isValid: boolean;
  wasFulfilled: boolean;
}

export const CustomInputFakeContainer = styled.div<CustomInputFakeContainerProps>`
  width: 100%;
  height: 3rem;
  border-radius: 6px;
  padding: 0.75rem;
  cursor: not-allowed;
  ${(props) =>
    props.isValid
      ? css`
          border: solid 1px ${(props) => props.theme['base-button']};
          &:focus {
            box-shadow: none;
          }
        `
      : css`
          border: solid 1px ${(props) => props.theme['invalid-color']};
          &:focus {
            box-shadow: none;
          }
        `}
  background-color: ${(props) => props.theme['base-input']};
  font-size: ${(props) => props.theme['font-size-14']};
  color: ${(props) =>
    props.wasFulfilled ? props.theme['base-text'] : props.theme['base-label']};
`;

export const CustomInputContainer = styled.input<CustomInputContainerProps>`
  width: 100%;
  height: 3rem;
  border-radius: 6px;
  padding: 0.75rem;
  ${(props) =>
    props.isValid
      ? css`
          border: solid 1px ${(props) => props.theme['base-button']};
          &:focus {
            box-shadow: none;
          }
        `
      : css`
          border: solid 1px ${(props) => props.theme['invalid-color']};
          &:focus {
            box-shadow: none;
          }
        `}
  background-color: ${(props) => props.theme['base-input']};
  font-size: ${(props) => props.theme['font-size-14']};
  color: ${(props) => props.theme['base-text']};

  &:placeholder-shown {
    color: ${(props) => props.theme['base-label']};
    font-size: ${(props) => props.theme['font-size-14']};
  }
`;
