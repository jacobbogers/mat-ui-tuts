import React from 'react';
import ReactDOM from 'react-dom';
import SimpleAppBar from './demos/SimpleAppBar';
import ButtonAppBar from './demos/ButtonAppBar';
import PrimaryFieldAppBar from './demos/PrimaryFieldAppBar';
import Buttons01 from './demos/Buttons01';
import Fabs from './demos/Fabs';
import IconButtons from './demos/IconButtons';
import Avatars from './demos/Avatars';
import Backdrop from './demos/Backdrop';
import SimpleBadges from './demos/SimpleBadges';
import BadgeMax from './demos/BadgeMax';
import DotBadge from './demos/DotBadge';


import './app.scss';
//import 'material-icons';

ReactDOM.render(
	<div>
		<Backdrop />
    <PrimaryFieldAppBar />
    <ButtonAppBar />
		<SimpleAppBar />
		<Buttons01 />
		<Fabs />
		<IconButtons/>
		<Avatars/>
		<SimpleBadges />
		<BadgeMax />
		<DotBadge />
	</div>,
	document.querySelector('#app')
);
