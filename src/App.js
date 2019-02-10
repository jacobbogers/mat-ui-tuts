import { install } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import Demo from "./problems/Demo";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

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
