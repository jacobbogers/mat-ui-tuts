import React from 'react';
import {
  ThemeProvider,
  makeStyles
} from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => {
  console.log("it is called now"); // 2X weird
  return {
    root: {
      background: theme.background,
      border: 0,
      borderRadius: 3,
      boxShadow: theme.boxShadow,
      color: 'white !important',
      height: 48,
      padding: '0 30px !important', // "important" is added because of the order creation of jss stylesheet
      margin: '1rem 0 !important' // "important" is added because of the order creation of js stylesheet
    }
  }
});

const cStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '3px dashed yellow'
}

function DeepChild() {
  const classes = useStyles();
  return <Button className={
    classes.root
  } > ClassName - atn: {
      classes.root
    } < /Button>;
  }
  
function AdvancedTheme() {
  return ( <
    div style={
        cStyles
      } >
      <
    ThemeProvider theme={
          {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          }
        } >
        <
          DeepChild />

        <
    ThemeProvider theme={
            outerTheme => ({
              ...outerTheme,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            })
          } >
          <
            DeepChild />
          <
    /ThemeProvider> < /
    ThemeProvider > <
    /div>
        );
      }
      
export default AdvancedTheme;