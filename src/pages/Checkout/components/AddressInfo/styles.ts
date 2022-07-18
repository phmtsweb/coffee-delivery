import styled from 'styled-components';

export const AddressContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px;
`;

export const AddressDescription = styled.div`
  display: flex;
  gap: 0.8rem;

  > svg {
    color: ${(props) => props.theme.primary};
  }
`;

export const AddressTextContainer = styled.div`
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

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;
    width: 100%;
  }
`;

interface AddressGenericInputContainerProps {
  flexProps: string;
}

export const AddressGenericInputContainer = styled.div<AddressGenericInputContainerProps>`
  flex: ${(props) => props.flexProps};
`;

export const SearchButtonContainer = styled.div`
  width: 4rem;
`;
