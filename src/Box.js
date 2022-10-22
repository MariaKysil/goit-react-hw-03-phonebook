import styled from 'styled-components';

import {
  space,
  layout,
  color,
  flexbox,
  border,
  background,
  typography,
  shadow,
} from 'styled-system';

export const Box = styled('div')(
  color,
  layout,
  space,
  flexbox,
  border,
  background,
  typography,
  shadow
);
