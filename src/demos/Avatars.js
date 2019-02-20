import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
    width: 120,
    height: 120
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
  },
};

const pic1 = require('../../users-db/ecdcaf1f-e177-426f-8210-83d7f81bea2f-large.jpg');
const pic2 = require('../../users-db/de4ca6f4-bb39-4dfd-aa54-d0ae139bc606-large.jpg');

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={pic1} className={classes.avatar} />
      <Avatar alt="Remy Sharp" src={pic2} className={classes.bigAvatar} />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);