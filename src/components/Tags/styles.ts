import styled from 'styled-components';

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

export const TagItem = styled.span`
  display: block;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  background-color: ${(props) => props.theme['primary-light']};
  color: ${(props) => props.theme['primary-dark']};
  font-size: ${(props) => props.theme['font-size-10']};
  font-weight: bold;
  border-radius: 100px;
`;
