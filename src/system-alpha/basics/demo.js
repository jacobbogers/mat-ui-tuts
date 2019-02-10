import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';

const Box = styled.div`${palette}${spacing}${typography}`;
// or import { unstable_Box as Box } from '@material-ui/core/Box';


function ShowProps(){
  const args = Array.from(arguments);
  const props = { ...args[0], ...args[1], length: args.length};
  console.log(args);
  const propList = Object.entries(props).map( ([key, value])=> <tr key={key}><td>{key}</td><td>→</td><td>{value}</td></tr>)
  return (
  <div> 
    <p>These are the props</p>
    <table>
      <tbody>
       {propList}
       </tbody>
    </table>
  </div>
  ); 
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

function Demo() {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <div>
        <ShowProps prop123="value123"/> 
        <Box
          color="primary.main"
          bgcolor="background.paper"
          width="100%"
          fontFamily="h6.fontFamily"
          fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
          p={{ xs: 2, sm: 3, md: 4 }}
        >
          @material-ui/system
        </Box>
        </div>
      </ThemeProvider>
    </NoSsr>
  );
}

export default Demo;