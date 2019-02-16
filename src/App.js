import React from 'react';
import ReactDOM from 'react-dom';
import SimpleAppBar from './demos/SimpleAppBar';
import ButtonAppBar from './demos/ButtonAppBar';
import PrimaryFieldAppBar from './demos/PrimaryFieldAppBar';

ReactDOM.render(
	<div>
    <PrimaryFieldAppBar />
    <ButtonAppBar />
		<SimpleAppBar />
	</div>,
	document.querySelector('#app')
);
