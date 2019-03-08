// react
import React, { useEffect, useState } from 'react';

//material
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

//mate comp
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useWidth = theme => {
  //const [key] = useState(null);
  
  const answers = Object.keys(theme.breakpoints.keys).map(key => useMediaQuery(theme.breakpoints.down(key)));

	return answers;
}
/*
const width =
[...theme.breakpoints.keys].reverse().reduce((output, key) => {
  const matches = useMediaQuery(theme.breakpoints.only(key));*/

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
  const answers = useWidth(theme);
  console.log(answers);

	return (
		<div className={classes.root}>
			<Typography variant="subtitle1">Current width: </Typography>
			<div className={classes.container}>
				<Hidden xsUp>
					<Paper className={classes.paper}>xsUp</Paper>
				</Hidden>
				<Hidden smUp>
					<Paper className={classes.paper}>smUp</Paper>
				</Hidden>
				<Hidden mdUp>
					<Paper className={classes.paper}>mdUp</Paper>
				</Hidden>
				<Hidden lgUp>
					<Paper className={classes.paper}>lgUp</Paper>
				</Hidden>
				<Hidden xlUp>
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
