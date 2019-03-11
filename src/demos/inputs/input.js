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
        border:'0px solid red'
    },
    dense:{
        marginTop: 19,
    },
	container: {
        width:200,
        display: 'flex',
        margin: 6,
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
		
        <FormControl className={`${classes.formControl} ${classes.dense} `}>
          <InputLabel variant="filled" htmlFor="inputdemo2">react-text-mask</InputLabel>
          <Input
            disableUnderline={true}
            defaultValue="formcontrol-text"
            multiline={true}
            id="inputdemo2"
            margin="none"
            rows={1}
            rowsMax={5}
          />
        </FormControl>
        
       
	);
}

export default function ThemedComponent() {
	return (
		<ThemeProvider theme={themeGreen}>
			<InputBaseDemoComponent />
		</ThemeProvider>
	);
}
