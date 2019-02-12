import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';
import 'typeface-open-sans';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

// demos advanced

import UseThemeHOC from './css-in-js/advanced-theme-hoc';
import UseThemeHook from './css-in-js/advanced-theme-hook';
import UseThemeNesting from './css-in-js/advanced-theme-nesting';

// system (alpha)
import Demo from './system-alpha/basics/demo';
import Box from './Box';

import Variant from './system-alpha/basics/variants';
import CssProp from './system-alpha/basics/css-props'
// app.scss
import './app.scss';

const styles = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	maxWidth: '600px'
};

function App() {
	return (
		<div id="container" style={styles}>
			<CssProp />
			<Variant />
			<Box p={{ xs: 2, sm: 3, md: 4 }} color="white" bgcolor="palevioletred">
				Styled components
			</Box>
			<Box color="white" bgcolor="palevioletred" p={1}>
				JSS
			</Box>
			<Box p={1}>4px</Box>
			<Box p={2}>8px</Box>
			<Box p={-1}>-4px</Box>
			<Demo />
			<AdaptingHOC />
			<AdaptingHook />
			<AdaptingStyledComponents />
			<UseThemeHOC />
			<UseThemeHook />
			<UseThemeNesting />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#app'));
