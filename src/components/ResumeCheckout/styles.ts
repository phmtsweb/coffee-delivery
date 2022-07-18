import styled from 'styled-components';

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  padding: 1.5rem 0;
`;

export const ResumeSubItem = styled.div`
  display: flex;
  justify-content: space-between;

  > span {
    line-height: ${(props) => props.theme['line-height-normal']};
    color: ${(props) => props.theme['base-text']};
  }

  > span:first-child {
    font-size: ${(props) => props.theme['font-size-14']};
  }

  > span:last-child {
    font-size: ${(props) => props.theme['font-size-16']};
  }
`;

export const ResumeTotal = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: ${(props) => props.theme['line-height-normal']};
  color: ${(props) => props.theme['base-subtitle']};
  font-size: ${(props) => props.theme['font-size-20']};
  font-weight: 700;
`;
