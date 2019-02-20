import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/BackDrop';


const styles = {
   invisible: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

const td = {
  appear: 100,
  enter: 250,
  exit:250 
}

function BackdropHOC(props) {
  
  const [ invisible, setInvisible ] = useState(false);
  
  const { classes } = props;
  
  return (
    <Backdrop onClick={() => setInvisible(!invisible) } invisible={invisible} transitionDuration={td} classes={classes} open={true}/>
  );
}

BackdropHOC.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles({})(BackdropHOC);