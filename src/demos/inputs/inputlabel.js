import React from 'react';

// material comps
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

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
    formControl:{
        border:'0px solid red',
    },
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
 
	return (
		<form className={classes.container} onSubmit={ e => { console.log('%c submit','color:red'); e.preventDefault() }}>
        <FormControl className={classes.formControl}>
          <InputLabel variant="outlined" disableAnimation={false} error={false} htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
          <Input
            defaultValue="formcontrol-text"
            id="formatted-text-mask-input"
          />
        </FormControl>
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
