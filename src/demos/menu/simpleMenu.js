// react
import React, { useState } from 'react';

//material
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const themeX = createMuiTheme({
	typography: {
		useNextVariants: true
	}
});

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	m1: {
        left: 102
	}
}));

function SimpleMenu() {
	const [anchorEl, setAnchorEl] = useState(null);

	function handleClick(e) {
		console.log('%c handleClick', 'color:green', e.currentTarget);
		setAnchorEl(e.currentTarget);
	}

	function handleClose(e, reason) {
		console.log(`%c handleClose, reason ${reason}`, 'color:red', e.currentTarget);
		setAnchorEl(null);
	}

    const enterings = {
        onEnter:()=> console.log('onEnter'),
        onEntering:()=> console.log('onEntering'),
        onEntered:()=>console.log('onEntered')
    }

    const exitings = {
        onExit:()=> console.log('onExit'),
        onExiting:()=> console.log('onExiting'),
        onExited:()=>console.log('onExited')
    }

    const generals = {
        onClose(e, reason) {
            console.log(`%c handleClose, reason ${reason}`, 'color:red', e.currentTarget.constructor.tagName);
            setAnchorEl(null);
        }
    }
	const classes = useStyles();

	console.log('m1', classes.m1);

	return (
		<div>
			<Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={handleClick}>
				Open Menu
			</Button>
			<Menu
                { ...enterings}
                {...exitings }
                {...generals }
                className={classes.m1}
				id="simple-menu"
				anchorEl={anchorEl}
                open={Boolean(anchorEl)} 
                >
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	);
}

function ThemedMenu() {
	return (
		<div>
			<ThemeProvider theme={themeX}>
				<SimpleMenu />
			</ThemeProvider>
		</div>
	);
}

export default ThemedMenu;
