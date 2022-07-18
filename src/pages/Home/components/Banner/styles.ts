import styled from 'styled-components';

export const BannerContainer = styled.section`
  width: 100%;
  display: flex;
  padding: 10rem 0 0;
  flex-wrap: wrap;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: auto;
  flex: 1 0 29.75rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1.1 0.5 40.25rem;
  margin-bottom: 1.5rem;
  gap: 2.5rem;
`;

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-weight: 800;
    font-size: ${(props) => props.theme['font-size-48']};
    line-height: ${(props) => props.theme['line-height-normal']};
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: ${(props) => props.theme['font-size-20']};
    line-height: ${(props) => props.theme['line-height-normal']};
    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;

  > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

interface ListContainerProps {
  colorHexCode: string;
}

export const ListContainerItem = styled.span<ListContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;

  > span:first-child {
    background-color: ${(props) => props.colorHexCode};
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  > span:last-child {
    font-size: ${(props) => props.theme['font-size-16']};
    color: ${(props) => props.theme['base-text']};
  }
`;
