import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  width: 5.3125rem;
  height: auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocationContainer = styled.div`
  background-color: ${(props) => props.theme['secondary-light']};
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  height: 2.375rem;
  gap: 0.25rem;
  svg {
    color: ${(props) => props.theme['secondary-dark']};
  }

  span {
    color: ${(props) => props.theme['secondary-dark']};
    font-size: ${(props) => props.theme['font-size-14']};
  }
`;
