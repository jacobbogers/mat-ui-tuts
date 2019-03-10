import React, { useState } from 'react';

// material comps
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
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
        '& > div:not($exempt)':{
            maxWidth:150
        },
    },
    exempt:{
    }
}));

function InputBaseDemoComponent() {
    const classes=  useStyles();

    const [multiLineText, setText] = useState('multiline2');
    const [placeHolderValue, setPlaceHolderValue] = useState('multiline2');
    function someFunction(e){
        console.log('refstuff',e);
    }

    function mlChangeHandler(e){
        setText(e.target.value);
        console.log(e.target.value);
    }

    const adornment = <Typography variant="subtitle1" inline={true}>SJ</Typography>;

	return (
		<form className={classes.container} onSubmit={ e => { console.log('%c submit','color:red'); e.preventDefault() }}>
            <InputBase defaultValue="Default Value" autoComplete="City" autoFocus={true} />
            <InputBase error={true} defaultValue="Default Value" autoComplete="Address" />
            <InputBase id="my-special-pony" fullWidth={true} defaultValue="Default Value" autoComplete="Name" className={classes.exempt} />
            <InputBase type="button" autoComplete="Name" defaultValue="hello world" margin="none" />
            
            <InputBase required inputRef={someFunction} autoComplete="Name" defaultValue="required input" margin="dense" />
            <InputBase defaultValue="multiline1" multiline={true} />
            <InputBase id={99} name="city" onChange={mlChangeHandler} multiline={true} rows={5} rowsMax={6} value={multiLineText} />
            <InputBase error={true} endAdornment={adornment} startAdornment={adornment} placeholder="some text" margin="dense" value={placeHolderValue} onChange={(e) =>setPlaceHolderValue(e.target.value)} />
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
