import React from 'react';
import ReactDOM from 'react-dom';

install();


const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const App = () => (<ThemeProvider theme={theme}>
		<Demo />
  </ThemeProvider>)

ReactDOM.render(<App />, document.querySelector('#app'));
