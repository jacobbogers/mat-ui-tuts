import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  root: {
      background: 'orange', //orange[500]
      margin: theme.spacing.unit,
      border:'3px dashed green'
  },
  label:{
    fontSize:'2rem',
    color:'red'
  },
  fabButton: {
    margin: theme.spacing.unit,
    fontSize: '2rem',
    lineHeight: '2rem'
  },
  input: {
    display:'none',
    //width: 20
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="text" className={classes.button}>
        Default
      </Button>
      <Button variant="outlined" component="span" color="primary" classes={classes}>
        Primary
      </Button>
      <Button variant="contained" color="secondary"  className={classes.button}>
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled className={classes.button}>
        Disabled
      </Button>
      <Button variant="fab" color="secondary" className={classes.button}>
        D+
      </Button>
      <Button variant="fab" color="primary" className={classes.fabButton}>
        d
      </Button>
      <Button variant="contained" href="#contained-buttons" className={classes.button}>
        Link
      </Button>
      <Button variant="extendedFab" href="#contained-buttons" className={classes.button}>
        Link
      </Button>
      <Button variant="flat" color="primary" href="#contained-buttons" className={classes.button}>
        Link-flat
      </Button>
      <Button variant="raised" href="#contained-buttons"  size="medium" className={classes.button}>
        Link-raised
      </Button>
      <Button variant="raised" href="#contained-buttons"  size="medium"  className={classes.buttonChangedRoot}>
        Link-raised
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
