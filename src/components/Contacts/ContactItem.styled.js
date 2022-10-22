import styled from 'styled-components';

export const ItemWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
  background: ${p => p.theme.colors.background};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: ${p => p.theme.colors.accent};
  }
`;
