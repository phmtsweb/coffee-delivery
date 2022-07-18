import styled from 'styled-components';

export const CardToastContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;
  width: 100%;
`;

export const CardToastImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const CardToastInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  > span {
    font-size: ${(props) => props.theme['font-size-16']};
    line-height: ${(props) => props.theme['line-height-normal']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    display: flex;
    justify-content: space-between;

    > span {
      font-size: ${(props) => props.theme['font-size-12']};
      line-height: ${(props) => props.theme['line-height-normal']};
      color: ${(props) => props.theme['base-label']};
    }

    > strong {
      font-size: ${(props) => props.theme['font-size-16']};
      line-height: ${(props) => props.theme['line-height-normal']};
      color: ${(props) => props.theme['base-text']};
      font-weight: 700;
    }
  }
`;
