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
import SimpleCard1 from './demos/SimpleCard';
import SimpleCard2 from './demos/cards/simple';
import Menu1 from './demos/MenuCard';
import Menu2 from './demos/cards/menu';
import RadioButtons1 from './demos/RadioButtons';
import RadioButtons2 from './demos/buttons/radios1';
import CheckBoxes1 from './demos/CheckBoxes';
import CheckBoxes2 from './demos/buttons/checks';
import CustomChecks from './demos/CustomCheck';
import CheckboxLabelsHooks from './demos/buttons/customchecks'
import FormGroupCheck from './demos/FormGroupCheck';
import FormGroupCheck2 from './demos/buttons/formgroupcheck';
import SwitchCheckBox from './demos/SwitchCheckBox';
import SwitchCheckBox2 from './demos/buttons/switchchecks';
import SwitchLabels from './demos/SwitchLabels';
import SwitchLabels1 from './demos/buttons/switch-labels';
import IOSSwitch from './demos/IOSSwitch';
import Chip1 from './demos/Chip1';

import 'typeface-roboto';
import './app.scss';

//import 'material-icons';

const styles = () => ({
	main: {
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		alignItems: 'center',
		"& > div:first-child": {
			borderBottom: "1px solid gray"
		}
	},
	main2: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		"& > div:first-child": {
			borderRight: "1px solid gray"
		}
	},
	main3: {
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		alignItems: 'flex-start'
	}
});

const App = withStyles(styles)(({ classes: { main, main2 } }) => (
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
		<NextTypes />
		<SimpleBottomNavigationHooks />
		<CustomButton />
		<div className={main2}>
			<SimpleCard1 />
			<SimpleCard2 />
		</div>
		<div className={main2}>
			<Menu1 />
			<Menu2 />
		</div>
		<div className={main2}>
		<RadioButtons1 />
		<RadioButtons2 />
		</div>
		<div className={main2}>
		<CheckBoxes1 />
		<CheckBoxes2 />
		</div>
		<div className={main}>
		<CustomChecks/>
		<CheckboxLabelsHooks/>
		</div>
		<div className={main}>
			<FormGroupCheck/>
			<FormGroupCheck2/>
		</div>
		<div className={main2}>
			<SwitchCheckBox/>
			<SwitchCheckBox2/>
		</div>
		<div className={main2}>
			<SwitchLabels/>
			<SwitchLabels1 />
		</div>
		<div className={main2}>
			<IOSSwitch />
		</div>
		<div className={main2}>
		<Chip1 />
	</div>
	</div>
));

ReactDOM.render(<App />, document.querySelector('#app'));
