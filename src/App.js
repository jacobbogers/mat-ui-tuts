import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';
import 'typeface-open-sans';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});



function App() {
	return (
		<div> hello world </div>
	);
}

ReactDOM.render(<App />, document.querySelector('#app'));
