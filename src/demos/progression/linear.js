import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
    width:'100%'
  },
};

function LinearIndeterminate(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress value={65} valueBuffer={80} variant="buffer" />
      <br />
      <LinearProgress color="secondary" value={20} variant="query"  />
      <br />
      <LinearProgress color="primary" value={10} variant="indeterminate"/>
    </div>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearIndeterminate);