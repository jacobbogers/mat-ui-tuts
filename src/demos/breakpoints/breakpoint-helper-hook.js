import React from 'react';
import { ThemeProvider, useTheme } from '@material-ui/styles';
//import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { createMuiTheme } from '@material-ui/core/styles';

function MyComponent() {
	const theme = useTheme();
	const bp = [
		theme.breakpoints.only('xs'),
		theme.breakpoints.only('sm'),
		theme.breakpoints.only('md'),
        theme.breakpoints.only('lg'),
        theme.breakpoints.only('xl')
    ];
    
/*
xs:> 0
sm:> 600
md:> 960
lg:> 1280
xl:> 1920
*/
       
    const list  = bp.map(mq=> <li key={mq}><span>{mq}</span></li>);

	return <div><ul>{list}</ul></div>;
}

const theme = createMuiTheme({ typography: { useNextVariants: true } });

export default function ThemeHelper() {
	return (
		<ThemeProvider theme={theme}>
			<MyComponent />
		</ThemeProvider>
	);
}
