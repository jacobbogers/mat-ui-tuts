import React, { useState } from 'react';

// material comps
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormLabel from '@material-ui/core/FormLabel';
//material styles
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';


//material colors
//import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const themeGreen = createMuiTheme({
	palette: {
		primary: green
	},
	typography: { useNextVariants: true }
});


const useStyles = makeStyles( (/*theme*/) => ({
	container: {
        width:200,
        display: 'flex',
        flexDirection: 'column',
        '& > *:not($exempt)':{
            maxWidth:150
        },
    },
    exempt:{
    }
}));

function InputBaseDemoComponent() {
    const classes=  useStyles();
    const [placeHolderValue, setPlaceHolderValue] = useState('adornment-control');
    const adornment = <InputAdornment position="end" variant="filled">Kg</InputAdornment>

	return (
		<form className={classes.container} onSubmit={ e => { console.log('%c submit','color:red'); e.preventDefault() }}>
        <FormLabel error={true} component="legend">Gender 
        <InputBase 
                error={true} 
                endAdornment={adornment} 
                placeholder="some text" 
                value={placeHolderValue} 
                onChange={(e) =>setPlaceHolderValue(e.target.value)} 
            />
            </FormLabel> 
        </form>
       
	);
}

export default function ThemedComponent() {
	return (
		<ThemeProvider theme={themeGreen}>
			<InputBaseDemoComponent />
		</ThemeProvider>
	);
}
