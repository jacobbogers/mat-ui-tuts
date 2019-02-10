import React from 'react';
//import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
//import { createMuiTheme  } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';
import { ThemeProvider , withTheme } from '@material-ui/styles';

//const Box = styled.div`${palette}${spacing}${typography}`;

import { unstable_Box as Box } from '@material-ui/core/Box';
//const Box2 = withTheme()(Box)
/*const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});*/

function Demo() {
  return (
   <NoSsr>
      {/*<ThemeProvider theme={{}}>*/}
        <div
          color="primary.main"
          bgcolor="background.paper"
          width="100%"
          fontFamily="h6.fontFamily"
          fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
          p={{ xs: 2, sm: 3, md: 4 }}
        >
        `[${palette}][${spacing}][${typography}]`
          @material-ui/system
        </div>
     {/* </ThemeProvider>*/}
    </NoSsr>
  );
}

export default Demo;
