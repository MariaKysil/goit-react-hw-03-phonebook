import styled from 'styled-components';

export const ContactItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
