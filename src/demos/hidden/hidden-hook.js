// react
import React from 'react';

//material
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

//mate comp
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { useWidth } from './useWidth';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex'
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
		flex: '1 0 auto',
		margin: theme.spacing.unit
	}
}));

function Hiddens() {
	const classes = useStyles();
	const theme = useTheme();
	const info = useWidth(theme);

	return (
		<div className={classes.root}>
			<Typography variant="subtitle1">Current width:{info.width}/{info.media} </Typography>
			<div className={classes.container}>
				<Hidden xsDown={true}>
					<Paper className={classes.paper}>xsDown</Paper>
				</Hidden>
				<Hidden smUp={true}>
					<Paper className={classes.paper}>smUp</Paper>
				</Hidden>
				<Hidden mdUp={true}>
					<Paper className={classes.paper}>mdUp</Paper>
				</Hidden>
				<Hidden lgUp={true}>
					<Paper className={classes.paper}>lgUp</Paper>
				</Hidden>
				<Hidden xlUp={true}>
					<Paper className={classes.paper}>xlUp</Paper>
				</Hidden>
			</div>
		</div>
	);
}

const themeX = createMuiTheme({
	typography: {
		useNextVariants: true
	}
});

export default function HiddenHooks() {
	return (
		<ThemeProvider theme={themeX}>
			<Hiddens />
		</ThemeProvider>
	);
}
