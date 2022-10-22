import styled from 'styled-components';

export const Form = styled.form`
  margin-top: ${p => p.theme.space[4]}px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Label = styled.label`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.01em;
`;

export const Input = styled.input`
  width: 50%;
  padding: 10px 15px;
  font-size: ${p => p.theme.fontSizes.m};

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.background};
  }
`;

export const ButtonAdd = styled.button`
  display: inline-block;
  padding: 10px 15px;
  margin-bottom: ${p => p.theme.space[4]}px;
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
