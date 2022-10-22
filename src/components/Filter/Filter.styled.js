import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin-top: ${p => p.theme.space[4]}px;
`;

export const FilterText = styled.div`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.01em;
`;

export const InputFilter = styled.input`
  width: 50%;
  padding: 10px 15px;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.background};
  }
`;
