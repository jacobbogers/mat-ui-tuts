import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { yellow } from '@material-ui/core/colors';


const styles = theme => ({
    iOSSwitchBase: {
     /* '&$iOSChecked': {
        color: theme.palette.common.white,
        '& + $iOSBar': {
          backgroundColor: '#52d869',
        },
    },*/
      border:'2px dashed black',
      color: yellow[500],
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.sharp,
      }),
    },
    iOSChecked: {
      transform: 'translateX(15px)',
      '& + $iOSBar': {
        opacity: 1,
        border: 'none',
      },
    },
    iOsBar:{
        border:'2px dashed green'
    },
    xiOSBar: {
      borderRadius: 13,
      width: 42,
      height: 26,
      marginTop: -13,
      marginLeft: -21,
      border: 'solid 1px',
      borderColor: theme.palette.grey[400],
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    iOSIcon: {
      width: 24,
      height: 24,
      border: '2px solid orange'
    },
    iOSIconChecked: {
      boxShadow: theme.shadows[1],
      border: '2px dashed orange'
    },
  });
  
  class CustomizedSwitches extends React.Component {
    state = {
      checkedB: true
    };
  
    handleChange = name => event => {
      this.setState({ [name]: event.target.checked });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                classes={{
                  switchBase: classes.iOSSwitchBase, // internal root class
                  bar: classes.iOsBar,
                  icon: classes.iOSIcon,
                  iconChecked: classes.iOSIconChecked,
                  //checked: classes.iOSChecked,
                }}
                disableRipple
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
              />
            }
            label="iOS style"
          />
        </FormGroup>
      );
    }
  }
  
  CustomizedSwitches.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CustomizedSwitches);
  