
// 3rd party
import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';

// app components
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
import TypographyDisplay from './demos/TypographyDisplay';
import NextTypes from './demos/NextTypes';
import SimpleBottomNavigationHooks from './demos/BottomNavigatorHooks';
import CustomButton from './demos/CustomButton';
import SimpleCard from './demos/SimpleCard';


import 'typeface-roboto';
import './app.scss';
//import 'material-icons';

const styles = () => ({
	main: {
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		alignItems:'center'
	}
});

const App = withStyles(styles)(({ classes: { main } }) => (
	<div className={main}>
		<Backdrop />
		<PrimaryFieldAppBar />
		<ButtonAppBar />
		<SimpleAppBar />
		<Buttons01 />
		<Fabs />
		<IconButtons />
		<Avatars />
		<div>
			<SimpleBadges />
			<BadgeMax />
			<DotBadge />
		</div>
		<TypographyDisplay />
		<NextTypes/>
		<SimpleBottomNavigationHooks/>
		<CustomButton/>
		<SimpleCard />
	</div>
));

ReactDOM.render(<App />, document.querySelector('#app'));
