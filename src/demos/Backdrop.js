import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/BackDrop';


const styles = {
  /* turn this on to make backdrop "clickable" 
  root: {
    zIndex: 1
  },*/
  invisible:{
    opacity: 0
  },
  
};

const td = {
  enter: 1250,
  exit:1250 
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

export default withStyles(styles)(BackdropHOC);