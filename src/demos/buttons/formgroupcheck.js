// react
import React, { useState } from 'react';

//material
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
//mate comp
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const themeX = createMuiTheme({});

const useStyles = makeStyles(theme => {
	console.log(theme);
	return {
		root: {
			display: 'flex'
		},
		formControl: {
			margin: theme.spacing.unit * 3
		}
	};
});



function CheckboxesGroup() {
	/*const [error, list, setter] = useCheckStates({
		gilad: true,
		jason: false,
		antoine: false
    });*/
    const [gilad, setGilad] = useState(true);
    const [jason, setJason] = useState(false);
    const [antoine, setAntoine] = useState(false);

	const classes = useStyles();
    const error = gilad + jason + antoine !== 2;

	return (
		<div className={classes.root}>
			<FormControl component="fieldset" className={classes.formControl}>
				<FormLabel component="legend">Assign responsibility</FormLabel>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox checked={gilad} onChange={() => setGilad(!gilad)} value="gilad" />
						}
						label="Gilad Gray"
					/>
					<FormControlLabel
						control={
							<Checkbox checked={jason} onChange={() => setJason(!jason)} value="jason" />
						}
						label="Jason Killian"
					/>
					<FormControlLabel
						control={
							<Checkbox checked={antoine} onChange={()=>setAntoine(!antoine)} value="antoine" />
						}
						label="Antoine Llorca"
					/>
				</FormGroup>
				<FormHelperText>Be careful</FormHelperText>
			</FormControl>
			<FormControl required error={error} component="fieldset" className={classes.formControl}>
				<FormLabel component="legend">Pick two</FormLabel>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox checked={gilad} onChange={()=>setGilad(!gilad)} value="gilad" />}
						label="Gilad Gray"
					/>
					<FormControlLabel
						control={<Checkbox checked={jason} onChange={()=>setJason(!jason)} value="jason" />}
						label="Jason Killian"
					/>
					<FormControlLabel
						control={
							<Checkbox checked={antoine} onChange={()=>setAntoine(!antoine)} value="antoine" />
						}
						label="Antoine Llorca"
					/>
				</FormGroup>
				<FormHelperText>You can display an error</FormHelperText>
			</FormControl>
		</div>
	);
}

function Themedefied() {
	return (
		<ThemeProvider theme={themeX}>
			<CheckboxesGroup />
		</ThemeProvider>
	);
}

export default Themedefied;
