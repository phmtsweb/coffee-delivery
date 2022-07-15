import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
`;

export const CardImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -2.5rem;
  margin-bottom: 0.75rem;
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme['font-size-20']};
  margin-top: 1rem;
  text-align: center;
  line-height: ${(props) => props.theme['line-height-normal']};
  color: ${(props) => props.theme['base-subtitle']};
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme['font-size-14']};
  margin-top: 0.5rem;
  text-align: center;
  line-height: ${(props) => props.theme['line-height-normal']};
  color: ${(props) => props.theme['base-label']};
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-size: ${(props) => props.theme['font-size-14']};
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-family: ${(props) => props.theme['font-header']};
    font-size: ${(props) => props.theme['font-size-24']};
    color: ${(props) => props.theme['base-text']};
    font-weight: 800;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
