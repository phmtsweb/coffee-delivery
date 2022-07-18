import styled from 'styled-components';

export const ProductsSectionContainer = styled.section`
  padding: 10rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.theme['font-size-32']};
  color: ${(props) => props.theme['base-subtitle']};
  line-height: ${(props) => props.theme['line-height-normal']};
`;

export const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  row-gap: 2.5rem;
  column-gap: 2rem;
`;
