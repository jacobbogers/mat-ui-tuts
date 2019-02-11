import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { style, typography } from '@material-ui/system';

const variant = style({
  prop: 'variant',
  cssProperty: false,
  themeKey: 'typography',
});

// ⚠ Text is already defined in the global context:
// https://developer.mozilla.org/en-US/docs/Web/API/Text/Text.
const CText = styled.div`
  font-family: "Open Sans";
  ${variant}
  ${typography}
`;

const theme = {
  typography: {
    h1: {
      fontSize: 30,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 25,
      lineHeight: 1.5,
    },
  },
};

function Variant() {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <div>
          <CText variant="h1" as="div">
            variant=h1
          </CText>
          <CText variant="h1" fontWeight={300} as="span">
            fontWeight=300
          </CText>
          <CText variant="h2" as="span">
            variant=h2
          </CText>
        </div>
      </ThemeProvider>
    </NoSsr>
  );
}

export default Variant;