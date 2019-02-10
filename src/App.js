/*import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';

// demos basic

import AdaptingHOC from './css-in-js/adapt-hoc';
import AdaptingHook from './css-in-js/adapt-hook';
import AdaptingStyledComponents from './css-in-js/adapt-style';

// demos advanced

import UseThemeHOC from './css-in-js/advanced-theme-hoc';
import UseThemeHook from './css-in-js/advanced-theme-hook';
import UseThemeNesting from './css-in-js/advanced-theme-nesting';

// system (alpha)
//import Demo from './system-alpha/basics/demo';
import Demo from './problems/Demo';

//import Box from './comps/Box';

// app.scss
import './app.scss';
/*
const styles = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
};*/
import { install } from "@material-ui/styles";

install();
import React from "react";
import ReactDOM from "react-dom";
import Demo from "./problems/Demo";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

function App() {
	return (<ThemeProvider theme={theme}>
		<Demo />
  </ThemeProvider>);

	/* return (
    <div id="container" style={styles}>
     <Background />
     <Box p="1rem" color="grey">Give me some space!</Box>
     <Demo />
     <AdaptingHOC /> 
     <AdaptingHook />
     <AdaptingStyledComponents />
     <UseThemeHOC /> 
     <UseThemeHook />
     <UseThemeNesting />
    </div>
  );*/
}

ReactDOM.render(<App />, document.querySelector('#app'));
