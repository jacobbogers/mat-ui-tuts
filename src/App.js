import React from 'react';
import ReactDOM from 'react-dom';
import SimpleAppBar from './demos/SimpleAppBar';
import ButtonAppBar from './demos/ButtonAppBar';
import PrimaryFieldAppBar from './demos/PrimaryFieldAppBar';
import Buttons01 from './demos/Buttons01';
import Fabs from './demos/Fabs';
import IconButtons from './demos/IconButtons';

import './app.scss';
//import 'material-icons';

ReactDOM.render(
	<div>
    <PrimaryFieldAppBar />
    <ButtonAppBar />
		<SimpleAppBar />
		<Buttons01 />
		<Fabs />
		<IconButtons/>
	</div>,
	document.querySelector('#app')
);
